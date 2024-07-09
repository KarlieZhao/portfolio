document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function () {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            document.body.appendChild(overlay);

            const enlargedImg = document.createElement('img');
            enlargedImg.src = this.src;
            enlargedImg.classList.add('enlarged');
            document.body.appendChild(enlargedImg);

            overlay.addEventListener('click', function () {
                document.body.removeChild(overlay);
                document.body.removeChild(enlargedImg);
            });

            enlargedImg.addEventListener('click', function () {
                document.body.removeChild(overlay);
                document.body.removeChild(enlargedImg);
            });
        });
    });

    var iframes = document.querySelectorAll("iframe");
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].width = $(window).width() * 0.9;
        iframes[i].height = (iframes[i].width / 49) * 27 + 20;
    }
});

$(window).resize(function () {
    var iframes = document.querySelectorAll("iframe");
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].width = $(window).width() * 0.9;
        iframes[i].height = (iframes[i].width / 49) * 27 + 20;
    }
});