document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
    }
});
// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});