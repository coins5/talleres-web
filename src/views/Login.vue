<template>
  <div class="columns is-mobile is-centered">
    <div class="column is-half">
      <br />
      <br />
      <br />
      <div class="has-text-centered">
        <img :src="require('../assets/logo_upc_red.png')" alt="UPC" />
      </div>
      <br />
      <br />
      <form>
        <b-field label="Usuario">
          <b-input placeholder="Usuario" v-model="user"></b-input>
        </b-field>

        <b-field label="Password">
          <b-input placeholder="Password" type="password" v-model="password"></b-input>
        </b-field>

        <br />

        <div class="level">
          <div class="level-left">
          </div>
          <div class="level-right">
            <b-button type="is-primary" native-type="submit" @click="login">Ingresar</b-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    login (e) {
      e.preventDefault()
      const userData = {
        user: this.user,
        password: this.password
      }
      console.log(userData)
      return false
    }
  }
}
</script>

<style>

</style>
