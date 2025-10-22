
// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";

// export default function Myswiper({
//   imagesList,
// }: {
//   imagesList: string[];
// }) {
//   return (
//     <div className="w-full overflow-hidden flex justify-center items-center bg-amber-400">
//       <Swiper
      
//         modules={[Autoplay]}
//         slidesPerView="auto"
//         spaceBetween={0}
//         loop={true}
//         allowTouchMove={false}
//         speed={6000}
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: false,
//           reverseDirection: true, 
//         }}
//         className="w-[90%] flex items-center bg-red-600 justify-center h-full"
//       >
//         {[...imagesList, ...imagesList].map((src, i) => (
//           <SwiperSlide
//             key={i}
//             className="!w-auto flex justify-center bg-amber-500 "
//           >
//             <img
//               src={src}
//               alt={`logo-${i}`}
//               className="w-[120px] h-auto object-contain mx-8 "
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Myswiper({
  imagesList,
}: {
  imagesList: string[];
}) {
  return (
    <div className=" md:w-[90%] flex justify-center overflow-hidden py-8 ">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={50} 
        loop={true}
        allowTouchMove={false}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        className="w-full flex items-center"
      >
        {[...imagesList, ...imagesList, ...imagesList].map((src, i) => (
          <SwiperSlide
            key={i}
            className="!w-auto flex justify-center items-center"
          >
            <img
              src={src}
              alt={`logo-${i}`}
              className="w-[120px] h-[50px] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

