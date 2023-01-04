const styles = `
    /* Hide big photo on profile page. */
    .pv-top-card-profile-picture__image {
        visibility: hidden;
    }

    /* 
     * Hide small photo visible when scrolling down on profile page
     * and photos on search result page.
     */
    .presence-entity__image {
        visibility: hidden;
    }
`;

const el = document.createElement("style");
el.innerText = styles;
document.head.appendChild(el);
