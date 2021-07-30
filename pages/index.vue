<template>
  <div class="bg-primary text-white pt-12">
    <div class="default-text pb-12">
      <div class="text-center">
        <div class="text-display-2 px-64">
          I help turn startups and designers into <span class="text-secondary">superheroes</span>
        </div>
        <div class="mt-6 px-80 text-subheading-1 font-normal">
          <span class="opacity-80">Hi, it’s Shawn Mahbub here. I’m a </span>
          <span class="font-bold">UX enthusiast</span>
          <span class="opacity-80">working as Full-Time employee at</span>
          <span class="font-bold">@Sayburgh</span>
          <span class="opacity-80">and Contributing writer on</span>
          <span class="font-bold">@UX Collective</span>
        </div>
        <div class="mt-6 flex justify-center gap-4">
          <button class="btn-secondary">
            Get Resume
          </button>
          <button class="btn-primary">
            Hire Me
          </button>
        </div>
        <div class="mt-6 text-button text-secondary">
          Currently Working
        </div>
      </div>
      <div class="mt-10 w-4/6 mx-auto shadow-card">
        <div class="border-24 border-onSurface rounded-t-3xl rounded-b-none">
          <div class="bg-onSurface">
            <img class="rounded-3xl object-cover w-full" src="../assets/img/hero-banner.png" alt="hero banner">
          </div>
        </div>
        <div class="bg-gray-900 p-6 rounded-b-3xl">
          <div class="grid grid-cols-12">
            <div class="col-span-8">
              <div class="grid gap-3 place-content-between h-60">
                <div class="text-button text-secondary">
                  Website
                </div>
                <div class="text-h2">
                  Somoy VOD
                </div>
                <div class="text-body-1">
                  Currently I’m working on this project for Somoy TV, which is a national TV channel of Bangladesh. Over it’s growing popularitythe company had decided to work on a VOD platform which will create a new door for the content creators and general user those who wants to watch good quality contents.
                </div>
                <div class="cursor-pointer text-button text-secondary flex items-center">
                  <div>Case Study</div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="col-span-4">
              <div class="flex justify-end text-right">
                <div class="grid place-content-between h-60">
                  <div class="flex justify-end">
                    <div class="border-2 border-white rounded-full w-12 h-12" />
                  </div>
                  <div>
                    <div class="text-secondary text-button mb-2">
                      Starting Date
                    </div>
                    <div class="text-h4">
                      24th June, 2021
                    </div>
                  </div>
                  <div>
                    <div class="text-secondary text-button mb-2">
                      Client
                    </div>
                    <div class="text-h4">
                      Somoy TV
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 px-3 md:px-16">
        <div class="grid grid-cols-3 gap-6">
          <div v-for="i in 3" :key="i">
            <div class="border-12 border-onSurface rounded-t-3xl rounded-b-none">
              <div class="bg-onSurface">
                <img class="rounded-3xl object-cover w-full" src="../assets/img/somoy.png" alt="somoy image">
              </div>
            </div>
            <div class="bg-gray-900 p-6 rounded-b-3xl">
              <div class="text-button text-secondary mb-3">
                Website
              </div>
              <div class="text-h2 mb-3.5">
                Somoy VOD
              </div>
              <div class="cursor-pointer text-button text-secondary flex items-center">
                <div>Case Study</div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 px-3 md:px-16">
        <div class="grid grid-cols-12">
          <div class="col-span-5">
            <div class="border-12 border-onSurface rounded-l-3xl rounded-b-none">
              <div class="bg-onSurface">
                <img class="rounded-3xl object-cover w-full" src="../assets/img/article-thumbnail.png" alt="somoy image">
              </div>
            </div>
          </div>
          <div class="col-span-7">
            <div class="bg-gray-900 p-6 rounded-r-3xl h-full">
              <div class="grid place-content-between h-full">
                <div>
                  <div class="text-button text-secondary mb-3">
                    Website
                  </div>
                  <div class="text-h2 mb-3.5">
                    How I recreated YouTube in Figma: Practical Guide
                  </div>
                </div>
                <div class="cursor-pointer text-button text-secondary flex items-center">
                  <div>Read Article</div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 px-3 md:px-16">
        <div class="grid grid-cols-3 gap-6">
          <div v-for="item in items" :key="item" class="border-2 border-white border-opacity-10 rounded-xl p-4">
            <div class="mb-6 flex">
              <div class="mr-5">
                <img class="rounded-full h-12 w-12 object-cover" src="../assets/img/profile.png" alt="avatar">
              </div>
              <div>
                <div class="text-subheading-1 font-medium">
                  Ronald Richards
                </div>
                <div class="text-subheading-2 text-secondary">
                  Software Developer
                </div>
              </div>
            </div>
            <div class="text-body-1">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mauris sed egestas at felis, morbi at dignissim malesuada. Mauris ac convalli dfklei f jlsi fi jflkjkl if ilkj klsf',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mauris sed egestas at felis, morbi at dignissim malesuada. Mauris ac convalli dfklei f jlsi fi jflkjkl if ilkj klsf Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mauris sed egestas at felis, morbi at dignissim malesuada. Mauris ac convalli dfklei f jlsi fi jflkjkl if ilkj klsf',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mauris sed egestas at felis, morbi at dignissim malesuada. Mauris ac convalli dfklei f jlsi fi jflkjkl if ilkj klsf',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mauris sed egestas at felis, morbi at dignissim malesuada. Mauris ac convalli dfklei f jlsi fi jflkjkl if ilkj klsf',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mauris sed egestas at felis, morbi at dignissim malesuada. Mauris ac convalli dfklei f jlsi fi jflkjkl if ilkj klsf'
      ]
    }
  }
}
</script>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: masonry;
}
</style>
