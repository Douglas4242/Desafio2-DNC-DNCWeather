async function getCEP() {
    const cep = document.getElementById('CEP').value
    try {
        const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()
        document.getElementById('street').innerHTML = data.logradouro
        document.getElementById('neighbourhood').innerHTML = data.bairro
        document.getElementById('state').innerHTML = data.localidade
    } catch (error) {
        alert(error.message)
    }
}

async function getWeather() {
    const lat = document.getElementById('lat').value
    const long = document.getElementById('long').value
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`)
        const data = await response.json()
        document.getElementById('weatherReport').innerHTML = `Previsão de tempo de acordo com a região: ${data.hourly.temperature_2m[12]} ºC`
    } catch {
        alert(error.message)
    }

    // -23.1063721
    // -45.6997249
}