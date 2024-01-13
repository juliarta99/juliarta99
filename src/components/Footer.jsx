const Footer = () => {
    return (
        <>
            <footer className="w-full bg-slate-200 shadow-lg dark:bg-slate-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-center">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Juliarta</span>
                    <div className="text-xs text-gray-500 sm:text-center dark:text-gray-400 flex flex-col">
                        <span>Built with <span className="font-bold">React JS</span> and <span className="font-bold">TailwindCSS</span></span>
                        <span>Hosted on <span className="font-bold">Vercel</span></span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer