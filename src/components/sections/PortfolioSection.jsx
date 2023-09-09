import ProjectCard from '../ProjectCard'
import jays from '../../assets/jays.png'

const PortfolioSection = () => {
    const projects = [
        {   image:jays, 
            name: "Jays's",
            desc: 'sale of fruit salad and ice',
            tasks: [
                {name: 'HTML'},
                {name: 'CSS'},
                {name: 'PHP'},
                {name: 'JavaScript'}
            ]
        }
    ]

    return (
        <>
            <div className="container pb-20 mx-auto">
                <h1>Portfolio</h1>
                {projects.map((data, i) => {
                    return(
                        <ProjectCard key={i} image={data.image} name={data.name} desc={data.desc} tasks={data.tasks}></ProjectCard>
                    )
                })}
            </div>
        </>
    )
}

export default PortfolioSection