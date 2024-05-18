/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function changeOption(option) {
  var image = document.getElementById("myImage");
  var selectedOption = document.querySelector(".selected-option");
  selectedOption.textContent = ` ${option} ⌄`; // Update selected option text

  // Set image source based on the selected option
  if (option === "144p") {
    image.src = "images/1.png";
  } else if (option === "240p") {
    image.src = "images/2.png";
  } else if (option === "480p") {
    image.src = "images/3.png";
  } else if (option === "720p") {
    image.src = "images/4.png";
  } else if (option === "1080p") {
    image.src = "images/5.png";
  } else if (option === "1440p") {
    image.src = "images/6.jpg";
  }
}
