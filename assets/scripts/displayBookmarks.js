const bookmarks = d3.select('#bookmarks');
let addedBookmark = false;

Object.values(Books).forEach((book) => {
	let bookmark = localStorage.getItem(book.id);
	if (!bookmark) {
		return;
	}
	bookmark = JSON.parse(bookmark);

	const bookTitle = book.title;
	const chapterTitle = book.chapters[bookmark.chapterId - 1].title || bookmark.chapterId;
	const pageId = +bookmark.pageId;
	const entry = bookmarks.append('li')
		.attr(`class`, 'link-entry')
	entry.append('a')
		.attr('class', 'link-button')
		.attr('href', `./read.html?${QueryParams.BOOK}=${book.id}&${QueryParams.CHAPTER}=${bookmark.chapterId}&${QueryParams.PAGE}=${pageId}`)
		.text(`${bookTitle} at chapter: ${chapterTitle}, page ${pageId}`);
	addedBookmark = true;
});

console.log(addedBookmark)
if (!addedBookmark) {
	bookmarks.append('li').text('No bookmarks found.');
}