import Image from '../../assets/juli.png'

const AboutSection = () => {
    return (
        <>
            <div className="py-20 container mx-auto flex md:flex-row flex-col">
                <img src={Image} alt="Image" className='w-72 md:w-60 object-cover rounded border-4 border-sky-500 border-opacity-10 mx-auto' />
                <div className="space-y-4 text-justify mt-5 md:mt-0 ml-0 md:ml-10">
                    <p>Hello 👋, my full name is <span className='font-bold'>Si Ngurah Putu Juliarta</span>, I'm usually called Juli or Ngurah. I am a Web Developer and Student. I was born and live in Badung, Bali. Currently, I am a student at <span className='font-bold'>SMK NEGERI 1 DENPASAR</span> majoring in Software Engineering. I have a strong interest in the world of programming, especially in the field of web development. My journey in the world of web development started with HTML and CSS. At first, I was just dabbling, but as time went by, I realized that this world challenged and interested me. That's why I decided to dive into it. Now, I have developed my skills in several programming languages, including PHP and JavaScript. I have also learned several frameworks, such as Laravel, React.js, and Vue.js, which allow me to build more complex and dynamic web applications. </p>
                    <p>I am very enthusiastic to continue learning and developing my skills in the world of programming. If you have questions, want to use my services, or want to collaborate on a joint project, don't hesitate to contact me. I am always ready to learn and grow together.</p>
                </div>
            </div>
        </>
    )
}

export default AboutSection