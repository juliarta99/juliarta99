import PortfolioSection from "../components/sections/PortfolioSection"
import Footer from '../components/Footer'

const PortfolioView = () => {
    return (
        <>
            <div className="py-20">
                <p className="text-center font-bold italic">In development</p>
                <PortfolioSection></PortfolioSection>
            </div>
            <Footer></Footer>
        </>
    )
}

export default PortfolioView