<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld @typescript-click="onTypescriptClick" :msg="msg"/>
    <Modal :visible="modalVisible" @close="modalVisible = false">
      <template #header>Typescript Rocks!</template>
      <template #content>somethingggg</template>
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Modal
  },
  methods: {
    onTypescriptClick() {
      this.modalVisible = true;
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      modalVisible: false
    };
  }
}
</script>
