// components/contact-info.tsx

import { MapPin, Phone, Mail } from "lucide-react";

const contactItems = [
  {
    icon: (
      <MapPin className="w-8 h-8 rounded-full text-white p-2 bg-[#2D2C4C]" />
    ),
    title: "School Location",
    details: ["Bardghat-2, Nawalparasi Susta Paschim,", "Nepal"],
  },
  {
    icon: (
      <Phone className="w-8 h-8 rounded-full text-white p-2 bg-[#2D2C4C]" />
    ),
    title: "Let’s Talk",
    details: ["078-580453", "+977 9841234567"],
  },
  {
    icon: <Mail className="w-8 h-8 rounded-full text-white p-2 bg-[#2D2C4C]" />,
    title: "Email Us",
    details: ["info@irisacademy.edu.np"],
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-[#E4EAF3] pt-12">
      <div className=" mx-auto">
        {/* Info Cards */}
        <div
          style={{
            boxShadow:
              "-6px -6px 12px 0 rgba(0, 0, 0, 0.08), 6px 6px 12px 0 rgba(0, 0, 0, 0.08)",
          }}
          className="bg-white container px-6 rounded-xl shadow flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x"
        >
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold">{item.title}</h3>
              <div className="mt-1 text-sm text-gray-600">
                {item.details.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="mt-8 w-full h-80 overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.918965005082!2d83.7372!3d27.6597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996843d38a7bbcf%3A0x1234567890abcdef!2sIris%20Academy!5e0!3m2!1sen!2snp!4v1694888400000!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
