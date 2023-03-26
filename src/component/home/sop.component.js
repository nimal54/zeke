import React, { useState } from "react";

import "../../style/home/sop.style.css";

const SOPComponent = () => {

  const [data, setData] = useState({ country: "", course: "", intake: "", errorMsg: "" })

  const sendEmail = () => {
    if (validation()) {
      var receiverEmail = ""
      var ccReceiverEmail = ""
      var bccReceiverEmail = ""
      var emailSubject = "Enqiury"
      var emailBody = "Hello Zeke, I like to know more about you. \nMy inputs are :\n\ncountry : " + data.country + "\ncourse : " + data.course + "\nintake : " + data.intake + "\n please reach out me asap!!! "
      var emailrequest = "https://mail.google.com/mail/?view=cm&fs=1&to=" + receiverEmail + "&cc=" + ccReceiverEmail + "&su=" + emailSubject + "&body=" + emailBody
      window.open(emailrequest, '_blank');
    }
  }

  const sendToWhatsapp = () => {
    if (validation()) {
      var sendTo = "+918590483366"
      var messageBody = "Hello Zeke, I like to know more about you. \nMy inputs are :\n\ncountry : " + data.country + "\ncourse : " + data.course + "\nintake : " + data.intake + "\n please reach out me asap!!! "
      var sendRequest = "https://wa.me/" + sendTo + "/?text=" + messageBody
      window.open(sendRequest, '_blank')
    }
  }

  const validation = () => {
    if (data.country === "" && data.course === "" && data.intake === "") {
      setData({ country: data.country, course: data.country, intake: data.intake, errorMsg: "Please enter valid inputs..." })
      return false;
    } else if (data.country === "") {
      setData({ country: data.country, course: data.country, intake: data.intake, errorMsg: "Please enter your country ..." })
      return false;
    } else if (data.course === "") {
      setData({ country: data.country, course: data.country, intake: data.intake, errorMsg: "Please enter your course ..." })
      return false;
    } else if (data.intake === "") {
      setData({ country: data.country, course: data.country, intake: data.intake, errorMsg: "Please enter your intake ..." })
      return false;
    } else if (data.country != "" || data.course != "" || data.intake != "") {
      setData({ country: data.country, course: data.country, intake: data.intake, errorMsg: "" })
      return true;
    }
  }

  const saveInputDataToData = (feild, inputValue) => {
    var temp = {};
    temp = {
      country: feild === "country" ? inputValue : data.country,
      course: feild === "course" ? inputValue : data.course,
      intake: feild === "intake" ? inputValue : data.intake,
      errorMsg: feild === "errorMsg" ? inputValue : data.errorMsg
    }
    setData(temp)
  }


  return (
    <div>
      <div style={{paddingInline:"3%"}}>
      <h2 className="headingh2 item scrollFade">Are you stuck at SOP ?</h2>
      <p className="taglinep item scrollFade">
        We help you write SOPs that never get rejected. If you want your SOPs to stand out, we’re there!
      </p>

      {/* <iframe src="https://docs.google.com/viewer?url=http://www.africau.edu/images/default/sample.pdf&embedded=true" frameborder="0" height="500px" width="40%"></iframe> */}
      </div>
      <div className="screen item scrollFade">
        <div className="innerscreen item scrollFade">
          {/* <h2>Are you stuck at SOP ?</h2>
        <p>
          We help you write SOPs that never get rejected. If you want your SOPs to stand out, we’re there!
        </p> */}
          <div class="login item scrollFade">
            <input  value={data.country} onChange={(e) => saveInputDataToData("country", e.target.value)} type="text" placeholder="Country"></input>
            <input value={data.course} onChange={(e) => saveInputDataToData("course", e.target.value)} type="text" placeholder="Course"></input>
            <input value={data.intake} onChange={(e) => saveInputDataToData("intake", e.target.value)} type="text" placeholder="Intake"></input>
          </div>
          {data.errorMsg === "" ? "" : <div><p className="bounsing_errormsg" style={{ color: 'red', fontSize: 'small' }}>{data.errorMsg}</p></div>}
          <div className="screen_meetus item scrollFade">
            <div className="meetus item scrollFade">
              <button  onClick={(e) => sendEmail()}  ><span><i class="fa fa-envelope"></i>&nbsp;&nbsp;</span> Drop a mail</button>
              <button onClick={(e) => sendToWhatsapp()}><span><i class="fab fa-whatsapp"></i>&nbsp;&nbsp;</span>Just Whatsapp</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SOPComponent;