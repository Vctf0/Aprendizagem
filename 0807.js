function render(params) {
    let corpo = document.querySelector("body")
    let titulo = document.createElement("h1")

    titulo.innerText = "Teste de JavaScript"

    corpo.appendChild(titulo)

}
function remove() {
    let corpo = document.querySelector("body")
    let titulo = document.querySelector("h1")
    corpo.removeChild(titulo)
}

function darkmode() {
    let corpo = document.querySelector(".corpo")
    corpo.classList.remove("corpo")
    corpo.classList.add("darkmode")
}

const darkmode = () => {
    let corpo = document.querySelector("#teste")
    if (corpo.calssname === "corpo") {
        corpo.classList.remove("corpo")
        corpo.classList.add("darkmode")
    } else if (corpo.className === "darkmode") {
        corpo.classlist.remove("darkmode")
        corpo.classlist.add("corpo")
    }
}
