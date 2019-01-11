<template>
  <div class="wrapper" v-on:click="clickHandler">
      <div class="wrapper__inside">
          <div class="line1 line"></div>
          <div class="line2 line"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CloseButton',
  methods: {
      clickHandler() {
          this.$emit('close_clicked',this);  //przekazuje event do rodzica
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrapper {
    position: absolute;
    width: 25px;
    height: 25px;
    top: 10px;
    right: 5px;
}

.wrapper__inside {
    position: relative;
    height: 100%;
}

.line1, .line2 {
    position: absolute;
    height: 3px;
    background-color: black;
    width: 31px;
    top: 11px;
}

.line1 {
    transform: rotate(45deg);
    right: -4px;
}

.line2 {
    transform: rotate(-45deg);
    right: -4px;
}

.wrapper:hover .line {
    background-color: red;
    transition: 0.1s;
}

</style>
