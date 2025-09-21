"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const team = [
  {
    name: "Eko Mudjiharto, S.T.",
    role: "Direktur",
    image: "/img-person.jpg",
  },
  {
    name: "Ezar Hardin Wiratama",
    role: "Kepala IT",
    image: "/img-person.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div className="text-center mb-12">
        <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
          Tim Kami
        </span>
        <h2 className="text-4xl font-extrabold mt-4 text-blue-700">
          Tim Kami
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Tim profesional kami berdedikasi untuk memberikan layanan terbaik di bidang pertanian, perkebunan, dan kehutanan.
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <CardHeader>
                <div className="flex justify-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={220}
                    height={220}
                    className="rounded-xl object-cover border-4 border-white shadow-md"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold">
                  {member.name}
                </CardTitle>
                <p className="text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
