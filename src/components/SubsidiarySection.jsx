"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const subsidiaries = [
  {
    name: "CV. Milenium Jaya Mandiri",
    desc: "Berfokus pada layanan pengadaan dan distribusi tanaman untuk kebutuhan proyek skala kecil maupun besar.",
    logo: "/logo.jpg", // letakkan file di public/
  },
  {
    name: "CV. Milenium Jaya Abadi",
    desc: "Mengembangkan jasa penanaman dan pemeliharaan tanaman di sektor pertanian, perkebunan, dan kehutanan.",
    logo: "/logo.jpg", // letakkan file di public/
  },
];

export default function SubsidiarySection() {
  return (
    <section className="py-20 bg-white" id="subsidiaries">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
          Anak Perusahaan
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-blue-700">
          Anak Perusahaan Kami
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          PT. Milenium Jaya Sejati memiliki anak perusahaan yang mendukung
          layanan pengadaan, penanaman, serta pemeliharaan tanaman untuk berbagai
          sektor.
        </p>

        {/* Grid Anak Perusahaan */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {subsidiaries.map((item, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-md hover:shadow-lg transition border border-gray-200"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image
                    src={item.logo}
                    alt={`${item.name} Logo`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-blue-700">
                  {item.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
