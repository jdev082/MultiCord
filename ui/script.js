const confbtn = document.querySelector('#confbtn')
const bar = document.querySelector('#sidebar')
const view = document.querySelector('#view');
const vers = document.querySelector('#vers')
const disp = document.querySelector('#disp')

function showSettings() {
    bar.classList.toggle('hidden')
}

vers.addEventListener("click", () => {
      vers.addEventListener("change", () => {
        switch (vers.value) {
          case "can":
            view.src = "https://canary.discord.com/app"
            disp.innerText = "Canary"
            break;
          case "stab":
            view.src = "https://discord.com/app"
            disp.innerText = "Stable"
            break;
        }
      });
    });

confbtn.addEventListener('click', showSettings)

// inject scripts and styles
view.addEventListener('dom-ready', function () {
    view.insertCSS(".notice-2HEN-u { display: none !important;}")
});

function devTools() {
    document.querySelector('#view').inspectElement(0, 0);
}