const MainSection = ({slot}) => {
    return (
        <>
            <main className="pt-20 pb-5">
                {slot}
            </main>
        </>
    )
}

export default MainSection