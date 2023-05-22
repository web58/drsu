import {
  isEscKey,
} from './utils.js';

const headerNode = document.querySelector( '.site-header' );
const headerModalNode = document.querySelector( '.header-modal' );
const MENU_ID = 'mobile-menu';
const BURGER_OPTIONS = {
  animationSpeed: 300,
  menuId: MENU_ID,
  isOpen: openMobileMenu,
  isClose: closeMobileMenu,
};
const siteBurger = new JustBurger( BURGER_OPTIONS );

function openMobileMenu() {
  const offsetRight = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.classList.add( 'is-open-menu' );
  document.documentElement.style.paddingRight = `${offsetRight}px`;
  headerModalNode.setAttribute( 'aria-hidden', 'false' );
  headerNode.classList.add( 'site-header--open' );
  headerNode.style.paddingRight = `${offsetRight}px`;
}

function closeMobileMenu() {
  document.documentElement.classList.remove( 'is-open-menu' );
  document.documentElement.style.paddingRight = '';
  headerModalNode.setAttribute( 'aria-hidden', 'true' );
  headerNode.classList.remove( 'site-header--open' );
  headerNode.style.paddingRight = '';
}

const initHeaderMenu = () => {
  if ( !headerModalNode || !headerNode ) return;
  headerModalNode.id = MENU_ID;
  document.addEventListener( 'keydown', ( evt ) => {
    if ( isEscKey( evt ) && headerModalNode.getAttribute( 'aria-hidden' ) === 'false' ) {
      siteBurger.close();
    }
  } );
};

const observeSiteHeader = () => {
  const headerHomeNode = document.querySelector( '.site-header--home' );
  const targetTopNode = document.querySelector( '#site-top' );
  if ( !headerHomeNode || !targetTopNode ) return;
  const OBSERVE_OPTIONS = {
    rootMargin: `${headerHomeNode.clientHeight}px`,
    threshold: 0
  };

  const cb = ( entries ) => {
    entries.forEach( entry => {
      if ( !entry.isIntersecting ) {
        headerNode.classList.add( 'site-header--sticked' );
      } else {
        headerNode.classList.remove( 'site-header--sticked' );
      }
    } );
  };
  new IntersectionObserver( cb, OBSERVE_OPTIONS ).observe( targetTopNode );
};

export {
  initHeaderMenu,
  observeSiteHeader
};
