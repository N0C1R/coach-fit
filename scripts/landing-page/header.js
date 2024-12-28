export function renderHeader() {
  let headerHTML = `
    <div class="header-left"></div>
    <a href="./login/sign-up.html" class="coachfit-logo-link">
      <img src="../images/coach-fit-navy-white.png" class="coachfit-logo">
    </a>
      
    <div class="header-middle">
      <a href="features.html" class="features-link">Features</a>

      <a href="about-us.html" class="about-us-link">About Us</a>

      <a href="pricing.html" class="pricing-link">Pricing</a>
    </div>

    <div class="header-right">
      <div class="login-links">
        <a href="./login/sign-up.html" class="sign-up-link">Sign Up</a>
      
        <a href="./login/login.html" class="login-link">Login</a>
      </div>
    </div>
  `;

  document.querySelector('.js-header-container')
    .innerHTML = headerHTML;
}