      // let btn1= document.querySelector("#button")
      
      //     btn1.addEventListener("click", function () {
      //       alert("button is clicked!!!...")
              
      //     });

        //
         let p = document.querySelector("p");
        let inp = document.querySelector("input");
        let forms = document.querySelector("form");
        let btn = document.querySelector("button");
         btn.addEventListener("click", function (e) {
            e.preventDefault();
        //    console.log(inp.value);
           p.textContent = `Hello ${inp.value}`               
         });
        
// 
