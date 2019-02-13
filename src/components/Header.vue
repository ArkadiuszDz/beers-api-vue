<template>
    <header>
        <div class="header-content">
            <div class="nav-content">
                <nav class="menu">
                    <div class="logo-wrapper">
                        <router-link :to="{ path: '/'}">
                            <img src="../assets/logo.png">
                        </router-link>
                    </div>
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
}
.logo-wrapper {
    width: 80px;
}
.logo-wrapper img {
    width: 100%;
}
.header-content {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1600px;
    margin: 0 auto;
}
.nav-content {
    width: 50%;
}
.menu {
    display: flex;
    justify-content: center;
}
.menu__item {
    padding: 10px;
    display: flex;
    align-items: center;
}
.menu__item p {
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>
