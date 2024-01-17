<template>
  <Navbar/>
  
  <section>
    <RouterView/>
  </section>

</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Hero from './components/Hero.vue'

  export default{
    components: {
      Navbar,
      Hero
    }
  }
</script>