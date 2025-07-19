const reveals = [...document.querySelectorAll('.reveal')];

function scrollListener() {
  document.addEventListener('scroll', activateReveal);
}

function isVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight &&
    rect.bottom >= 0
  );
}

function activateReveal() {
  reveals.forEach((el) => {
    if (isVisible(el))  {
     el.classList.add('reveal_active');
    } else if (!isVisible(el))  {
      el.classList.remove('reveal_active');
    }
  });
}

scrollListener();