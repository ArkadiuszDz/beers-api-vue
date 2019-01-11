<template>
    <header>
        <div class="header-content">
            <div class="logo-wrapper">
                <img src="../assets/logo.png">
            </div>
            <div class="nav-content">
                <nav class="menu">
                    <div class="menu__item">
                        <p>Item 1</p>
                    </div>
                    <div class="menu__item">
                        <p>Item 2</p>
                    </div>
                    <div class="menu__item">
                        <p>Item 3</p>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
//   data () {
//     return {
//       msg: 'First Vue.js App'
//     }
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    padding: 20px 0;
    background-color: rgba(255,255,0,0.8);
}
.logo-wrapper {
    width: 80px;
}
.logo-wrapper img {
    width: 100%;
}
.header-content {
    display: flex;
    justify-content: space-between;
    max-width: 80vw;
    margin: 0 auto;
}
.nav-content {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.menu {
    display: flex;
    justify-content: space-around;
}
.menu__item {
    width: 30%;
}
.menu__item p {
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>
