export const Options = {
  SmoothScroll: {
    speed: 900,
    speedAsDuration: true,
    updateURL: false,
  },
  Modal: {
    linkAttributeName: false,
    catchFocus: true,
    closeOnEsc: true,
    backscroll: true,
  },
  Mask: {
    bodyMask: ' (___) ___ __ __',
  },
  ValidationErrors: {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: 'var(--error)',
      marginTop: '6px',
      fontSize: '12px',
      textAlign: 'left',
    },
  },
  Observer: {
    ScrollTop: {
      rootMargin: '600px',
      threshold: 1,
    },
  },
  RequestOptions: {
    HandlerURL: 'https://jsonplaceholder.typicode.com/posts',
    MethodGet: 'GET',
    MethodPost: 'POST',
  },
  Swiper: {
    Clients: {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      speed: 5000,
      allowTouchMove: false,
      observer: true,
      observeParents: true,
      autoplay: {
        enabled: true,
        delay: 1,
      },
      pagination: {
        el: '.main-partners__pagination',
        clickable: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 6,
        },
      },
    },
    Certificates: {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.certificates__pagination',
        clickable: false,
      },
      navigation: {
        prevEl: '.certificates__prev',
        nextEl: '.certificates__next',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    },
    Portfolio: {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.portfolio__pagination',
        clickable: false,
      },
      navigation: {
        prevEl: '.portfolio__prev',
        nextEl: '.portfolio__next',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    },
  },
};
