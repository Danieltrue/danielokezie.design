import element from "./element";

export function addCard(): void {
  let projects = [
    {
      title: "Content Management system",
      description:
        "I build this CMS project which could handle blog content - post , delete , update and fetch content the project took me 2weeks to develop due to my time going to school and building it, my challenge building the project was the large code base which i was not use to back then but i was able to grab the bull by it horn and i built the project overcoming my fear of large code base.",
      language: ["Nodejs", "Express", "MongoDB", "Handlebars"],
    },
    {
      title: "Content Management system",
      description:
        "I build this CMS project which could handle blog content - post , delete , update and fetch content the project took me 2weeks to develop due to my time going to school and building it, my challenge building the project was the large code base which i was not use to back then but i was able to grab the bull by it horn and i built the project overcoming my fear of large code base.",
      language: ["Nodejs", "Express", "MongoDB", "Handlebars"],
    },
    {
      title: "Ecommerce API (Rest)",
      description:
        "This is a simple ecommerce api which i build recently the project is a part of my current journey, simple post - delete - update - fetch ecommerce product my challenge during the project was my setup and how i miscalculated my development time it took me a week to build the whole thing it was just nice finishing this project.",
      language: ["Nodejs", "Express", "MongoDB", "JWT"],
    },
  ];

  const el = projects.map((data, index) => {
            const divCard = document.createElement('div');
            divCard.classList.add('card');
            const h4 = document.createElement('h4');
            h4.textContent = data.title;
            const p = document.createElement('p');
            p.textContent = data.description;
            divCard.appendChild(h4).appendChild(p);
            const divLink = document.createElement('div');
            const a = document.createElement('a');
            a.innerHTML = "<i class='bx bxl-github'></i>";
            divLink.appendChild(a);
            divCard.appendChild(divLink);
            const ul = document.createElement('ul');
            ul.classList.add('technologies');
            ul.innerHTML = `
                ${data.language.map((lang) => `<li>${lang}</li>`)}
            `;
            divCard.appendChild(ul);
          //
          element.projects.appendChild(divCard);

  });

}

