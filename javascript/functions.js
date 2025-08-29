function setMinHeightToTallest() {
    const elements = document.querySelectorAll('.project-info');
    let maxHeight = 0;

    // Reset min-height to auto to measure natural height
    elements.forEach(el => el.style.minHeight = 'auto');

    elements.forEach(el => {
        const height = el.offsetHeight;
        if (height > maxHeight) maxHeight = height;
    });

    elements.forEach(el => {
        el.style.minHeight = maxHeight + 'px';
    });
    console.log('Set min-height to:', maxHeight);
}

// Call the function after DOM is loaded
window.addEventListener('DOMContentLoaded', setMinHeightToTallest);