const pythonButton = document.getElementById('py-button')
pythonButton.addEventListener('click', ()=>{
    const window = document.getElementById('window-frame')
    const route = document.getElementById('projects-window')
    if (window.style.visibility === 'visible' && route.getAttribute('src') === 'assets/python-projects.html'){
        window.style.visibility = 'hidden'
        return false
    }
    
    route.src = 'assets/python-projects.html'
    window.style.visibility = 'visible'
})

const cssButton = document.getElementById('css-button')
cssButton.addEventListener('click', ()=>{
    const window = document.getElementById('window-frame')
    const route = document.getElementById('projects-window')

    if (window.style.visibility === 'visible' && route.getAttribute('src') === 'assets/html-css.html'){
        window.style.visibility = 'hidden'
        console.log("hwew",window)
        return false
    }
    
    route.src = 'assets/html-css.html'
    window.style.visibility = 'visible'
})

const jsButton = document.getElementById('js-button')
jsButton.addEventListener('click', ()=>{
    const window = document.getElementById('window-frame')
    const route = document.getElementById('projects-window')

    if (window.style.visibility === 'visible' && route.getAttribute('src') === 'assets/javascript.html'){
        window.style.visibility = 'hidden'
        console.log("hwew",window)
        return false
    }
    
    route.src = 'assets/javascript.html'
    window.style.visibility = 'visible'
})