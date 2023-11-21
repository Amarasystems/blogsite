import { Media, Image } from "react-bootstrap";
import React, {useState} from "react";
import { Card } from "react-bootstrap";

export default () => {
    let api_key = "69e9db9dd9829aec770be5644ac0c026";
    const [wicon, setWicon] = useState('clear.png')
    const weatherView = async () => {
        var url = "https://api.openweathermap.org/data/2.5/weather?q=ulaanbaatar&units=Metric&appid=69e9db9dd9829aec770be5644ac0c026";
        var response = await fetch(url);
        var data = await response.json();
        const location = document.getElementsByClassName("weather-location")
        const temprature = document.getElementsByClassName("weather-temp");
        temprature[0].innerHTML = Math.floor(data.main.temp)+"°C";
        // location[0].innerHTML = data.name;

        if(data.weather[0].icon === "01d"){
            setWicon("clear.png");
        }
        else if(data.weather[0].icon === '01n'){
            setWicon("clear-night.png");
        }
        else if(data.weather[0].icon === "02d"){
            setWicon("cloud.png");
        }
        else if(data.weather[0].icon === '02n'){
            setWicon("cloud-night.png");
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon === '03n'){
            setWicon("cloudy.png");
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === '04n'){
            setWicon("broken.png");
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === '09n'){
            setWicon("showerrain.png");
        }
        else if(data.weather[0].icon === "10d"){
            setWicon("rain.png");
        }
        else if(data.weather[0].icon === '10n'){
            setWicon("rain-night.png");
        }
        else if(data.weather[0].icon === "11d" || data.weather[0].icon === '11n'){
            setWicon("thunder.png");
        }
        else if(data.weather[0].icon === "13d" || data.weather[0].icon === '13n'){
            setWicon("snow.png");
        }  
        else if(data.weather[0].icon === "50d" || data.weather[0].icon === '50n'){
            setWicon("humidity.png");
        }  
        else{
            setWicon("clear.png");
        }
    }

//////Date and time//////////
const dateView = () => {
var date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let weekday = date.getDay();
//////
let currentDate = `${month}.${day}`;
return(
    <span>{currentDate}</span>
)
}
const weekView = () => {
    const date = new Date();
    var weekday = date.getDay();
    if(weekday === 1){
        weekday = "Даваа гариг"
    }
    else if(weekday === 2){
        weekday = "Мягмар гариг"
    }
    else if(weekday === 3){
        weekday = "Лхагва гариг"
    }
    else if(weekday === 4){
        weekday = "Пүрэв гариг"
    }
    else if(weekday === 5){
        weekday = "Баасан гариг"
    }
    else if(weekday === 6){
        weekday = "Бямба гариг"
    }
    else if(weekday === 0){
        weekday = "Ням гариг"
    }
    return (
        <span>{weekday}</span>
    )
}

///////////weather render///
weatherView();

    return (
        <div className="weather-container">
                <div>
                    <Media>
                        <Image
                            width={45}
                            height={45}
                            src={wicon}
                            className="weather-icon"
                        />
                        <span className="weather-temp"></span>
                        <span class = "vertical"></span>
                        <span className="current-day">{dateView()}
                        </span>        
                
                        
                        
                        {/* <div className="weather-location">Улаанбаатар</div>  */}
                        </Media>
                </div>
        </div>
        
    );
};