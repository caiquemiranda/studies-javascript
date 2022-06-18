document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());

});

document.querySelector(".composer button").addEventListener("click", ()=>{
    let song = document.querySelector("#input").value;

    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);

    }
});


// função para tocar o som
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    // tocar o som
    if(audioElement){
        audioElement.currentTime = 0;    // resetar o tempo
        audioElement.play();
    }

    // colora o elemento da tecla
    if (keyElement){
        keyElement.classList.add('active');

        // após 0.3 segundos remover
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }

}

// function para tocar a composição
function playComposition(songArray){
    let wait = 0;
    
    // para cada letra da música
    for(let songItem of songArray){
        setTimeout(()=>{

            // tocar o som
            playSound(`key${songItem}`);

        }, wait);

        // incrementar o tempo de espera
        wait += 300;
   
    }
}