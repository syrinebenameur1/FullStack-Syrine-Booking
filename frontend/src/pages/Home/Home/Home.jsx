import "./Home.css"
import Navbar from "../../../components/navbar/Navbar"
import Header from "../../../components/navbar/Header/Header"
import Features from "../../../components/features/Features"
import PropertyList from "../../../components/propertyList/propertyList"
import Features2 from "../../../components/features2/features2"
import MailList from "../../../components/mailList/mailList"
import Footer from "../../../components/footer/footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
      <Features/>
  <h1 className="homeTitle">Browse by property type</h1>
  <PropertyList/>
  <h1 className="homeTitle">Homes guests love</h1>
<Features2/>
<MailList/>
<Footer/>
      </div>
    </div>
  )
}
