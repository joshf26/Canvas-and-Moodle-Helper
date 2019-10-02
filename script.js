// Taken from Google's material icons (https://material.io/resources/icons).
const openInNewTabIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>';

window.onload = () => {
	if (window.location.hostname === 'moodle.cs.colorado.edu') {
		document.body.innerHTML = null;
	} else {
		// We are on a Canvas document page.

		// Find the iframe that contains the document preview (we can assume it is
		// always the second iframe on the page).
		const iframe = document.querySelectorAll('iframe')[1];

		// Find the header of the page, which we will append the button to.
		const header = document.querySelector('#content > h2');

		// Append the button's HTML to the header.
		header.innerHTML += ` <a href="${iframe.src}" target="_blank">${openInNewTabIcon}</a>`;
	}
};
