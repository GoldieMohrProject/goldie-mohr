 
    let slide_data = [
        {
          src:
            "images/2.JPG",
          title: "Slide 1",
          copy: "DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT."
        },
        {
          src:
            "images/3.jpg",
          title: "Slide 2",
          copy: "DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT."
        },
        {
          src:
            "https://images.unsplash.com/photo-1504271863819-d279190bf871?ixlib=rb-0.3.5&s=7a2b986d405a04b3f9be2e56b2be40dc&auto=format&fit=crop&w=334&q=80",
          title: "Slide 3",
          copy: "DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT."
        },
        {
          src:
            "https://images.unsplash.com/photo-1478728073286-db190d3d8ce6?ixlib=rb-0.3.5&s=87131a6b538ed72b25d9e0fc4bf8df5b&auto=format&fit=crop&w=1050&q=80",
          title: "Slide 4",
          copy: "DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT."
        }
      ];
      let slides = [],
        captions = [];
      
      let autoplay = setInterval(function () {
        nextSlide();
      }, 5000);
      let container = document.getElementById("sld-container");
      let leftSlider = document.getElementById("left-col");
      // console.log(leftSlider);
      let down_button = document.getElementById("down_button");
       let caption = document.getElementById('slider-caption');
       let caption_heading = caption.querySelector('.sld-caption-heading');
      
      down_button.addEventListener("click", function (e) {
        e.preventDefault();
        clearInterval(autoplay);
        nextSlide();
        autoplay;
      });
      
      for (let i = 0; i < slide_data.length; i++) {
        let slide = document.createElement("div"),
          caption = document.createElement("div"),
          slide_title = document.createElement("div");
      
        slide.classList.add("slide");
        slide.setAttribute("style", "background:url(" + slide_data[i].src + ")");
        caption.classList.add("sld-caption");
        slide_title.classList.add("sld-caption-heading");
        slide_title.innerHTML = "<h1>" + slide_data[i].title + "</h1>";
      
        switch (i) {
          case 0:
            slide.classList.add("current");
            caption.classList.add("current-caption");
            break;
          case 1:
            slide.classList.add("next");
            caption.classList.add("next-caption");
            break;
          case slide_data.length - 1:
            slide.classList.add("previous");
            caption.classList.add("previous-caption");
            break;
          default:
            break;
        }
        caption.appendChild(slide_title);
        caption.insertAdjacentHTML(
          "beforeend",
          '<div class="sld-caption-subhead"><span>dolor sit amet, consectetur adipiscing elit. </span></div>'
        );
        slides.push(slide);
        captions.push(caption);
        leftSlider.appendChild(slide);
        container.appendChild(caption);
      }
      // console.log(slides);
      
      function nextSlide() {
        caption.classList.add('offscreen');
      
        slides[0].classList.remove("current");
        slides[0].classList.add("previous", "change");
        slides[1].classList.remove("next");
        slides[1].classList.add("current");
        slides[2].classList.add("next");
        let last = slides.length - 1;
        slides[last].classList.remove("previous");
      
        captions[0].classList.remove("sld-current-caption");
        captions[0].classList.add("previous-caption", "change");
        captions[1].classList.remove("next-caption");
        captions[1].classList.add("sld-current-caption");
        captions[2].classList.add("next-caption");
        let last_caption = captions.length - 1;
      
        // console.log(last);
        captions[last].classList.remove("previous-caption");
      
        let placeholder = slides.shift();
        let captions_placeholder = captions.shift();
        slides.push(placeholder);
        captions.push(captions_placeholder);
      }
      
      let heading = document.querySelector(".sld-caption-heading");
      
      // https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
      function whichTransitionEvent() {
        var t,
          el = document.createElement("fakeelement");
      
        var transitions = {
          transition: "transitionend",
          OTransition: "oTransitionEnd",
          MozTransition: "transitionend",
          WebkitTransition: "webkitTransitionEnd"
        };
      
        for (t in transitions) {
          if (el.style[t] !== undefined) {
            return transitions[t];
          }
        }
      }
      
      var transitionEvent = whichTransitionEvent();
      caption.addEventListener(transitionEvent, customFunction);
      
      function customFunction(event) {
        caption.removeEventListener(transitionEvent, customFunction);
        console.log("animation ended");
      
        // Do something when the transition ends
      }