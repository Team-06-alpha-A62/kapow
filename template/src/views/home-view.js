/**
 * Generates an HTML string for the home view.
 * @returns {string} The HTML string for the home view.
 */
export const toHomeView = () => {
  return `
    <div class="content">
      <h1 class="home-welcome">Welcome to Kapow gifs!</h1>

      <div class="home-container">
      <h2><img src="./assets/Deer.webp" alt="deer" style="width: 80px; height: 60px" /> viewer,</h2>
      <p>We've poured endless hours into enduring pointless gifs, all so you can enjoy the full app experience, not just the free trial!</p>
      <img src="./assets/giphy_enjoy.gif" alt="leonardo approve" style="height: 300px; width: 800px; border-radius: 10px" />
      <p>You're welcome!</p>
      <p>Yours,<br>Maikul & Nikola</p>
      </div>
    </div>
  `;
};
