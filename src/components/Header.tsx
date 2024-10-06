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
        "We specialize in delivering comprehensive IT solutions that help businesses thrive in today’s digital landscape.",
      paragraph:
        "Our services include custom software development, cloud migration, API integrations, and cutting-edge web and mobile applications. By leveraging the latest technologies, we design solutions tailored to your unique business needs, enabling efficiency, scalability, and innovation.",
      // services: [
      //   "Custom Software Development",
      //   "Cloud & DevOps Solutions",
      //   "API Integration & Automation",
      //   "Mobile and Web Application Development",
      //   "IT Infrastructure Consulting",
      // ],
      imageUrl: "https://i.pinimg.com/564x/88/2d/c2/882dc2b028520b587e961a7c952dfcac.jpg", // Replace with your actual image URL
    },
    {
      title: "How We Do It",
      description:
        "We follow a client-first approach that ensures each project is aligned with your business goals.",
      paragraph:
        "Our process begins with deep consultation, understanding your specific needs, followed by agile development to provide flexibility and timely delivery. From concept to deployment, we use industry best practices to ensure seamless integration and robust performance. Our focus on collaboration, transparency, and ongoing support guarantees that the solutions we build are impactful and long-lasting.",
      // process: [
      //   "Consultation: In-depth analysis of your business challenges and goals.",
      //   "Strategy: Customized solution design based on your needs.",
      //   "Development: Agile methodology for iterative feedback and development.",
      //   "Implementation: Smooth deployment with minimal disruption to your operations.",
      //   "Support: Continuous post-launch support and optimization.",
      // ],
      imageUrl: "https://i.pinimg.com/1200x/ba/c1/a9/bac1a969b41f3015abe9346e1eaf79cc.jpg", // Replace with your actual image URL
    },
    {
      title: "Who We Serve",
      description:
        "We partner with a wide range of industries to provide innovative and effective solutions.",
      paragraph:
        "From healthcare providers seeking better patient management systems to retail businesses optimizing their e-commerce platforms, we tailor our services to meet the unique needs of every sector. Our clients range from small start-ups to large enterprises, all benefitting from our deep industry expertise and commitment to delivering value.",
      // industriesServed: [
      //   "Healthcare: Better patient management systems.",
      //   "Retail: Optimizing e-commerce platforms.",
      //   "Finance: Streamlined data integration and reporting.",
      //   "Manufacturing: Automation and supply chain management.",
      //   "Education: Learning management systems.",
      // ],
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
                <p className="text-white text-md mt-2 text-center max-w-2xl z-10">
                  {slide.paragraph}
                </p>
                {slide.services && (
                  <ul className="text-white list-disc text-md mt-4 max-w-lg z-10">
                    {slide.services.map((service, i) => (
                      <li key={i} className="mt-2">{service}</li>
                    ))}
                  </ul>
                )}
                {slide.process && (
                  <ul className="text-white list-disc text-md mt-4 max-w-lg z-10">
                    {slide.process.map((step, i) => (
                      <li key={i} className="mt-2">{step}</li>
                    ))}
                  </ul>
                )}
                {slide.industriesServed && (
                  <ul className="text-white list-disc text-md mt-4 max-w-lg z-10">
                    {slide.industriesServed.map((industry, i) => (
                      <li key={i} className="mt-2">{industry}</li>
                    ))}
                  </ul>
                )}
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
