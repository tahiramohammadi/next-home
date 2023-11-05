<template>
  <v-container>
    <v-card row wrap justify-space-around>
      <v-flex md6 xs8>
        <v-text-field outlined dense flat v-model="name" label="Name">
        </v-text-field>
      </v-flex>
    </v-card>
    <v-card row wrap justify-space-around>
      <v-flex md6 xs8>
        <v-text-field outlined dense flat v-model="email" label="Email address">
        </v-text-field>
      </v-flex>
    </v-card>
    <v-card row wrap justify-space-around>
      <v-flex md6 xs8>
        <v-text-field outlined dense flat v-model="phoneNumber" label="Phone number">
        </v-text-field>
      </v-flex>
    </v-card>
    <v-card row wrap justify-space-around>
      <v-flex md6 xs8>
        <v-textarea auto-grow outlined rows="3" v-model="moreInformation" label="More information">
        </v-textarea>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const name = computed({
  get() {
    return store.state.contactPersonModule.name;
  },
  set(val) {
    store.commit('contactPersonModule/updateName', val);
  }
})
const email = computed({
  get() {
    return store.state.contactPersonModule.email
  },
  set(val) {
    store.commit('contactPersonModule/updateEmail', val)
  }
})
const phoneNumber = computed({
  get() {
    return store.state.contactPersonModule.phoneNumber;
  },
  set(val) {
    store.commit('contactPersonModule/updatePhoneNumber', val)
  }
})
const moreInformation = computed({
  get() {
    return store.state.contactPersonModule.moreInformation;
  },
  set(val) {
    store.commit('contactPersonModule/updateMoreInformation', val)
  }
})

</script>

