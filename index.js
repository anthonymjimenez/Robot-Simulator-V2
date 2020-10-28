document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();
  
  // ADD CODE HERE!
  let movesContainer = document.querySelector('#moves-container')
  
  document.onkeydown = function() {
    let direction;
    switch(window.event.keyCode) { 
      case 37: 
        //left key
        direction = 'left'
        break;
      case 38: 
        //up key
        direction = 'up'
        break;
      case 39: 
      // right key
        direction = 'right'
        break;
      case 40: 
        // down key7
        direction = 'down'
      break;
  }
  setMoveLi(direction)
}
  function setMoveLi(direction) {
    if(!direction) return
    
    let node = document.createElement("LI"); 
    node.textContent = direction;
    node.addEventListener('click', () => node.remove())
    movesContainer.appendChild(node)
  }

  moveButton = document.querySelector('#move-button')

  moveButton.addEventListener("click", () => { 
   const firstLi = movesContainer.querySelector("li")
    if(firstLi) {
      const direction = firstLi.textContent.toLowerCase()
      move(direction)
      firstLi.remove()
    }
  })


});
