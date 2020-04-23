<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld @typescript-click="onTypescriptClick" :msg="msg"/>
    <Modal :visible="modalVisible" @close="modalVisible = false">
      <template #header>Typescript Rocks!</template>
      <template #content>
        <form @submit.prevent="checkForm" novalidate>
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </p>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <input v-model="email" type="email" name="qwe" required placeholder="What's your email address?">
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
          <select v-model="reason" required>
            <option v-for="(item, key) in reasons" :key="key" :value="key">
              {{item}}
            </option>
          </select>
          <button>Submit</button>
        </form>
      </template>
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
    },
    checkForm () {
      this.errors = [];

      if (!this.email) {
        this.errors.push('Email is required!');
      } else if (this.email.indexOf('@') === -1) {
        this.errors.push('Incorrect email format!')
      }

      if (!this.reason) {
        this.errors.push('Reason is required!');
      }

      if (!this.errors.length) {
        // submit the form
      }
    }
  },
  data() {
    return {
      errors: [],
      msg: 'Welcome to Your Vue.js App',
      modalVisible: false,
      email: '',
      reason: '',
      reasons: {
        '': '',
        'rocks': 'because it rocks',
        'script': 'because it ends with "script"',
        'types': 'TYPEEEES'
      }
    };
  }
}
</script>

<style lang="scss">
select, input {
  display: block;
  margin: 10px auto;
}
</style>
