import { createPinia } from 'pinia'
import { useaddressStore } from '../stores/addressStore';
import { usecontactPersonStore } from '../stores/contactPersonStore';
import { userubricStore } from '../stores/rubricStore';
import { usepriceStore } from '../stores/priceStore';
import { usebuildingFactsStore } from '../stores/buildingFactsStore';
import { usephotosStore } from '../stores/photosStore';
import { usepropertyKeyFactsStore } from '../stores/propertyKeyFactsStore';
import { usesizeStore } from '../stores/sizeStore';
import { usetitleAndDescriptionStore } from '../stores/titleAndDescriptionStore';
const pinia = createPinia(
    strict= process.env.NODE_ENV !== 'production',
);

pinia.use(useaddressStore);
pinia.use(usecontactPersonStore);
pinia.use(userubricStore);
pinia.use(usepriceStore);
pinia.use(usebuildingFactsStore);
pinia.use(usephotosStore);
pinia.use(usepropertyKeyFactsStore);
pinia.use(usesizeStore);
pinia.use(usetitleAndDescriptionStore);


export default pinia