import React from 'react';
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        className="siImg"
        src="https://cf.bstatic.com/xdata/images/hotel/square600/495802078.webp?k=730677c1514e17f9d2183bb3e8e7e1166b27470248c4cc66703bdd8d33756162&o="
        alt=""
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxi">free airport taxi</span>
        <span className="siSubtiltle">Studio Apartment with Air conditioning </span>
        <span className="siFeatures">Entire studio • 1 bathroom • 21m² 1 full bed</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">123$</span>
          <span className="siTaxOp">Includes taxes and fees</span>
<button className='siCheckButton'>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
