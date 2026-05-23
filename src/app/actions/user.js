// src/app/actions/user.js
"use server";

import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

// Inisialisasi menggunakan SERVICE_ROLE_KEY agar memiliki hak akses Admin
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function fetchUsers() {
  try {
    const { data, error } = await supabaseAdmin.auth.admin.listUsers();
    if (error) throw error;
    return { success: true, data: data.users };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function createUser(formData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email: email,
      password: password,
      email_confirm: true, // Otomatis terkonfirmasi karena dibuat oleh Admin
    });

    if (error) throw error;

    revalidatePath("/admin/users");
    return { success: true, data: data.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}