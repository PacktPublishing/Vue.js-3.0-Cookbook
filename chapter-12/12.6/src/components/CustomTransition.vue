<template functional>
  <transition
    :appear="props.appear"
    enter-active-class="animated slideInLeft"
    leave-active-class="animated slideOutRight"
  >
    <slot />
  </transition>
</template>
