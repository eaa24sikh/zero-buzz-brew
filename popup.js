window.onload = function () {
    setTimeout(function () {
        document.getElementById("popup").style.display = "block";
    }, 4000); // 4 sekunder

    document.querySelector(".close-btn").onclick = function () {
        document.getElementById("popup").style.display = "none";
    };
};


document.querySelectorAll(".dåse").forEach((dåse) => {
    dåse.onclick = function () {
      const popupId = this.getAttribute("data-popup");
      document.getElementById(popupId).classList.add("active");
    };
  });
  
  document.querySelectorAll(".luk-popup").forEach((luk) => {
    luk.onclick = function () {
      this.closest(".popup-dase").classList.remove("active");
    };
  });
  
  window.onclick = function (event) {
    if (event.target.classList.contains("popup-dase")) {
      event.target.classList.remove("active");
    }
  };
  