import { projectCardDetails } from './projects.data.js';

const template = document.createElement('template');
const wrapper = document.createElement('div');
const container = document.createElement('template');

if (projectCardDetails.length > 0) {
	Object.values(projectCardDetails).map((card) => {
		container.innerHTML += `            
            <div class="project-card">
                <img class="project-image" src="${card.image_url}" alt="${card.title}" />
                <div class="project-body">
                    <div class="project-card-title">${card.title}</div>
                    <div class="project-card-description">${card.description}</div>
                    <a target="_blank" class="project-card-link" href="${card.github_link}"><i class="bx bxl-github bx-sm"></i><span>Checkout this project</span></a>
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
