const box = Array.from(document.getElementsByClassName('box'))
const display = document.getElementById('display')
const button = document.getElementById('button')
const del = document.getElementById('del')
const winner = document.getElementById('win')
let res = 0

box.map(el => {
    el.addEventListener('click', () => {
        if (!el.innerHTML) {
            el.innerText = Math.round(Math.random() * 100)
        }
        res = res + eval(el.innerHTML)

    })

    del.addEventListener('click', () => {
        el.innerText = ' '
        display.innerHTML = ' '
        winner.innerHTML = ' '
    })

    button.addEventListener('click', () => {
        display.innerHTML = `
        The sum of numbers  ${res}
  
      `
        if (res > 200) {
            winner.innerHTML = `
     ${res} score Winner!!!
    `;
        } else {
            winner.innerHTML = `
     ${res} score Defeat!!!
    `;
        }
    })

})




