import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = () => [
    {
        id: 1,
        title: "Site Vitrine",
        description: "Mon tout premier site vitrine fait en HTML / CSS en première année de BTS SIO",
        image: "/images/Projects/1.png",
        tag: ["Tout", "Web"]
    },
    {
        id: 2,
        title: "Site dynamique MVC / Bootstrap",
        description: "Un framework crée de A à Z avec le modèle MVC",
        image: "/images/Projects/2.png",
        tag: ["Tout", "Web"]
    },
    {
        id: 3,
        title: "Site dynamique no-MVC",
        description: "Mon projet personnel de ma deuxième année de BTS SIO",
        image: "/images/Projects/3.png",
        tag: ["Tout", "Web"]
    },
    {
        id: 4,
        title: "Jeu Pong avec LOVE2D",
        description: "Création du jeu 'Pong' en Lua sur LOVE2D",
        image: "/images/Projects/4.png",
        tag: ["Tout", "Game"]
    },
    {
        id: 5,
        title: "Site web Portfolio avec Next.js",
        description: "Création de mon site de Portfolio en ligne",
        image: "/images/Projects/5.png",
        tag: ["Tout", "Web"]
    }
]

const ProjectSection = () => {
    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white'>
                Mes Projets
                </h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData().map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        tags={project.tag}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectSection