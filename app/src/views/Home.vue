<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!-- Search / Results -->
    <div
      class="
        flex
        justify-center
        relative
        bg-hero-pattern bg-cover
        px-4
        pt-8
        pb-32
      "
    >
      <!-- Search Input -->
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
        <div class="flex">
          <input
            class="
              flex-1
              py-3
              px-2
              rounded-tl-md rounded-bl-md
              focus:outline-none
            "
            type="text"
            placeholder="Search for any IP address or leave empty to get your IP info"
          />
          <i
            class="
              cursor-pointer
              bg-black
              text-white
              px-4
              rounded-tr-md rounded-br-md
              flex
              items-center
              fa-solid fa-chevron-right
            "
          ></i>
        </div>
      </div>
      <!-- IP Info -->
      <IPInfo />
    </div>
  </div>
</template>

<script>
import IPInfo from "../components/IPInfo.vue";
export default {
  name: "Home",
  components: { IPInfo },
};
</script>
