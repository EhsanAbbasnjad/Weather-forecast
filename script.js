const apiKey = '063f0e8777cc6fedb83d0d60def46f6d';
const location = 'Tehran'; 

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&lang=fa&appid=${apiKey}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
      
        const weatherDiv = document.getElementById('weather-result');
        weatherDiv.innerHTML = `
            <h2>پیش‌بینی آب‌وهوا برای ${data.city.name}</h2>
            <ul>
                ${data.list.slice(0, 5).map(entry => `
                    <li>
                        <strong>${entry.dt_txt}</strong>: 
                        ${entry.weather[0].description}, دما: ${entry.main.temp}°C
                    </li>
                `).join('')}
            </ul>
        `;
    })
    .catch(error => console.error('Error:', error));

    function getWeather() {
        const city = document.getElementById("cityInput").value;
        if (city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    // نمایش داده‌های آب و هوا در UI
                })
                .catch(error => console.error('Error:', error));
        } else {
            alert("Please enter a city.");
        }
    }
    
    function resetForm() {
        document.getElementById("cityInput").value = "";
    }
    //ساعت

