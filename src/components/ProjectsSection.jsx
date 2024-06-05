"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Excel It AI Ltd Portfolio Website",
    description:
      "Creating a website for a software development company involves showcasing the company's expertise, services, projects, and how they stand out in the tech industry. The website should serve as a digital portfolio and a point of contact for potential clients, partners, and employees. ",
    image: "/images/myprojects/1.png",
    tag: ["All", "Other"],
    gitUrl: "/",
    previewUrl: "https://excelitai.com/",
  },
  {
    id: 2,
    title: "Munshiganj Land Project",
    description:
      "For a real estate developers company like the one involved in the Munshiganj Land Project, creating or utilizing a comprehensive software solution tailored for administrative purposes is crucial for efficiency, project management, and customer satisfaction. Such a software would ideally encompass various functionalities to streamline operations, from project planning and execution to sales, customer management, and post-sales services.",
    image: "/images/myprojects/2.png",
    tag: ["All", "React"],
    gitUrl: "/",
    previewUrl: "https://munshiganj.excelitportfolio.com/",
  },
  {
    id: 3,
    title: "Parcel Star",
    description:
      "Creating a website for a courier company like Parcel Star involves focusing on functionality, user experience, and the specific services that set the company apart in the logistics and delivery market.",
    image: "/images/myprojects/3.png",
    tag: ["All", "Other"],
    gitUrl: "/",
    previewUrl: "https://www.parcelstar.com.bd/",
  },
  {
    id: 4,
    title: "Velocita Infosys Limited",
    description:
      "Velocita Infosys Limited, as an international call center service provider, operates at the forefront of customer relationship management and outsourcing solutions. With a focus on delivering high-quality customer service, technical support, and back-office services, Velocita Infosys is dedicated to helping businesses around the globe optimize their customer interactions and operational efficiencies.",
    image: "/images/myprojects/4.png",
    tag: ["All", "Next"],
    gitUrl: "/",
    previewUrl: "https://velocitainfosys.com/",
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    description:
      "Creating a personal portfolio website is a great way to showcase your work, skills, and professional journey to potential employers, clients, or collaborators",
    image: "/images/myprojects/5.png",
    tag: ["All", "Next"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Multivendor Ecommerce Website",
    description:
      "BPPShop is a multivendor eCommerce platform designed to facilitate a diverse marketplace where multiple independent vendors can sell their products directly to consumers. The platform operates by allowing vendors to set up their own mini-stores within the larger BPPShop website, where they can list their products, manage inventory, and directly engage with customers.",
    image: "/images/myprojects/6.png",
    tag: ["All", "React"],
    gitUrl: "/",
    previewUrl: "https://bppshop.com.bd/",
  },
  {
    id: 7,
    title: "Doctor-Portals",
    description:
      "Doctor-Portals is a web application designed to streamline and enhance the interaction between patients and healthcare providers. This system provides a centralized platform for managing appointments, patient records, billing, and more, thereby improving efficiency and patient satisfaction in healthcare facilities.",
    image: "/images/myprojects/7.png",
    tag: ["All", "MERN"],
    gitUrl: "/",
    previewUrl: "https://doctor-portals-client.vercel.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // const [projectsData, setProjectsData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/projects`)
  //     .then((res) => setProjectsData(res.data));
  // }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Project
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next"
          isSelected={tag === "Next"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="MERN"
          isSelected={tag === "MERN"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Other"
          isSelected={tag === "Other"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => {
          return ( <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project._id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>)
        })}
      </ul>
    </section>
  );
};

export default ProjectsSection;
