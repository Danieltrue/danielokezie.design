import element from "./element";
export function addCard() {
    let projects = [
        {
            title: "Content Management system",
            description: " Build this CMS project which could handle blog content - post , delete , update and fetch content the project took me 2weeks to develop due to my time going to school and building it, my challenge building the project was the large code base which i was not use to back then but i was able to grab the bull by it horn and i built the project overcoming my fear of large code base.",
            language: ["Nodejs", "Express", "MongoDB", "Handlebars"],
        },
    ];
    projects.forEach((data, index) => {
        const html = `
					<div class="card">
						<h4>${data.title}</h4>
						<p>${data.description}</p>
						<div class="link">
							<a>
								<i class='bx bxl-github'></i>
							</a>
						</div>
						<ul class="technologies">
                ${data.language.map((lang) => `<li>${lang}</li>`)}
						</ul>
					</div>`;
        element.projects.innerHTML = html;
    });
}
