function showNotification(event) {
    event.preventDefault(); //stopper dig fra at tilmelde med det samme

    //  vis notifikationen
    var notification = document.getElementById('notification');
    notification.style.display = 'block';

    // får notifikationen til at lukke når du trykke udenfor kassen
    document.addEventListener('click', function closeNotification(e) {
        // sikre at klikket var udenfor kassen
        if (!notification.contains(e.target)) {
            notification.style.display = 'none'; // gemmer notifikationen
            document.removeEventListener('click', closeNotification); // fjerner eventlistener når notifikationen ikke er fremme
        }
    });
}