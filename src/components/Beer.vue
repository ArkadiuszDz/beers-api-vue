<template>
  <div class="beers-list__item" v-on:click="clickHandler">
      <p>{{ beer.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'Beer',
  //props: {'beerType': String}
  props: ['beer'],
  methods: {
      clickHandler() {
          this.$emit('click_child',this.beer.id);  //przekazuje event do rodzica
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.beers-list__item {
    border: 1px solid black;
    margin: 0 auto;
}

.beers-list__item p {
    font-weight: bold;
}

.beers-list__item:hover {
        background-color: rgba(240,240,240,0.9);
}

</style>
