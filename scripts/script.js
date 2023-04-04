const register = document.getElementById('register')
const button = document.getElementsByName('call_register')
const image = document.getElementById('img_register')
const shut = document.getElementById('close_reg')
const buttonToLInk = document.getElementById('buttonToLink')
const form = document.getElementById('form')
const sent = document.getElementById('message')
const send = document.getElementById('send_form')
const success = document.getElementById('success')
const contact = document.getElementById('contact')
const url = window.location.pathname

/*toggle the display of the register form*/
for (const key in button) {
  if (Object.hasOwnProperty.call(button, key)) {
      button[key].addEventListener('click',(e)=>{
      register.style.display = "grid"
      register.style.top = window.scrollY+"px"
      register.style.left = window.scrollX+"px"
      image.src=`${button[key].dataset.film}`
      form.addEventListener('submit',(e)=>{
        e.preventDefault()
        sent.style.display="inline"
        setTimeout(()=>{ 
          register.style.top = "-"+window.scrollY+"px"
          register.style.left = "-"+window.scrollX+"px"
          sent.style.display="none"
          register.style.display = "none"

        },1500)
    })
      document.addEventListener('keydown',(e)=>{
        if(e.code == "Escape"){
          register.style.top = "-"+window.scrollY+"px"
          register.style.left = "-"+window.scrollX+"px"
          setTimeout(()=>{register.style.display = "none"},600)
        }
     })
      shut.addEventListener('click',(e)=>{
        register.style.top = "-"+window.scrollY+"px"
        register.style.left = "-"+window.scrollX+"px"
          setTimeout(()=>{register.style.display = "none"},600)
      })
    })
  }
}

/*toggle the display of the responsive menu */
const menu = document.getElementById('menu')
const closer = document.getElementById('cross')
const menu_resp = document.getElementById('menu_resp')
menu.addEventListener('click',(e)=>{
  menu_resp.style.transform = "translateX(52%)"
})
closer.addEventListener('click',(e)=>{
  menu_resp.style.transform = "translateX(-107%)"
})

/*Add a redirection to the button*/
if(buttonToLInk){
  buttonToLInk.addEventListener('click',(e)=>{
    window.location = "actualites.html";
  })
}

/*success message on submit */
const searchC = new RegExp('(contact)')
if(searchC.test(url))
contact.addEventListener('submit',(e)=>{
  e.preventDefault()
  success.innerText= "Votre message a été envoyé"
  success.style.color = "#2ecc71"
  success.style.fontWeight = "bold"
})
