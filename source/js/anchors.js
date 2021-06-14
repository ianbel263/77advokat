'use strict';
(function () {
  var NO_DESKTOP_WIDTH = 1023;
  var links = document.querySelectorAll('a[href*="#"]');

  var getAnchors = function (arr) {
    var anchors = [];
    for (var a = 0; a < arr.length; a++) {
      if (arr[a].getAttribute('href').length > 1) {
        anchors.push(arr[a]);
      }
    }
    return anchors;
  };

  var smoothScroll = function (arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        var blockID = evt.target.getAttribute('href').substr(1);
        var reegExp = /slide/;

        if (reegExp.test(blockID)) {
          var tab = document.querySelector('#' + blockID);
          var allTabs = tab.parentNode.children;
          var tabId = tab.getAttribute('data-slide');
          var tabItem = document.querySelector('#' + tabId);
          var tabItems = tabItem.parentNode.children;
          var tabTablet = document.querySelector('[data-id="' + blockID + '"]');
          var tabsTablet = tabTablet.parentNode.children;

          for (var j = 0; j < allTabs.length; j++) {
            allTabs[j].classList.remove('land__button--active');
            tabItems[j].classList.remove('land__item--active');
            tabItems[j].classList.remove('land__item--active');
            tabsTablet[j].classList.remove('land__item-opened');
            tabsTablet[j].classList.remove('land__item--active');

            if (!tabsTablet[j].classList.contains('land__item-closed')) {
              tabsTablet[j].classList.add('land__item-closed');
            }
          }

          tab.classList.add('land__button--active');
          tabItem.classList.add('land__item--active');
          tabTablet.classList.remove('land__item-closed');
          tabTablet.classList.add('land__item-opened');
          tabTablet.classList.add('land__item--active');
        }

        if (window.matchMedia('(max-width: ' + NO_DESKTOP_WIDTH + 'px)').matches && reegExp.test(blockID)) {
          tabTablet.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        } else {
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    }
  };

  if (links) {
    smoothScroll(getAnchors(links));
  }
})();
