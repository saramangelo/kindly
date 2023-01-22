// FRONT END - Creating opportunity on front end here, sending to the back end
// This corresponds with opportunityRoutes.js on BE

const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#opportunity-name').value.trim();
  const sponsor = document.querySelector('#organization-name').value.trim();
  const description = document.querySelector('#opportunity-description').value.trim();
  const date = document.querySelector('#date-of-opp').value.trim();
  const location = document.querySelector('#opportunity-location').value.trim();
  const items = document.querySelector('#items-to-bring').value.trim();
  const volunteers = document.querySelector('#volunteers-needed').value.trim();
  const cloudinaryBtn = document.querySelector('#upload_widget');


// cloudinary widget

let myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "",
    uploadPreset: ""
  },
  (error, result) => {
    if (!error && result && result.event === "success"){
      console.log("Done! Here is the image info: ", result.info);
    }
  }
);

cloudinaryBtn.addEventListener('click', function(){
  myWidget.open();
},
false
);



  if (
    name &&
    sponsor &&
    description &&
    date &&
    location &&
    items &&
    volunteers
  ) {
    const response = await fetch(`/api/opportunities`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        sponsor,
        description,
        date,
        location,
        items,
        volunteers
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // /profile corresponds to homeRoutes.js on BE
      document.location.replace('/profile');
    } else {
      console.log(response)
      alert('Failed to create opportunity');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/opportunities/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

document
  .querySelector('.new-opportunity-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.opportunity-list')
//   .addEventListener('click', delButtonHandler);
