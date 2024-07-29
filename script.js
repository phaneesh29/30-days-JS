const main = document.querySelector("main")
const days = 30
for (let i = 1; i <= 30; i++) {
    main.innerHTML += `
     <div class="card">
        <div class="inner-card">
            <h1>Day - ${prependZero(i)}</h1>
        </div>
        <button class="btn"><a href="./Day-${prependZero(i)}">Click Here Day-${prependZero(i)}</a></button>
    </div>
    `
}

function prependZero(num) {
    if (num < 10) {
        return ("0" + num)
    } else {
        return num
    }
}
