const lampadinaSpenta = document.getElementById('spenta')
const lampadinaAccesa = document.getElementById('accesa')
const interruttore = document.getElementById('interruttoreLampadina')

interruttore.addEventListener('click', ()=>{
  lampadinaAccesa.classList.toggle('none')
})

