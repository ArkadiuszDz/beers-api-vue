<template>
  <div class="container">
    <BeersList :beers="beers"/>
  </div>
</template>

<script>
import BeersList from '@/components/BeersList';
import get_beers from '../assets/scripts/getBeers';

export default {
  name: 'MainContent',
  components: {
    BeersList
  },
  methods: {
    get_beers
  },
  created() {
    get_beers().then(response => {
      this.beers = [...response];
    });
  },
  data () {
    return {
      msg: 'First Vue.js App',
      beers: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 1200px;
  width: 80vw;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
}
</style>
