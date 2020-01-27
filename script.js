// Taken from Google's material icons (https://material.io/resources/icons).
const openInNewTabIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>';

function addIcons(observer) {
	// Loop through each file/directory link.
	document.querySelectorAll('.ef-directory a.ef-name-col__link').forEach(element => {
		// Don't process directories.
		if (element.querySelector('i.mimeClass-folder')) return;

		const row = element.parentElement.parentElement;
		const fileId = element.href.split('/')[4];

		// Create the button url by using Canvas's file_preview page.
		const url = `${window.location.href.split('/').slice(0, 6).join('/')}/${fileId}/file_preview`;

		// Since modifying rows breaks the built in file preview functionality, manually trigger a file preview when the
		// user clicks the original link.
		element.setAttribute('href', '#');
		element.parentElement.addEventListener('click', () => {
			row.click();
			document.querySelector('.btn-view').click();
		});

		// Add the open in new tab button to the end of the row.
		if (!row.innerHTML.includes(url.split(fileId)[0]))
			row.innerHTML = `${row.innerHTML}<a href="${url}" target="_blank">${openInNewTabIcon}</a>`;

		// Disconnect the observer so this event wont get triggered again.
		if (observer) observer.disconnect();
	});
}

window.onload = () => {
	if (window.location.hostname === 'moodle.cs.colorado.edu') {
		// We are on a Moodle assignment page.

		// Find all of the download links on the page.
		const links = document.querySelectorAll('.fileuploadsubmission > a');
		links.forEach(link => {
			// Remove the 'forcedownload=1' parameter, which is what causes the file
			// to be automatically downloaded.
			link.href = link.href.replace('forcedownload=1', '')
		});
	} else {
		// We are on a Canvas page.

		if (window.location.href.endsWith('/file_preview')) {
			// We are on a Canvas file preview page and should not do anything.
			return;
		}

		if (document.querySelector('.ef-folder-content')) {
			// We are on a Canvas file browser page.

			// Since the files don't load in with the page, use an observer to listen for when the load in.
			const observer = new MutationObserver((mutations, observer) => {
				for (const mutation of mutations) {
					if (mutation.type !== 'childList') continue;

					addIcons(observer);
				}
			});

			observer.observe(document.querySelector('.ef-directory'), {childList: true, subtree: true });

			addIcons();
		} else {
			// We are on a Canvas file preview page.

			// Find the iframe that contains the document preview (we can assume it is always the second iframe on the
			// page).
			const iframe = document.querySelectorAll('iframe')[1];

			// Find the header of the page, which we will append the button to.
			const header = document.querySelector('#content > h2');

			// Append the button's HTML to the header.
			header.innerHTML += ` <a href="${iframe.src}" target="_blank">${openInNewTabIcon}</a>`;
		}

	}
};
