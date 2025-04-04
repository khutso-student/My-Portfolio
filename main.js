var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};





// active link wrappers

document.querySelector('.navlink-wrapper').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      const links = document.querySelectorAll('.navlink-wrapper a');
      links.forEach((link) => link.classList.remove('active'));
      e.target.classList.add('active');
    }
  });




  
  //-------------------------------------------mobile menu-----------------------------//

  function toggleDiv() {
    var div = document.getElementById('hidden-links');
    div.classList.toggle('closed');
    div.classList.toggle('open');
  };


//-----------------------------------------------percentage counter----------------------------------


  
  let counters = [80, 75, 50, 80, 76, 65]; // Target percentages
  let speed = 130; // Speed of counting (lower is faster)
  let resetTime = 5 * 60 * 1000; // Reset after 5 minutes
  
  function startCounters() {
      counters.forEach((target, index) => {
          let counter = 0;
          let interval = setInterval(() => {
              if (counter >= target) {
                  clearInterval(interval);
              } else {
                  counter++;
                  document.getElementById("counter" + (index + 1)).innerText = counter + "%";
              }
          }, speed);
      });
      
      setTimeout(startCounters, resetTime); // Reset counters every 5 minutes
  }
  
  startCounters();



