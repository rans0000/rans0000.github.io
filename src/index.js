import './style.scss';

function component() {
    const element = document.createElement('div');

    element.innerHTML = "Hello webpack ss";
    element.classList.add('hello');

    return element;
}

document.getElementById("wrapper-all").appendChild(component());