// http://api.weatherapi.com/v1/current.json?key=945e8600376a42babd740639240110&q=NOIDA&aqi=no

let target ="lucknow"

searchButton.addEventListener('click',searchForLocation)

const fetchdata = async(targetLocation)=>{
    let url = `https://api.weatherapi.com/v1/current.json?key=945e8600376a42babd740639240110&q=${targetLocation}&aqi=no`

    const res = await fetch(url)
    // console.log(res);
    const data = await res.json()

    console.log(data);

    let icon = document.querySelector(".weather-icon")
    icon.src = data.current.condition.icon
    
    let city = document.querySelector(".city")
    city.textContent = data.location.name

    let temp = document.querySelector(".temp")
    temp.textContent = data.current.temp_c


    let humidity = document.querySelector(".p1")
    humidity.textContent = `Humidity : ${data.current.humidity}` 


    let wind = document.querySelector(".p2")
    wind.textContent = `Wind-Speed : ${data.current.humidity}` 
}

function searchForLocation(e){
    e.preventDefault()

    target = document.querySelector(".searchBox").value

    // console.log(target)
    fetchdata(target)
}

fetchdata(target)
