
import { createStore } from 'vuex'
import rubricModule from './modules/forms/rubric';
import addressModule from './modules/forms/address';
import priceModule from './modules/forms/price';
import usageModule from './modules/forms/usage';
import sizeModule from './modules/forms/size';
import buildingFactsModule from './modules/forms/buildingFacts';
import titleAndDescriptionModule from './modules/forms/titleAndDescription';
import photosModule from './modules/forms/photos';
import contactPersonModule from './modules/forms/contactPerson'; 



const store= createStore({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    rubricModule, 
    addressModule,
    priceModule,
    sizeModule,
    usageModule,
    plotSizeModule: sizeModule, 
    buildingFactsModule,
    titleAndDescriptionModule,
    photosModule,
    contactPersonModule,
  },
  //plugins: [vuexLocal.plugin],
});
export default store