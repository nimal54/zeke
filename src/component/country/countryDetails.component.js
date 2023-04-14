import React, { useEffect, useState } from "react";
import "../../style/country/countryDetails.style.css";

import * as contents from "../../utils/content.collections";

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

    var socialmediaurls = contents.SOCIALMEDIAURL;

    const getMediaUrl = (media) => {
      var filteredItems = socialmediaurls.find((item) => item.media === media);
      return filteredItems.url;
    };
  
    const redirectToSocialMedia = (media) => {
      window.open(getMediaUrl(media), '_blank');
    }
    const eventRouter = (path) => {
        console.log(path);
        props.setPathInfo(path)
        let inputs = document.getElementById('menu-btn');
        inputs.checked = false;
        return true
    }


    return (

        <div className="countryBody paddingb4">
            <center><h2>{props.selectedCountry}</h2></center>
            <section class="about section bd-container" id="about">
                {props.selectedCountry.includes("Canada") ?
                    <div>
                        <div class="about__container  bd-grid">
                            <img src={c1} alt="" class="about__img" />
                            <div class="about__data">
                                <h2 class="section-title about__initial"></h2>
                                <p class="about__description">
                                    Canada, the land of maple leaves, scenic landscapes, and incredible opportunities! Canada is a country known for its natural beauty, diverse culture, and welcoming people. It's no wonder that Canada has consistently ranked among the top study-abroad destinations in the world!
                                </p>
                                <div style={{ display: 'flex', justifyContent: "space-evenly" }}><a href="#" onClick={(e) => eventRouter("contact")} target="blank" class="cs_button">Get in touch</a><a href="#" onClick={(e) => redirectToSocialMedia("whatsapp")} target="blank" class="cs_button">Just Whatsapp</a></div>
                            </div>
                        </div>
                        <p class="about__description">
                            <br></br><br></br>Studying in Canada is an experience like no other. From the vibrant cities to the breathtaking wilderness, Canada offers a unique blend of modernity and nature that is sure to captivate any student. With world-class universities and colleges, Canada provides a top-notch education system that prepares students for a successful future.<br /><br />
                            There are many reasons why Canada is a popular destination for international students to pursue their education. Here are some of the top reasons to study in Canada:<br></br>
                            <ol>
                                1. High-quality education: Canada is known for its excellent education system, with world-renowned universities and colleges that offer top-notch programs in various fields of study.
                            </ol>
                            <ol>
                                2. Cultural diversity: Canada is a multicultural country, welcoming people from all over the world. Studying in Canada means being exposed to diverse cultures and perspectives, which can broaden your horizons and enhance your learning experience.
                            </ol>
                            <ol>
                                3. Safe and peaceful country: Canada is one of the safest countries in the world, with low crime rates and a peaceful society. This makes it an ideal place for students to live and study.
                            </ol>
                            <ol>
                                4. Affordable education: Compared to other popular study destinations like the United States and the United Kingdom, Canada offers relatively affordable tuition fees and living expenses.
                            </ol>
                            <ol>
                                5. Work opportunities: International students in Canada are allowed to work part-time during their studies and full-time during breaks, which can help them gain work experience and support themselves financially.
                            </ol>
                            <ol>
                                6. Post-graduation options: Canada offers various post-graduation work permits and immigration options for international students who wish to stay in the country after completing their studies.
                            </ol>
                            <ol>
                                7. Natural beauty: Canada is known for its stunning natural beauty, with breathtaking landscapes and national parks. Studying in Canada can provide opportunities for outdoor activities and adventures.
                            </ol>
                            <p>
                                So what are you waiting for? Come and discover all that Canada has to offer! With its natural beauty, diverse culture, and top-notch education system, Canada is the perfect destination for students who want to expand their horizons and pursue their dreams. Contact us to get the best study & career guidance.
                            </p>
                        </p>
                    </div> : ''}

                {props.selectedCountry.includes("United Kingdom") ?
                    <div>
                        <div class="about__container  bd-grid">
                            <img src={c3} alt="" class="about__img" />
                            <div class="about__data">
                                <h2 class="section-title about__initial"></h2>
                                <p class="about__description">
                                    Welcome to the land of Shakespeare, the Beatles, and afternoon tea! The United Kingdom (UK) is a fascinating and diverse country that offers international students an exceptional educational experience. From its world-renowned universities to its vibrant cultural scene, the UK is an ideal destination for students who want to broaden their horizons and experience life in one of the most dynamic and cosmopolitan countries in the world
                                </p>
                                <div style={{ display: 'flex', justifyContent: "space-evenly" }}><a href="#" onClick={(e) => eventRouter("contact")} target="blank" class="cs_button">Get in touch</a><a href="#" onClick={(e) => redirectToSocialMedia("whatsapp")} target="blank" class="cs_button">Just Whatsapp</a></div>
                            </div>
                        </div>
                        <p class="about__description">
                            <br></br><br></br>There are many compelling reasons to consider studying in the United Kingdom. Here are some of the top reasons:<br></br>
                            <ol>
                                1. High-quality education: The UK has a reputation for providing high-quality education, with rigorous academic standards and a focus on research and innovation. Students who study in the UK can expect to receive an excellent education that will prepare them for success in their chosen fields.
                            </ol>
                            <ol>
                                2. Diverse student population: The UK is a melting pot of cultures and nationalities, with students from all over the world coming to study here. This creates a diverse and dynamic learning environment that exposes students to different perspectives and ways of thinking.
                            </ol>
                            <ol>
                                3. Accessible education: The UK is committed to providing accessible education to all students, regardless of their background or financial circumstances. There are many scholarships and financial aid programs available to help students cover the cost of tuition and living expenses.
                            </ol>
                            <ol>
                                4. Excellent support services: UK universities offer a range of support services to help students succeed, including academic advising, career counseling, and health and wellness services. These services are designed to ensure that students have the resources they need to thrive both academically and personally.
                            </ol>
                            <ol>
                                5. Career opportunities: The UK is a hub of industry and innovation, with many opportunities for students to gain practical experience and build their professional networks. Graduates of UK universities are highly sought after by employers around the world, making it a great place to launch your career.
                            </ol>
                            <ol>
                                But studying in the UK is not just about academics. The country is also renowned for its vibrant cultural scene, from world-class museums and galleries to music festivals and theatre productions. You can explore the rich cultural heritage of the UK by visiting iconic landmarks such as the Tower of London, Stonehenge, or the Scottish Highlands
                            </ol>
                            <p>
                                So if you're looking for an unforgettable study abroad experience, consider the UK. With its world-class universities, rich cultural heritage, and welcoming environment, it's the perfect place to broaden your horizons, develop new skills, and create memories that will last a lifetime. Contact our study abroad consultancy today to learn more about how you can apply to study in the UK.
                            </p>
                        </p>
                    </div> : ''}

                {props.selectedCountry.includes("Australia") ?
                    <div>
                        <div class="about__container  bd-grid">
                            <img src={c0} alt="" class="about__img" />
                            <div class="about__data">
                                <h2 class="section-title about__initial"></h2>
                                <p class="about__description">
                                    Welcome to the land down under - Australia, where adventure and education come together in perfect harmony. With its warm climate, breathtaking landscapes, and diverse culture, Australia is a destination that appeals to students from all over the world.
                                </p>
                                <div style={{ display: 'flex', justifyContent: "space-evenly" }}><a href="#" onClick={(e) => eventRouter("contact")} target="blank" class="cs_button">Get in touch</a><a href="#" onClick={(e) => redirectToSocialMedia("whatsapp")} target="blank" class="cs_button">Just Whatsapp</a></div>
                            </div>
                        </div>
                        <p class="about__description">
                            <br></br><br></br>From the vibrant cities of Sydney and Melbourne to the laid-back beaches of the Gold Coast and Byron Bay, Australia offers a unique blend of urban and natural environments that create a perfect backdrop for students to pursue their academic dreams.<br></br><br></br>
                            Australia's world-class universities and colleges offer a wide range of programs, including business, engineering, arts, and sciences, all taught by expert faculty in state-of-the-art facilities. Studying in Australia provides students with a high-quality education that is recognized globally, ensuring that they are well-prepared to meet the challenges of the modern workplace.<br></br><br></br>
                            There are many reasons why studying in Australia can be a great choice. Here are some of the top reasons:
                            <ol>
                                1. High-Quality Education: Australian universities are known for their high standards of education and research, offering a wide range of programs that are recognized globally.
                            </ol>
                            <ol>
                                2. Multicultural Society: Australia is a diverse and welcoming society, with people from all over the world living and studying there. This makes for a rich and vibrant cultural experience.
                            </ol>
                            <ol>
                                3. Affordable Living Costs: Despite being a developed country, Australia has a relatively low cost of living, making it an affordable option for international students.
                            </ol>
                            <ol>
                                4. Beautiful Environment: Australia is famous for its stunning natural landscapes, from beaches to rainforests to the outback. It’s a great place to explore and enjoy the outdoors.
                            </ol>
                            <ol>
                                5. Job Opportunities: Australia has a strong economy and many industries that are in need of skilled workers. This means that international students may have opportunities to work while studying or after graduation.
                            </ol>
                            <ol>
                                6. English Language: English is the primary language spoken in Australia, making it an ideal place to improve your English skills.
                            </ol>
                            <ol>
                                7. Support for International Students: Australian universities offer a range of support services for international students, including orientation programs, accommodation assistance, and career advice.
                            </ol>
                            <ol>
                                8. Post-Study Work Visa: Australia offers a post-study work visa option for international students, which allows them to stay in the country and work for up to four years after graduation.
                            </ol>
                            <p>
                                With a safe and welcoming environment, excellent education system, and endless opportunities for adventure and personal growth, Australia is the perfect destination for students seeking a transformative study abroad experience. So why not make your academic dreams a reality and join the thousands of students who have already fallen in love with this incredible country?
                                Contact our study abroad consultancy today to learn more about how you can apply to study in Australia.
                            </p>
                        </p>
                    </div> : ''}

                {props.selectedCountry.includes("Newzealand") ?
                    <div>
                        <div class="about__container  bd-grid">
                            <img src={c2} alt="" class="about__img" />
                            <div class="about__data">
                                <h2 class="section-title about__initial"></h2>
                                <p class="about__description">
                                    New Zealand, the land of the long white cloud, is a country that never ceases to amaze. With breathtaking landscapes, friendly locals, and world-class universities, New Zealand has emerged as a top study abroad destination for students from around the globe.
                                </p>
                                <div style={{ display: 'flex', justifyContent: "space-evenly" }}><a href="#" onClick={(e) => eventRouter("contact")} target="blank" class="cs_button">Get in touch</a><a href="#" onClick={(e) => redirectToSocialMedia("whatsapp")} target="blank" class="cs_button">Just Whatsapp</a></div>
                            </div>
                        </div>
                        <p class="about__description">
                            <br></br><br></br>Imagine studying in a country where snow-capped mountains, pristine beaches, and dense forests are just a short drive away from your university campus. New Zealand offers a unique blend of adventure and academic excellence, providing students with a once-in-a-lifetime experience that will shape their future in countless ways.
                            <br /><br />Why should you choose New Zealand for study abroad programme?
                            <ol>
                                1. High-Quality Education: New Zealand has an excellent education system that is internationally recognized for its quality and high standards. The universities and colleges in New Zealand are known for their research-based teaching and practical learning methods.
                            </ol>
                            <ol>
                                2. Safe and Peaceful Environment: New Zealand is considered one of the safest and most peaceful countries in the world. It has a low crime rate, political stability, and a welcoming attitude towards international students.
                            </ol>
                            <ol>
                                3. Affordable Education: The cost of education in New Zealand is relatively affordable compared to other countries such as the US and the UK. International students can also work part-time to help cover their expenses while studying.
                            </ol>
                            <ol>
                                4. Quality of Life: New Zealand is consistently ranked among the top countries in the world for its quality of life. It has a high standard of living, excellent healthcare, and a strong social welfare system.
                            </ol>
                            <ol>
                                5. Pathway to Residency: New Zealand offers a pathway to residency for international students through its post-study work visa program. This program allows graduates to work in New Zealand for up to three years after completing their studies, providing them with valuable work experience and the opportunity to apply for residency.
                            </ol>
                            <ol>
                                6. English Language Proficiency: English is the primary language of instruction in New Zealand, making it an ideal destination for international students who want to improve their English language skills.
                            </ol>
                            <ol>
                                7. Supportive Education System: The education system in New Zealand is designed to provide students with a supportive and nurturing environment. International students can access a range of support services, including academic support, counseling, and accommodation assistance.
                            </ol>
                            <ol>
                                8. Innovative and Entrepreneurial Culture: New Zealand has a vibrant entrepreneurial culture and is home to many innovative start-ups and successful companies. International students can learn from and be inspired by the country's entrepreneurial spirit and innovative mindset.
                            </ol>
                            <p>
                                But New Zealand isn't just about academics. The country is home to a vibrant culture that celebrates diversity and inclusivity. From the indigenous Maori culture to the vibrant food scene, New Zealand has something for everyone. Students will have the opportunity to meet people from all walks of life and explore a country that's both welcoming and fascinating.
                                <br /><br />If you're looking for an unforgettable study abroad experience, New Zealand should be at the top of your list. With stunning natural beauty, a welcoming culture, and top-notch universities, this country has everything you need to make the most of your academic journey. Contact the best education consultancy in Kerala to know about the admission procedures.
                            </p>
                        </p>
                    </div> : ''}

                {props.selectedCountry.includes("Germany") ?
                    <div>
                        <div class="about__container  bd-grid">
                            <img src={c5} alt="" class="about__img" />
                            <div class="about__data">
                                <h2 class="section-title about__initial"></h2>
                                <p class="about__description">
                                    Welcome to Germany, a country that seamlessly blends rich history with modern innovation. From picturesque castles to bustling cities, Germany has something to offer for everyone. If you're a student looking for an exceptional study abroad experience, look no further than Germany.
                                </p>
                                <div style={{ display: 'flex', justifyContent: "space-evenly" }}><a href="#" onClick={(e) => eventRouter("contact")} target="blank" class="cs_button">Get in touch</a><a href="#" onClick={(e) => redirectToSocialMedia("whatsapp")} target="blank" class="cs_button">Just Whatsapp</a></div>
                            </div>
                        </div>
                        <p class="about__description">
                            <br></br><br></br>Home to some of the world's top-ranked universities, Germany is a leading destination for international students seeking a top-quality education. You'll have the opportunity to learn from renowned professors and industry experts, gaining invaluable knowledge and skills that will set you apart in today's competitive job market.
                            <br /><br />Germany is also a vibrant and dynamic country, offering a diverse range of cultural experiences. Whether you're exploring the vibrant art scene in Berlin, sampling the delicious cuisine in Munich, or hiking through the stunning countryside, you'll be immersed in a rich and diverse culture. Germany is a country that values and celebrates diversity, making it an ideal destination for students from all backgrounds.
                            <br /><br />Top Reasons to Study in Germany:
                            <br /><br />
                            High-Quality Education: Germany is famous for its excellent education system, with universities ranking highly in international education rankings.
                            <br /><br />
                            Diverse Program Offerings: Germany offers a wide range of academic programs, including many specialized courses that are not available elsewhere.<br /><br />
                            Affordability: Tuition fees in Germany are significantly lower compared to other popular study destinations, making it a more affordable option for international students.<br /><br />
                            Career Opportunities: Germany is known for its strong economy, with many multinational companies based there, providing excellent career opportunities for graduates.<br /><br />
                            Cultural Richness: Germany has a rich cultural history and a thriving contemporary culture, offering international students an opportunity to explore the country's art, music, and traditions.<br /><br />
                            Overall, Germany is a fantastic choice for students seeking a truly exceptional study abroad experience. With top-notch academics, rich culture, and practical benefits, you'll come away from your time in Germany with a valuable education and unforgettable memories. Let us help you make your study abroad dreams a reality in Germany. The best study abroad consultancy will guide you on the right path.
                        </p>
                    </div> : ''}

                {props.selectedCountry.includes("France") ?
                    <div>
                        <div class="about__container  bd-grid">
                            <img src={c4} alt="" class="about__img" />
                            <div class="about__data">
                                <h2 class="section-title about__initial"></h2>
                                <p class="about__description">
                                    Welcome to France, the land of romance, exquisite cuisine, and a rich cultural heritage! As a study abroad destination, France offers a unique blend of academic excellence, cutting-edge research, and an unparalleled quality of life.
                                </p>
                                <div style={{ display: 'flex', justifyContent: "space-evenly" }}><a href="#" onClick={(e) => eventRouter("contact")} target="blank" class="cs_button">Get in touch</a><a href="#" onClick={(e) => redirectToSocialMedia("whatsapp")} target="blank" class="cs_button">Just Whatsapp</a></div>
                            </div>
                        </div>
                        <p class="about__description">

                            <br></br>
                            France is home to some of the world's oldest and most prestigious universities, including Sorbonne University, École Normale Supérieure, and Université Paris-Saclay. With a strong focus on research, these institutions offer a wide range of programs in fields such as science, engineering, humanities, and social sciences. Students who choose to study in France will have access to world-class facilities, expert faculty, and a vibrant academic community that encourages intellectual curiosity and creativity.<br></br><br></br><br></br>

                            Beyond the classroom, France has much to offer to students who want to experience life to the fullest. From the glamour of Paris to the charming countryside towns, the country is full of beautiful landscapes, rich history, and vibrant culture. You can explore the museums, galleries, and monuments that celebrate France's contributions to art, literature, and science. Or you can indulge in the country's culinary delights, from fresh croissants to savory cheese and wine.
                            <br></br><br></br>
                            There are numerous reasons why studying in France is a great option for students from all over the world. Here are some of the top reasons:
                            <br></br><br></br>
                            Quality of Education: France is known for its excellent higher education system, which is ranked among the best in the world. The country has numerous prestigious universities and schools that offer a wide range of programs in various fields of study.
                            <br></br><br></br>
                            Cultural Diversity: France is a culturally diverse country with a rich history and a vibrant contemporary culture. Studying in France offers students the opportunity to immerse themselves in this cultural diversity and learn from a variety of perspectives.
                            <br></br><br></br>
                            Language Learning: French is one of the most widely spoken languages in the world, and studying in France provides an excellent opportunity to learn or improve your French language skills. Many programs are taught in both French and English, allowing students to improve their language skills while studying their chosen subject.
                            <br></br><br></br>
                            Career Opportunities: France has a strong economy and is home to many multinational companies, offering excellent career opportunities for graduates. Many French universities have strong links with industry, providing students with practical experience and connections that can help with future employment.
                            <br></br><br></br>
                            Lifestyle and Location: France is known for its beautiful cities, stunning landscapes, and world-renowned cuisine. Studying in France provides the opportunity to experience all of these things while pursuing your academic goals. In addition, France is located in the heart of Europe, making it easy to travel and explore other European countries.
                            <br></br><br></br>
                            Affordable Education: While some universities in France can be expensive, the cost of education in France is generally more affordable than in many other countries, particularly for EU citizens.
                            <br></br><br></br>
                            In short, France is the perfect destination for students who want to combine academic excellence with a rich cultural experience. With its world-class universities, breathtaking landscapes, and vibrant cultural scene, it's no wonder why so many students dream of studying in France. So why not make your dreams a reality and start your journey to France today? The best educational consultancy is here to help.<br></br>
                        </p>
                    </div> : ''}
                    <div style={{ display: 'flex', justifyContent: "space-evenly" }}><a href="#" target="blank" onClick={(e) => eventRouter("home")}class="cs_button">Back To Home</a><a href="#" onClick={(e) => eventRouter("contact")} target="blank" class="cs_button">Get In Touch</a></div>
            </section>

        </div>
    );
};

export default CountryDetailsComponent;

