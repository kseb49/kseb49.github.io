const register = document.getElementById('register')
const image = document.getElementById('img_register')
const button = document.getElementById('call_register')
const closer = document.getElementById('send_form')
button.addEventListener('click',(e)=>{
    // e.preventDefault()
    const positiony = window.scrollY
    const positionx = window.scrollX
    // console.log(positionx+"//"+positiony+"//"+button.offsetTop)
    const positionButton = `${button.offsetTop}px`
    // window.scroll(positiony+"px",positionx+"px")
    register.style.display = "grid"
    register.style.position = "absolute"
    register.style.top = `${button.offsetTop}px`
    register.style.left = "0px"
    register.style.transform = "translate(50%)"
    const src = "image/"+button.dataset.film+".svg"
    image.src = src
    closer.addEventListener('click',(e)=>{
    e.preventDefault()
    register.style.transform = "translateX(-60%)"
    // register.style.display = "none"
    document.addEventListener('keydown',(e)=>{
        if(e.code == "Escape"){
          
        }
      })
})
})

// window.addEventListener('scroll',(e)=>{console.log(this.scrollY)})