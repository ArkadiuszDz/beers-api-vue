<template>
  <div class="beers-list">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="beer in beers" :key="beer.name">
        <Beer :beer="beer" v-on:click_child="showModal" />
      </li>
    </ul>
    <div class="modal-bg">
      <div class="modal-bg__inner">
        <BeerBox :beer_description="beer_data" :display="display_box" v-on:close_modal="closeModal"/>
      </div>
    </div>
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
      document.getElementsByClassName('modal-bg')[0].style.display = "block"
      document.body.style.overflow = "hidden"
    },
    closeModal () {
      this.display_box = false;
      document.getElementsByClassName('modal-bg')[0].style.display = ""
      document.body.style.overflow = ""
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
.modal-bg {
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: none;
  overflow: auto;
  top: 0;
  left: 0;
}
.modal-bg__inner {
    height: 100%;
    min-height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>