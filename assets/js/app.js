$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,      // Shows one slide at a time
        slidesToScroll: 1,    // Scrolls one slide at a time
        autoplay: true,       // Enables autoplay
        autoplaySpeed: 1500,  // Sets autoplay speed to 1500 milliseconds
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1  // Adjusted to show 1 slide per scroll
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1  // Adjusted to show 1 slide per scroll
                }
            }
        ]
    });
});

const navmanu = () => {
    document.getElementById('mobile-viwe').classList.toggle('max-lg:top-0');
    document.getElementById('navclick').classList.toggle('hiden-rotate');
    document.getElementById('show').classList.toggle('show-rotate');
    document.body.classList.toggle('overflow-hidden')
}

function typingEffect(elementId, text, speed) {
    const element = document.getElementById('Rank-text');
    let index = 0;
    let textLength = text.length;

    function type() {
        if (1 < textLength) {
            element.textContent += text.charAt(index);
            index++;
        } else {

            index = 0;
            element.textContent = "";
        }
    }

    setInterval(type, speed);
}
const textToType =
    "Rank for the most lucrative keywords in your industry with end-to-end SEO, from contentcreation to technical optimization. ";
typingEffect('typing-container', textToType, 50);
// videos
        function addVideoFunctionality(imageId, playBtnId, closeBtnId, videoSrc, widthClass) {
            document.getElementById(playBtnId).addEventListener('click', function () {
                var image = document.getElementById(imageId);
                var playBtn = document.getElementById(playBtnId);
                var closeBtn = document.getElementById(closeBtnId);
                var video = document.createElement('video');
                video.setAttribute('controls', 'controls');
                video.classList.add(widthClass); // Set width class dynamically
                video.innerHTML = `
                    <source src="${videoSrc}" type="video/mp4">
                    Your browser does not support the video tag.
                `;
                image.parentNode.replaceChild(video, image);
                playBtn.classList.add('hidden');
                closeBtn.classList.remove('hidden');
                video.play();

                closeBtn.addEventListener('click', function () {
                    video.parentNode.replaceChild(image, video);
                    playBtn.classList.remove('hidden');
                    closeBtn.classList.add('hidden');
                });
            });
        }

        // Apply video functionality to each slide with different widths
        addVideoFunctionality('image1', 'playBtn1', 'closeBtn1', './assets/videos/videomp4.mp4', 'w-[480px]');
        addVideoFunctionality('image2', 'playBtn2', 'closeBtn2', './assets/videos/videomp4.mp4', 'w-[480px]');
        addVideoFunctionality('image3', 'playBtn3', 'closeBtn3', './assets/videos/videomp4.mp4', 'w-[480px]');
        addVideoFunctionality('videoImg', 'videoPlay', 'closeVideo', './assets/videos/big.mp4', 'w-[748px]');
        addVideoFunctionality('akshatImg', 'akshatOpen', 'akshatClose', './assets/videos/big.mp4', 'w-[748px]');