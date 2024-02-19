<template>
  <div
    class="flex gap-4 flex-col items-center max-w-sm p-10 border-2 rounded-md mx-auto bg-black"
  >
    <h1 class="text-white">{{ title }}</h1>
    <input
      class="border-2 px-2 pt-1 rounded-md w-full"
      placeholder="Username"
      type="text"
    />
    <input
      class="border-2 px-2 pt-1 rounded-md w-full"
      placeholder="Email"
      type="text"
    />
    <button class="border-2 w-full pt-1 rounded-md text-white">Login</button>
  </div>
</template>

<script>
export default {
  name: "SigninForm",
  props: {
    title: String,
  },
};
</script>
