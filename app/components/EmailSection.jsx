"use client";
import React, { useState } from 'react'
import GithubIcon from "../../node_modules/@tabler/icons/icons/brand-github.svg"
import LinkedinIcon from "../../node_modules/@tabler/icons/icons/brand-linkedin.svg"
import Link from "next/link"
import Image from "next/image"

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            objet: e.target.objet.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
            console.log('Message envoyé');
            setEmailSubmitted(true);
        }
    }
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>
                    Entrons en contact.
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    Je recherche de nouvelles opportunités telles qu'une entreprise pour commencer une alternance en développement web.
                    Mon adresse e-mail est prête à recevoir des offres.
                    Si vous avez des questions ou autre, n'hésitez pas à m'envoyer un e-mail, je vous répondrai rapidement !
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href='https://github.com/Lowcost42' target='_blank'>
                        <Image src={GithubIcon} alt='Icone Github' style={{ filter: 'brightness(0) invert(1)', width: '70px' }} />
                    </Link>
                    <Link href='https://www.linkedin.com/in/niyazi-dede-b33a762a1/' target='_blank'>
                        <Image src={LinkedinIcon} alt='Icone Linkedin' style={{ filter: 'brightness(0) invert(1)', width: '70px' }} />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor='email'
                            className='text-white block mb-2 text-sm font-medium'
                        >
                            Votre e-mail...
                        </label>
                        <input
                            name='email'
                            type="email"
                            id="email"
                            required
                            className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='abc@gmail.com'
                        />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor='objet'
                            className='text-white block mb-2 text-sm font-medium'
                        >
                            Objet
                        </label>
                        <input
                            name='objet'
                            type="text"
                            id="objet"
                            required
                            className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='Sujet'
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message'
                            className='text-white block mb-2 text-sm font-medium'
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='Bonjour Niyazi, je te contacte pour ...'
                        />
                    </div>

                    <button type='submit'
                        className='bg-secondary-600 hover:bg-primary-500 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Envoyer le message
                    </button>
                    {
                        emailSubmitted && (
                            <p className='text-green-500 text-sm mt-2'>
                                E-mail envoyé avec succès.
                            </p>
                        )
                    }
                </form>
            </div >
        </section >
    )
}

export default EmailSection