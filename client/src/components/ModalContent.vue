<template>
  <div class="flex-grow-1 mb-3 h-75 text-white">
    <h2 class="fs-4 text-danger text-center my-2 fw-bold ">Welcome to Recommender</h2>
    <p class="mt-4 fs-4 fw-bold ">Carefully select Options from the below options</p>
    <div class="p-3">
      <form @submit.prevent="submitForm">
        <div class="d-flex align-items-center py-2">
          <span class="fs-5 me-4  ">Popularity</span>
          <div class="form-check form-switch mb-0 ">
            <input class="form-check-input bg-danger border-danger" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
            <label class="form-check-label" for="flexSwitchCheckChecked">Checked  for based on Popularity</label>
          </div>
        </div>
        <div class="d-flex align-items-center py-2 my-4 ">
          <span class="fs-5 me-4 ">Genres</span>
          <div class="form-check ms-4">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Action
            </label>
          </div>
          <div class="form-check ms-4">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              School
            </label>
          </div>

          <div class="form-check ms-4">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Shounen
            </label>
          </div>
          <div class="form-check ms-4">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
            Super Power
            </label>
          </div>

          <div class="form-check ms-4">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
            Drama
            </label>
          </div>

          <div class="form-check ms-4">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Fantasy
            </label>
          </div>

          <div class="form-check ms-4">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
            Slice of Life
            </label>
          </div>
         
        </div><!-- genre ends here -->
        <div class="d-flex align-items-center py-2 my-4 ">
          <span class="fs-5 me-4 ">Type</span>
          <div class="form-check ms-4">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Anime
            </label>
          </div>
          <div class="form-check ms-4">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Mange
            </label>
          </div>

          <div class="form-check ms-4">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Movie
            </label>
          </div>
          <div class="form-check ms-4">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Ova
            </label>
          </div>
          <div class="form-check ms-4">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Light Novel
            </label>
          </div>
        </div><!-- genre ends here -->

        <div class="d-grid gap-2">
          <button type="submit" class="mt-5 btn-lg btn btn-danger">Recommend</button>
        </div>

        <div class="d-grid gap-2">
      </div>
      </form>
    </div>
  </div><!-- modal content ends here -->
</template>


<script setup>
  const submitForm = async() => {
    const userInput = formData.value  //👈 sanitize user input using Dompurify
    console.log(userInput)
  }
</script>