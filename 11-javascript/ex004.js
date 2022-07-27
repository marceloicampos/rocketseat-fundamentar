console.log('---início do código---')
/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Augusto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker'
            },
            {
                title: 'O homem mais rico da Babilônia',
                author: 'George S. Clason'
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter'
            }
        ]
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é Insubstituível',
                author: 'Augusto Cury'
            },
            {
                title: 'Ansiedade – Como enfrentar o mal do século',
                author: 'Augusto Cury'
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey'
            }
        ]
    }
]

console.log('Números de Categorias: ' + booksByCategory.length)

for (const element of booksByCategory) {
    console.log(`Na Categoria ${element.category} temos: ${element.books.length} livros`)
}

function countAuthors() {
    let authors = []
    for (const iteratorCategory of booksByCategory) {
        for (const iteratorBooks of iteratorCategory.books) {
            if (authors.indexOf(iteratorBooks.author) == -1) {
                // console.log(authors.indexOf())
                // como não temos index então sempre retorna
                // o valor de -1
                authors.push(iteratorBooks.author)
            }
        }
    }
    console.log('Total de Autores: ' + authors.length)
    // console.log(authors);
}

function booksOfAugusto() {
    let books = []
    for (const iteratorCategory of booksByCategory) {
        for (const iteratorBooks of iteratorCategory.books) {
            if (iteratorBooks.author === 'Augusto Cury') {
                // console.log(books.indexOf())
                // como não temos index então sempre retorna
                // o valor de -1
                books.push(iteratorBooks.title)
            }
        }
    }
    console.log('Total de Livros do Augusto Cury : ' + books.length)
    console.log('Livros do Cury: ' + books.join(' | '))
}

function booksOfAuthor(author) {
    let books = []
    for (const iteratorCategory of booksByCategory) {
        for (const iteratorBooks of iteratorCategory.books) {
            if (iteratorBooks.author === author) {
                // console.log(books.indexOf())
                // como não temos index então sempre retorna
                // o valor de -1
                books.push(iteratorBooks.title)
            }
        }
    }
    console.log(`Livros do ${author}: ${books.join(' | ')}`)
}

countAuthors()

booksOfAugusto()

booksOfAuthor('T. Harv Eker')

// console.log(booksByCategory[0].category);
// console.log(booksByCategory[0].books[0].title);
// console.log(booksByCategory[0].books[0].author);

console.log('---fim do código---')
