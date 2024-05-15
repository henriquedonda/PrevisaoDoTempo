const key = "0aa959e79eede30c94b727fd306c5b0a"

function dadosTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.round(dados.main.temp - 273) + "°C"
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".max-temp").innerHTML = "Máx: " + Math.round(dados.main.temp_max - 273) + "°C"
    document.querySelector(".min-temp").innerHTML = "Mín: " + Math.round(dados.main.temp_min - 273) + "°C"
}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br`).then(response => response.json())
    dadosTela(dados)
    console.log(dados)
}

function button() {
    const cidade = document.querySelector(".input-city ").value
    buscarCidade(cidade)
}
document.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        button();
    }
})
