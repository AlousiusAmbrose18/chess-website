document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  menuIcon.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
  });
});




//Counter script
function count() {

  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 50;
      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment)}`;
        setTimeout(updateCounter, 1000);
      } else counter.innerText = target;
    };
    updateCounter();
  });
}

window.addEventListener("scroll", count);

function show() {
  var reveal = document.querySelectorAll(".reveal");

  for (var i = 1; i < reveal.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveal[i].getBoundingClientRect().top;
    var e = 190;

    if (elementTop < windowHeight - e) {
      reveal[i].classList.add("active");
    }
    else {
      reveal[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", show);


