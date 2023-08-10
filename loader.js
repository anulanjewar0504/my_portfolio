let loader = document.querySelector(".loader");
        function loaded() {
            loader.classList.add("remove");
            setTimeout(() => {
                loader.style.display = "none";
            }, 1000);
        }
let scrollPercentage = () => {
    let sProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round( pos * 100 / calcHeight);
    sProgress.style.background = `conic-gradient(#c20404 ${scrollValue}%, #010105 ${scrollValue}%)`;
    progressValue.textContent = `${scrollValue}%`;
}
window.onscroll = scrollPercentage;
      
