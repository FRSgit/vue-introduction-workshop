<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld @typescript-click="onTypescriptClick" :msg="msg"/>
    <Modal :visible="modalVisible" @close="modalVisible = false">
      <template #header>Typescript Rocks!</template>
      <template #content>
        <ValidationObserver v-slot="{ handleSubmit, invalid }">
          <form
            @submit.prevent="handleSubmit(onSubmit)"
            novalidate
          >
            <ValidationProvider v-slot="{ errors }">
              <input v-model="email" required name="email" type="email" placeholder="what's your email address?">
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }">
              <select name="reason" v-model="reason" required>
                <option v-for="(value, key) in reasons" :key="key">{{value}}</option>
              </select>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
            <button :disabled="invalid">Submit</button>
          </form>
        </ValidationObserver>
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
    onSubmit () {
      console.log('submit!');
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      modalVisible: false,
      email: '',
      reason: '',
      reasons: {
        '': '',
        'types': 'TYPEEEES',
        'script': 'it has "script" in its name',
        't': 'it start with a T'
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
