document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.getElementById("cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
});

document.addEventListener('keydown', function (e) {
    const bgMusic = document.getElementById('bg-music');

    // P = Play/Pause music
    if (e.key.toLowerCase() === 'm') {
        if (bgMusic.paused) {
            bgMusic.volume = 0.3;
            bgMusic.play().catch(() => {
                console.log("User interaction required to play audio.");
            });
        } else {
            bgMusic.pause();
        }
    }

    // N = Next page
    if (e.key.toLowerCase() === 'n') {
        const overlay = document.getElementById('transition-overlay');
        overlay.style.display = 'block';
        overlay.style.opacity = '1';
        setTimeout(() => {
            window.location.href = 'gallery.html'; // Change this to your next page
        }, 1000);
    }
});