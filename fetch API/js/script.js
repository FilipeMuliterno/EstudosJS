const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentsContainer = document.querySelector("#comments-container");

const commentForm = document.querySelector("#comment-form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

// get id from URL
const urlSearchParams = new URLSearchParams(window.location.search); // Entrega um objeto que posso acessar os parametros com o metodo GET
const postId = urlSearchParams.get("id");

// Get all posts
async function getAllPosts() {
  const response = await fetch(url); // Faz a requisição na API

  const data = await response.json(); // Tranforma os dados em objeto Json

  loadingElement.classList.add("hide"); // Tira o carregando depois que a api é carregada

  data.map((post) => {
    // Cria elementos para cada item que está sendo puxado
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const body = document.createElement("p");
    const link = document.createElement("a");

    // Define quais dados irão para cada elemento
    title.innerText = post.title;
    body.innerText = post.body;
    link.innerText = "Ler";
    link.setAttribute("href", `/post.html?id=${post.id}`);

    // Coloca os elementos dentro da Div
    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(link);

    // Coloca a div dentro da div principal do HTML
    postsContainer.appendChild(div);
  });
}

// Get indivudual post

//faz requisição de 2 apis ao mesmo tempo
async function getPost(id) {
  const [responsePost, responseComments] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`),
  ]);

  // Tranforma ambas em objeto Json
  const dataPost = await responsePost.json();
  const dataComments = await responseComments.json();

  // Tira o carregamento e coloca o conteudo
  loadingElement.classList.add("hide");
  postPage.classList.remove("hide");

  // Cria os elementos para dentro do post indivudual
  const title = document.createElement("h1");
  const body = document.createElement("p");

  // Define os dados
  title.innerText = dataPost.title;
  body.innerText = dataPost.body;

  // Coloca os elementos dentro da div
  postContainer.appendChild(title);
  postContainer.appendChild(body);

  // Faz um map dos comentarios
  dataComments.map((comment) => {
    createComment(comment);
  });
}

// Faz toda a criação de apresentação dos comentarios
function createComment(comment) {
  const div = document.createElement("div");
  const email = document.createElement("h3");
  const commentBody = document.createElement("p");

  email.innerText = comment.email;
  commentBody.innerText = comment.body;

  div.appendChild(email);
  div.appendChild(commentBody);

  commentsContainer.appendChild(div);
}

// Post a comment

// Envia o comentario por método POST
async function postComment(comment) {
  const response = await fetch(`${url}/${postId}/comments`, {
    method: "POST",
    body: comment,
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  createComment(data);
}

// Verifica se existe o post
if (!postId) {
  getAllPosts();
} else {
  getPost(postId);

  // add event to comment form
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Salva os valores para envio de comentario e tranforma em JSON
    let comment = {
      email: emailInput.value,
      body: bodyInput.value,
    };

    comment = JSON.stringify(comment);

    postComment(comment);
  });
}
