import React, { useEffect, useState } from "react";
import "../../style/country/countrylistbanner.style.css";

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



const CountryListBannerComponent = (props) => {
    const [increment, setIncrement] = useState(true)
    const [decrement, setDecrement] = useState(true)


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
            head: "France",
            subhead: "Millions have chosen to move Down Under to further their education and career prospects,.",
        },
        {
            coverPhoto: c5,
            icon: f5,
            head: "Germany",
            subhead: "Study in one of the most beautiful, safest and friendliest countries in the world. Live with warm and welcoming locals who respect other cultures.",
        }
    ])

    useEffect(() => {
        var temp = dataContent
        var temp_data = temp[0]
        console.log(temp_data);
        temp.shift()
        temp.push(temp_data)
        setDataContent(temp)
  
    }, [increment])

    useEffect(() => {

        var temp = dataContent
        var temp_data = temp[5]
        temp.pop()
        var temp1 =  [].concat(temp_data, temp)
        setDataContent(temp1)

    }, [decrement])

    
    const eventRouter = (path, cnt) => {
        console.log(path);
        props.setPathInfo(path)
        props.setSelectedCountry(cnt)
        let inputs = document.getElementById('menu-btn');
        inputs.checked = false;
        return true
    }




    return (

        <div className="animation_listcountrygrid scrollFade">
            <h3 className="howtogettitle item">Our Services at ...</h3>
            <center>
                <h4 style={{ color: "grey" }}>Choose your country and we’re here to make it happen!.</h4>

            </center>
            <br /><br />
            <div className="countrybox item scrollFade">
                <div className="arrowButton">
                    <p onClick={(e) => setDecrement(decrement ? false : true)} style={{ cursor: "pointer" }} ><i class="arrow left"></i></p>
                </div>
                <div className="countrythumbnail">
                    {dataContent.map((data, index) =>
                        <div class="countryCard">
                            <div class="profile-box" >
                                <div class="profile-cover-image"><img src={data.coverPhoto} style={{ width: "100%", height: "160px" }} /></div>
                                <div class="profile-picture"><img src={data.icon} /></div>
                                <div class="profile-content">
                                    <h2 style={{ fontSize: "medium" }}>{data.head}</h2>
                                    <p><small>{data.subhead}</small></p>
                                    <div class="socials">
                                        <a  onClick={(e) => eventRouter("country", data.head)} style={{ textDecorationLine: 'none', color: "blue" }} href="#"><i class="fa fa-leanpub"></i>  Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                </div>

                <div className="arrowButton">
                    <p style={{ cursor: "pointer" }} onClick={(e) => setIncrement(increment ? false : true)}><i class="arrow right"></i></p>
                </div>

            </div>
        </div>
    );
};

export default CountryListBannerComponent;


// src={`../img/${img.code}.jpg`}

{/* 
<div className="countrythumbnail">
<div class="countryCard">
<div class="profile-box">
    <div class="profile-cover-image"><img src="http://randomuser.me/api/portraits/men/84.jpg"  style={{width:"100%", height:"210px"}}/></div>
    <div class="profile-picture"><img src="https://randomuser.me/api/portraits/men/84.jpg" /></div>
    <div class="profile-content">
        <h1>John Doe</h1>
        <p>Designer at Doe's Company,<br />ridiculously skilled.</p>
        <div class="socials">
            <a style={{textDecorationLine:'none', color:"blue"}} href="#"><i class="fa fa-leanpub"></i>  Learn More</a>
        </div>
    </div>
</div>
</div></div> */}


// {contents.COUNTRYBANNERCONTENT.map((data, index) =>
//     <div className="countrythumbnail">
//         <div class="countryCard">
//             <div class="profile-box">
//                 <div class="profile-cover-image"><img src={data.coverPhoto} style={{ width: "100%", height: "150px" }} /></div>
//                 <div class="profile-picture"><img src={data.icon} /></div>
//                 <div class="profile-content">
//                     <h2 style={{ fontSize: "medium" }}>{data.head}</h2>
//                     <p><small>{data.subhead}</small></p>
//                     <div class="socials">
//                         <a style={{ textDecorationLine: 'none', color: "blue" }} href="#"><i class="fa fa-leanpub"></i>  Learn More</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// )}