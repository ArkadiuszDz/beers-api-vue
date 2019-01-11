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
        </div>
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
    closeModal(element) {
      console.log('close the window',element);
      this.display = false;
    }
  },
  data () {
    return {
      msg: 'Beer description',
      
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
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    padding: 5px 20px;
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

</style>
