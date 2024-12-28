export function renderAboutUsContainer() {
  let aboutUsHTML = `
    <div class="title">About Us</div>

    <div class="body-text">CoachFit is built and owned by Noah Miller and Gavin Todd. The idea behind CoachFit came from the two always struggling to find quality coaches in their area for football. Noah and Gavin both played football in high school where Noah will continues his football career at the collegiate level. Gavin will continue his athletic career at High Point University playing lacrosse. Both were instilled with discipline and drive, through football, to help make CoachFit a reality.
    </div>

    <div class="section-page-link">
      To learn more about CoachFit and its owners checkout our <a href="about-us.html" target="_blank" class="link">about us</a> page
    </div>

    <div class="body-text">Take your coaching ot the next level with CoachFit today!</div>

    <div>
      <a href="./login/sign-up.html">
        <button class="sign-up-button">Sign Up</button>
      </a>
    </div>
  `;

  document.querySelector('.js-about-us-container')
    .innerHTML = aboutUsHTML;
}