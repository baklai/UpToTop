function createToTopBtn(x, y, image) {
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.right = x + 'px';
  div.style.bottom = y + 'px';
  div.style.boxShadow = '0 0 8px rgba(0, 0, 0, 0.5)';
  div.style.width = '40px';
  div.style.height = '40px';
  div.style.textAlign = 'center';
  div.style.borderRadius = '20px';
  div.style.cursor = 'pointer';
  div.style.opacity = '0.5';
  div.style.filter = 'alpha(opacity=50)';
  div.style.transition = 'all 0.4s';
  div.style.visibility = 'hidden';
  div.onmouseover = function () {
    div.style.opacity = '1';
    div.style.filter = 'alpha(opacity=100)';
  };
  div.onmouseout = function () {
    div.style.opacity = '0.5';
    div.style.filter = 'alpha(opacity=50)';
  };
  const img = document.createElement('img');
  img.style.width = '40px';
  img.style.height = '40px';
  img.style.textAlign = 'center';
  img.src = image;
  img.setAttribute('alt', ' ');
  div.appendChild(img);
  document.body.append(div);
  return div;
}

function scrollToTop(scrollDuration) {
  let scrollHeight = window.scrollY,
    scrollStep = Math.PI / (scrollDuration / 15),
    cosParameter = scrollHeight / 2;
  let scrollCount = 0,
    scrollMargin,
    scrollInterval = setInterval(function () {
      if (window.scrollY != 0) {
        scrollCount = scrollCount + 1;
        scrollMargin =
          cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
        window.scrollTo(0, scrollHeight - scrollMargin);
      } else clearInterval(scrollInterval);
    }, 15);
}

function initToTopBtn(x, y) {
  const IMG_BTN =
    'data:image/png;base64,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';
  let btnToTop = createToTopBtn(x, y, IMG_BTN);
  window.addEventListener('scroll', function () {
    if (pageYOffset > 100) {
      btnToTop.style.visibility = 'visible';
    } else {
      btnToTop.style.visibility = 'hidden';
    }
  });

  btnToTop.addEventListener('click', function () {
    scrollToTop(1000);
    return false;
  });
}
