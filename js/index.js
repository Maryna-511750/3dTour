document.addEventListener('partialsLoaded', async () => {
    await import('./gallery.js');
    await import('./nav.js');
});