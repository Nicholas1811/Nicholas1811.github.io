// Task 1
// Add an event listner to the button (the user drags his mouse over the button)
const elementButton = document.getElementById("justin-btn")
elementButton.addEventListener('mouseenter',()=>{
    document.getElementById('result').innerHTML = "Welcome to pink!"
    document.getElementById('result').style.backgroundColor = "pink"
    document.getElementById('result').style.color = "blue"
})
elementButton.addEventListener('mouseleave',()=>{
    document.getElementById('result').innerHTML="Don't leave me please"
      document.getElementById('result').style.backgroundColor = "black"
    document.getElementById('result').style.color = "red"
})

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
