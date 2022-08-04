//ELEMENT
const hamburger = document.querySelectorAll(".hamburger div.ham");
const logo = document.querySelector(".logo img");
const projects = document.querySelector(".projects main");

//Create a box element
const box: HTMLParagraphElement | null = document.createElement("div");
box.classList.add("box");
const p = document.createElement("p");
p.classList.add("box-paragraph");
// const img = document.createElement('img');
// img.setAttribute('src','../assets/logoblack.svg');
// box.appendChild(img);
box.appendChild(p);
document.body.appendChild(box);

function boxLeaveText(text: string): void {
  box.querySelector("p").textContent = text;
}

const element = {
  hamburger,
  logo,
  box,
  boxLeaveText,
  projects,
};

export default element;
