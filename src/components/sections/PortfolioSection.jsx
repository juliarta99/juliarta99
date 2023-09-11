import ProjectCard from '../ProjectCard'
import jays from '../../assets/jays.png'
import tapTapBang from '../../assets/tap-tap-bang.png'
import trackAnime from '../../assets/track-anime.png'
import animeApp from '../../assets/anime-app.png'
import eCommerce from '../../assets/e-commerce.png'
import perpustakaan from '../../assets/perpustakaan-aman-sejati.png'

const PortfolioSection = () => {
    const projects = [
        {
            image:trackAnime, 
            name: "Track Anime",
            desc: 'Tracking anime website with image using Api from Trace Moe Api',
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
            desc: 'List of anime website in the world using Api from Jikan Api',
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
            desc: 'E-commerce website with store owner, buyer and website admin rules',
            tasks: [
                {name: 'Laravel'},
                {name: 'TailwindCSS'},
            ],
            linkGithub: 'https://github.com/juliarta99/e-commerce',
        },
        {
            image:perpustakaan, 
            name: "Perpustakaan Aman Sejati",
            desc: 'Library website that makes it easier for officers to manage data on borrowing and returning books',
            tasks: [
                {name: 'Laravel'},
                {name: 'TailwindCSS'},
            ],
            linkGithub: 'https://github.com/juliarta99/perpustakaan',
        },
        {
            image:tapTapBang, 
            name: "Tap-Tap Bang",
            desc: 'Tug of War game website to celebrate the 78th Anniversary of the Republic of Indonesia',
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
            desc: 'Sale website of fruit salad and ice',
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