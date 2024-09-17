import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay

const Header = () => {
  const slides = [
    {
      title: "What We Do",
      description:
        "We specialize in delivering IT solutions that help businesses thrive.",
      imageUrl: "https://i.pinimg.com/564x/88/2d/c2/882dc2b028520b587e961a7c952dfcac.jpg", // Replace with your actual image URL
    },
    {
      title: "How We Do",
      description:
        "We follow a client-first approach and use agile methodology for flexibility and timely delivery.",
      imageUrl: "https://i.pinimg.com/1200x/ba/c1/a9/bac1a969b41f3015abe9346e1eaf79cc.jpg", // Replace with your actual image URL
    },
    {
      title: "Who We Serve",
      description:
        "We partner with various industries, providing innovative solutions tailored to their needs.",
      imageUrl: "https://i.pinimg.com/1200x/59/c9/ea/59c9ea50436dd5819ee1396db1a72856.jpg", // Replace with your actual image URL
    },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center relative w-full bg-fixed" id="hero">
      <span className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true} // Enables infinite looping
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Enables autoplay with a delay of 3 seconds
          // pagination={{ clickable: true }} // Enables pagination
          // navigation={true} // Enables navigation buttons
          modules={[Pagination, Navigation, Autoplay]} // Register modules
          className="mySwiper w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col items-center justify-center h-full bg-cover bg-center relative w-full"
                style={{ backgroundImage: `url(${slide.imageUrl})` }} // Apply the background image
              >
                <h2 className="text-white font-black text-4xl md:text-5xl lg:text-6xl text-center z-10">
                  {slide.title}
                </h2>
                <p className="text-white font-semibold text-xl mt-4 text-center max-w-2xl z-10">
                  {slide.description}
                </p>
                <span className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
