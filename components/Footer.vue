<template>
  <div class="h-60 bg-onSurface">
    <div class="default-text px-3 md:px-32 h-full">
      <div class="grid grid-cols-12 py-12">
        <div class="col-span-5">
          <div class="mb-3 text-h4 font-semibold">
            Wants to hire me!
          </div>
          <div class="flex gap-5 mb-6">
            <div class="flex-grow w-full">
              <input type="text" placeholder="Write your email to hire me" class="w-full input-outlined">
            </div>
            <div class="flex-none">
              <button class="btn-primary">
                Hire Me
              </button>
            </div>
          </div>
          <div class="text-body-1 mb-1">
            @
            <span class="text-body-1">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Shawn Mahbub</span>
            </span>
            {{ new Date().getFullYear() }} All rights reserved
          </div>
        </div>
        <div class="col-span-3 justify-self-center">
          <div class="mb-3 text-h4 font-semibold text-secondary">
            Projects
          </div>
          <div v-for="i in 3" :key="i" class="mb-3">
            <div>Project Name</div>
          </div>
        </div>
        <div class="col-span-4">
          <div class="-mt-24 flex justify-end">
            <img src="../assets/img/footer-saly.png" alt="footer saly illustration">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
