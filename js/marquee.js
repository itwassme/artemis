//  here we make a function called makeMarquee
function makeMarquee() {
  const title = 'Pickup and delivery only for now! But we love and miss having you here!!!'


  // here we make a new empty arrawy with 50 spaces in it
  // then we fill it with the text from our title (50 times)
  //  we then join them all together as one text string using a ' — '
  const marqueeText = new Array(50).fill(title).join(' — ')

  // 1. we want to grab our .marquee span from the html
  // 2. we want to set our repaeting title as the content

  //  querySelector and querySelectorAll are the same as $ in jQuery
  const marquee = document.querySelector('.marquee span')
  // using innerHTML lets us set the content inside an element
  marquee.innerHTML = marqueeText
}

// here we actually run our makeMarquee function
makeMarquee()



// funcion for menu toggle
 $('.burger').on('click',function() {
  
 $('.menu').toggleClass('open')
  
 return false
  
})
