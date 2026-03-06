
var divs = ["details1", "details2", "details3", "details4", "details5", "details6"];
    var visibleDivId = null;
    function divVisibility(divId) {
      if(visibleDivId === divId) {
        visibleDivId = null;
      } else {
        visibleDivId = divId;
      }
      hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
      var i, divId, div;
      for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }
    document.addEventListener("DOMContentLoaded", function () {
      // Funcționalitate pentru butoanele de stea
      const stars = document.querySelectorAll(".star-icon");
      stars.forEach((star) => {
        star.addEventListener("click", function () {
          if (star.src.includes("star-empty.png")) {
            star.src = "images/steagalbena.png"; 
          } else {
            star.src = "images/star-empty.png"; 
          }
        });
      });
    
      // Funcționalitate pentru butoanele de plus
      const pluses = document.querySelectorAll(".plus-icon");
      pluses.forEach((plus) => {
        plus.addEventListener("click", function () {
          if (plus.src.includes("plus-circle.png")) {
            plus.src = "images/minus-circle.png"; 
          } else {
            plus.src = "images/plus-circle.png"; 
          }
        });
      });
    });
    