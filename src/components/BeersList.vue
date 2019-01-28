<template>
  <div class="beers-list">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="beer in beers" :key="beer.name">
        <Beer :beer="beer" v-on:click_child="showModal" />
      </li>
    </ul>
    <BeerBox :beer_description="beer_data" :display="display_box" v-on:close_modal="closeModal"/>
  </div>
</template>

<script>
import Beer from '@/components/Beer';
import BeerBox from '@/components/BeerBox';

export default {
  name: 'BeersList',
  props: ['beers'],
  components: {
    Beer, BeerBox
  },
  methods: {
    showModal(clicked_item_id) {
      this.beer_data = this.beers.find((element) => element.id === clicked_item_id);
      this.display_box = true;
    },
    closeModal () {
      this.display_box = false;
    }
  },
  data() {
    return {
      msg: 'List of beers',
      beer_data: {},
      display_box: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 5px;
    cursor: pointer;
  }
    
</style>