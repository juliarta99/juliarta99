import SkillCard from "../SkillCard"
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import bootstrap from '../../assets/bootstrap.svg'
import tailwindcss from '../../assets/tailwindcss.svg'
import php from '../../assets/php.svg'
import javascript from '../../assets/javascript.svg'
import java from '../../assets/java.svg'
import laravel from '../../assets/laravel.svg'
import vue from '../../assets/vue.svg'
import react from '../../assets/react.svg'
import mysql from '../../assets/mysql.svg'
import vscode from '../../assets/vscode.svg'
import git from '../../assets/git.svg'
import github from '../../assets/github.svg'
import figma from '../../assets/figma.svg'

const SkillsSection = () => {
    const skills = [
        {image: html, name: 'HTML'},
        {image: css, name: 'CSS'},
        {image: bootstrap, name: 'Bootstrap'},
        {image: tailwindcss, name: 'Tailwindcss'},
        {image: php, name: 'PHP'},
        {image: javascript, name: 'Javascript'},
        {image: java, name: 'Java'},
        {image: laravel, name: 'Laravel'},
        {image: vue, name: 'Vue JS'},
        {image: react, name: 'React JS'},
        {image: mysql, name: 'MySql'},
    ]

    const tools = [
        {image: vscode, name: 'Visual Studio Code'},
        {image: git, name: 'Git'},
        {image: github, name: 'Github'},
        {image: figma, name: 'Figma'},
    ]

    return (
        <>
            <div className="container pb-20 mx-auto">
                <div>
                    <h1 className="font-bold text-xl lg:text-2xl uppercase text-center">Skills</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 gap-4">
                        {skills.map((data, i) => {
                            return (
                                <SkillCard key={i} image={data.image} name={data.name}></SkillCard>
                            )
                        })}
                    </div>
                </div>
                <div className="pt-20">
                    <h1 className="font-bold text-xl lg:text-2xl uppercase text-center">Tools</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 gap-4">
                        {tools.map((data, i) => {
                            return (
                                <SkillCard key={i} image={data.image} name={data.name}></SkillCard>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillsSection