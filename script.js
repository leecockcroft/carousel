
const app=(()=>{
let left = document.getElementById('left');
let right = document.getElementById('right');
let slides = document.querySelectorAll('.slides')
let container = document.querySelector('.container')
let wrapper = document.querySelector('.slide-wrapper')
let colors=['red','green','blue','gray']
let counter=0;
let transLate;
let  pressed=false;
let x;
let startX;
let total = slides.length -1;


const moveRight =()=>{
  if (counter!==total){
    counter++;
    transLate= counter * -100;
  }

  slides.forEach((item,index)=>{
     item.style.transform=`translateX(${transLate}%)`;
     item.style.transition = 'transform .5s ease'
   })

 }


const moveLeft =()=>{
    if(counter!==0){
      counter--;
    }
    transLate= counter * -100;
    console.log(counter,transLate)
    slides.forEach((item,index)=>{
        item.style.transform=`translateX(${transLate}%)`;
        item.style.transition = 'transform .5s ease-out'
   })
 }





 const mouseDown=(e)=>{

   pressed=true
   startX=e.offsetX - container.offsetLeft;
   console.log(container.offsetLeft)
   console.log(startX,'this is the start value',container.clientWidth);
   //clientWidth - container width.

//
 }


  const mouseMove=(e)=>{

       if (!pressed) return;
           e.preventDefault()
      x =  e.pageX;
      let move = startX - x;
      console.log(move,'this is the start amount - the page view')
      // container.style.transform=`translateX(-${startX - x}px)`
      container.style.left=`-${startX - x}px`




  }

  const mouseUp=(e)=>{


  pressed=false
  }
  const mouseLeave=(e)=>{
  pressed=false;
  }







   const eventHandler=(e)=>{
     left.addEventListener('click',moveLeft)
     right.addEventListener('click',moveRight);
     wrapper.addEventListener('touchstart',mouseDown)
      wrapper.addEventListener('touchend',mouseUp)
      wrapper.addEventListener('touchmove',mouseMove)
     wrapper.addEventListener('mouseleave',mouseLeave)



}



  return {

    init:()=>{
      eventHandler()


    },

    rightArrow:()=>{


      moveRight()
    },

    leftArrow:()=>{
      moveLeft()
    }



  }


  })()

app.init()
