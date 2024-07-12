// script src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js" ></script >
//     script src = "https://unpkg.com/axios/dist/axios.min.js" ></script


const getData = async () => {
    try {
        const response = await axios.get("https://6691117a26c2a69f6e8e4af7.mockapi.io/Produtos/Produtos")
        console.log(response)

        let corpo = document.querySelector("body")
        response.data.forEach(element => {
            let linha = document.createElement("div")
            linha.innerHTML =
                `
                <div class="card" style="width: 15rem;background-color: grey;min-height:280px ; text-align: center;>
                <div class="card-body">
                    <h5 class="card-title" style="color: red" text-align: center;> ${element.nome}</h5>
                    <h5 class="card-title" style="color: white">${element.tipo}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary" style=" text-align: center;">${element.descricao}</h6>
                    <p class="card-text" style=" text-align: center;">${element.material}</p>
                </div>
            </div> `

            corpo.appendChild(linha)
        });



    } catch (error) {
        console.log(`${error}`)
    }
}
getData()
