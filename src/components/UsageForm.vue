<template>
  <div>
    <v-row justify="start">
      <v-col cols="12" md="5">
        <v-select v-model="usagesToStore" :items="usages" multiple label="Recomended usage" dense item-color="success"
          color="success" chips outlined :menu-props="{ offsetY: true }">
        </v-select>
      </v-col>
    </v-row>
  </div>
</template>

<!-- <script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
const store = useStore()
const buildingUsages = ref(['For living', 'For business'])
const plotUsages = ref(['Construction of living buildings',
  'Construction of business buildings',
  'Agriculture',
  'Sport fields',
  'Other uses'])

const propertyType = computed(() => store.state.rubricModule.propertyType);

function usages() {
  if (propertyType === 'plot') {
    return plotUsages;
  } 
    return buildingUsages;
  
}



const usagesToStore = computed({
  get() {
    return store.state.usageModule.usages
  },
  set(val) {
    store.commit('usageModule/updateUsages', val)
  }
})

</script> -->
<script>

import { mapState } from 'vuex';
export default {
 

  data() {
    return {
      buildingUsages: ['For living', 'For business'],
      plotUsages: [
        'Construction of living buildings',
        'Construction of business buildings',
        'Agriculture',
        'Sport fields',
        'Other uses',
      ],
    };
  },

  computed: {
    ...mapState({
      propertyType: (state) => {
        return state.rubricModule.propertyType;
      },
    }),
    usages() {
      if (this.propertyType === 'Plot') {
        return this.plotUsages;
      }
      return this.buildingUsages;
    },
    usagesToStore: {
      get() {
        return this.$store.state.usageModule.usages;
      },
      set(val) {
        this.$store.commit('usageModule/updateUsages', val);
      },
    },
  },
};
</script>