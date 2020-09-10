// procurar o botão

document.querySelector("#add-time")

// quando clicar o botão
.addEventListener("click", cloneField)

// executar uma ação
function cloneField(){
    // duplicar os campos. Que campos?
    // cloneNode() => duplica um node("nó"; elemento HTML)
    // cloneNode(true) => duplica todos os elementos filhos também
    // cloneNode() => duplica apenas o elemento selecionado   
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll("input")
    
    // para cada campo, limpar
    fields.forEach(
        // pega o field do momento e limpa ele
        field => field.value = "" )

    // colocar na página. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)

}
    