"use client";

export default function LocationSection() {
  return (
    <section className="py-20 bg-gray-50" id="lokasi">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
          Lokasi Kami
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-blue-700">
          Kunjungi Perusahaan Kami
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Silakan datang langsung ke kantor kami di alamat berikut:
        </p>

        {/* Alamat */}
        <p className="mt-4 font-medium text-lg text-gray-800">
          Jl. Kalimas No.15, Gobok, Donan, Kec. Cilacap Tengah,  
          Kabupaten Cilacap, Jawa Tengah 53222
        </p>

        {/* Map */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-4xl h-[450px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.5963431142627!2d109.00450119999999!3d-7.7263835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65134e1c2140ed%3A0xb753058d0fcee7b5!2sPT%20Milenium%20Jaya%20Sejati!5e0!3m2!1sid!2sid!4v1757949865334!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
