document.addEventListener("DOMContentLoaded", function () {
    const banners = document.querySelectorAll(".banner");
    let currentBannerIndex = 0;

    function showNextBanner() {
        banners[currentBannerIndex].classList.remove("show");
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
        banners[currentBannerIndex].classList.add("show");
    }

    // Inicializar o carrossel exibindo o primeiro banner
    banners[currentBannerIndex].classList.add("show");

    // Definir o intervalo para exibir os próximos banners a cada 3 segundos (3000ms)
    setInterval(showNextBanner, 3000);
});

 