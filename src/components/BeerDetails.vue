<template>
  <div class="container">
    <div class="beer-header">
      <div class="img-wrapper">
        <img :src="this.beers.image_url" />
      </div>
    </div>
  </div>
</template>

<script>
import get_beers from '../assets/scripts/getBeers';

export default {
  name: 'BeerDetails',
  methods: {
    get_beers
  },
  created() {
    get_beers(this.$route.params.beerName).then(response => {
      this.beers = response[0]
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
}
</style>
