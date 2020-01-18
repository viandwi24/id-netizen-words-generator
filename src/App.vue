<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <div class="footer mt-4">
      &copy; 2020 by <a href="https://github.com/viandwi24">viandwi24</a>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
 .footer {
   background: rgb(230, 230, 230);
   padding: 1rem 2rem;
   text-align: center;
 }
</style>
