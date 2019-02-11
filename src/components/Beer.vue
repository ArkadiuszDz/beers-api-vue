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
    position: relative;
}

.beers-list__item p {
    font-weight: bold;
    position: relative;
    z-index: 2;
}

.beers-list__item::after {
    content: '';
    position: absolute;
    left: 50%;
	bottom: 0;
	transform: translateX(-50%) scaleX(0);
    transform-origin: 50% 50%;
    width: 100%;
    height: 100%;
    background-color: rgba(240,240,240,0.9);
    transition: transform 0.4s;
}

.beers-list__item:hover::after {
    transform: translateX(-50%) scaleX(1);
}

</style>
