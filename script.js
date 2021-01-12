// Declarations 

const images = document.getElementById('imgs')
const prevBtn = document.getElementById('left')
const nextBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0
let interval = setInterval(run, 2000)

// Event Listeners 

prevBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

nextBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

// Functions 

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    images.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}