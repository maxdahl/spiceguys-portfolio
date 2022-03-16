window.onload = function (ev) {
  const figures = document.querySelectorAll("figure");

  let timeout = 0;

  for (let i = 0; i < figures.length; i++) {
    const fig = figures[i];
    window.setTimeout(() => {
      fig.style.opacity = 1;
      fig.classList.add("fade");
    }, timeout);

    timeout += 100;
  }
};
