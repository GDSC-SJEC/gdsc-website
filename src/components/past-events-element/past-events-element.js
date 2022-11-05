import { pastEventCardDetails } from './past-events.data.js';

const template = document.createElement('template');
const wrapper = document.createElement('div');
const container = document.createElement('template');

if (pastEventCardDetails.length > 0) {
	Object.values(pastEventCardDetails).map((card) => {
		wrapper.innerHTML += `
            <div class="event-card">
                <img class="event-image" src="${card.image_url}" alt="${card.title}">
                <div class="event-body">
                    <div class="event-card-title">${card.title}</div>
                    <div class="event-card-datetime">${card.datetime}</div>
                    <div class="event-card-description">${card.description}</div>
                </div>
            </div>
        `;
	});
} else {
	wrapper.innerHTML = `No past events`;
}

class PastEventsElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		wrapper.classList.add('cards-container');
		wrapper.appendChild(container.content.cloneNode(true));
		template.innerHTML =
			'<link rel="stylesheet" href="./style.css" />' + wrapper.outerHTML;
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}
customElements.define('past-events-element', PastEventsElement);
