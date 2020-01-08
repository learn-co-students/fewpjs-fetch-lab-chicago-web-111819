function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    return renderBooks(json);
  })
}

// function fetchBooks() {
//   return fetch('https://anapioficeandfire.com/api/books')
//     .then(resp => resp.json())
//     .then(json => renderBooks(json));
// }

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => fetchBooks(), 0);
  // fetchBooks();
})


// ---

// fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(json => console.log(json));

