const Testemonials = () => {
  return (
    <div className="w-full py-16 bg-zinc-100/50" id="industries">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="text-greenLogo font-medium text-2xl sm:text-3xl text-center mb-8 sm:mb-12">
          Industries We Serve
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Healthcare", description: "Providing innovative IT solutions for hospitals, clinics, and healthcare providers. We help healthcare organizations enhance patient care, improve operational efficiency, and ensure HIPAA compliance." },
            { title: "E-commerce & Retail", description: "Delivering tailored e-commerce platforms, online stores, and mobile shopping applications. Our solutions include payment gateway integrations, inventory management, and customer data analytics." },
            { title: "Financial Services", description: "Offering custom fintech solutions, such as secure payment systems, financial data analytics, and blockchain integration for banks, insurance companies, and fintech startups." },
            { title: "Education & E-learning", description: "Designing digital learning platforms, Learning Management Systems (LMS), virtual classrooms, and mobile educational apps for educational institutions and EdTech companies." },
            { title: "Real Estate", description: "Providing technology solutions for property management, real estate portals, and virtual tours, helping real estate agencies improve customer engagement and digitize operations." },
            { title: "Logistics & Supply Chain", description: "Offering end-to-end logistics solutions, including inventory management systems, real-time shipment tracking, and supply chain optimization tools to enhance transparency and efficiency." },
            { title: "Manufacturing", description: "Enabling smart manufacturing with IoT, automation, and predictive maintenance tools. Our solutions streamline production processes and improve decision-making through data analytics." },
            { title: "Travel & Hospitality", description: "Building custom booking systems, travel portals, and mobile apps for hotels, airlines, and travel agencies to enhance customer experience and optimize backend operations." },
            { title: "Media & Entertainment", description: "Developing scalable platforms for content management, video streaming, and social media applications, helping media companies deliver rich media experiences and analyze user engagement." },
            { title: "Telecommunications", description: "Providing telecom companies with solutions for network management, customer relationship management (CRM), and data analytics, enhancing customer engagement and service quality." },
            { title: "Energy & Utilities", description: "Delivering solutions for energy management, smart grids, and IoT-enabled monitoring systems to enhance operational efficiency and optimize resource management." },
            { title: "Automotive", description: "Providing IT solutions for connected cars, automotive supply chains, and manufacturing automation, implementing IoT solutions to enhance vehicle performance." },
            { title: "Government & Public Sector", description: "Offering digital transformation solutions for government services, building secure cloud-based systems, and enhancing citizen engagement through public portals and mobile apps." },
            { title: "Retail & Consumer Goods", description: "Enabling retail businesses to go digital with online platforms, customer loyalty programs, and real-time inventory systems, focusing on enhancing omnichannel strategies." },
            { title: "Non-Profit & Social Services", description: "Assisting non-profit organizations with donor management solutions, fundraising platforms, and social impact tracking to efficiently manage operations and engage donors." },
          ].map((item, index) => (
            <div key={index} className="bg-transparent border border-white rounded-lg p-6 text-center flex flex-col items-center">
              <span className="text-center text-greenLogo font-medium text-xl mb-2">{item.title}</span>
              <span className="text-zinc-800 text-sm">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Testemonials };
