import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsData = () => [
    {
        id: 1,
        title: "Site Vitrine",
        description: "Mon tout premier site vitrine fait en HTML / CSS en première année de BTS SIO",
        image: "/images/Projects/1.png",
        tag: ["All", "Web"]
    },
    {
        id: 2,
        title: "Site dynamique MVC",
        description: "Un framework crée de A à Z avec le modèle MVC",
        image: "/images/Projects/2.png",
        tag: ["All", "Web"]
    },
    {
        id: 3,
        title: "Site dynamique no-MVC",
        description: "Mon projet personnel de ma deuxième année de BTS SIO",
        image: "/images/Projects/3.png",
        tag: ["All", "Web"]
    },
    {
        id: 4,
        title: "Jeu Pong",
        description: "Création du jeu 'Pong' en Lua sur LOVE2D",
        image: "/images/Projects/4.png",
        tag: ["All", "Game"]
    },
    {
        id: 5,
        title: "Site web Portfolio",
        description: "Création de mon site de Portfolio en ligne",
        image: "/images/Projects/5.png",
        tag: ["All", "Web"]
    }
]

const ProjectSection = () => {
    return (
        <>
            <h2>Mes Projets</h2>
        </>
    )
}

export default ProjectSection