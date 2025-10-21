
'use client';
import Image from "next/image";

export default function LogoSlider() {
  const logos = [
    "/eventx.svg",
    "/logo.svg",
    "/logo2.svg",
    "/ff.svg",
    "/damen.svg",
  ];

  return (
    <div  className="flex justify-center w-full    mx-auto  py-6">
      <div className="relative w-full overflow-hidden flex items-center">
        {/* الحاوية المتحركة */}
        <div className="flex animate-marquee items-center">
          {[...logos, ...logos].map((src, i) => (
            <div key={i} className="mx-8 flex-shrink-0">
              <Image
                src={src}
                alt={`logo-${i}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
            
          }
          100% {
            transform: translateX(-100%);
            display:none
          }
        }

        .animate-marquee {
          display: flex;
          width: 200%; /* علشان التكرار يظهر */
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

