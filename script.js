let searchbox = document.getElementsByClassName('searchbox')[0];
let searchbtn = document.getElementsByTagName('button')[0];
let card = document.getElementsByClassName('card')[0];

// searchbtn.addEventListener('click', showcard());


async function showcard() {
    if (searchbox.value !== "") {
        let city = document.getElementById('city');
        let x = new Date();
        let temp = document.getElementById('temp');
        let date = document.getElementsByClassName('date')[0];
        let description = document.getElementsByClassName('description')[0];
        let time = document.getElementsByClassName('time')[0]

        try {
            document.getElementById('loader').style.display = "flex";
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchbox.value}&appid=ba381fdd5c934b9e45a68b8ad76fb15d`)
            let responsedata = await res.json()
            // console.log(responsedata);

            time.textContent = x.toLocaleTimeString()
            date.textContent = x.toDateString();
            temp.textContent = `${(responsedata.main.temp - 273.15).toFixed(2)}`
            city.textContent = responsedata.name;
            description.textContent = responsedata.weather[0].main;
            card.style.display = 'flex';
        } catch (err) {
            console.log('xyz')
        }
        finally {
            document.getElementById('loader').style.display = "none";
        }


    }
    else {
        alert('City name required')
    }
}