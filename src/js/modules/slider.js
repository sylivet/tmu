import Splide from "@splidejs/splide";
//import "../../styles/slider-news.scss";
//import "../../styles/slider-featured.scss";


const splideArr = [];
const navInnerNavs = document.querySelectorAll('.nav-inner')


if (document.querySelectorAll(".slider--frugal-style").length) {
  document.addEventListener("DOMContentLoaded", function () {
    for (
      let i = 0;
      i < document.querySelectorAll(".slider--frugal-style").length;
      i++
    ) {
      splideArr.push(
        new Splide(document.querySelectorAll(".slider--frugal-style")[i], {
          type: "slide",
          //direction: "ttb",
          //autoplay: "true",
          pagination: false,
          arrows: false,
          //perPage: 8,
          //perMove: 1,
          resetProgress: true,
          drag: "free",
          //focus: 0,
          interval: 2000,
          autoWidth: true,
          autoHeight: true,
          height: 63,

          breakpoints: {
            1024: {
              direction: "ttb",
              //height: 63 * 10
              height: 63 * navInnerNavs[i].querySelectorAll('.nav-inner__link').length

            },
          },
        })
      );
     
      splideArr[i].mount();
    }

    //console.log(splideArr);
  });
}

//---
/**
if (document.querySelector(".databank__navbar-bar")) {
  const nav = document.querySelector(".databank__navbar-bar");
  const navLists = document.querySelectorAll(".databank__navbar-link");
  const contentLists = document.querySelectorAll(
    ".databank-substance__context-wrapper"
  );
  const contentListsArr = Array.prototype.slice.call(contentLists);

  function arrangedNum() {
    let containerWidth = document.querySelector("main").offsetWidth;
    let contentWidth = document.querySelector(
      ".grid-page__allot--context"
    ).offsetWidth;

    if (contentWidth >= 970 || containerWidth >= 970) {
      return 40;
    } else if (contentWidth === 740 && containerWidth === 740) {
      return 27;
    } else {
      return 23;
    }
  }

  function scrollingToTarget(el) {
    window.scrollTo({
      top:
        el.offsetTop -
        document.querySelector(".navbar").offsetHeight -
        arrangedNum(),
      //behavior: 'smooth'
    });
  }

  function activeClassConfirm() {
    let lengthCompare = [];

    contentLists.forEach((item) => {
      let result =
        item.getBoundingClientRect().top +
          item.offsetHeight -
          nav.getBoundingClientRect().top <
        150
          ? 3000
          : item.getBoundingClientRect().top +
            item.offsetHeight -
            nav.getBoundingClientRect().top;
      lengthCompare.push(result);
    });
    lengthCompare[contentLists.length - 1] -= 1;

    if( lengthCompare[contentLists.length - 1] === 2999 ) {
      
    }

    return lengthCompare.indexOf(Math.min(...lengthCompare));
  }

  function slideNavLists(num) {
    requestAnimationFrame(() => {
      if (navLists.length) {
        splideArr[0].Components.Move.move(num, num);
      }
    });
  }

  function activeClassSetting() {
    let activeNavNum = activeClassConfirm();

    navLists.forEach((item) => {
      item.classList.remove("databank__navbar-link--active");
    });
    contentListsArr.map((item) =>
      item.classList.remove("databank-substance__context-wrapper--active")
    );

    navLists[activeNavNum].classList.add("databank__navbar-link--active");
    contentLists[activeNavNum].classList.add(
      "databank-substance__context-wrapper--active"
    );
    slideNavLists(activeNavNum);
  }

  function activeNavListsSetting(el) {
    let listTarget = 0;
    navLists.forEach((item, i) => {
      item.classList.remove("databank__navbar-link--active");

      if (item.getAttribute("data-tab") == el.getAttribute("data-tab")) {
        item.classList.add("databank__navbar-link--active");
        listTarget = i;
      }
    });
    slideNavLists(listTarget);
  }

  navLists.forEach((item) => {
    item.addEventListener("click", function () {
      activeNavListsSetting(item);
      scrollingToTarget(
        document.querySelector(
          "article[data-tab=" + item.getAttribute("data-tab") + "]"
        )
      );
    });
  });

  contentLists.forEach((item) => {
    item.addEventListener("click", function () {
      scrollingToTarget(
        document.querySelector(
          "article[data-tab=" + item.getAttribute("data-tab") + "]"
        )
      );
      activeNavListsSetting(item);
    });
  });

  window.addEventListener("scroll", function () {
    activeClassSetting();

    if (
      nav.previousElementSibling.getBoundingClientRect().top -
        nav.previousElementSibling.offsetHeight <
      60
    ) {
      nav.classList.add("databank__navbar-bar--fixed");
    } else {
      nav.classList.contains("databank__navbar-bar--fixed")
        ? nav.classList.remove("databank__navbar-bar--fixed")
        : "";
    }
    
    if(
      contentLists[contentLists.length -1].getBoundingClientRect().top +
      contentLists[contentLists.length -1].offsetHeight -
      document.querySelector('.header').offsetHeight < 
      0
    ) {
      nav.classList.add("databank__navbar-bar--hided");
    } else {
      nav.classList.contains("databank__navbar-bar--hided")
        ? nav.classList.remove("databank__navbar-bar--hided")
        : "";
    }
  });
}

//nav.previousElementSibling.style.outline = '1px solid orange'

// nav.addEventListener('click', ()=> {
// })

*/
