import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../styles/project-details.css'
import BackIcon from '../assets/back-icon.svg'

const ProjectDetails = () => {

    const projects = [
        {
            id: 1,
            img: "https://drive.google.com/uc?export=view&id=1fXNs5u2VaC1lvlsVNUEq0MtMe_vJkimW",
            title: "Indonesian's Hogwarts",
            short: "Photoshoots of the magical Plaosan Temple located in Yogyakarta",
            long: "Plaosan Temple is one of the Buddhist temples located in Bugisan village, about a kilometre to the northeast of the renowned Hindu Prambanan Temple in Indonesia. This photoshoot of Plaosan Temple reminds me of the school castle structure in Harry Potter called Hogwarts. The cloud, composisition, color, and mysterious silhouette brings magical feels to the photoshoot. That is why this piece is called Indonesian's Hogwarts."
        },
        {
            id: 2,
            img: "https://drive.google.com/uc?export=view&id=1PDyk84mx_5_odc12pDV3U-XvDfhgKdtm",
            title: "Cirebon Mask Dance",
            short: "Illustration set of five dancer of the iconic Cirebon masks",
            long: "Cirebon Mask dance is a local indigenous art form of Cirebon in Java. It is called mask dance becaouse the dancers use mask when dancing. There are five different types of mask with different meaning for each mask. Panji represents holiness like a new born baby. Samba represents a child and excitement, Rumyan represents a teenager and life, Tumenggung represents a wise person and loyalty, and last is Kelana that represents emotions and anger. This is an illustrations of Cirebon mask dance final form, that is Kelana."
        },
        {
            id: 3,
            img: "https://drive.google.com/uc?export=view&id=1a8ddufoBxKcXTLv5k3Fsk1DarHJ2-0r8",
            title: "The Raging Storm",
            short: "Short comics about journey of losing and finding the inner self",
            long: "The Raging Storm is a short comic about a journey of losing and finding the inner self. Nara and her loyal company, Stardust, begins their journey of exploring the deep forest. Nara always thought that she knew the way but she lied to herself and refuse to admit that she's lost in the wood. It keeps geeting worse as the path of the sun begins to fade because the storm has arrived. Nara starting to doubt herself and realized that she needs to admit of her flaws. Will she survived the raging storm?"
        },
        {
            id: 4,
            img: "https://drive.google.com/uc?export=view&id=1rZNY5Cu1PgCKA9Cl2bEglylldplztS2x",
            title: "HerbAll",
            short: "To make Indonesian traditional drinks called Jamu goes global",
            long: "Jamu is a herbal drink made of plants and spices such as ginger, turmeric, cloves, fennel, celery, and tamarind. Indonesians drink it to maintain health and fitness, and to prevent and in some case cure disease. It has been part of the culture for generations. Sadly, this authentic Indonesian drink suffer to exists in the modern day compared to coffee, boba, and many more. HerbAll comes to produce jamu with modern way in the form of tablets, capsules, sachets or bottled drinks. All those product can easly be bought at HerbAll online store."
        },
        {
            id: 5,
            img: "https://drive.google.com/uc?export=view&id=1Bjo_JQ5sbxsyukSRQFj4srTOoqS0ELkx",
            title: "Rumah Harmonis",
            short: "Mental health education and consultation platform",
            long: "People's awareness about mental health has improved in recent years. Going to a mental consultant and psychologist is not something that's need to be ashamed of anymore. But, there's still a problem with the cost of those services. Rumah Harmonis provides a mental consulting platform for all people without the need to worry about the cost."
        }
    ]

    const { id } = useParams()

    return (
        <section className='project-details'>
            {projects.filter((project) => project.id === +id).map((project, index) => {
                return (
                    <div key={index}>
                        <Link to="/projects" className='back'>
                            <img src={BackIcon} alt="" />
                            <p>See Others</p>
                        </Link>
                        <h1 className='project-title'>{project.title}</h1>
                        <p className='project-short'>{project.short}</p>
                        <img src={project.img} alt="" className='project-img' />
                        <p className='project-long'>{project.long}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default ProjectDetails