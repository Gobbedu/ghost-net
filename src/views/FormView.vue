<template>

  <div class="inner-hero about-page wf-section">
    <div class="w-container">
      <h1 class="hero-header">Forms</h1>
    </div>
  </div>

  <div class="section wf-section">
    <h2 class="heading">Forms</h2>
    <div class="div-block"></div>

    <div class="w-container">

      <div class="form-block w-form">
        <form id="wf-form-Form" name="wf-form-Form" data-name="Form" method="get" class="form-2" aria-label="Form">

          <label for="name">Vessel</label>
          <input type="text" class="w-input" maxlength="256" name="name" data-name="Name" placeholder="" id="name">

          <label for="name-2">Crew</label>
          <input type="text" class="w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="" id="name-2">
          
          <label for="name-2">Coordinates</label>
          <input type="text" class="w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Latitude - Longitude" id="name-2">
          
          <label for="name-2">Location/Region</label>
          <input type="text" class="w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="" id="name-2">
          
          <label for="name-2">Project</label>
          <input type="text" class="w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="" id="name-2">
          
          <label for="name-2">Type of Debris</label>
          <input type="text" class="w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="" id="name-2">
          
          <label for="name-2">How was the debris found? (entangles in in-sea equipment, MFOs, crew etc)</label>
          <input type="text" class="w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="" id="name-2">
          
          <label for="name-2">Weight</label>
          <input type="text" class="w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Kg" id="name-2">
          
          <label for="name-2">Any cost for Debris removal?&nbsp;If yes how much</label>
          <input type="text" class="w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="USD" id="name-2">
          
          <label for="name-2">Wild life entangled?</label>
          <input type="text" class="w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Yes - No" id="name-2">
          
          <label for="name-2">Wild life condition</label>
          <input type="text" class="w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="How many Alive, Injured, Dead" id="name-2">
          
          <label for="name-2">Was wildlife disentangled and released?</label>
          <input type="text" class="w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="" id="name-2">

          <label for="field">Comments</label>
          <textarea placeholder="If any" maxlength="5000" id="field" name="field" data-name="field" class="textarea-2 w-input"></textarea>
          <label for="name-2">Report</label>
          <input type="text" class="w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="" id="name-2">
          <input type="submit" value="Submit" data-wait="Please wait..." class="w-button">
        </form>

        <div class="w-form-done" tabindex="-1" role="region" aria-label="Form success">
          <div>Thank you! Your submission has been received!</div>
        </div>

        <div class="w-form-fail" tabindex="-1" role="region" aria-label="Form failure">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>

      </div>
    </div>

  </div>

</template>

<script>
export default {};
</script>