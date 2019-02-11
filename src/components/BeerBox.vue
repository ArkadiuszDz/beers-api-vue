<template>
  <div class="beer-box-container" v-if="display">
    <div class="beer-box-container__header">
      <h1>{{ beer_description.name }}</h1>
      <CloseButton v-on:close_clicked="closeModal"/>
      <div class="description-content">
        <div class="img-wrapper">
         <img :src="beer_description.image_url" />
        </div>
        <div class="beer-info">
          <p>{{ beer_description.description }}</p>
          <p>IBU: {{ beer_description.ibu }}</p>
        </div>
      </div>
      <div class="btn-wrapper">
        <router-link :to="{ name: 'BeerDetails', params: { beerName: beer_description.name }}">
          <div class="btn">
            <span>See more details</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CloseButton from '@/components/CloseButton';

export default {
  name: 'BeerBox',
  props: ['display','beer_description'],
  components: {
    CloseButton
  },
  methods: {
    closeModal() {
      this.$emit('close_modal',this);
    }
  },
  data () {
    return {
      msg: 'Beer description'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.beer-box-container {
  width: 500px;
  height: 600px;
  border: 1px solid black;
  border-radius: 20px;
  margin: 0 auto;
  z-index: 5;
  background-color: white;
  padding: 5px 20px;
  position: relative;
}

.beer-box-container__header {
  position: relative;
  padding-top: 20px;
}

.description-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.img-wrapper {
  width: 30%;
  height: 300px;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.beer-info {
  width: 70%;
}

.beer-info p {
  text-align: justify;
  padding: 5px 10px;
}

.btn-wrapper {
  width: 200px;
  margin: 0 auto;
  padding: 30px 20px;
}

.btn {
  width: 100%;
  padding: 15px;
  background-color: #c469ff;
  color: white;
  border-radius: 10px;
  position: relative;
}

.btn::after {
    content: '';
    position: absolute;
    line-height: 48px;
    left: 50%;
	  bottom: 0;
	  transform: translateX(-50%);
    transform-origin: 50% 50%;
    height: 100%;
    width: 0;
    background-color: #b348f9;
    transition: 0.4s;
    border-radius: 10px;
    box-sizing: border-box;
}

.btn span {
  position: relative;
  z-index: 2;
}

.btn:hover::after {
  transform: translateX(-50%);
  width: 100%;
}

.btn-wrapper a {
  text-decoration: none;
}
</style>
