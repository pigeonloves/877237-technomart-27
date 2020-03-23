      var link = document.querySelector('.open-modal-btn');
      var popup = document.querySelector('.modal-write-to-us');
      var close = popup.querySelector('.modal-close');
      var form = popup.querySelector('form');
      var login = popup.querySelector('[name=login]');
      var mail = popup.querySelector('[name=mail]');
      var textarea = popup.querySelector('[name=textletter]');

      var isStorageSupport = true;
      var storage = '';

      try {
        storage = localStorage.getItem('login');
      } catch (err) {
        isStoragesupport = false;
      }

      link.addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.classList.add('modal-show');

        if (storage) {
          login.value = storage;
          mail.focus();
        } else {
          login.focus();
        }
      });

      close.addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.classList.remove('modal-show');
        popup.classList.remove('modal-error');
      });

      form.addEventListener ('submit', function (evt) {
        if (!login.value || !mail.value || !textarea.value) {
          evt.preventDefault();
          popup.classList.remove('modal-error');
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add('modal-error');
        } else {
          if (isStorageSupport) {
            localStorage.setItem('login', login.value);
          }
        }
      });

      window.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
          if (popup.classList.contains('modal-show')) {
            evt.preventDefault();
            popup.classList.remove('modal-show');
            popup.classList.remove('modal-error');
          }
        }
      });

      var mapImg = document.querySelector('.map');
      var mapPopup = document.querySelector('.modal-map');
      var mapClose = mapPopup.querySelector('.modal-close');
      var mapBig = mapPopup.querySelector('.big-map');

      mapImg.addEventListener('click', function (evt) {
        evt.preventDefault();
        mapPopup.classList.add('modal-show');
        mapBig.classList.add('visually-hidden');
      });

      mapClose.addEventListener('click', function (evt) {
        evt.preventDefault();
        mapPopup.classList.remove('modal-show');
      });

      window.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
          if (mapPopup.classList.contains('modal-show')) {
            evt.preventDefault();
            mapPopup.classList.remove('modal-show');
          }
        }
      });

      var cartLink = document.querySelector("a.modal-buy");
      var cartPopup = document.querySelector(".modal-cart");
      var cartClose = cartPopup.querySelector(".modal-close");

      cartLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal-show-cart");
      });

      cartClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.remove("modal-show-cart");
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          if (cartPopup.classList.contains("modal-show-cart")) {
            evt.preventDefault();
            cartPopup.classList.remove("modal-show-cart");
          }
        }
      });    