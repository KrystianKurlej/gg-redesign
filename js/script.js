// Remove external stylesheets
function removeExternalStylesheets() {
    const styleLinks = document.querySelectorAll('link[rel="stylesheet"]');
    
    styleLinks.forEach(link => {
        if (!link.href.includes('chrome-extension://')) {
            link.remove();
        }
    });

    const styleElements = document.querySelectorAll('style');
    styleElements.forEach(style => {
        if (!style.id.includes('gg-redesigned')) {
            style.remove();
        }
    });
}

removeExternalStylesheets();

const observer = new MutationObserver((mutations) => {
    removeExternalStylesheets();
    addInputPlaceholder(document.querySelector('#sr-contact-list-search .search-input'), 'Szukaj...');
});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});

document.addEventListener('DOMContentLoaded', removeExternalStylesheets);
window.addEventListener('load', removeExternalStylesheets);