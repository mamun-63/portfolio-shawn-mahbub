<template>
  <div>
    <div class="bg-onSurface text-white">
      <div class="flex justify-around items-center default-text px-3 md:px-16 h-18">
        <div>
          <div class="flex">
            <img class="mr-3" src="../assets/img/logo-icon.svg" alt="logo">
            <div>
              <div class="shawn">
                shawnm.ux
              </div>
              <div class="norman">
                norman fan
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex gap-6 cursor-pointer text-button">
            <div>Works</div>
            <div>Blogs</div>
            <div>Kind Words</div>
            <div>About Me</div>
          </div>
        </div>
        <div>
          <div class="flex gap-4 cursor-pointer">
            <div class="circle">
              <div class="flex items-center justify-center h-full">
                <img src="../assets/img/linkedin.svg" alt="">
              </div>
            </div>
            <div class="circle">
              <div class="flex items-center justify-center h-full">
                <img src="../assets/img/behance.svg" alt="">
              </div>
            </div>
            <div class="circle">
              <div class="flex items-center justify-center h-full">
                <img src="../assets/img/instagram.svg" alt="">
              </div>
            </div>
            <div class="circle">
              <div class="flex items-center justify-center h-full">
                <img src="../assets/img/dribbble.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
  .circle {
    @apply border border-white rounded-full h-8 w-8;
  }
  .norman {
    @apply font-extralight text-sm;
    letter-spacing: 0.3em;
  }
  .shawn {
    @apply font-teko text-2xl tracking-wider;
    line-height: 24px;
  }
</style>
