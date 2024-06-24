"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "CraftDEN with React.js",
    description: "CraftDEN is the online platform dedicated to showcasing and celebrating the diverse world of textile arts, focused on the category",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Narzis111/craft-den",
    previewUrl: "https://assignment-10-project-a5037.web.app",
  },
  {
    id: 2,
    title: "Wisdom Forage with MERN Stack",
    description: "An Online Education Platform Whether you are creating assignments, completing them, or grading others' submissions, all got you covered.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Narzis111/wisdom-forage",
    previewUrl: "https://assignment-11-project-c8814.web.app",
  },
  {
    id: 3,
    title: "BrillianceBay with MERN Stack & Payment Gateway",
    description: "BrillianceBay ContestHub is a dynamic and user-friendly Project Contest Creation Platform",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Narzis111/brilliance-bay",
    previewUrl: "https://final-project-client-d376e.web.app",
  },
  {
    id: 4,
    title: "OnePage with HTML & Bootstrap",
    description: "A single page website created using HTML & Bootstrap",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Narzis111/responsive-one-page-bootstrap",
    previewUrl: "https://narzis111.github.io/responsive-one-page-bootstrap/",
  },
  {
    id: 5,
    title: "Skyline Realty with React.js",
    description: "Dynamic website of a real estate company with detail property view & location",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Narzis111/skyline-realty",
    previewUrl: "https://assignment-9-project-7021d.web.app",
  },
  {
    id: 6,
    title: "Dragon News with React.js",
    description: "Dynamic Newspaper website created using React.js",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Narzis111/dragon-news",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
