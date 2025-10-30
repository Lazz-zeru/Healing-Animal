import { useState } from "react"
import Folleto from "../Components/Folleto/Folleto"
import Header from "../Components/Header/Header"
import NavigationBar from "../Components/NavigationBar/NavigationBar"
import WhoWeAre from "../Components/Section1/WhoWeAre"
import Carts from "../Components/Section2/Carts"
import OurValues from "../Components/Section3/OurValues"
import Filter from "../Components/Section4/Filter"
import Products from "../Components/Section5/Products"
import Footer from "../Components/Section6/Footer"
import './DashBoardLayout.css'
import Tarjeta from "../Components/tarjeta/Tarjeta"

function DashBoardLayout() {
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null)

    const renderFilteredComponent = () => {
        switch (selectedFilter) {
            case "Producto":
                return <Products />
            case "Folleto":
                return <Folleto />
            case "Tarjeta":
                return <Tarjeta />
            default:
                return <Products /> // valor por defecto
        }
    }

    return (
        <div className="ma-main-container">
            <NavigationBar />
            <Header />
            <WhoWeAre />
            <Carts />
            <OurValues />

            <Filter onSelect={setSelectedFilter} />

            {/* Render dinámico */}
            {renderFilteredComponent()}

            <Footer />
        </div>
    )
}

export default DashBoardLayout
