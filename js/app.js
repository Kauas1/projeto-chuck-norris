document.addEventListener('DOMContentLoaded', () => {
    const url = "https://api.chucknorris.io/jokes/categories"

    fetch(url).then((response) => {
        if(!response.ok){
            throw new Error('Erro ao receber os dados')
        }
        return response.json()
    })
    .then((data) =>{
        gerarCatergorias(data)
    })
    .catch((err) => console.error(err))
})

function gerarCatergorias(categorias){
    //parâmetro categorias = array de cartegorias
    console.log(categorias)

    const select = document.getElementById('select')
    categorias.map((categoria) =>{
         const options = document.createElement('option')
         options.innerHTML = `${categoria}`
         options.value
         select.appendChild(options) 
    })
}

const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    const select = document.getElementById('select').value
    // console.log(select)
    const url = `https://api.chucknorris.io/jokes/random?category=${select}`
    fetch(url).then((response) => {
        if(!response.ok){
            throw new Error('Erro ao Seleciona uma piada')
        }
        return response.json()
    })
    .then((data) => {
        gerarPiada(data)
    })
    .catch((err)=>console.error(err))
})

function gerarPiada(piada){
        const joke = document.getElementById("joke")
        joke.innerHTML = piada.value
}


