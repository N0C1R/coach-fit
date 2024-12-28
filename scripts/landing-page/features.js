export function renderFeaturesContainer() {
  let featuresHTML = `
    <div class="title">Features</div>

    <div class="body-text">CoachFit is built for coaches to not only run their business, but get themselves infront of ready to train individuals. Our priority is simplicity for both the trainer and trainee. We deliver this through our coaching home page. This is where you can access the following for your work: scheduling, pricing, income & expenses, and much more. Your content as a coach is what's most important, so we have developed a system where you will connect with potential clients through our Facebook like system of content creation.
    </div>

    <div class="section-page-link">
      For a more in depth guide of CoachFit checkout our <a href="features.html" target="_blank">features</a> page
    </div>

    <div class="body-text">Take your coaching to the next level with CoachFit today!</div>

    <div>
      <a href="./login/sign-up.html">
        <button class="sign-up-button">Sign Up</button>
      </a>
    </div>
  `;

  document.querySelector('.js-features-container')
    .innerHTML = featuresHTML;
}