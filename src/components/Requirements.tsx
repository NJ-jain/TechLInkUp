import softwareDevelopment from "../assets/software-development.svg";
import web from "../assets/web-development.svg";
import mobile from "../assets/mobile-app.svg";
import cloud from "../assets/cloud-backup.svg";
import api from "../assets/api.svg"
import database from "../assets/database.svg"
import devops from "../assets/devops.svg"
import ui from "../assets/ui-ux.svg"
import it from "../assets/it.svg"
import security from "../assets/security.svg"
import digital from "../assets/digital.svg"

const Requirements = () => {
  return (
    <div className="w-full min-h-[350px] bg-banner2 bg-cover bg-center bg-fixed relative py-12" id="requirements">
      <span className="absolute left-0 top-0 w-full h-full bg-black/60 z-0"/>

      <div className="max-w-5xl w-full mx-auto px-4 relative z-10">
        <h4 className="text-yellowLogo text-center text-2xl md:text-3xl font-medium mb-8 md:mb-12">
          Our Services
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {icon:  softwareDevelopment, title: "Custom Software Development", description: "Tailored software solutions to meet your business needs using modern technologies. Specialization in web, mobile, and cloud-based applications." },
            {icon:  web, title: "Web Development", description: "Full-stack development services for building responsive, user-friendly websites and web applications. Expertise in React, NextJS, NodeJS, and Golang." },
            {icon:  mobile, title: "Mobile App Development", description: "Development of iOS and Android apps using React Native. Cross-platform mobile solutions with high performance and user experience." },
            {icon:  cloud, title: "Cloud Consulting & Migration", description: "Assistance in migrating applications to the cloud, with expertise in AWS, Azure, and Google Cloud. Cloud architecture design, deployment, and maintenance." },
            {icon:  api, title: "API Development & Integration", description: "RESTful API development using Golang, NodeJS, and other frameworks. Integration of third-party services and APIs to enhance business functionalities." },
            {icon:  database, title: "Database Management & Optimization", description: "Design, implementation, and optimization of relational databases like MySQL and PostgreSQL. Performance tuning for high availability and scalability." },
            {icon:  devops, title: "DevOps & Automation", description: "DevOps services to automate workflows and infrastructure deployment using Docker, Kubernetes, and CI/CD pipelines. Monitoring and optimization of cloud infrastructure." },
            {icon:  ui, title: "UI/UX Design", description: "Designing intuitive, user-friendly interfaces for web and mobile applications. Emphasis on improving user experience and engagement." },
            {icon:  it, title: "IT Strategy & Consulting", description: "Helping businesses develop IT strategies to align with their goals. Offering guidance on technology selection, system integration, and future-proofing business operations." },
            {icon:  security, title: "Security & Compliance", description: "Implementation of best practices in data security, encryption, and compliance with industry standards. Regular audits and vulnerability assessments." },
            {icon:  digital, title: "Digital Transformation", description: "Assisting businesses in transitioning from legacy systems to modern, digital-first solutions. Automating workflows and optimizing business operations using new technologies." },
          ].map((item, index) => (
            <div key={index} className="bg-transparent border border-white rounded-lg p-6 text-center flex flex-col items-center">
              <img
                src={item.icon}
                alt="Service Icon"
                className="w-14 h-14 mb-4"
              />
              <h2 className="font-medium text-greenLogo text-xl mb-2">{item.title}</h2>
              <p className="text-zinc-200 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Requirements };
