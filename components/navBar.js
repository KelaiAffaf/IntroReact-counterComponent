export const  navBar = () => {
    // creat navbar
    const navbar = document.createElement('nav');
    // create a elemnt 
    const a1= document.createElement('a');
    a1.textContent = "Home";
    const a2= document.createElement('a');
    a2.textContent = "About";
    const a3= document.createElement('a');
    a3.textContent = "Contact";
    // append a to navbar
    navbar.appendChild(a1);
    navbar.appendChild(a2);
    navbar.appendChild(a3);
    // add class to navbar
    navbar.classList.add('navbar');
    // get root element from html
    const root = document.getElementById("root");
    // add navbar to root
    root.appendChild(navbar);
    //  style navbar
    navbar.style.cssText = "background-color: #f5f5f5; padding: 10px; display: flex; justify-content: space-around;";
    

}
