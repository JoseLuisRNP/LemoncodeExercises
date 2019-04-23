// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no el libro.
// Un libro es un objeto con "title" como string y "isRead" como booleano.
// En caso de no existir el libro devolver false

// TIP: Existe un método de los Arrays que te ayudará a buscar según un patrón
interface Book {
  title: string;
  isRead: boolean;
}

const isBookRead = (books:Array<Book>, titleToSearch:string): boolean => {
  const bookRead:Book = books.find(book => book.title === titleToSearch);
  return bookRead !== undefined ? bookRead.isRead : false;
}

var books = [
  {title: "Harry Potter y la piedra filosofal", isRead: true},
  {title: "Canción de hielo y fuego", isRead: false},
  {title: "Devastación", isRead: true},
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false