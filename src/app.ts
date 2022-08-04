import anime from "animejs";
import element from "./element";
import { runBarbaHome } from "./barba";
import { addCard } from "./card";

//LOGO ANIMATION
function rotateLogo(): void {
  anime({
    targets: element.logo,
    rotate: "1turn",
    duration: 10000,
    loop: true,
    easing: "linear",
  });
}

rotateLogo();

// PAGE TRANSIITION
runBarbaHome();

addCard();
