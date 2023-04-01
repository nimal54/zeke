import React, { useEffect, useState } from "react";
import "../../style/country/countryDetails.style.css";

import c0 from "../../assets/country/banner/aus_cover.jpg";
import f0 from "../../assets/country/banner/au_flag.jpg"
import c1 from "../../assets/country/banner/canada_cover.jpg";
import f1 from "../../assets/country/banner/canada_flag.jpg"
import c2 from "../../assets/country/banner/nz_cover.jpg";
import f2 from "../../assets/country/banner/nz_flag.jpg";
import c3 from "../../assets/country/banner/uk_cover.jpg";
import f3 from "../../assets/country/banner/uk_flag.jpg";
import c4 from "../../assets/country/banner/sw_cover.jpg";
import f4 from "../../assets/country/banner/sw_flag.jpg";
import c5 from "../../assets/country/banner/gn_cover.jpg";
import f5 from "../../assets/country/banner/gn_flag.jpg"



const CountryDetailsComponent = (props) => {


    const [dataContent, setDataContent] = useState([
        {
            coverPhoto: c1,
            icon: f1,
            head: "Canada",
            subhead: "Want a world-class education and an amazing North American study experience but on a lower budget? For value for money choose Canada!",
        }, {
            coverPhoto: c0,
            icon: f0,
            head: "Australia",
            subhead: "Dreaming of living and studying in the United States but overwhelmed by the vast information and choices available out there?",
        },
        {
            coverPhoto: c2,
            icon: f2,
            head: "Newzealand",
            subhead: "Won over by the quality, safety, affordability and friendliness this country offers to all international students and making it your study destination of choice?",
        },
        {
            coverPhoto: c3,
            icon: f3,
            head: "United Kingdom",
            subhead: "Determined to get a quality British education, graduate with a world-recognised qualification and improve your career and future prospects?",
        },
        {
            coverPhoto: c4,
            icon: f4,
            head: "Sweden",
            subhead: "Millions have chosen to move Down Under to further their education and career prospects,.",
        },
        {
            coverPhoto: c5,
            icon: f5,
            head: "Germany",
            subhead: "Study in one of the most beautiful, safest and friendliest countries in the world. Live with warm and welcoming locals who respect other cultures.",
        }
    ])


    return (

        <div className="">
            <br /><br />
            <div class="countryDetails_container">
                <h4>Country details</h4>
                <div class="row rowdisplay">
                    <div class="column column-block paddingb4 padding5">
                        <div class="countryDetails_card">
                            <br />
                            <img src={c1} style={{ borderRadius: "10px", width: "250px" }} />
                            <h2>Canada</h2>
                            <div class="countryDetails_content">
                                {/* <span class="countryDetails_date">JUL 20 2017</span> */}
                                <medium><p style={{ textAlign: "justify" }}>We are a group of experienced student counsellors who are eager to help you reach your dreamland easily and happily. We give you proper assistance and guidance in choosing the right course and will make your study abroad dreams true. Keeping the trust alive is our philosophy!We are a group of experienced student counsellors who are eager to help you reach your dreamland easily and happily. We give you proper assistance and guidance in choosing the right course and will make your study abroad dreams true. Keeping the trust alive is our philosophy!</p></medium>
                                <br />
                                    <div class="social-menu">
                                        <ul>
                                            <li><a target="blank"><i class="fab fa-facebook-f"></i></a></li><span class="countryDetails_read-more">Enquiry</span>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div class="column column-block paddingb4 padding5">
                        <div class="countryDetails_card">
                            <br />
                            <img src={c0} style={{ borderRadius: "10px", width: "250px" }} />
                            <h2>Australia</h2>
                            <div class="countryDetails_content">
                                {/* <span class="countryDetails_date">JUL 20 2017</span> */}
                                <medium><p style={{ textAlign: "justify" }}>We are a group of experienced student counsellors who are eager to help you reach your dreamland easily and happily. We give you proper assistance and guidance in choosing the right course and will make your study abroad dreams true. Keeping the trust alive is our philosophy!We are a group of experienced student counsellors who are eager to help you reach your dreamland easily and happily. We give you proper assistance and guidance in choosing the right course and will make your study abroad dreams true. Keeping the trust alive is our philosophy!</p></medium>
                                <br />
                                <div class="social-menu">
                                        <ul>
                                            <li><a target="blank"><i class="fab fa-facebook-f"></i></a></li><span class="countryDetails_read-more">Enquiry</span>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div class="column column-block paddingb4 padding5">
                        <div class="countryDetails_card">
                            <br />
                            <img src={c2} style={{ borderRadius: "10px", width: "250px" }} />
                            <h2>Newzealand</h2>
                            <div class="countryDetails_content">
                                {/* <span class="countryDetails_date">JUL 20 2017</span> */}
                                <medium><p style={{ textAlign: "justify" }}>We are a group of experienced student counsellors who are eager to help you reach your dreamland easily and happily. We give you proper assistance and guidance in choosing the right course and will make your study abroad dreams true. Keeping the trust alive is our philosophy!We are a group of experienced student counsellors who are eager to help you reach your dreamland easily and happily. We give you proper assistance and guidance in choosing the right course and will make your study abroad dreams true. Keeping the trust alive is our philosophy!</p></medium>
                                <br />
                                <div class="social-menu">
                                        <ul>
                                            <li><a target="blank"><i class="fab fa-facebook-f"></i></a></li><span class="countryDetails_read-more">Enquiry</span>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>


                    <div class="column column-block paddingb4 padding5">
                        <div class="countryDetails_card">
                            <br />
                            <img src={c5} style={{ borderRadius: "10px", width: "250px" }} />
                            <h2>Germany</h2>
                            <div class="countryDetails_content">
                                {/* <span class="countryDetails_date">JUL 20 2017</span> */}
                                <medium><p style={{ textAlign: "justify" }}>We are a group of experienced student counsellors who are eager to help you reach your dreamland easily and happily. We give you proper assistance and guidance in choosing the right course and will make your study abroad dreams true. Keeping the trust alive is our philosophy!We are a group of experienced student counsellors who are eager to help you reach your dreamland easily and happily. We give you proper assistance and guidance in choosing the right course and will make your study abroad dreams true. Keeping the trust alive is our philosophy!</p></medium>
                                <br />
                                <div class="social-menu">
                                        <ul>
                                            <li><a target="blank"><i class="fab fa-facebook-f"></i></a></li><span class="countryDetails_read-more">Enquiry</span>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetailsComponent;

