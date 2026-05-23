"use server";

import prisma from "../../lib/prisma";
import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

// Inisialisasi Supabase SDK menggunakan Service Role Key agar bebas mengunggah tanpa aturan RLS
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// SERVER ACTION: Mengambil seluruh data proyek dari database
export async function fetchProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return { success: true, data: projects };
  } catch (error) {
    console.error("Fetch Error:", error);
    return { success: false, error: error.message };
  }
}

// SERVER ACTION: Menyimpan data baru atau memperbarui data proyek yang sudah ada
export async function saveProject(formData) {
  try {
    const id = formData.get("id");
    const category = formData.get("category");
    const title = formData.get("title");
    const client = formData.get("client");
    const location = formData.get("location");
    const date = formData.get("date");
    const desc = formData.get("desc");
    const specsString = formData.get("specs"); // Menerima JSON string array
    const imageFile = formData.get("imageFile"); // Menerima file biner asli jika ada

    let imageUrl = formData.get("currentImageUrl") || "";

    // 1. LOGIKA UNGGAH GAMBAR (Jika admin mengunggah file baru)
    if (imageFile && imageFile.size > 0) {
      const fileExt = imageFile.name.split(".").pop();
      // Generate nama file acak yang unik untuk menghindari tabrakan nama file di storage
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
      const filePath = `projects/${fileName}`;

      // Konversi file biner mentah menjadi Buffer untuk diunggah di lingkungan Node.js
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Jalankan proses unggah ke Bucket Supabase Storage bernama 'project-images'
      const { data, error: uploadError } = await supabase.storage
        .from("project-images")
        .upload(filePath, buffer, {
          contentType: imageFile.type,
          cacheControl: "3600",
          upsert: true,
        });

      if (uploadError) {
        throw new Error(`Gagal mengunggah ke Supabase Storage: ${uploadError.message}`);
      }

      // Ambil Public URL untuk disimpan di database
      const { data: { publicUrl } } = supabase.storage
        .from("project-images")
        .getPublicUrl(filePath);

      imageUrl = publicUrl;
    }

    const specs = specsString ? JSON.parse(specsString) : [];

    const projectData = {
      category,
      title,
      client,
      location,
      date,
      img: imageUrl || "",
      desc,
      specs,
    };

    // 2. LOGIKA WRITE / UPDATE DATABASE VIA PRISMA
    if (id && id.length > 10) { // Jika ID panjang (CUID asli dari DB), lakukan UPDATE
      await prisma.project.update({
        where: { id },
        data: projectData,
      });
    } else { // Jika tidak ada ID atau ID lokal dummy, buat data BARU
      await prisma.project.create({
        data: projectData,
      });
    }

    // Paksa Next.js menghapus cache halaman agar perubahan langsung muncul secara realtime
    revalidatePath("/project");
    revalidatePath("/admin");

    return { success: true };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, error: error.message };
  }
}

// SERVER ACTION: Menghapus data project dari database
export async function deleteProject(id) {
  try {
    // 1. Ambil data proyek dulu untuk mendapatkan URL gambar
    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return { success: false, error: "Proyek tidak ditemukan" };
    }

    // 2. Jika ada gambar, hapus dari Supabase Storage
    if (project.img && project.img.includes("project-images/")) {
      // Mengambil nama file dari URL (setelah folder 'project-images/')
      const filePath = project.img.split("project-images/")[1];
      
      const { error: storageError } = await supabase.storage
        .from("project-images")
        .remove([filePath]);

      if (storageError) {
        console.error("Gagal hapus gambar:", storageError);
        // Kita tidak ingin menggagalkan delete database hanya karena gambar gagal terhapus,
        // tapi log ini penting untuk debug.
      }
    }

    // 3. Hapus data dari Database via Prisma
    await prisma.project.delete({
      where: { id },
    });

    revalidatePath("/project");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Delete Error:", error);
    return { success: false, error: error.message };
  }
}