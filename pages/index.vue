<template>
  <div>
    <!-- NAVBAR -->
    <div class="bg-onSurface text-white fixed top-0 inset-x-0 z-10">
      <div class="flex justify-around items-center default-text px-3 md:px-16 h-18">
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
        <div>
          <div class="flex gap-6 cursor-pointer text-button">
            <div class="hover:text-secondary">
              <a href="#work">Works</a>
            </div>
            <div class="hover:text-secondary">
              <a href="#blog">Blogs</a>
            </div>
            <div class="hover:text-secondary">
              <a href="#word">Kind Words</a>
            </div>
            <div class="hover:text-secondary">
              <a href="#about">About Me</a>
            </div>
          </div>
        </div>
        <div>
          <!-- Should to be Component -->
          <div class="flex gap-4">
            <a href="https://www.linkedin.com/in/shawnmux" target="_blank" rel="noopener norefferer">
              <div class="circle">
                <div class="flex items-center justify-center h-full">
                  <img src="../assets/img/linkedin.svg" alt="">
                </div>
              </div>
            </a>
            <a href=" https://www.behance.net/shawnmux" target="_blank" rel="noopener norefferer">
              <div class="circle">
                <div class="flex items-center justify-center h-full">
                  <img src="../assets/img/behance.svg" alt="">
                </div>
              </div>
            </a>
            <a href="https://www.instagram.com/shawnm.ux" target="_blank" rel="noopener norefferer">
              <div class="circle">
                <div class="flex items-center justify-center h-full">
                  <img src="../assets/img/instagram.svg" alt="">
                </div>
              </div>
            </a>
            <a href="https://dribbble.com/shawnmux" target="_blank" rel="noopener norefferer">
              <div class="circle">
                <div class="flex items-center justify-center h-full">
                  <img src="../assets/img/dribbble.svg" alt="">
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary text-white pt-30">
      <div class="default-text">
        <!-- HERO SECTION -->
        <div class="bg-hero bg-contain bg-no-repeat bg-right">
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
              <a href="https://drive.google.com/file/d/11GZrutxH3VQczpPCM0B4dFiKSC8dbzNs/view" target="_blank" rel="noopener norefferer">
                <button class="btn-secondary">
                  Get Resume
                </button>
              </a>
              <button class="btn-primary">
                Hire Me
              </button>
            </div>
            <div class="mt-12 mb-4 text-button text-secondary">
              Currently Working
            </div>
          </div>
          <div class="mb-12 w-4/6 mx-auto shadow-card border-2 border-white border-opacity-10 rounded-3xl">
            <div class="border-24 border-onSurface rounded-t-3xl rounded-b-none">
              <div class="bg-onSurface">
                <img class="rounded-3xl object-cover w-full" src="../assets/img/hero-banner.png" alt="hero banner">
              </div>
            </div>
            <div class="p-6 rounded-b-3xl bg-primary">
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
                        <div>
                          <div class="flex -space-x-2 overflow-hidden">
                            <img class="inline-block h-12 w-12 border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                            <img class="inline-block h-12 w-12 border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                            <img class="inline-block h-12 w-12 border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="">
                            <img class="inline-block h-12 w-12 border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="text-secondary text-button mb-2">
                          Starting Date
                        </div>
                        <div class="text-h4 font-medium">
                          24th June, 2021
                        </div>
                      </div>
                      <div>
                        <div class="text-secondary text-button mb-2">
                          Client
                        </div>
                        <div class="text-h4 font-medium">
                          Somoy TV
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center py-12 px-3 md:px-32">
          <div class="mb-12 text-button text-secondary">
            few clients that I worked for
          </div>
          <div class="flex justify-center gap-12">
            <div>
              <img src="../assets/img/sayburgh.png" alt="">
            </div>
            <div>
              <img src="../assets/img/foodqo.png" alt="">
            </div>
            <div>
              <img src="../assets/img/somoy-logo.png" alt="">
            </div>
            <div>
              <img src="../assets/img/ux-collective.png" alt="">
            </div>
            <div>
              <img src="../assets/img/figma.png" alt="">
            </div>
          </div>
        </div>
        <!-- WORKS -->
        <div id="work" class="py-12">
          <div class="text-center">
            <div class="text-display-2 text-secondary mb-1">
              Works
            </div>
            <div class="text-subheading-1 font-normal mb-12">
              5 selected works across 5 fields
            </div>
          </div>
          <div v-for="i in 2" :key="i" class="mb-12 w-4/6 mx-auto border-2 border-white border-opacity-10 rounded-3xl">
            <div class="border-24 border-onSurface rounded-t-3xl rounded-b-none">
              <div class="bg-onSurface">
                <img class="rounded-3xl object-cover w-full" src="../assets/img/somoy-2.png" alt="somoy tv">
              </div>
            </div>
            <div class="p-6 rounded-b-3xl">
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
                        <div>
                          <div class="flex -space-x-2 overflow-hidden">
                            <img class="inline-block h-12 w-12 border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                            <img class="inline-block h-12 w-12 border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                            <img class="inline-block h-12 w-12 border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="">
                            <img class="inline-block h-12 w-12 border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="text-secondary text-button mb-2">
                          Starting Date
                        </div>
                        <div class="text-h4 font-medium">
                          24th June, 2021
                        </div>
                      </div>
                      <div>
                        <div class="text-secondary text-button mb-2">
                          Client
                        </div>
                        <div class="text-h4 font-medium">
                          Somoy TV
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-12 px-3 md:px-32">
            <div class="grid grid-cols-3 gap-6">
              <div v-for="i in 3" :key="i" class="border-2 border-white border-opacity-10 rounded-3xl">
                <div class="border-12 border-onSurface rounded-t-3xl rounded-b-none">
                  <div class="bg-onSurface">
                    <img class="rounded-3xl object-cover w-full" src="../assets/img/somoy.png" alt="somoy image">
                  </div>
                </div>
                <div class="p-6 rounded-b-3xl">
                  <div class="text-button text-secondary mb-3">
                    Website
                  </div>
                  <div class="text-h3 mb-3.5">
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
        </div>
        <!-- BLOGS -->
        <div id="blog" class="pb-12">
          <div class="text-center">
            <div class="text-display-2 text-secondary mb-1">
              Published Articles
            </div>
            <div class="text-subheading-1 font-normal mb-12">
              5 selected works across 5 fields
            </div>
          </div>
          <div class="mt-12 px-3 md:px-32">
            <div class="grid grid-cols-12 border-2 border-white border-opacity-10 rounded-3xl">
              <div class="col-span-5">
                <div class="border-12 border-onSurface rounded-l-3xl rounded-b-none">
                  <div class="bg-onSurface">
                    <img class="rounded-3xl object-cover w-full" src="../assets/img/article-thumbnail.png" alt="somoy image">
                  </div>
                </div>
              </div>
              <div class="col-span-7">
                <div class="p-6 rounded-r-3xl h-full">
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
        </div>
        <!-- KIND WORDS -->
        <div id="word" class="pb-12">
          <div class="text-center pt-12">
            <div class="text-display-2 text-secondary mb-1">
              Kind Words by Clients
            </div>
            <div class="text-subheading-1 font-normal mb-12">
              Over 1500 restaurants, managers, and owners use FoodQo
            </div>
          </div>
          <div class="mt-12 px-3 md:px-32">
            <div class="masonry before:box-inherit after:box-inherit">
              <div v-for="item in items" :key="item">
                <div class="break-inside hover:bg-onSurface hover:shadow-3xl hover:border-opacity-0 select-none mb-6 border-2 border-white border-opacity-10 rounded-xl p-4">
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
        <!-- ABOUT ME -->
        <div id="about">
          <div class="pb-12">
            <div class="text-center pt-12">
              <div class="text-display-2 text-secondary mb-1">
                About Me
              </div>
              <div class="text-subheading-1 font-normal mb-12">
                Over 1500 restaurants, managers, and owners use FoodQo
              </div>
            </div>
            <div class="mt-12 px-3 md:px-32 mb-12">
              <div class="grid grid-cols-12 border-2 border-white border-opacity-10 rounded-3xl">
                <div v-if="!showMore" class="col-span-4">
                  <div class="border-12 border-onSurface rounded-l-3xl rounded-b-none">
                    <div class="bg-onSurface">
                      <img style="height: 540px" class="rounded-3xl object-cover w-full" src="../assets/img/shawn-mahbub.png" alt="shawn mahbub image">
                    </div>
                  </div>
                </div>
                <div :class="{'col-span-12': showMore, 'col-span-8': !showMore}">
                  <div :class="{'rounded-l-3xl': showMore}" class="p-6 h-full bg-primary rounded-r-3xl">
                    <div class="grid place-content-between h-full">
                      <div>
                        <div class="flex justify-between text-button mb-8">
                          <div class="flex gap-6">
                            <div v-for="tab in tabs" :key="tab.id" class="cursor-pointer" :class="{'text-secondary': tab.id==clickedTab}" @click="selectTab(tab.id)">
                              <div>{{ tab.name }}</div>
                              <div v-if="tab.id==clickedTab" class="border border-secondary mt-2" />
                            </div>
                          </div>
                          <div v-if="clickedTab !== 1" class="text-button text-secondary cursor-pointer" @click="onShowMore(clickedTab)">
                            {{ showMore ? 'Show Less' : 'Show More' }}
                          </div>
                        </div>
                        <div v-if="clickedTab==1">
                          <div class="text-h3 mb-3">
                            hi, it’s shawn mahbub
                          </div>
                          <div class="text-subheading-1 font-normal mb-6">
                            👨‍🎨 I’m a result-oriented UX designer who wants to solve complex problems in simple solutions possible. I’m compulsive about design thinking, process efficiency, visual systems, grids & guides during the daytime. At night, I dream about typography & lettering.  I've led the design and development solutions by building design systems to benefits the fortune of 10+ companies for 1+ years to generate a healthy revenue stream. Besides solving problems and design I am a Barca lover and I never missed an opportunity to watch Bangladesh cricket matches. I would love to drink cream latte.
                          </div>
                        </div>
                        <div v-if="clickedTab==2">
                          <div class="mb-3">
                            <div :class="{'grid-cols-3': showMore}" class="grid grid-cols-2 gap-6">
                              <div v-for="i in 2" :key="i" class="border-2 border-white border-opacity-10 rounded-3xl">
                                <div class="border-12 border-onSurface rounded-t-3xl rounded-b-none">
                                  <div class="bg-onSurface">
                                    <img class="rounded-3xl object-cover w-full" src="../assets/img/certificate-1.png" alt="Certificate image">
                                  </div>
                                </div>
                                <div class="p-6 rounded-b-3xl">
                                  <div class="text-button text-secondary mb-3">
                                    Google
                                  </div>
                                  <div class="text-h3 mb-3.5">
                                    Foundations of UX Deisign
                                  </div>
                                  <div class="cursor-pointer text-button text-secondary flex items-center">
                                    <div>View Cretificate</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div v-if="clickedTab==3">
                          <div class="mb-3">
                            <div :class="{'grid-cols-3': showMore}" class="grid grid-cols-2 gap-6">
                              <div v-for="i in 1" :key="i" class="border-2 border-white border-opacity-10 rounded-3xl">
                                <div class="border-12 border-onSurface rounded-t-3xl rounded-b-none">
                                  <div class="bg-onSurface">
                                    <img class="rounded-3xl object-cover w-full" src="../assets/img/contribution-1.png" alt="Certificate image">
                                  </div>
                                </div>
                                <div class="p-6 rounded-b-3xl">
                                  <div class="text-button text-secondary mb-3">
                                    Figma
                                  </div>
                                  <div class="text-h3 mb-3.5">
                                    Figover: Figma Cover Thumbnail
                                  </div>
                                  <div class="cursor-pointer text-button text-secondary flex items-center">
                                    <div>Duplicate figma file</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div v-if="clickedTab==1">
                        <div>
                          <div class="text-button text-secondary mb-3">
                            Let’s be friends
                          </div>
                          <div class="flex gap-4 mb-6">
                            <a href="https://www.linkedin.com/in/shawnmux" target="_blank" rel="noopener norefferer">
                              <div class="circle">
                                <div class="flex items-center justify-center h-full">
                                  <img src="../assets/img/linkedin.svg" alt="">
                                </div>
                              </div>
                            </a>
                            <a href=" https://www.behance.net/shawnmux" target="_blank" rel="noopener norefferer">
                              <div class="circle">
                                <div class="flex items-center justify-center h-full">
                                  <img src="../assets/img/behance.svg" alt="">
                                </div>
                              </div>
                            </a>
                            <a href="https://www.instagram.com/shawnm.ux" target="_blank" rel="noopener norefferer">
                              <div class="circle">
                                <div class="flex items-center justify-center h-full">
                                  <img src="../assets/img/instagram.svg" alt="">
                                </div>
                              </div>
                            </a>
                            <a href="https://dribbble.com/shawnmux" target="_blank" rel="noopener norefferer">
                              <div class="circle">
                                <div class="flex items-center justify-center h-full">
                                  <img src="../assets/img/dribbble.svg" alt="">
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="flex gap-6">
                          <div class="flex-grow w-full">
                            <input type="text" placeholder="Write your email to hire me" class="w-full input-outlined">
                          </div>
                          <div class="flex-none">
                            <button class="btn-primary">
                              Hire Me
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- FOOTER -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
export default {
  components: { Footer },
  data () {
    return {
      items: [
        '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mauris sed egestas at felis, morbi at dignissim malesuada. Mauris ac convalli dfklei f jlsi fi jflkjkl if ilkj klsf felis, morbi at dignissim malesuada. Mauris ac convalli dfklei f jlsi',
        '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mauris sed egestas at felis, morbi at dignissim malesuada. Mauris ac convalli dfklei f jlsi fi jflkjkl if ilkj klsf ',
        '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mauris sed egestas at felis, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mauris sed egestas at felis, morbi at dignissim malesuada. Mauris ac convalli dfklei f jlsi fi jflkjkl if ilkj klsf morbi at dignissim malesuada. Mauris ac convalli dfklei f jlsi fi jflkjkl if ilkj klsf',
        '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mauris sed egestas at felis, morbi at dignissim malesuada. Mauris ac convalli dfklei f jlsi fi jflkjkl if ilkj klsf',
        '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mauris sed egestas at felis, morbi at dignissim malesuada. Mauris ac convalli dfklei f jlsi fi jflkjkl if ilkj klsf',
        '6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa mauris sed egestas at felis, morbi at dignissim malesuada. Mauris ac convalli dfklei f jlsi fi jflkjkl if ilkj klsf'
      ],
      tabs: [
        { id: 1, name: 'Info' },
        { id: 2, name: 'Certifications' },
        { id: 3, name: 'Contributions' }
      ],
      clickedTab: 1,
      showMore: false
    }
  },
  methods: {
    onClick () {
      this.$router.push('/')
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    selectTab (id) {
      this.clickedTab = id
      if (this.clickedTab === 1) {
        this.showMore = false
      }
    },
    onShowMore (id) {
      this.showMore = !this.showMore
    }
  }
}
</script>

<style>
.norman {
  @apply font-extralight text-sm;
  letter-spacing: 0.3em;
}
.shawn {
  @apply font-teko text-2xl tracking-wider;
  line-height: 24px;
}
</style>
