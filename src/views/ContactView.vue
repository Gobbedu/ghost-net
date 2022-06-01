<template>
  <div class="inner-hero wf-section">
    <div class="container">
      <h1 class="hero-header">Let's Connect</h1>
    </div>
  |</div>

  <div id="posts" class="main-section wf-section">
    <div class="w-container">

      <div class="w-row">
        <div class="w-col w-col-6">
          <h3>Connect with Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          <a href="http://www.twitter.com/webflowapp" target="_blank" class="social-text">Follow us on Twitter</a>
          <a href="http://www.facebook.com/webflow" target="_blank" class="social-text facebook">Like us on Facebook</a>
          <a href="http://www.instagram.com" target="_blank" class="social-text instagram">Follow us on Instagram</a>
        </div>
      <div class="w-col w-col-6">
        
        <h3>Send a Request</h3>
        <div class="w-form">
          <form id="email-form" name="email-form" data-name="Email Form" method="get" class="contact-form" aria-label="Email Form">
            <label for="name" class="field-label">Name:</label>
            <input type="text" class="contact-field w-input" maxlength="256" name="name" data-name="Name" placeholder="Enter your name" id="name">

            <label for="email" class="field-label">Email Address:</label>
            <input type="email" class="contact-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Enter your email address" id="email" required="">

            <label for="Message" class="field-label">Message:</label>
            <textarea id="Message" name="Message" placeholder="Say what you need to say..." maxlength="5000" data-name="Message" class="contact-field message w-input"></textarea>
            
            <input type="submit" value="Submit" data-wait="Please wait..." class="button w-button">
          </form>
          
          <div class="success-message w-form-done" tabindex="-1" role="region" aria-label="Email Form success">
            <p class="success-text">Thank you! Your submission has been received!</p>
          </div>
          
          <div class="w-form-fail" tabindex="-1" role="region" aria-label="Email Form failure">
            <p>Oops! Something went wrong while submitting the form</p>
          </div>
        </div>

      </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {};
</script>