export const card = () => {
    const container = document.createElement('div');
    container.style.cssText = "width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;";

    const cercle = document.createElement('div');
    cercle.style.cssText = "width: 100px; height: 100px; background-color: #f5f5f5; border-radius: 50%; display: flex; justify-content: center; align-items: center;";

    const text = document.createElement('p');
    text.style.cssText = "font-size: 30px;";
    text.textContent = "Hello";


    const btn = document.createElement("button");
    btn.textContent = "More";


    const root = document.getElementById("root");
    container.appendChild(cercle);
    container.appendChild(text);
    container.appendChild(btn);
    root.appendChild(container);
}