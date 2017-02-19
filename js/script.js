  var link = document.querySelector(".modal-search-btn");
  var popup = document.querySelector(".modal-content");

  function init() {
                  popup.style.display='none';
              }

    link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.style.display='';
    popup.classList.toggle("modal-content-show");
  });
