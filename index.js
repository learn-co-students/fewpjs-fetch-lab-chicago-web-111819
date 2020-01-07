function fetchBooks() {
  const url = "https://anapioficeandfire.com/api/books";
  let f = fetch(url)
          .then(response => response.json())
          .then(json => renderBooks(json));
  return f;
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
