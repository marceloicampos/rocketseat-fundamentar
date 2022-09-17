// document.getElementById (element)

const element = document.getElementById('blog-title')
console.log(element)

// document.getElementsByClassName (HTMLCollection)

const element2 = document.getElementsByClassName('one')
console.log(element2)

// document.getElementsByTagName (HTMLCollection)

const element3 = document.getElementsByTagName('h2')
console.log(element3)

// querySelector (element)

const element4 = document.querySelector('.one')
console.log(element4)

// querySelectorAll (NodeList)

const element5 = document.querySelectorAll('.one')
console.log(element5)

element5.forEach(el => {
    console.log(el)
})

// textContent

const element6 = document.querySelector('h3')
element6.textContent += ' - olá Dev em textContent'
console.log(element6.textContent)

// innerText

const element7 = document.querySelector('h4')
element7.innerText = 'Hello World'

// innerHTML

const element8 = document.querySelector('h5')
element8.innerHTML = '<code style="color: red">Hello</code>'

// value

const element9 = document.querySelector('input')
console.log(element9.value)
element9.value = 'valor que eu quiser'

// atributos dos elementos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('id'))
console.log(headerID.getAttribute('class'))
header.removeAttribute('id')
console.log(headerID.getAttribute('id'))

const element10 = document.querySelector('body')
element10.style.backgroundColor = 'pink'
console.log(element10.style.backgroundColor)
console.log(element10.classList)
element10.classList.add('active')
element10.classList.remove('active')
element10.classList.add('green')
