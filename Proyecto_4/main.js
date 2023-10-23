let esqueleto = "off"
let esqueleto1IdQuieto = document.getElementById('esqueleto1Id')
let botonSonido = new Audio ('./sounds/botonbailar.mp3') 
let botonAudio = new Audio ('./sounds/audio___1.mp3')

function bailar(){
    if(esqueleto === "off"){    
        esqueleto = "on"
        esqueleto1IdQuieto.classList.add("on")
        esqueleto1IdQuieto.addEventListener('click', ()=>{
            botonSonido.play()
        })
        esqueleto1IdQuieto.addEventListener('click', ()=>{
            botonAudio.play()
        })
        console.log("On");
    }else{
        esqueleto = "off"
        esqueleto1IdQuieto.classList.remove("on")
        esqueleto1IdQuieto.addEventListener('click', ()=>{
            botonAudio.pause()
        })
        console.log("Off")
    }
}