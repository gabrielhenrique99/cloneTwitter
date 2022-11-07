// Adicione seu código aqui

const novoTweet = document.querySelector("#novoTweet")
const tweetar = document.querySelector(".tweetBox__tweetButton")
const texto = document.querySelector("#texto")
const botaoTweet = document.querySelector(".sidebar__tweet") //Botão de baixo

botaoTweet.addEventListener("click", (event) => {
    texto.focus()
})

tweetar.addEventListener("click", (event) => {
    
    event.preventDefault()
    const novaPostagem = document.createElement("div")

    novaPostagem.innerHTML = `<div class="post">
    <div class="post__avatar">
    <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="" />
    </div>
    <div class="post__body">
          <div class="post__header">
            <div class="post__headerText">
              <h3>
                Gabriel Henrique
                <span class="post__headerSpecial"> <span class="material-icons post__badge"> verified 
                </span>@gabrielhenr_que</span>
              </h3>
            </div>
            <div class="post__headerDescription">
            <p id="textoNovo">${texto.value}</p>
            </div>
          </div>
          <div class="post__footer">
          <span class="material-icons"> repeat </span>
          <span class="material-icons"> favorite_border </span>
          <span class="material-icons"> publish </span>
          <span class="material-icons" onclick=editarTweet(this.closest(".post").parentElement)> update </span>
          <span class="material-icons" onclick=removeTweet(this.closest(".post").parentElement)> delete </span>
        </div>
      </div>` 

    novoTweet.prepend(novaPostagem)
    novoTweet.insertAdjacentElement("afterbegin", novaPostagem)
    texto.value = ""
    
})

function removeTweet(remover){
    novoTweet.removeChild(remover)
}

//function editarTweet(editar){
  //  const textoPraEditar = document.querySelector("#textoNovo")
    //const teste = document.querySelector("#texto").innerHTML = textoPraEditar
   // novoTweet.removeChild(editar)
//}

//Não consegui implementar o editar texto




