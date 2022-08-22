'use strict';

const zero = document.querySelector('.zero')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const equal = document.querySelector('.equal')
const reset = document.querySelector('.reset')
const del = document.querySelector('.dele') 
const dele = document.querySelector('.del')
const screen = document.querySelector('.screen')
const screenInput = document.querySelector('.screen-inputs')
const plus = document.querySelector('.plus')
const multiply = document.querySelector('.multiply')
const minus = document.querySelector('.minus')
const dot = document.querySelector('.dot')
const divide = document.querySelector('.divide')
const clickOne = document.querySelector('.click-one')
const clickTwo = document.querySelector('.click-two')
const clickThree = document.querySelector('.click-three')
const buttons = document.querySelector('.buttons')
const main = document.querySelector('.main')
const section = document.querySelector('section')
const body = document.querySelector('body')
const divs = document.querySelectorAll('.flex div')
const divsHover = document.querySelectorAll('.flex div:hover')
const hThree = document.querySelector('h3')
const headerP = document.querySelectorAll('header p')
const toggleOne = document.querySelector('.toggle-one')
const toggletwo = document.querySelector('.toggle-two')
const togglethree = document.querySelector('.toggle-three')
const numbers = [one, two, three, four, five, six, seven, eight, nine, zero, reset, plus, minus , divide, dot]


 

// calculator function ////////

numbers.map( function(x){
 x.addEventListener('click', function(e){
  e = screenInput.innerText.length
  if (e > 5){
    screenInput.innerText = screenInput.innerText.slice(0, 5)
    
  }
  // console.log(screenInput.innerText.length)
    //  multiply.innerText.replace('x','*')
     screenInput.innerText = (screenInput.innerText) + (x.innerText)

     const f = typeof x.innerText
  console.log(x.textContent, f)
 })
})

reset.addEventListener('click', function() {
 screenInput.innerText = ''
 
})
equal.addEventListener('click' ,function(e){
    const h = eval(screenInput.innerText)
    
 
 screenInput.innerText = h
})
multiply.addEventListener('click', function(e){
  e = multiply.innerText.replace('x','*')
   screenInput.innerText += e
})
del.addEventListener('click', function(e){
  e = screenInput.innerText.slice(0, -1)
  screenInput.innerText = e
  console.log('MINUS 1', e)
})

// add diffrent states of themes

clickOne.addEventListener('click', function(){
  toggleOne.classList.remove('hidden')
  toggletwo.classList.add('hidden')
  togglethree.classList.add('hidden')


  body.style.backgroundColor =  'hsl(222, 26%, 31%)'
  main.style.backgroundColor = 'hsl(223, 31%, 20%)'
  buttons.style.backgroundColor = 'hsl(223, 31%, 20%)'
  section.style.background = 'hsl(224, 36%, 15%)'
  screenInput.style.color = 'white'
  hThree.style.color = 'white'
  dele.style.backgroundColor = ' hsl(225, 21%, 49%)'
  reset.style.background = ' hsl(225, 21%, 49%)'
  equal.style.backgroundColor = ' hsl(6, 63%, 50%)'
  dele.style.boxShadow = '1px 3px hsl(224, 28%, 35%)'
  reset.style.boxShadow = '1px 3px hsl(224, 28%, 35%)'
  equal.style.boxShadow = '1px 3px hsl(6, 70%, 34%)'
    equal.style.color = 'white'
    
  for(const x of headerP){
    x.style.color = 'white'
  }
  
  for(const x of divs){
    x.style.backgroundColor = 'hsl(30, 25%, 89%)'
    x.style.color = 'hsl(221, 14%, 31%)'
    x.style.boxShadow = '1px 3px hsl(28, 16%, 65%)'
  }

  // do active state for each theme

  reset.addEventListener('mouseover', function(){
      reset.style.background = ' hsl(225, 51%, 74%)'
    })
    dele.addEventListener('mouseover', function(){
      dele.style.background = ' hsl(225, 51%, 74%)'
    })
    reset.addEventListener('mouseout', function(){
     reset.style.backgroundColor = ' hsl(225, 21%, 49%)'
    })
    dele.addEventListener('mouseout', function(){
      dele.style.backgroundColor = ' hsl(225, 21%, 49%)'
    })
    equal.addEventListener('mouseover', function(){
      equal.style.backgroundColor = 'hsl(6, 83%, 65%)'
    })
    equal.addEventListener('mouseout', function(){
      equal.style.backgroundColor = ' hsl(6, 63%, 50%)'
    })

  for(const x of divs){
    x.addEventListener('mouseover', function(){
      x.style.backgroundColor = 'hsl(30, 50%, 98%)'
    })
    x.addEventListener('mouseout', function(){
      x.style.backgroundColor = 'hsl(30, 25%, 89%)'
    })
  }

})


clickTwo.addEventListener('click', function(){

  toggleOne.classList.add('hidden')
  toggletwo.classList.remove('hidden')
  togglethree.classList.add('hidden')

  body.style.backgroundColor =  'hsl(0, 0%, 90%)'
  main.style.backgroundColor = 'hsl(0, 5%, 81%)'
  buttons.style.backgroundColor = 'hsl(0, 5%, 81%)'
  section.style.background = 'hsl(0, 0%, 93%)'
  screenInput.style.color = 'black'
  hThree.style.color = 'black'
  dele.style.backgroundColor = 'hsl(185, 42%, 37%)'
  reset.style.background = 'hsl(185, 42%, 37%)'
  equal.style.backgroundColor = ' hsl(25, 98%, 40%)'
  dele.style.boxShadow = '1px 3px hsl(185, 58%, 25%)'
  reset.style.boxShadow = '1px 3px hsl(185, 58%, 25%)'
  equal.style.boxShadow = '1px 3px hsl(25, 99%, 27%)'
    equal.style.color = 'white'

  for(const x of headerP){
    x.style.color = 'black'
  }
  for(const x of divs){
    x.style.backgroundColor = ' hsl(45, 7%, 89%)'
    x.style.color = 'hsl(221, 14%, 31%)'
    x.style.boxShadow = '1px 3px hsl(35, 11%, 61%)'
  }
//  do active states for each theme

reset.addEventListener('mouseover', function(){
      reset.style.background = 'hsl(185, 60%, 45%)'
    })
    dele.addEventListener('mouseover', function(){
      dele.style.background = 'hsl(185, 60%, 45%)'
    })
    reset.addEventListener('mouseout', function(){
     reset.style.backgroundColor = 'hsl(185, 42%, 37%)'
    })
    dele.addEventListener('mouseout', function(){
      dele.style.backgroundColor = 'hsl(185, 42%, 37%)'
    })
    equal.addEventListener('mouseover', function(){
      equal.style.backgroundColor = 'hsl(6, 83%, 65%)'
    })
    equal.addEventListener('mouseout', function(){
      equal.style.backgroundColor = ' hsl(6, 63%, 50%)'
    })
    for(const x of divs){
    x.addEventListener('mouseover', function(){
       x.style.backgroundColor = ' hsl(45, 7%, 95%)'
    })
    x.addEventListener('mouseout', function(){
       x.style.backgroundColor = ' hsl(45, 7%, 89%)'
    })
  }
})



clickThree.addEventListener('click', function(){

  toggleOne.classList.add('hidden')
  toggletwo.classList.add('hidden')
  togglethree.classList.remove('hidden')

  body.style.backgroundColor =  ' hsl(268, 75%, 9%)'
  main.style.backgroundColor = 'hsl(268, 71%, 12%)'
  buttons.style.backgroundColor = 'hsl(268, 71%, 12%)'
  section.style.background = 'hsl(268, 71%, 12%)'
  screenInput.style.color = 'hsl(52, 100%, 62%)'
  hThree.style.color = 'hsl(52, 100%, 62%)'
  dele.style.backgroundColor = 'hsl(281, 89%, 26%)'
  reset.style.background = 'hsl(281, 89%, 26%)'
  equal.style.backgroundColor = 'hsl(176, 100%, 44%)'
  dele.style.boxShadow = '1px 3px hsl(285, 91%, 52%)'
  reset.style.boxShadow = '1px 3px hsl(285, 91%, 52%)'
  equal.style.boxShadow = '1px 3px hsl(177, 92%, 70%)'
  equal.style.color = 'black'
  for(const x of headerP){
    x.style.color = 'hsl(52, 100%, 62%)'
  }
  for(const x of divs){
    x.style.backgroundColor = ' hsl(268, 47%, 21%)'
    
     x.style.color = 'hsl(52, 100%, 62%)'
    x.style.boxShadow = '1px 3px hsl(290, 70%, 36%)'
  }
  // active state of this theme //

  reset.addEventListener('mouseover', function(){
      reset.style.background = 'hsl(281, 89%, 34%)'
    })
    dele.addEventListener('mouseover', function(){
      dele.style.background = 'hsl(281, 89%, 34%)'
    })
    reset.addEventListener('mouseout', function(){
     reset.style.backgroundColor = 'hsl(281, 89%, 26%)'
    })
    dele.addEventListener('mouseout', function(){
      dele.style.backgroundColor = 'hsl(281, 89%, 26%)'
    })
    equal.addEventListener('mouseover', function(){
      equal.style.backgroundColor = 'hsl(176, 100%, 55%)'
    })
    equal.addEventListener('mouseout', function(){
      equal.style.backgroundColor = 'hsl(176, 100%, 44%)'
    })
    for(const x of divs){
    x.addEventListener('mouseover', function(){
       x.style.backgroundColor = ' hsl(268, 47%, 34%)'
    })
    x.addEventListener('mouseout', function(){
      x.style.backgroundColor = ' hsl(268, 47%, 21%)'
    })
  }
})
