const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add('content');
content.textContent = 'This is the glorious text-content';
container.appendChild(content);
const quote = document.createElement('p');
quote.textContent = "Hey I'm Red";
quote.style.color = 'red';
quote.classList.add('quote');
container.appendChild(quote);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const content2 =document.createElement('div');
content2.style.cssText = "border: black solid 2px; background-color: pink;";


const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
content2.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'ME TOO!';
content2.appendChild(p);
container.appendChild(content2);

const button = document.createElement('button');
button.addEventListener('click', function (e) {
    e.target.style['background-color'] = 'blue';
});
button.textContent = 'Click Me!';
container.appendChild(button);
