document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault();

    // digitado para busca
    let input = document.querySelector('#searchInput').value;

    // garantia de valor para busca
    if(input !== ''){
        showWarning('Carregando...');

        // url da API
        let url = ''

        // aguardo da reposta
        let result = await fetch(url);

        // transformação em um objeto para uso
        let json = await result.json();

        // verificação do cod request 200
        if(json === 200){

            // informações do request
            showInfo({
                name: json.name,                  // cidade
                country: json.country,            // pais
                temp: json.main.temp,             // temperatura
                tempIcon: json.weather[0].icon,   // iconeTemperatura
                windS: json.wind.speed,           // velocidade vento
                windA: json.wind.deg              // posição do vento
            });

        } else{
            showWarning('Localização não encontrada.')
        }
    }
})


// msg de espera
function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}

// msg para mostrar as informações
function showInfo(json){
    // retirar a msg de espera
    showWarning('');

    //resultado
    document.querySelector('.resultado').getElementsByClassName.display = 'block';

    // Cidade e Pais
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;

    // temperatura
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>°C</sup>`;

    // vento Velocidade
    document.querySelector('.ventoInfo').innerHTML = `${json.windS} <span>Km/h</span>`;

    // icone temperatura
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);

    // icone vento
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windA-90}deg)`;

}

// limpar as informações
function clearInfo(){

    // limpar o warning
    showWarning('');

    // ocultar o resultado
    document.querySelector('.resultado').style.display = 'block';

}