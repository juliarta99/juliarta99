import SimpleCard from "../SimpleCard"
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
import wordpress from '../../assets/wordpress.svg'

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
        {image: wordpress, name: 'Wordpress'},
    ]

    

    return (
        <>
            <div className="container pt-20 mx-auto">
                <h1 className="font-bold text-xl lg:text-2xl uppercase text-center dark:text-slate-300">Skills</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5 gap-4">
                    {skills.map((data, i) => {
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

export default SkillsSection