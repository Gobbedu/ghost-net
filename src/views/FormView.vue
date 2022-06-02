<template>
<!-- eslint-disable no-mixed-spaces-and-tabs -->
<div class="formpage">
  	<div class="inner-hero about-page wf-section">
  		<div class="w-container">
    		<h1 class="hero-header">Report</h1>
  		</div>
  	</div>

  	<div class="section wf-section">
		<h2 class="heading">Make a Report</h2>
  	<div class="div-block"></div>
  	</div>

  	<div class="forms">
  		<form>
	    	<div class="form-group">
			    <label for="InputVessel">Vessel</label>
    			<input required type="name" class="form-control" id="InputVessel" placeholder="Enter Vessel name">
    		</div>

    		<div class="form-group">
	    		<label for="InputCrew">Crew</label>
			    <input required type="name" class="form-control" id="InputCrew" placeholder="Crew name/identification">
    		</div>
    
    		<!-- COORDINATES -->
    		<div class="form-group">
    			<label for="Coordinates">Coordinates</label>
				<!-- LATITUDE -->
    				<div class="row mb-2">
      					<div class="col-sm-4">
      						<div class="input-group">
        						<div class="input-group-prepend">
      								<div class="input-group-text">Latitude</div>
      							</div>
      							<input required type="number" class="form-control" id="LatDegrees" placeholder="Degrees" min="0" max="90">
      							<div class="input-group-append">
      								<div class="input-group-text">°</div>
      							</div>
    						</div>
					    </div>

      					<div class="col-sm">
							<label class="sr-only" for="InputLatMin">Minutes</label>
								<div class="input-group">
									<input required type="number" class="form-control" id="InputLatMin" placeholder="Minutes" min="0" max="60">
									<div class="input-group-append">
										<div class="input-group-text">'</div>
									</div>
								</div>         
	 					</div>

      					<div class="col-sm">
							<label class="sr-only" for="InputLatSec">Seconds</label>
							<div class="input-group">
								<input required type="number" class="form-control" id="InputLatSec" placeholder="Seconds" step="0.001" min="0" max="60">
								<div class="input-group-append">
									<div class="input-group-text">"</div>
								</div>
							</div>         
						</div>

      					<div class="col-sm">
							<div class="input-group">
								<select id="InputLatSN" class="form-control">
									<option selected>North</option>
									<option>South</option>
								</select>
							</div>
						</div>
    				</div>

				<!-- LONGITUDE -->
    				<div class="row">
      					<div class="col-sm-4">
      						<div class="input-group">
        						<div class="input-group-prepend">
      								<div class="input-group-text">Longitude</div>
      							</div>
      							<input required type="number" class="form-control" id="LatDegrees" placeholder="Degrees"  min="0" max="180">
      							<div class="input-group-append">
      								<div class="input-group-text">°</div>
      							</div>
    						</div>
					    </div>

      					<div class="col-sm">
							<label class="sr-only" for="InputLatMin">Minutes</label>
								<div class="input-group">
									<input required type="number" class="form-control" id="InputLatMin" placeholder="Minutes" min="0" max="60">
									<div class="input-group-append">
										<div class="input-group-text">'</div>
									</div>
								</div>         
	 					</div>

      					<div class="col-sm">
							<label class="sr-only" for="InputLatSec">Seconds</label>
							<div class="input-group">
								<input required type="number" class="form-control" id="InputLatSec" placeholder="Seconds" step="0.001" min="0" max="60">
								<div class="input-group-append">
									<div class="input-group-text">"</div>
								</div>
							</div>         
						</div>

      					<div class="col-sm">
							<div class="input-group">
								<select id="InputLatSN" class="form-control">
									<option selected>West</option>
									<option>East</option>
								</select>
							</div>
						</div>
    				</div>


			</div>
    <!-- FIM COORDENADA -->


            <div class="form-group">
                <label for="InputRegion">Region</label>
                <input type="text" class="form-control" id="InputRegion" placeholder="Local / Region">
            </div>

            <div class="form-group">
                <label for="InputProject">Project</label>
                <input type="text" class="form-control" id="InputProject" placeholder="Project">
            </div>

            <div class="form-group">
                <label for="InputDebris">Type of Debris</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Type of Debris">
            </div>

            <div class="form-group">
                <label for="InputFoundDebris">How was the Debris Found?</label>
                <input type="text" class="form-control" id="InputFoundDebris" placeholder="entangles in in-sea equipment, MFOs, crew etc">
            </div>

            <div class="form-group">
                <label for="InputWeight">Weight</label>
                <input type="text" class="form-control" id="InputWeight" placeholder="Kg">
            </div>


            <div class="form-group">
                <label for="InputCostRemoval">Any cost for Debris removal? if yes how much</label>
                <input type="text" class="form-control" id="InputWeight" placeholder="USD">
            </div>

            <div class="form-group">
                <label for="InputLifeEntangle">Was Wild life entangled?</label>
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="InputLifeEntangle" name="radio-stacked" required>
                    <label class="form-check-label" for="InputLifeEntangle">Yes</label>
                </div>
                <div class="form-check mb-3">
                    <input type="radio" class="form-check-input" id="InputLifeEntangle" name="radio-stacked" required>
                    <label class="form-check-label" for="InputLifeEntangle">No</label>
                    <div class="invalid-feedback">More example invalid feedback text</div>
                </div>
            </div>

            <div class="form-group">
                <label for="InputEntangledQuantity">Wild Life Condition</label>
                <div class="form-inline">
                    <input type="number" class="form-control mb-2 mr-sm-2" id="InputAlive" placeholder="How many Alive?" min="0">
                    <input type="number" class="form-control mb-2 mr-sm-2" id="InputDead" placeholder="How many Dead?" min="0">
                </div>
            </div>

            <div class="form-group">
                <label for="InputEntangledQuantity">Was wild life released?</label>
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="InputLifeEntangle" name="radio-stacked" required>
                    <label class="form-check-label" for="InputLifeEntangle">Yes</label>
                </div>
                <div class="form-check mb-3">
                    <input type="radio" class="form-check-input" id="InputLifeEntangle" name="radio-stacked" required>
                    <label class="form-check-label" for="InputLifeEntangle">No</label>
                    <div class="invalid-feedback">More example invalid feedback text</div>
                </div>
            </div>

            <div class="form-group">
                <label for="exampleFormControlTextarea1">Comments, if any</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            
            <div class="form-group">
                <label for="InputReported">Reported</label>
                <input type="text" class="form-control" id="InputWeight" placeholder="reported">
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>

        </form>
    </div>
</div>
<!-- eslint-disable no-mixed-spaces-and-tabs -->
</template>

<!-- 

<script>
  export default {
  name: 'FormView',
  data() {
    return {
    form: {
      email: '',
      name: '',
      food: null,
      checked: []
    },
    foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
    show: true
    }
  },
  methods: {
    onSubmit(event) {
    event.preventDefault()
    alert(JSON.stringify(this.form))
    },
    onReset(event) {
    event.preventDefault()
    // Reset our form values
    this.form.email = ''
    this.form.name = ''
    this.form.food = null
    this.form.checked = []
    // Trick to reset/clear native browser form validation state
    this.show = false
    this.$nextTick(() => {
      this.show = true
    })
    }
  }
  }
</script>
 -->
<script>
export default{}
</script>

<style>

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.formpage {
  padding-bottom: 100px;
}

.forms {
  text-align: left;
}

form {
  margin: 50px auto;
  width: 70%;
}

.section {
  padding-top: 60px ;
}

.heading {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: Oxygen, sans-serif;
  color: #2e2e2e;
  font-size: 25px;
  line-height: 30px;
}

.div-block {
  width: 20%;
  margin:  0 auto 50px auto;
  padding-top: 1px;
  background-color: #4d565d;
}

.inner-hero.about-page {
  height: 450px;
  background-image: linear-gradient(156deg, rgba(0, 0, 0, 0.68), hsla(0, 0%, 54%, 0.02)), url(../assets/ocean.jpg);
  background-position: 0px 0px, 50% 60%;
  background-size: auto, 600px;
  background-repeat: repeat, repeat;
  background-attachment: scroll, scroll;
}

.inner-hero {
  position: relative;
  height: 300px;
  padding-top: 125px;
  background-image: url(https://uploads-ssl.webflow.com/6296635…/6296635…_bridges.jpg);
  background-position: 50% 50%;
  background-size: cover;
  text-align: center;
}

.hero-header {
  margin-right: auto;
  margin-left: auto;
  padding-top: 0%;
  padding-left: 0%;
  color: #fff;
  font-size: 50px;
  font-weight: 400;
}

</style>