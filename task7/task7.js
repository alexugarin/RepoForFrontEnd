
const searchButton = document.getElementById('forecastButton')
searchButton.addEventListener('click', ()=>responseData())

function responseData(){
    const city= document.getElementById('cityInput').value
    const appid = '577b3bd2eec54e5a84a1ae825e746783'
    return(
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${appid}`)
        .then(response=>response.json())
        .then(data=>{
            if (data.cod == "404") {
              dataNotFound();
            } else {
              console.log(data);

              const icon = data.weather[0].icon;
              const datetime = new Date(data["dt"] * 1000);
              const city = data.name;
              const degrees = data.main.temp;
              const description = data.weather[0].description;
              updateData(icon, datetime, city, degrees, description);
            }
        })
    );
}

function dataNotFound(){
    let time = document.querySelector('.time')
    time.children[4].innerHTML=''
    time.children[0].setAttribute('src', 'defaultCloud.png')
    time.children[1].innerHTML = ''
    time.children[2].innerHTML = 'Город не найден'
    time.children[3].innerHTML = ''
}

function updateData(icon, datetime, city,degrees,description){

    let time = document.querySelector('.time')
    time.children[4].innerHTML=datetime
    time.children[0].setAttribute('src',`https://openweathermap.org/img/wn/${icon}@2x.png`)
    time.children[1].innerHTML = degrees
    time.children[2].innerHTML = city
    time.children[3].innerHTML = description

}


