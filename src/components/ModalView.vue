<template>
  <div class="w-screen h-screen fixed left-0 top-0">
    <div class="w-screen h-screen absolute left-0 top-0 bg-gray-900 bg-opacity-50 z-0" @click="emit('closeModal')"></div>
    <div class="bg-white w-full max-w-screen-lg mt-24 mx-auto z-10 relative rounded-2xl p-12 border-2 border-red-500">
      <slot />
    </div>
  </div>
</template>

<script>
  import useKeydown from '../composables/use-keydown';
  export default {
    setup(props, {emit}) {
      useKeydown([
        {key: 'Escape', fn: () => { emit('closeModal') }},
      ])
    
      return {
        emit
      }
    }
  }
</script>
