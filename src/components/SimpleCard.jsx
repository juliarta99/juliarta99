const SimpleCard = ({image, name}) => {
    return (
        <>
            <div className="py-3 px-2 bg-slate-50 border border-gray-200 rounded-lg shadow hover:bg-sky-200 duration-500 dark:bg-slate-600 dark:border-slate-900 dark:hover:bg-sky-900">
                <div className="p-2">
                    <img 
                        className="rounded-t-lg" 
                        src={image} 
                        alt={name} 
                    />
                </div>
                <h5 className="text-center text-sm md:text-md font-bold text-gray-900 dark:text-slate-300">{name}</h5>
            </div>
        </>
    )
}

export default SimpleCard