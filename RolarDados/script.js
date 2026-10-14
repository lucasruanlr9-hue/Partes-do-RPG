let dado = document.getElementById("dado")
let seleção_dados = document.getElementById("seleção_dados")
let titulo = document.getElementById("titulo")

// ===============Seleçoes=======================

let dados = document.querySelectorAll(".btt_dados")
let qual_dado = 0
let valor_dado = 0

// ===============Dados===========================

dado.addEventListener("click", () =>{
    seleção_dados.classList.toggle("ativo")
})

// ===============Campo de dados==================

dados.forEach((item)=>{
    item.addEventListener("click", ()=> {
        
        qual_dado = Number(item.textContent)
        
        for(let i = 0; i< 10; i++ ){
            setTimeout(() => {
                valor_dado = Math.floor(Math.random() * qual_dado) +1

                titulo.textContent = valor_dado


                if(valor_dado < qual_dado/3){
                    titulo.style.color = "red"
                }else if(valor_dado< qual_dado/3 * 2){
                    titulo.style.color = "orange"
                }else{
                    titulo.style.color = "green"
                }

            }, (25 * (i + 1)) * i)
        }
    })
})


