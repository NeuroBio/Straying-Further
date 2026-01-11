const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get(QueryParams.BOOK);
const chapterId = urlParams.get(QueryParams.CHAPTER);
console.log({ bookId, chapterId})

fetch(`../assets/chapters/${bookId}/${chapterId}.txt`)
  .then(response => response.text())
  .then(content => {
    console.log(content);
  })
  .catch(error => console.error('Error fetching file:', error));