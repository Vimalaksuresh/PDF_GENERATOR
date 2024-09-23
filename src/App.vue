<template>
  <div id="app">
    <PrintPDFButton />
  </div>
</template>

<script>
import PrintPDFButton from './components/PrintPDFButton.vue';

export default {
  name: 'App',
  components: {
    PrintPDFButton
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
