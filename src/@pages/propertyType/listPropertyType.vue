<template>
  <div>
    <h2>Properties List</h2>
    <v-card v-for="(property, index) in properties" :key="index" class="mb-4">
      <v-card-title>
        <h3 v-if="property.type === 'Apartment'">Apartment</h3>
        <h3 v-else-if="property.type === 'House'">House</h3>
        <h3 v-else-if="property.type === 'Shop'">Shop</h3>
        <h3 v-else-if="property.type === 'Plot'">Plot</h3>
      </v-card-title>
      <v-card-text>
        <p><strong>Name:</strong> {{ property.name }}</p>
        <p><strong>Location:</strong> {{ property.location }}</p>
        <!-- Add other property details here -->
      </v-card-text>
    </v-card>
  </div>
</template>
<script>

</script>