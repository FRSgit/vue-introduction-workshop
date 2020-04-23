<template>
  <transition name="modal" appear>
    <div class="modal" v-if="visible">
      <header><slot name="header"/></header>
      <main><slot name="content"/></main>
      <button type="button" @click="$emit('close')">Close the modal</button>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Modal',
  props: {
    visible: Boolean,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal {
  position: fixed;
  top: 20%;
  left: 10%;
  right: 10%;
  padding: 20px 40px 30px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 1px 2px 4px rgba(0,0,0,.25);
}

.modal-enter-active, .modal-leave-active {
  transition: .4s opacity ease-in-out;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}

header {
  font-size: 1.5rem;
}

main {
  line-height: 2;
}

.close-btn {
  margin-top: 20px;
}
</style>
