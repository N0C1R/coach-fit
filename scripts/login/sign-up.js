const signUpContainerEl = document.querySelector('.js-sign-up-container');


function renderSignUpPage() {
  const signUpHTML = `
    <div class="arrow-button js-arrow-button">&#8678;</div>

    <div class="customer-container">
      <div class="sign-up-message">Trainee Sign Up</div>

      <div class="first-name-container">
        <div class="first-name-message">First Name</div>
        <input placeholder="First name" class="first-name-input">
      </div>

      <div class="last-name-container">
        <div class="last-name-message">Last Name</div>
        <input placeholder="Last name" class="last-name-input">
      </div>

      <div class="email-container">
        <div class="email-message">Email</div>
        <input placeholder="Email" class="email-input">
      </div>

      <div class="password-container">
        <div class="password-message">Password</div>
        <input placeholder="Password" class="password-input">
      </div>

      <div class="confirm-password-container">
        <div class="confirm-password-message">Confirm Password</div>
        <input placeholder="Password" class="confirm-password-input">
      </div>

      <div>
        <button class="sign-up-button js-sign-up-button">Sign Up</button>
      </div>

      <div class="sign-up-container">
        <div class="already-have-account-message">Already have an account?</div>
        <a href="login.html" class="login-link js-coach-login-link">Login</a>
      </div>
    </div>

    <div class="coach-container">
      <div class="sign-up-message">Trainer Sign Up</div>

      <div class="first-name-container">
        <div class="first-name-message">First Name</div>
        <input placeholder="First name" class="first-name-input">
      </div>

      <div class="last-name-container">
        <div class="last-name-message">Last Name</div>
        <input placeholder="Last name" class="last-name-input">
      </div>

      <div class="email-container">
        <div class="email-message">Email</div>
        <input placeholder="Email" class="email-input">
      </div>

      <div class="password-container">
        <div class="password-message">Password</div>
        <input placeholder="Password" class="password-input">
      </div>

      <div class="confirm-password-container">
        <div class="confirm-password-message">Confirm Password</div>
        <input placeholder="Password" class="confirm-password-input">
      </div>

      <div>
        <button class="sign-up-button js-sign-up-button">Sign Up</button>
      </div>

      <div class="sign-up-container">
        <div class="already-have-account-message">Already have an account?</div>
        <a href="login.html" class="login-link js-coach-login-link">Login</a>
      </div>
    </div>
    </div>
  `;

  signUpContainerEl.classList.add('initial');
  
  signUpContainerEl.innerHTML = signUpHTML;
}

renderSignUpPage();

const arrowButtonEl = document.querySelector('.js-arrow-button');

arrowButtonEl
  .addEventListener('click', () => {
    if (signUpContainerEl.classList.contains('switch')) {
      signUpContainerEl.classList.remove('switch');
      signUpContainerEl.classList.add('initial');
      arrowButtonEl.classList.remove('rotate');
      loginLinkCoachEl.href('login.html')
      loginLinkCustomerEl.removeAttribute('href');
    } else {
      signUpContainerEl.classList.add('switch');
      signUpContainerEl.classList.remove('initial');
      arrowButtonEl.classList.add('rotate');
      loginLinkCoachEl.removeAttribute('href');
      loginLinkCustomerEl.setAttribute('href', 'login.html');
    }
  });