// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import "vuetify/dist/vuetify.min.css";

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        primary: "#ee44aa",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
 
  
})
