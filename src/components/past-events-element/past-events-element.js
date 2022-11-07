import { pastEventCardDetails } from './past-events.data.js';

const template = document.createElement('template');
const wrapper = document.createElement('div');
const container = document.createElement('template');

if (pastEventCardDetails.length > 0) {
	Object.values(pastEventCardDetails.reverse()).map((card) => {
		wrapper.innerHTML += `
            <div class="event-card">
                <img class="event-image" src="${card.image_url}" alt="${
			card.title
		}">
                <div class="event-body">
                    <div class="event-card-title">${card.title}</div>
                    <div class="event-card-datetime">${card.datetime}</div>
                    <div class="event-card-description">${
											card.description
										}</div>
					${
						card.brochure_link
							? `<a href="${card.brochure_link}" target="_blank" class="event-card-button"><i class="bx bx-sm bx-file"></i> View Brochure</a>`
							: ''
					}
					${
						card.youtube_link
							? `<a href="${card.youtube_link}" target="_blank" class="event-card-button"><i class="bx bx-sm bxl-youtube"></i> Watch Now</a>`
							: ''
					}
                </div>
            </div>
        `;
	});
} else {
	wrapper.innerHTML = `No past events.`;
}

class PastEventsElement extends HTMLElement {
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
customElements.define('past-events-element', PastEventsElement);
