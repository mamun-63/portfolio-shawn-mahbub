<template>
  <div class="h-56 bg-onSurface">
    <div class="default-text px-3 md:px-32 h-full">
      <div class="flex justify-center h-full items-center">
        <div>
          <div>
            <div class="flex">
              <img class="mr-3" src="../assets/img/logo-icon.svg" alt="logo">
              <div class="cursor-pointer" @click="onClick">
                <div class="shawn">
                  shawnm.ux
                </div>
                <div class="norman">
                  norman fan
                </div>
              </div>
            </div>
          </div>
          <div class="text-body-1 mt-3">
            © {{ new Date().getFullYear() }} Shawn Mahbub
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
