// Remove external stylesheets
function removeExternalStylesheets() {
    // Get all stylesheet links and style elements
    const styleLinks = document.querySelectorAll('link[rel="stylesheet"]');
    const styleElements = document.querySelectorAll('style');
    
    // Remove external stylesheets except for chrome extension ones
    styleLinks.forEach(link => {
        const href = link.href || '';
        if (!href.includes('chrome-extension://')) {
            link.remove();
        }
    });

    // Remove style elements except those with gg-redesigned ID
    styleElements.forEach(style => {
        const id = style.id || '';
        if (!id.includes('gg-redesigned')) {
            style.remove();
        }
    });
}

// Initial cleanup
removeExternalStylesheets();

// Watch for DOM changes and remove any new external stylesheets
const observer = new MutationObserver(() => {
    removeExternalStylesheets();
});

// Start observing the entire document
observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});

// Run cleanup when DOM is ready and when page fully loads
document.addEventListener('DOMContentLoaded', removeExternalStylesheets);
window.addEventListener('load', removeExternalStylesheets);