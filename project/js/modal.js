// const modal = document.querySelector('.modal')
// const trigger = document.querySelector('#btn-get')
// const close = document.querySelector('.modal_close')
//
// const openModal = () => {
//     modal.style.display = 'block'
//     document.body.style.overflowY = 'hidden'
// }
// const closeModal = () => {
//     modal.style.display = 'none'
//     document.body.style.overflowY = ''
// }
// modal.onclick = (event) => {
//     if (event.target === modal) {
//         closeModal()
//     }
// }
// trigger.onclick = () => openModal()
// close.onclick = () => closeModal()
//
// setTimeout(openModal, 5000)
//
// let name = 'arslan'
// window.onscroll = () => {
//     const scrollHeight = document.body.scrollHeight
//     const scrollPosition = window.scrollY + window.innerHeight
//     if (scrollPosition >=  scrollHeight && name === 'arslan') {
//         openModal()
//         name = 'kally'
//     }
//     window.removeEventListener('scroll', openModal)
// }
//


























































const modal = document.querySelector('.modal')
const triggerBtn = document.querySelector('#btn-get')
const triggerCloseModal = document.querySelector('.modal_close')


const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflowY = 'hidden'
}
const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflowY = ''
}
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}

triggerBtn.onclick = () => openModal()
triggerCloseModal.onclick = () => closeModal()

let switcherModal = true
window.onscroll = () => {
    const scrollHeight = document.body.scrollHeight
    const scrollPosition = window.scrollY + window.innerHeight
    if (scrollPosition >=  scrollHeight && switcherModal === true) {
        openModal()
        switcherModal = false
    }
    window.removeEventListener('scroll', openModal)
}




setTimeout(() => openModal(), 10000)