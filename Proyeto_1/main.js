const panatlla = document.querySelector(".pantalla")
const botones = document.querySelectorAll(".boton")

botones.forEach(boton=>{
    boton.addEventListener("click", ()=>{
        var eleccion = (boton.textContent)
        if (boton.id === "borrar"){
            if(panatlla.textContent.length === 1 || panatlla.textContent === "ERROR"){
                panatlla.textContent = "0";

            }else{
                panatlla.textContent = panatlla.textContent.slice(0, -1)
            }
            return;
        }
        if(boton.id === "Igual"){
            try{
                panatlla.textContent = eval(panatlla.textContent)
            }catch{
                panatlla.textContent = "ERROR";
            }
            return;
        }
        if(boton.id === "limpiar"){
            panatlla.textContent = "0";
            return;
        }
        if(panatlla.textContent === "0" || panatlla.textContent === "ERROR"){
            panatlla.textContent = eleccion 
        }else{
            panatlla.textContent += eleccion
        }
        if(panatlla.textContent === "//"){
            panatlla.textContent = "ERROR";
            return
        }
    })
})