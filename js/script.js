function start(){
  var buttonCalculate = document.querySelector('#calculate')
  buttonCalculate.addEventListener('click', handleButtonClick)
  var inputWeight = document.querySelector('#weight')
  var inputHeight = document.querySelector('#height')

  inputWeight.addEventListener('input', handleButtonClick)
  inputHeight.addEventListener('input', handleButtonClick)

  handleButtonClick()
}

function calculateImc(weight, height){
  return weight / (height*height)
}

function handleButtonClick(){
  var inputWeight = document.querySelector('#weight')
  var inputHeight = document.querySelector('#height')
  var imcResult = document.querySelector('#imc-result')
  
  var weight = Number(inputWeight.value)
  var height = Number(inputHeight.value)

  var imc = calculateImc(weight, height)
  imcResult.textContent = imc.toFixed(2).replace('.', ',')
}

start()
