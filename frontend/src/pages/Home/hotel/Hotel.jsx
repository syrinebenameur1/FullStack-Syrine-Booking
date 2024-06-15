import "./hotel.css"
import Navbar from "../../../components/navbar/navbar"
import Header from "../../../components/navbar/Header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../../components/mailList/mailList"
import Footer from "../../../components/footer/footer"

const Hotel = () => {
  const photos = [
    {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/495802078.jpg?k=129c59992278b0d7b931ccbb872c45b53f6f22b865d555b37e3d09aa5e548098&o=&hp=1"},
  {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/495802059.jpg?k=3ca0ab7ea75ee42450d039eab1f538488ef63f04cac74dcee33a3a660a5a1a52&o=&hp=1"},
  {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/495802064.jpg?k=441f18ed3901200bc33a5eb1c6aa27638b6c2f402ce8143f091df02b8d6bb492&o=&hp=1"},
 { src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/495802376.jpg?k=716d3306a5536eb88c7a1c398d33040789e5e9fc1831759f4025ecf166cda808&o=&hp=1"},
  {src:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/495804338.jpg?k=75fe941c161c090a4c0915b5c82e8733fefe6015c12c4a9019b14f836d1cda90&o=&hp=1"},
 { src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/495803619.jpg?k=cc8aabd1a406c49ee2c1831b154994d068971379d9e4d91d16f0907f352be28f&o=&hp=1"},
  ];
  
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
        <button className="bookNow">Reserve or Book Now ! </button>
          <h1 className="hotelTitle">Alhambra Hotel</h1>
       <div className="hotelAddress">
       <FontAwesomeIcon icon={faLocationDot} />
<span>Elton St 125 New york</span>
       </div>
       <span className="hotelDistance">
        Excellent location - 500m from center
       </span>
       <span className="hotelPriceHighLight">
        Book a stay over $114 at this property and get a free airport taxi
       </span>
       <div className="hotelImages">
{photos.map(photo=> (
<div className="hotelImgWrapper">
  <img className="hotelImg" src={photo.src} alt="" />
</div>
))};

       </div>
       <div className="hotelDetails">
        <div className="hotelDetailsText">
          <h1 className="hotelTitle"> Experience world-class service at Cheval Three Quays at The Tower of London
 </h1>
            <p className="hotelDesc">
            Located next to the Tower of London, and overlooking the River Thames, Cheval Three Quays offers modern apartments with free Wi-Fi, and an on-site fitness centre. The City of London financial centre is a mere 10-minute stroll away.

Each of the spacious apartments at Cheval Three Quays is designed with clever lightning, shiny surfaces, clean lines and geometric shapes. All feature an open-plan kitchen & living room, a flat-screen TV and an iPod dock. A coffee machine, dishwasher and microwave are also provided. Some of the apartments boast unrivaled views of Tower Bridge and City Hall.

A dedicated team of concierge, housekeeping and maintenance ensure every need is catered for. Facilities include a state-of-the art fitness room.

Tower Hill Underground Station is just a 5-minute walk away and Central London can be reached in just under 20 minutes via Tube. The vibrant area of Brick Lane is only a mile from the apartments and features a market and a variety of live music venues. Thames Clipper at Tower Pier provide transport along the river from Greenwich and the O2 Arena to Putney and Chelsea Harbour.

Couples particularly like the location — they rated it 9.5 for a two-person trip.
            </p>
        </div>
        <div className="hotelsDetailsPrice">
          <h1>Perfect for a 9-night stay!</h1>
          <span>
            Located in the real heart of Krakow, this property has an excellent
           location score of 9.8!
          </span>
          <h2>
            <b>$945</b> (9 nights)
          </h2>
          <button>Reserve or Book Now!</button>
        </div>
       </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel
