export const counterComponent = () =>  {

    //  creat container
    const container = document.createElement('div');
    container.style.cssText = "display: flex; justify-content: center; align-items: center;";
    container.classList.add("container-counter")
    // style container 
    // container.classList.add('container');
    // creat new button 
    const btn = document.createElement("button");
    btn.textContent = "Click me";
    // cree div to put the text
    const p = document.createElement("p");
    p.textContent=0
    p.style.fontSize = "30px";
    //  get root element from html 
    const root = document.getElementById("root");
    // counter
    let counter = 0;
    btn.addEventListener("click", () => {
        counter++;
        p.textContent = counter;
        if(counter==10){
            let btnReset = document.createElement("button");
            btnReset.textContent = "Reset";
            btnReset.style.cssText = "margin: 10px;";
            container.appendChild(btnReset);
            btnReset.addEventListener("click", () => {
                //  check if btn reset exist == we remove it 
                if(btnReset){
                    container.removeChild(btnReset);
                    counter = 0;
                    p.textContent = counter;
            }
            });

        }
    });
      // add text to container
      container.appendChild(p);
    // add button to container
    container.appendChild(btn);
  
    // add container to root
    root.appendChild(container);


}