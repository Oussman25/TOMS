const buttons = document.querySelectorAll("button");
const meteoDiv =document.querySelector('.infoMeteo');

buttons.forEach(button => 
    {button.addEventListener("click", () => {
        fetch(`http://57.129.5.9:3000/villes/${button.className}/`)
        .then((response) => response.json())
        .then((data) => {
        //   console.log(data);
    meteoDiv.style.display = "flex"
    meteoDiv.innerHTML = `<h2>${data.nom}</h2>
                    <p>Temperature : ${data.temperature}°C</p>
                    <p>Conditions Météo: ${data.conditionsMeteo}</p>
                    <p>Humidité: ${data.humidite}%</p>
                    <p>Précipitations: ${data.precipitations}%</p>
                    <p>Indice UV ${data.indiceUV}</p>`
});

    
    //   const ville = document.createElement("div");

    //   const nom = document.createElement("h2");
    //   nom.textContent = data.nom;

    //   const humidite = document.createElement("p");
    //   humidite.textContent = data.humidite;

    //   const indiceUv = document.createElement("p");
    //   indiceUv.textContent = data.indiceUV;

    //   const temp = document.createElement("p");
    //   temp.textContent = `${data.temperature}°C`;

    //   document.body.appendChild(ville);
    //   ville.appendChild(nom);
    //   ville.appendChild(humidite);
    //   ville.appendChild(indiceUv);
    //   ville.appendChild(temp);
    });
});