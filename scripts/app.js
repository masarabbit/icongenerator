function init() {

  const combineCanvas = document.getElementById('combineCanvas')
  const context = combineCanvas.getContext('2d')
  const head = document.querySelector('.head')
  const body = document.querySelector('.body')
  const randomHead = document.createElement('img')
  const randomBody = document.createElement('img')
  const fileNameInput = document.getElementById('file_name_input')
  const shuffleButton = document.getElementById('shuffle')
  const downloadIconButton = document.getElementById('download_icon_button')
  let filenum = 0


  drawImage()

  function shuffle(){
    head.innerHTML = ''
    randomHead.src = `./assets/head/head${Math.ceil(Math.random() * 48)}.png`
    head.appendChild(randomHead)
    
    body.innerHTML = ''
    randomBody.src = `./assets/body/body${Math.ceil(Math.random() * 48)}.png`
    body.appendChild(randomBody)
  }


  function drawImage(){
    shuffle()

    setTimeout(()=>{
      combineCanvas.setAttribute('height','200px') 
      combineCanvas.setAttribute('width','200px')
      
      context.fillStyle = 'white'
      context.fillRect(0, 0, 200, 200)

      context.filter = `hue-rotate(${Math.floor(Math.random() * 360)}deg) contrast(${Math.floor(Math.random() * 100) + 100}%) saturate(${Math.floor(Math.random() * 100) + 60}%)`    
      context.drawImage(randomHead, 20, 20, 160, 100)
      
      context.filter = `hue-rotate(${Math.floor(Math.random() * 360)}deg) contrast(${Math.floor(Math.random() * 100) + 100}%) saturate(${Math.floor(Math.random() * 100) + 60}%)`
      context.drawImage(randomBody, 20, 120, 160, 60)
    },200)
  }


  function downloadSprite() {
    filenum++

    const fileName = fileNameInput.value === '' ? 'icon' : fileNameInput.value
    const link = document.createElement('a')
    
    link.href = combineCanvas.toDataURL('image/png')
    link.download = `${fileName}${filenum}.png`
    link.click()
  }

  function resetNumber() {
    filenum = 0
  }
  
  fileNameInput.onchange = resetNumber
  shuffleButton.onclick = drawImage
  downloadIconButton.onclick = downloadSprite
}

window.addEventListener('DOMContentLoaded', init)