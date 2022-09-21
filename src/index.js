// Random Burger Generator
// url: c
const beerDisplay = document.querySelector
//GET
fetch('http://my-burger-api.herokuapp.com/burgers')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const name =  data[0].name
        console.log(name)

        
    })
        
        