<template>
  <v-container>
    <v-layout row wrap justify-space-around>
      <v-flex md6 xs8>
        <v-text-field outlined dense flat v-model="name" label="Name">
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-around>
      <v-flex md6 xs8>
        <v-text-field outlined dense flat v-model="email" label="Email address">
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-around>
      <v-flex md6 xs8>
        <v-text-field
          outlined
          dense
          flat
          v-model="phoneNumber"
          label="Phone number"
        >
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-around>
      <v-flex md6 xs8>
        <v-textarea
          auto-grow
          outlined
          rows="3"
          v-model="moreInformation"
          label="More information"
        >
        </v-textarea>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  computed: {
    name: {
      get() {
        return this.$store.state.contactPersonModule.name;
      },
      set(val) {
        this.$store.commit('contactPersonModule/updateName', val);
      },
    },
    email: {
      get() {
        return this.$store.state.contactPersonModule.email;
      },
      set(val) {
        this.$store.commit('contactPersonModule/updateEmail', val);
      },
    },
    phoneNumber: {
      get() {
        return this.$store.state.contactPersonModule.phoneNumber;
      },
      set(val) {
        this.$store.commit('contactPersonModule/updatePhoneNumber', val);
      },
    },
    moreInformation: {
      get() {
        return this.$store.state.contactPersonModule.moreInformation;
      },
      set(val) {
        this.$store.commit('contactPersonModule/updateMoreInformation', val);
      },
    },
  },
};
</script>
