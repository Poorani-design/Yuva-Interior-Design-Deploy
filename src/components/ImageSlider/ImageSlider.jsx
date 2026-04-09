import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./ImageSlider.css"; // Custom styles for navigation buttons

const ImageSlider = ({ data, title }) => {
  return (
    <section className="py-12 px-4">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          {title}
        </h2>
        <div className="w-12 h-[2px] bg-amber-500 mt-2"></div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        spaceBetween={16}
        slidesPerView={5} // 🔥 mobile focus
        breakpoints={{
          270: { slidesPerView: 1.5 }, //mobile
          640: { slidesPerView: 2.5 }, // small tablets
          768: { slidesPerView: 3 }, // tablet
          1024: { slidesPerView: 4 }, // desktop
          1280: { slidesPerView: 5 }, // large desktop
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="rounded-2xl overflow-hidden bg-neutral-900">
  

              {/* Image */}
              <div className="relative">
                <img
                  src={item.url}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-[220px] sm:h-[260px] object-cover"
                />            
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageSlider;
