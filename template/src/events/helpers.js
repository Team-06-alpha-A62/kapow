export const setActiveNav = page => {
  const navButtons = document.querySelectorAll('.nav-link');
  [...navButtons].forEach(btn =>
    btn.getAttribute('data-page') === page
      ? btn.classList.add('active')
      : btn.classList.remove('active')
  );
};
