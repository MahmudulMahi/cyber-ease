
import icon from "/main-logo.svg"

export function changeTitleAndFavicon(page) {
    if (page === 'home') {
      document.title = "Cyber Ease- Home Page";
      document.querySelector("link[rel='icon']").setAttribute('href', icon );
    } else if (page === 'about') {
      document.title = "Cyber Ease- About Page";
      document.querySelector("link[rel='icon']").setAttribute('href', icon);
    }else if (page === 'technology') {
      document.title = "Cyber Ease- Technology Page";
      document.querySelector("link[rel='icon']").setAttribute('href', icon);
    }else if (page === 'contact') {
      document.title = "Cyber Ease- Contact Page";
      document.querySelector("link[rel='icon']").setAttribute('href', icon);
    }else if(page === '*'){
      document.title = "Not Found";
      document.querySelector("link[rel='icon']").setAttribute('href', icon);
    }

  }
  