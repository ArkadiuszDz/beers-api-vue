<template>
  <div class="container">
    <div class="beer-header">
      <div class="img-wrapper">
        <img :src="this.beers.image_url" />
      </div>
      <div class="beer-name-wrapper">
        <h1>{{ this.beers.name }}</h1>
        <h2>{{ this.beers.tagline }}</h2>
        <p>IBU: {{ this.beers.ibu }}</p>
        <p>Attenuation level: {{ this.beers.attenuation_level }}</p>
        <p>First brewed: {{ this.beers.first_brewed }}</p>
        <p>ABV: {{ this.beers.abv }}</p>
        <p>EBC: {{ this.beers.ebc }}</p>
      </div>
    </div>
    <div class="beer-details">
      <div class="beer-details__params">
        <p>Volume: {{ this.beers.volume.value }} {{ this.beers.volume.unit }}</p>
        <p>Boil volume: {{ this.beers.boil_volume.value }} {{ this.beers.boil_volume.unit }}</p>
        <div class="method">
          <div v-for="mash in this.beers.method.mash_temp" :key="mash">
            <p>Mash temperature: {{ mash.temp.value }} {{ mash.temp.unit }}</p>
            <p>Duration: {{ mash.duration }}</p>
          </div>
        </div>
        <div class="beer-fermentation">
          <p>Fermentation temperature: {{ this.beers.method.fermentation.temp.value }} {{ this.beers.method.fermentation.temp.unit }}</p>
        </div>
        <div class="beer-ingredients">
          <div class="beer-malts">
            <h3>Malts</h3>
            <div class="beer-malts__item" v-for="malt in this.beers.ingredients.malt" :key="malt">
              <div class="malt">
                <p>{{ malt.name }}</p>
                <p>Amount: {{ malt.amount.value }} {{ malt.amount.unit }}</p>
              </div>
            </div>
          </div>
          <div class="beer-hops">
            <h3>Hops</h3>
            <div class="beer-hops__item" v-for="hop in this.beers.ingredients.hops" :key="hop">
              <div class="hop">
                <p>{{ hop.name }}</p>
                <p>Amount: {{ hop.amount.value }} {{ hop.amount.unit }}</p>
                <p>Add: {{ hop.add }}</p>
                <p>Attribute: {{ hop.attribute }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="beer-details__desc">
        <p>{{ this.beers.description }}</p>
        <div class="food">
          <p>Food pairing:</p>
          <p v-for="food in this.beers.food_pairing" :key="food">- {{food}}</p>
        </div>
        <p>Brewers tips: {{ this.beers.brewers_tips }}</p>
        <p class="beer-yeast">Yeast: {{ this.beers.ingredients.yeast }}</p>
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
.beer-header {
  display: flex;
  justify-content: space-around;
}
.img-wrapper {
  width: 30%;
  height: 250px;
}
.img-wrapper img {
  max-width: 100%;
  max-height: 100%;
}
.beer-name-wrapper {
    width: 70%;
}
h1, h2, h3, p {
    margin: 0;
    padding: 2px 0;
}
.beer-details {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}
.beer-details__params, .beer-details__desc {
    width: 50%;
    padding: 10px;
}
.beer-details__desc p {
    text-align: left;
}
.food {
    padding: 10px 0;
}
.method {
    padding: 10px 0;
}
.beer-fermentation {
    padding: 10px 0;
}
.malt, .hop {
    padding: 5px 0;
}
.beer-yeast {
    padding: 15px 0;
}
</style>
