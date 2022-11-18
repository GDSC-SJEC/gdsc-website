import { leadMemberDetails, coreMemberDetails } from './team.data.js';

const template = document.createElement('template');
const wrapper = document.createElement('div');
const container = document.createElement('template');

Object.values(leadMemberDetails).map((card) => {
	container.innerHTML += `            
        <div class="team-card" data-type="lead" data-member="${card.name}">
            <img class="team-image" src="${card.image_url}" alt="${card.name}" />
            <div class="team-body">
                <div class="team-card-title">${card.name}</div>
                <div class="team-card-description">${card.designation}</div>
            </div>
        </div>
    `;
});

Object.values(coreMemberDetails).map((card) => {
	container.innerHTML += `            
        <div class="team-card" data-type="core" data-member="${card.name}">
            <img class="team-image" src="${card.image_url}" alt="${card.name}" />
            <div class="team-body">
                <div class="team-card-title">${card.name}</div>
                <div class="team-card-description">${card.designation}</div>
            </div>
        </div>
    `;
});

class TeamElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		wrapper.classList.add('cards-container');
		wrapper.appendChild(container.content.cloneNode(true));
		template.innerHTML =
			'<link rel="stylesheet" href="./style.css" /><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@2.0.9/css/boxicons.min.css" />' +
			wrapper.outerHTML;
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.shadowRoot.querySelectorAll('.team-card').forEach((card) => {
			card.addEventListener('click', () => {
				this.toggleModal(card);
			});
		});
	}

	toggleModal(card) {
		const type = card.getAttribute('data-type');
		const name = card.getAttribute('data-member');
		let guidePopup = document.getElementById('modal-container');
		let modal_image = document.getElementById('image');
		let modal_name = document.getElementById('modal-name');
		let modal_designation = document.getElementById('modal-designation');
		let modal_description = document.getElementById('modal-description');
		let modal_email = document.getElementById('modal-email');
		let modal_linkedin = document.getElementById('modal-linkedin');
		let modal_github = document.getElementById('modal-github');

		let person;
		if (type === 'lead') {
			person = Object.values(leadMemberDetails)[0];
		} else {
			person = Object.values(coreMemberDetails).filter(
				(card) => card.name === name,
			)[0];
		}
		modal_name.innerHTML = person.name;
		modal_image.src = person.image_url;
		modal_designation.innerHTML = person.designation;
		modal_description.innerHTML = person.description;
		modal_email.href = `mailto:${person.emailLink}`;
		modal_linkedin.href = person.linkedinLink;
		modal_github.href = person.githubLink;

		guidePopup.style.display = 'block';
		document.getElementById('overlay').style.visibility = 'visible';
		document.querySelector('body').style.overflowY = 'hidden';
	}
}
customElements.define('team-element', TeamElement);
