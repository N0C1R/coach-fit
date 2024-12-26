const loginContainerEl = document.querySelector('.js-login-container');

function renderLoginPage() {
  let loginHTML = `
  <div class="arrow-button js-arrow-button">&#8678;</div>

  <div class="customer-login-container">
    <div class="login-message">Trainee Login</div>
    <div class="email-container">
      <div class="email-message">Email</div>
      <input placeholder="Enter your email" class="email-input">
    </div>
  
    <div class="password-container">
      <div class="password-message">Password</div>
      <input placeholder="Enter your password" class="password-input">
    </div>

    <div>
      <button class="login-button js-login-button">Login</button>
    </div>
  
    <div class="sign-up-container">
      <div class="dont-have-account-message">Don't have an account?</div>
      <a href="sign-up.html" class="sign-up-link">Sign Up</a>
    </div>
  </div>

  <div class="coach-login-container">
    <div class="login-message">Trainer Login</div>
    <div class="email-container">
      <div class="email-message">Email</div>
      <input placeholder="Enter your email" class="email-input">
    </div>
    <div class="password-container">
      <div class="password-message">Password</div>
      <input placeholder="Enter your password" class="password-input">
    </div>
    <div>
      <button class="login-button js-login-button">Login</button>
    </div>
    <div class="sign-up-container">
      <div class="dont-have-account-message">Don't have an account?</div>
      <a href="sign-up.html" class="sign-up-link">Sign Up</a>
    </div>
  </div>
  `;

  loginContainerEl.classList.add('initial');

  document.querySelector('.js-login-container')
    .innerHTML = loginHTML;
}

renderLoginPage();

const arrowButtonEl = document.querySelector('.js-arrow-button');

arrowButtonEl
  .addEventListener('click', () => {
    if (loginContainerEl.classList.contains('switch')) {
      loginContainerEl.classList.remove('switch');
      loginContainerEl.classList.add('initial');
      arrowButtonEl.classList.remove('rotate');
    } else {
      loginContainerEl.classList.add('switch');
      loginContainerEl.classList.remove('initial');
      arrowButtonEl.classList.add('rotate');
    }
  });