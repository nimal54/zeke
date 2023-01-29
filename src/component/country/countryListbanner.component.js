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



const CountryListBannerComponent = () => {
    const [increment, setIncrement] = useState(true)
    const [decrement, setDecrement] = useState(true)


    const [dataContent, setDataContent] = useState([
        {
            coverPhoto: c1,
            icon: f1,
            head: "Canada",
            subhead: "1 Immigration friendly country, job focused courses & post study work permit",
        }, {
            coverPhoto: c0,
            icon: f0,
            head: "Australia",
            subhead: "2 Immigration friendly country, job focused courses & post study work permit",
        },
        {
            coverPhoto: c2,
            icon: f2,
            head: "Newzealand",
            subhead: "3 Immigration friendly country, job focused courses & post study work permit",
        },
        {
            coverPhoto: c3,
            icon: f3,
            head: "United Kingdom",
            subhead: "4 Immigration friendly country, job focused courses & post study work permit",
        },
        {
            coverPhoto: c4,
            icon: f4,
            head: "Sweden",
            subhead: "5 Immigration friendly country, job focused courses & post study work permit",
        },
        {
            coverPhoto: c5,
            icon: f5,
            head: "Germany",
            subhead: "6 Immigration friendly country, job focused courses & post study work permit",
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




    return (

        <div>
            <h3 className="howtogettitle ">Our Services at ...</h3>
            <center>
                <h4 style={{ color: "grey" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>

            </center>
            <br /><br />
            <div className="countrybox">
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
                                        <a style={{ textDecorationLine: 'none', color: "blue" }} href="#"><i class="fa fa-leanpub"></i>  Learn More</a>
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