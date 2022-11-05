import { aboutCardDetails } from './about.data.js';

const template = document.createElement('template');
const wrapper = document.createElement('div');
const container = document.createElement('template');

Object.values(aboutCardDetails).map((card) => {
	container.innerHTML += `            
        <div class="about-card">
            <div class="about-card-lottie">
                <lottie-player src="${card.lottie_url}" background="transparent" speed="1" style="height: 250px;" loop autoplay></lottie-player>
            </div>
            <div class="about-card-title">${card.title}</div>
            <div class="about-card-description">${card.description}</div>
        </div>
    `;
});

class AboutElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		wrapper.classList.add('about-card-container');
		wrapper.appendChild(container.content.cloneNode(true));
		template.innerHTML =
			'<link rel="stylesheet" href="./style.css" />' + wrapper.outerHTML;
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}
customElements.define('about-element', AboutElement);
