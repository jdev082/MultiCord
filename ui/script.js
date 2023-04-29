const confbtn = document.querySelector('#confbtn')
const bar = document.querySelector('#sidebar')
const view = document.querySelector('#view');

function showSettings() {
    bar.classList.toggle('hidden')
}

confbtn.addEventListener('click', showSettings)