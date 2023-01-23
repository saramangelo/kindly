let photo;
var myWidget = cloudinary.createUploadWidget(
  {
    cloudName: 'di3e0booq',
    uploadPreset: 'kindly',
  },
  (error, result) => {
    if (!error && result && result.event === 'success') {
      photo = result.info;
      console.log('Done! Here is the image info: ', result.info);
    }
  }
);

document.getElementById('upload_widget').addEventListener(
  'click',
  function () {
    myWidget.open();
  },
  false
);
