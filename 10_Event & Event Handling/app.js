//Show an alert when a button is clicked.

// Change the text of a paragraph when the mouse hovers over it.

let click =document.querySelector("button")
    click.addEventListener("click", ()=> {
        alert("Button is clicked")
    }) 

    let p = document.querySelector("p");
    p.addEventListener("mouseover", ()=> {
       p.textContent ="hey this is changed by javascript" 
    
    });

    // Detect which key is pressed and display it in a paragraph.
    let inp=document.querySelector("input")
    inp.addEventListener("keypress",function (event) {
        console.log(event.key);
        
    })
