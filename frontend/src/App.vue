<template>
  <div id="nav">
    <router-link active-class="activeNav" to="/">Home</router-link> |
    <router-link active-class="activeNav" to="/about">About</router-link>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
  font-weight: bold;
}

.activeNav {
  color: #b328cf;
}
</style>
