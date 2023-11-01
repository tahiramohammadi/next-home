<template>
  <v-app>
    <div>
      <v-app-bar dense color="#000000" app>
        <v-img
          contain
          src="./assets/logo.png"
          max-hight="120"
          max-width="120"
        ></v-img>
      </v-app-bar>
      
    </div>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
}
</script>
