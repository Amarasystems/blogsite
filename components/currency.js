import { Media, Image } from "react-bootstrap";
import React, {useState} from "react";

export default () => {
    const [sicon, setSicon] = useState("usa.png")
    const weatherView = async () => {
        var url = "https://monxansh.appspot.com/xansh.json?currency=USD|EUR|JPY|GBP|RUB|CNY|KRW";
        var response = await fetch(url);
        var data = await response.json();
        const rate = document.getElementsByClassName("currency-rate");
        rate[0].innerHTML = data[0].rate_float.toFixed(0);
        // console.log(data);
        // location[0].innerHTML = data.name;

        // if(data.weather[0].icon === "01d" || data.weather[0].icon === '01n'){
        //     setSicon("clear.png");
        // }
        // else if(data.weather[0].icon === "02d" || data.weather[0].icon === '02n'){
        //     setSicon("cloud.png");
        // }
        // else if(data.weather[0].icon === "03d" || data.weather[0].icon === '03n'){
        //     setSicon("drizzle.png");
        // }
        // else if(data.weather[0].icon === "04d" || data.weather[0].icon === '04n'){
        //     setSicon("drizzle.png");
        // }
        // else if(data.weather[0].icon === "09d" || data.weather[0].icon === '09n'){
        //     setSicon("rain.png");
        // }
        // else if(data.weather[0].icon === "10d" || data.weather[0].icon === '10n'){
        //     setSicon("rain.png");
        // }
        // else if(data.weather[0].icon === "13d" || data.weather[0].icon === '13n'){
        //     setSicon("snow.png");
        // }  
        // else{
        //     setSicon("clear.png");
        // }
    }

///////////weather render///
   weatherView();
    return (
        <div className="currency-container" >
                <div >
                    <Media>
                        <Image
                            width={36}
                            height={26}
                            src={sicon}
                            className="currency-icon"
                        />
                        <span className="currency-rate"></span>
                        <div className="vl"></div>
                        <span className="tugrik-symbol">₮</span>
                        {/* <div className="weather-location">Улаанбаатар</div>  */}
                    </Media>
                    
                </div>
        </div>
        
    );
};