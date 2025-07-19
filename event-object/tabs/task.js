let tabsBox;
let tabsContents;
let tabs;

function start() {
  tabsBox = document.querySelector('.tab__navigation');
  tabsContents = [...document.querySelectorAll('.tab__content')];
  tabs = [...document.querySelectorAll('.tab')];
  listenerTabs();
}

function listenerTabs() {
  tabsBox.addEventListener('click', onClickTab);
}

function onClickTab(e) {
  const oldIdx = tabsContents.findIndex(el => el.classList.contains('tab__content_active'));
  const newIdx = [...tabsBox.children].indexOf(e.target.closest('.tab'));

  tabsContents[oldIdx].classList.remove('tab__content_active');
  tabs[oldIdx].classList.remove('tab_active');

  tabsContents[newIdx].classList.add('tab__content_active');
  tabs[newIdx].classList.add('tab_active');
}

start();