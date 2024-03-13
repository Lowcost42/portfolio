"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = () => [
    {
        id: 1,
        title: "Site Vitrine",
        description: "Mon tout premier site vitrine fait en HTML / CSS en première année de BTS SIO",
        image: "/images/Projects/1.png",
        tag: ["Tout", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Site dynamique MVC / Bootstrap",
        description: "Un framework crée de A à Z avec le modèle MVC (Modèle Vue Controller)",
        image: "/images/Projects/2.png",
        tag: ["Tout", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Site dynamique no-MVC",
        description: "Mon projet personnel de ma deuxième année de BTS SIO",
        image: "/images/Projects/3.png",
        tag: ["Tout", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Jeu Pong avec LOVE2D",
        description: "Création du jeu 'Pong' en Lua sur LOVE2D",
        image: "/images/Projects/4.png",
        tag: ["Tout", "Jeu"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Site web Portfolio avec Next.js",
        description: "Création de mon site de Portfolio en ligne",
        image: "/images/Projects/5.png",
        tag: ["Tout", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
];

const ProjectSection = () => {
    const [tag, setTag] = useState("Tout");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData().filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                Mes Projets
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={handleTagChange}
                    name="Tout"
                    isSelected={tag === "Tout"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Jeu"
                    isSelected={tag === "Jeu"}
                />
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        tags={project.tag}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectSection