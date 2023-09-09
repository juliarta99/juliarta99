const SkillCard = ({image, name}) => {
    return (
        <>
            <div className="py-3 px-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-sky-200 duration-500 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-2">
                    <img className="rounded-t-lg" src={image} alt={name} />
                </div>
                <h5 className="text-center text-sm md:text-md font-bold text-gray-900 dark:text-white">{name}</h5>
            </div>
        </>
    )
}

export default SkillCard