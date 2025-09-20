/** Change the text of a <p> tag with id "myText" to "Hello JavaScript!".

Change the background color of the whole page to "lightblue".

Create a button <button>Click me</button> and when clicked, it changes the text inside a <h1> tag. **/

//Question 1 .
// let p = document.querySelector("#myText");
// p.textContent = "Hello JavaScript!"

//Question 2 .
// document.body.style.background = "lightblue"

//Question 3 .
  //  let h1 = document.querySelector("h1");
  //   let btn= document.querySelector("button")
    
  //       btn.addEventListener("click", function () {
  //         h1.textContent = "h1 text changed"
            
  //       });


        //Question 4 . Create an input and a button. Show "Hello, [name]!" in <p> when button clicked.

        let inp= document.querySelector("input");
        let btn= document.querySelector("button");
        let p= document.querySelector("p");
        btn.addEventListener("click", function () {
        console.log( inp.value);
        
         p.textContent = `Hello ${inp.value} !`
        });
        