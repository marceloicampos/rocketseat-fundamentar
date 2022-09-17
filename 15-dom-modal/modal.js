const openModal = document.querySelector('#openmodal')
const modalWrapper = document.querySelector('.modal-wrapper')
const body = document.querySelector('body')

openModal.addEventListener('click', () => {
    modalWrapper.classList.remove('invisible')
})

body.onkeydown = function (e) {
    if (e.keyCode == 27) {
        modalWrapper.classList.add('invisible')
    }
}
