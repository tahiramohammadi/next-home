<template>
  <div>
    <v-row justify="start">
      <v-col cols="12" md="5">
        <v-select v-model="usagesToStore" :items="usages" multiple label="Recomended usage" dense  color="#1DE9B6"
         chips variant="outlined" :menu-props="{ offsetY: true }">
        </v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { userubricStore } from '../stores/rubricStore.js';
import { useusageStore } from '../stores/usageStore.js';
import { computed, ref } from 'vue';

export default {
  setup() {
    const store = useusageStore();
    const rubricStore = userubricStore();

    const plotUsages = ref([
      'Construction', 'Sport',
       'Construction for business', 
       'For business', 'Other usage',' Agriculture'
    ]);

    const buildingUsages = ref(['For living', 'For business']);

    const propertyType = computed(() => rubricStore.propertyType);

    const usages = computed(() => {
      if (propertyType.value === "Plot") {
     return plotUsages.value;
      } else {
          return buildingUsages.value;
         
      }
    });

    const usagesToStore = computed({
      get: () => store.usage,
      set: (val) => store.updateUsages(val)
    });

    return {
      usagesToStore,
      usages
    };
  }
};
</script>
