const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="./style.css" />
    <header>
        <nav>
            <a class="navbar_brand" href="./index.html">
                <img src="./assets/logo.png" loading="lazy" alt="Logo" />
                <span>Google DSC SJEC</span>
            </a>

            <button class="menu_toggle">
                <span class="menu_toggle_icon"></span>
            </button>

            <div class="navbar_menus">
                <a page="home" href="/index.html" class="nav_link">Home</a>
                <a page="events" href="./events.html" class="nav_link">Events</a>
                <a page="projects" href="./projects.html" class="nav_link">Projects</a>
                <a page="team" href="./team.html" class="nav_link">Team</a>
                <a class="faq-link" target="_blank" href="https://faq.gdscsjec.in">FAQ</a>
                <a class="join-link" target="_blank"
                href="https://gdsc.community.dev/st-joseph-engineering-college-mangaluru/">Join
                Us</a>
            </div>
        </nav>
    </header>
`;

class HeaderElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.shadowRoot
			.querySelector(`a[page=${this.getAttribute('page')}]`)
			.classList.add('active');
		const menuBtn = this.shadowRoot.querySelector('button.menu_toggle');
		menuBtn.addEventListener('click', () => {
			menuBtn.classList.toggle('active');
		});
	}
}
customElements.define('header-element', HeaderElement);
