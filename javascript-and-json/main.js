var library = [
  {
    isbn: '9780393351477',
    title: 'The Man Who Counted: A Collection of Mathematical Adventures',
    author: 'Tahan, Malba'
  },
  {
    isbn: '9780061689246',
    title: 'Stardust',
    author: 'Gaiman, Neil'
  },
  {
    isbn: '9780062884060',
    title: 'Persephone Rising: Awakening the Heroine Within',
    author: 'Pearson, Carol S.'
  }
];
console.log('library :', library);
console.log('typeof library :', typeof library);

var libraryJson = JSON.stringify(library);
console.log('libraryJson :', libraryJson);
console.log('typeof libraryJson :', typeof libraryJson);

var libraryParse = JSON.parse(libraryJson);
console.log('libraryParse :', libraryParse);
console.log('typeof libraryParse:', typeof libraryParse);
