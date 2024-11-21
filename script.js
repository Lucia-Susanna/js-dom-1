const lampadinaSpenta = document.getElementById('spenta')
const lampadinaAccesa = document.getElementById('accesa')
const interruttore = document.getElementById('interruttoreLampadina')
const coloreSfondo = document.querySelector('.sfondo')

interruttore.addEventListener('click', ()=>{
  lampadinaAccesa.classList.toggle('none')
  coloreSfondo.classList.toggle('dark')
  coloreSfondo.classList.toggle('light')
  interruttore.innerHTML = lampadinaAccesa.className.includes('none') ? 'Accendi'
                                                                     : 'Spegni'
})

