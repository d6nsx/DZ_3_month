const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');
console.log(phoneButton)

const regExp = /^\+996 [25793]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'Все правильно!'
        phoneInput.style.borderColor = 'green'
        phoneInput.style.Color = 'green'
        console.log("de")
    }
    else {
        phoneResult.innerHTML = 'Неправильно!'
        phoneInput.style.borderColor = 'red'
        phoneInput.style.Color = 'red'
        console.log("rrr")
    }

}

const tabСontentBlocks = document.querySelectorAll('.tab_content_block')

const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabContentItemsParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabСontentBlocks.forEach(block => {
        block.style.display = 'none'
    })
    tabContentItems.forEach(item => {
        item.classList.remove('tab_content_item_active')
    })
}
let current = 0


const showTabContent = (index=0 ) => {
    tabСontentBlocks[index].style.display = 'block'
    tabContentItems[index].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent()

tabContentItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((item, index) =>{
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
                current = index
            }
        })
    }
}



setInterval(()=>{
    if(current< tabСontentBlocks.length){

        hideTabContent()
        showTabContent(current)
        current++
    }else{
        current=0
    }
} , 5000)


const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const wonInput = document.querySelector('#won');

const converter = (element, targetElement1, targetElement2) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.send();

        request.onload = () => {
            const data = JSON.parse(request.response);

            if (element.id === "som") {
                targetElement1.value = (element.value / data.usd).toFixed(2);
                targetElement2.value = (element.value * data.won).toFixed(2);
            }
            if (element.id === "usd") {
                targetElement1.value = (element.value * data.usd).toFixed(2);
                targetElement2.value = (element.value * data.won).toFixed(2);
            }
            if (element.id === "won") {
                targetElement1.value = (element.value / data.won).toFixed(2);
                targetElement2.value = (element.value / data.usd).toFixed(2);
            }
        };
    };
};

converter(somInput, usdInput, wonInput);
converter(usdInput, somInput, wonInput);
converter(wonInput, somInput, usdInput);









const card = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

let cardId = 199;


const updateCard = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.json())
        .then(data => {
            card.innerHTML = `
                    <p>${data.title}</p>
                    <p style="color: ${data.completed ? 'green' : 'red'}"
                    </p>
                    <span>Card ID: ${data.id}</span>
                `;
        });
};


btnNext.addEventListener('click', () => {
    cardId = (cardId >= 200) ? 1 : cardId + 1;
    updateCard(cardId);
});

btnPrev.addEventListener('click', () => {
    cardId = (cardId === 1) ? 200 : cardId - 1;
    updateCard(cardId);
});

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        console.log(posts);
    })