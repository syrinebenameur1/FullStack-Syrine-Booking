import { faBed, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { DateRange } from "react-date-range"
import { useState } from "react"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {format} from "date-fns"
import {useNavigate} from "react-router-dom";

export default function Header({type}) {

  const [destination, setDestination] = useState("");
const [openDate, setOpenDate] = useState(false);
const [date,setDate]=useState([
    {
        startDate: new Date(),
        endDate:new Date(),
        key:'selection'
    }
]);


const [openOptions, setOpenOptions]=useState(false);
const [options,setOptions] = useState(
  {
    adult:1,
    children:0,
    room:1,
  }
)

const navigate = useNavigate()

const handleOption = (name, operation) => {
  setOptions((prev) => {
    return {
      ...prev,
      [name]: operation === "d" ? Math.max(prev[name] - 1, 0) : prev[name] + 1,
    };
  });
};

const handleSearch = () => {
navigate("/hotels",{state:{destination, date,options}});
};




  return (
    <div className="header">
        <div  className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
      <div className="headerList">
        <div className="headerListItem active">
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faPlane} />
        <span>Flight</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faCar} />
        <span>Car Rentals</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport taxis</span>
        </div>
      </div>
      {type !== "list" &&
        <>
         <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
   <p className="headerDescription">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, praesentium amet dolorum rem aperiam possimus.
   </p>
   <button className="headerBtn">Sign in / Register</button>
   <div className="headerSearch">
    <div className="headerSearchItem">
        <FontAwesomeIcon icon={faBed} className="headerIcon"/>
        <input type="text" placeholder="Where are you going?" className="headerSearchInput" 
        onChange={e=>setDestination(e.target.value)}
        />
    </div>

    <div className="headerSearchItem">
        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
<span onClick={()=> setOpenDate(!openDate)} className="headerSearchText">
    {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}` }
    </span> 

{openDate && <DateRange editableDateInputs={true}
onChange={item=>setDate([item.selection])}
moveRangeOnFirstSelection={false}
ranges={date}
className="date"
/>}



   </div>

    <div className="headerSearchItem">
        <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
        <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult}adult . ${options.children}children . ${options.room}room`} </span> 
    {openOptions && <div className="options">
      <div className="optionsItem">
        <span className="optionsText">Adult</span>
        <div className="optionCounter">
        <button
        className="optionCounterButton" onClick={()=> handleOption("adult","d")} >-</button>
        <span className="optionCounterNumber">{options.adult}</span>
        <button
        className="optionCounterButton"onClick={()=> handleOption("adult","i")}>+</button>
        </div>
      </div>

      <div className="optionsItem">
        <span className="optionsText">Children</span>
        <div className="optionCounter">
        <button className="optionCounterButton"onClick={()=> handleOption("children","d")}>-</button>
        <span className="optionCounterNumber">{options.children}</span>
        <button className="optionCounterButton"onClick={()=> handleOption("children","i")}>+</button>
      </div>
      </div>

      <div className="optionsItem">
        <span className="optionsText">Room</span>
        <div className="optionCounter">
        <button className="optionCounterButton"onClick={()=> handleOption("room","d")}>-</button>
        <span className="optionCounterNumber">{options.room}</span>
        <button className="optionCounterButton"onClick={()=> handleOption("room","i")}>+</button>
      </div>
      </div>
    </div>}
    </div>
    <div className="headerSearchItem">
  <button className="headerBtn" onClick={handleSearch}>Search</button>
  </div>
   </div> </>}
    </div>
    </div>
  )
}
