import SimpleCard from '../SimpleCard'
import vscode from '../../assets/vscode.svg'
import git from '../../assets/git.svg'
import github from '../../assets/github.svg'
import figma from '../../assets/figma.svg'

const ToolsSection = () => {
    const tools = [
        {image: vscode, name: 'Visual Studio Code'},
        {image: git, name: 'Git'},
        {image: github, name: 'Github'},
        {image: figma, name: 'Figma'},
    ]

    return (
        <>
            <div className="container mx-auto py-20">
                <h1 className="font-bold text-xl lg:text-2xl uppercase text-center dark:text-slate-300">Tools</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 gap-4">
                    {tools.map((data, i) => {
                        return (
                            <SimpleCard 
                                key={i} 
                                image={data.image} 
                                name={data.name}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ToolsSection