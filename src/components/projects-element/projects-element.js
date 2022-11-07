import { projectCardDetails } from './projects.data.js';

const template = document.createElement('template');
const wrapper = document.createElement('div');
const container = document.createElement('template');

if (projectCardDetails.length > 0) {
	Object.values(projectCardDetails.reverse()).map((card) => {
		container.innerHTML += `            
            <div class="project-card">
                <img class="project-image" src="${card.image_url}" alt="${
			card.title
		}" />
                <div class="project-body">
                    <div class="project-card-title">${card.title}</div>
					<div class="project-card-description">${card.description}</div>
					<a target="_blank" class="project-card-link" href="${
						card.github_link
					}"><i class="bx bxl-github bx-sm"></i><span>View Source</span></a>
					${
						card.site_link
							? `<a target="_blank" class="project-card-link" href="${card.site_link}"><i class="bx bx-link-external bx-sm"></i><span>View Site</span></a>`
							: ''
					}
					${
						card.game_link
							? `<a target="_blank" class="project-card-link" href="${card.game_link}"><i class="bx bx-play bx-sm"></i><span>Play Game</span></a>`
							: ''
					}
					${
						card.app_link
							? `<a target="_blank" class="project-card-link" href="${card.app_link}"><i class="bx bx-download bx-sm"></i><span>Download App</span></a>`
							: ''
					}
				</div>
            </div>
        `;
	});
} else {
	wrapper.innerHTML = `No upcoming projects`;
}

class ProjectsElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		wrapper.classList.add('cards-container');
		wrapper.appendChild(container.content.cloneNode(true));
		template.innerHTML =
			'<link rel="stylesheet" href="./style.css" /><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@2.0.9/css/boxicons.min.css" />' +
			wrapper.outerHTML;
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}
customElements.define('projects-element', ProjectsElement);
