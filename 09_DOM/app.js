// Create a button that adds a new list item to an unordered list every time it’s clicked.

 let inp =document.querySelector("input");
        let click =document.querySelector("button");
        let ul =document.querySelector("ul");
        

        click.addEventListener("click", ()=> {  

        let list =document.createElement("li");
        list.textContent = inp.value ;

         ul.appendChild(list);
         inp.value = "" ;
         inp.focus();
        });