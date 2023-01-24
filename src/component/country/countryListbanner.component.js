import React from "react";
import "../../style/country/countryListbanner.style.css";

const CountryListBannerComponent = () => {
    return (
        <center>
            <section
                class="newsletter"
                style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
            >
                <h1 style={{ color: "white" }}>Beautiful in Its Simplicity. !!!</h1>
                <medium>Our Services at</medium>
                <div
                    className="meetus listbtn">
                    <button className="countrybutton" onClick={(e) => ""}>
                        United Kingdom UK
                    </button>
                    <button className="countrybutton" onClick={(e) => ""}>
                        Canada CA
                    </button>
                    <button className="countrybutton" onClick={(e) => ""}>
                        Germany
                    </button>
                    <button className="countrybutton" onClick={(e) => ""}>
                        Australia AU
                    </button>
                    <button className="countrybutton" onClick={(e) => ""}>
                        NewZeland NZ
                    </button>
                    <button className="countrybutton" onClick={(e) => ""}>
                        ...
                    </button>
                </div>
            </section>
        </center>
    );
};

export default CountryListBannerComponent;
