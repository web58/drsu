import {
  Options,
} from './modules/options.js';

import {
  iosVhFix,
  initSlider,
  addLeadZeroClass
} from './modules/utils.js';

import {
  initModal,
} from './modules/modal.js';

import {
  initScrollTop
} from './modules/scroll-top.js';

import {
  validateForms
} from './modules/validate.js';

import {
  initHeaderMenu,
  observeSiteHeader
} from './modules/header-menu.js';

// все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
// в load следует добавить скрипты, не участвующие в работе первого экрана
document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener( 'load', () => {
    initModal();
    initScrollTop();
    validateForms();
    initHeaderMenu();
    observeSiteHeader();
    addLeadZeroClass( document.querySelectorAll( '[data-num="service"]' ), 'services-item__num--lead-zero' );
    addLeadZeroClass( document.querySelectorAll( '[data-num="steps"]' ), 'decor-ol__item--lead-zero' );
    initSlider( '.clients__slider', Options.Swiper.Clients );
    initSlider( '.certificates__slider', Options.Swiper.Certificates );
    initSlider( '.portfolio__slider', Options.Swiper.Portfolio );
  } );
} );
