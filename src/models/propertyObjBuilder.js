export default function createPropertyObj(state) {
  console.log('object builder function');
  return {
    title: state.titleAndDescriptionModule.title,
    target: state.rubricModule.target,
    usages: state.usageModule.usages,
    size: state.sizeModule.size,
    plotSize: state.plotSizeModule.size,
    price: state.priceModule.price,
    floorNumber: state.buildingFactsModule.floorNumber,
    numberOfFloors: state.buildingFactsModule.numberOfFloors,
    numberOfRooms: state.buildingFactsModule.numberOfRooms,
    furnished: state.buildingFactsModule.furnished,
    availableFrom: state.buildingFactsModule.availableFrom,
    availableTo: state.buildingFactsModule.availableTo,
    description: state.titleAndDescriptionModule.description,
    address: state.addressModule.address,
    photos: state.photosModule.photos,
    contactPerson: state.contactPersonModule,
  };
}
