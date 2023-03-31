const register = document.getElementById('register')
const button = document.getElementsByName('call_register')
const image = document.getElementById('img_register')
const shut = document.getElementById('close_reg')
/*toggle register form*/
for (const key in button) {
  if (Object.hasOwnProperty.call(button, key)) {
    const element = button[key]
    button[key].addEventListener('click',(e)=>{
      register.style.display = "grid"
      register.style.top = window.scrollY+"px"
      register.style.left = window.scrollX+"px"
      image.src=`${button[key].dataset.film}`
      document.addEventListener('keydown',(e)=>{
        if(e.code == "Escape"){
          register.style.display = "none"
        }
     })
      shut.addEventListener('click',(e)=>{
        register.style.display = "none"
      })
    })
  }
}
/*toggle responsive menu */
const menu = document.getElementById('menu')
const closer = document.getElementById('cross')
const menu_resp = document.getElementById('menu_resp')
menu.addEventListener('click',(e)=>{
  menu_resp.style.transform = "translateX(52%)"
})
closer.addEventListener('click',(e)=>{
  menu_resp.style.transform = "translateX(-107%)"
})



