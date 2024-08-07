"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: 'Compétences',
        id: 'competences',
        content: (
            <ul className='list-disc pl-2'>
                <li>HTML / CSS</li>
                <li>PHP</li>
                <li>Javascript</li>
                <li>SQL</li>
                <li>Python</li>
                <li>C / C#</li>
                <li>Next.js</li>
                <li>Symfony</li>
            </ul>
        )
    },
    {
        title: 'Formations',
        id: 'formations',
        content: (
            <ul className='list-disc pl-2'>
                <li>BTS SIO (Services Informatiques aux Organisations) Lycée La Chartreuse Paradis</li>
                <li>Formations HTML, CSS et PHP sur le site OpenClassRooms</li>
                <li>Bac Pro TFCA (Technicien du Froid et du Conditionnement d'Air) Lycée La Chartreuse Paradis</li>
            </ul>
        )
    },
    {
        title: 'Expériences',
        id: 'experiences',
        content: (
            <ul className='list-disc pl-2'>
                <li>Stage 6 semaines chez "AuxPlaisirDeGrandir" en Télétravail (no-code : WordPress)</li>
                <li>Stage 6 semaines chez Computer.com à Le Puy en Velay (no-code : maintenance informatique)</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("competences");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
    return (
        <section className='text-white' id='#a_propos'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/about-img.png" alt="image à propos" width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>A propos de moi</h2>
                    <p className='text-base md:text-lg'>
                        Je m'appelle Dede Niyazi, j'ai 21 ans, je suis en Bachelor 3ème année spécialisé DEVOPS (Développement, Opérations informatiques, ingénierie Qualité et Sécurité).
                        À la suite de ma réorientation, je souhaite aujourd'hui effectuer une carrière dans l'informatique
                    </p>
                    <div className='flex flex-row justify-center items-center mt-8'>
                        <TabButton
                            selectTab={() => handleTabChange("competences")}
                            active={tab === "competences"}
                        >
                            {" "}
                            Compétences {" "}
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("formations")}
                            active={tab === "formations"}
                        >
                            {" "}
                            Formations {" "}
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("experiences")}
                            active={tab === "experiences"}
                        >
                            {" "}
                            Expériences {" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection