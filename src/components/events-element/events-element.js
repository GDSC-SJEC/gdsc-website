import { eventCardDetails } from './events.data.js';

const template = document.createElement('template');
const wrapper = document.createElement('div');
const container = document.createElement('template');

if (eventCardDetails.length > 0) {
	Object.values(eventCardDetails).map((card) => {
		container.innerHTML += `            
            <div class="event-card">
                <img class="event-image" src="${card.image_url}" alt="${card.title}" />
                <div class="event-body">
                    <div class="event-card-title">${card.title}</div>
                    <span class="event-card-datetime">${card.datetime}</span>
                    <div class="event-card-description">${card.description}</div>
                </div>
            </div>
        `;
	});
} else {
	wrapper.innerHTML = `No upcoming events`;
}

class EventsElement extends HTMLElement {
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
customElements.define('events-element', EventsElement);
