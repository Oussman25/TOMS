const buttons = document.querySelectorAll("button");
const meteoDiv = document.querySelector('.infoMeteo');
let srcImgMeteo

buttons.forEach(button => 
    {button.addEventListener("click", () => {
        fetch(`http://57.129.5.9:3000/villes/${button.className}/`)
        .then((response) => response.json())
        .then((data) => {
        //   console.log(data);
        urlImgMeteo(data.conditionsMeteo)
    meteoDiv.style.display = "flex"
    meteoDiv.innerHTML = `<h2>${data.nom}</h2>
                    <p>Temperature : ${data.temperature}°C</p>
                    <p>Conditions Météo: ${data.conditionsMeteo}</p>
                    <img src=${srcImgMeteo} alt="Logo-Meteo">
                    <p>Humidité: ${data.humidite}%</p>
                    <p>Précipitations: ${data.precipitations}%</p>
                    <p>Indice UV ${data.indiceUV}</p>`
        });
    });
});

function urlImgMeteo(conditionsMeteo) {   
    if (conditionsMeteo == "Pluvieux") {
        srcImgMeteo = "../img/pluie.png"
    }
    if (conditionsMeteo == "Ensoleillé") {
        srcImgMeteo = "../img/soleil.png"
    }
    if (conditionsMeteo == "Nuageux") {
        srcImgMeteo = "../img/nuage.png"
    }
}
