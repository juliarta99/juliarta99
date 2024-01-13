import ProjectCard from '../ProjectCard'
import jays from '../../assets/jays.png'
import tapTapBang from '../../assets/tap-tap-bang.png'
import trackAnime from '../../assets/track-anime.png'
import animeApp from '../../assets/anime-app.png'
import eCommerce from '../../assets/e-commerce.png'
import perpustakaan from '../../assets/perpustakaan-aman-sejati.png'
import weddingOtaku from '../../assets/wedding-otaku.png'
import timeSchedule from '../../assets/time-schedule.png'
import remodeledAi from '../../assets/remodeled-ai.png'
import ssamaya from '../../assets/ssamaya.png'
import kawaiMassage from '../../assets/kawai-massage.png'
import bengkelku from '../../assets/bengkelku.png'

const PortfolioSection = () => {
    const projects = [
        {
            image:weddingOtaku, 
            name: "Wedding Otaku",
            desc: 'Design a Japanese-themed wedding invitation website. Guests can send text or video congratulations, including social media content. The couple can track RSVPs on the website dashboard.',
            tasks: [
                {name: 'TailwindCSS'},
                {name: 'Laravel'},
                {name: 'React JS'},
            ],
            linkGithub: 'https://github.com/juliarta99/weddingotaku',
            linkWeb: 'https://weddingotaku.com/guritmaulinadesu'
        },
        {
            image:timeSchedule, 
            name: "Time Schedule",
            desc: 'A scheduling website for a digital marketing company, allowing clients to view available slots, their schedule, and preview the design results of their requested posts before uploading to their social media accounts.',
            tasks: [
                {name: 'TailwindCSS'},
                {name: 'Laravel'},
                {name: 'React JS'},
            ],
            linkGithub: 'https://github.com/juliarta99/time-schedule'
        },
        {
            image:remodeledAi, 
            name: "Remodeled AI",
            desc: "Redesign the website remodeledai.com by providing an appealing visual design and enhancing the user's first experience to make it more special. The website competed and won.",
            tasks: [
                {name: 'HTML'},
                {name: 'CSS'},
                {name: 'Javascript'},
            ],
            linkGithub: 'https://github.com/juliarta99/remodeledai',
            linkWeb: 'https://remodeledai.vercel.app'
        },
        {
            image:bengkelku, 
            name: "Bengkelku",
            desc: 'Online motorcycle service booking website, facilitating owners and workshops. BengkelKu enhances efficiency and customer experience.',
            tasks: [
                {name: 'HTML'},
                {name: 'Bootstrap'},
                {name: 'PHP'},
                {name: 'Javascript'},
            ],
            linkGithub: 'https://github.com/juliarta99/bengkelku',
        },
        {
            image: ssamaya, 
            name: "Ssamaya Spa",
            desc: 'A spa website featuring detailed information about spa products, with a focus on visual design to captivate visitors. The comprehensive spa details aim to instill trust in the visitors.',
            tasks: [
                {name: 'Wordpress'},
            ],
            linkWeb: 'https://ssamayaspabali.com'
        },
        {
            image: kawaiMassage, 
            name: "Kawai Massage",
            desc: 'Landing page for a spa designed with attention to visual aesthetics to create an enticing impression for visitors.',
            tasks: [
                {name: 'Wordpress'},
            ],
            linkWeb: 'https://kawaimassagebali.com'
        },
        {
            image:trackAnime, 
            name: "Track Anime",
            desc: 'Tracking anime website with image using Api from Trace Moe Api.',
            tasks: [
                {name: 'HTML'},
                {name: 'Bootstrap'},
                {name: 'React JS'},
            ],
            linkGithub: 'https://github.com/juliarta99/track-anime',
            linkWeb: 'https://track-anime.vercel.app'
        },
        {
            image:animeApp, 
            name: "Anime App",
            desc: 'List of anime website in the world using Api from Jikan Api.',
            tasks: [
                {name: 'HTML'},
                {name: 'TailwindCSS'},
                {name: 'Vue JS'},
            ],
            linkGithub: 'https://github.com/juliarta99/anime-app',
            linkWeb: 'https://anime-app-juliarta.vercel.app'
        },
        {
            image:eCommerce, 
            name: "E-Commerce",
            desc: 'E-commerce website with store owner, buyer and website admin rules.',
            tasks: [
                {name: 'Laravel'},
                {name: 'TailwindCSS'},
            ],
            linkGithub: 'https://github.com/juliarta99/e-commerce',
        },
        {
            image:perpustakaan, 
            name: "Perpustakaan Aman Sejati",
            desc: 'Library website that makes it easier for officers to manage data on borrowing and returning books.',
            tasks: [
                {name: 'Laravel'},
                {name: 'TailwindCSS'},
            ],
            linkGithub: 'https://github.com/juliarta99/perpustakaan',
        },
        {
            image:tapTapBang, 
            name: "Tap-Tap Bang",
            desc: 'Tug of War game website to celebrate the 78th Anniversary of the Republic of Indonesia.',
            tasks: [
                {name: 'HTML'},
                {name: 'CSS'},
                {name: 'JavaScript'}
            ],
            linkGithub: 'https://github.com/juliarta99/tap-tapBang',
            linkWeb: 'https://tap-tapbang.vercel.app'
        },
        {   image:jays, 
            name: "Jays's",
            desc: 'Sale website of fruit salad and ice.',
            tasks: [
                {name: 'HTML'},
                {name: 'CSS'},
                {name: 'PHP'},
                {name: 'JavaScript'}
            ],
            linkGithub: 'https://github.com/juliarta99/Jays',
        }
    ]

    return (
        <>
            <div className="container mx-auto py-20">
                <h1 className="font-bold text-xl lg:text-2xl uppercase text-center dark:text-slate-300">Portfolio</h1>
                <div className="grid gap-4 mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((data, i) => {
                        return(
                            <ProjectCard 
                                key={i} 
                                image={data.image} 
                                name={data.name} 
                                desc={data.desc} 
                                tasks={data.tasks} 
                                linkGithub={data.linkGithub} 
                                linkWeb={data.linkWeb}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default PortfolioSection