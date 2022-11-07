const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="./style.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@2.0.9/css/boxicons.min.css" />
    <footer>
        <div class="footer_desc">
        <div class="footer-flex">
            <img src="./assets/logo.png" alt="logo" class="logo">
            <div>
            <div class="title">Google Developer Student Clubs</div>
            <div class="subtitle">St Joseph Engineering College, Mangalore</div>
            </div>
        </div>
        <h2>Connect With Us</h2>
        <div class="icons">
            <a href="mailto:gdsc@sjec.ac.in" class="join_btn">
            <i class="bx bxs-envelope"></i>
            </a>
            <a href="https://www.instagram.com/gdsc.sjec/" class="join_btn">
            <i class="bx bxl-instagram"></i>
            </a>
            <a href="https://in.linkedin.com/company/gdsc-sjec" class="join_btn">
            <i class="bx bxl-linkedin-square"></i>
            </a>
            <a href="https://github.com/GDSC-SJEC" class="join_btn">
            <i class="bx bxl-github"></i>
            </a>
        </div>
        </div>

        <div class="footer_links">
        <h2>Quick Links</h2>
        <span>
            <a href="./index.html">Home</a>
            <a href="./events.html">Events</a>
            <a href="./projects.html">Projects</a>
            <a href="./team.html">Team</a>
        </span>
        </div>

        <div class="footer-address">
        <iframe class="footer-iframe" title="address"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.804461198462!2d74.8986305!3d12.9108635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa7bf228838232d32!2sSt%20Joseph%20Engineering%20College!5e0!3m2!1sen!2sbh!4v1662715379561!5m2!1sen!2sbh"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
    </footer>
`;

class FooterElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}
customElements.define('footer-element', FooterElement);
