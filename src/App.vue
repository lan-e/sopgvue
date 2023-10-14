<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: 600;
  color: #9e4e30bb;
  text-decoration: none;
  margin: 8px;
}

nav a.router-link-exact-active {
  background: #deb887;
  padding: 16px;
  border-radius: 8px;
}
</style>
