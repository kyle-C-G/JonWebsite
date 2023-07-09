// Get all the elements with class "popup"
var popupImages = document.getElementsByClassName("popup");
var nav = document.getElementById("navbar");

// Iterate over each popup image and add a click event listener
for (var i = 0; i < popupImages.length; i++) {
  popupImages[i].addEventListener("click", function() {
    var modal = this.nextElementSibling;
    var modalImg = modal.getElementsByClassName("modal-content")[0];
    var captionText = modal.getElementsByClassName("caption")[0];

    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    nav.style.display = "none";
  });
}

// Get the <span> element that closes the modal
var closeButtons = document.getElementsByClassName("close");

// Iterate over each close button and add a click event listener
for (var j = 0; j < closeButtons.length; j++) {
  closeButtons[j].onclick = function() {
    var modal = this.parentElement;
    modal.style.display = "none";
    nav.style.display = "flex";
  };
}
