
const bookList = d3.select('#books');
const activeBook = bookList[BookTitles.ALPINE];

Object.values(Books).forEach((book) => {
	const bookEntry = bookList.append('article')
		.attr('class', 'book');
	
	bookEntry.append('img')
		.attr('class', 'small-thumbnail')
		.attr('src', book.thumbnail)
	
	bookEntry.append('h2')
		.text(book.title);
	bookEntry.append('br')
	bookEntry.append('p')
		.attr('class', 'short-blurb')
		.text(book.blurb);
});

