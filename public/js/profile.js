// FRONT END - Creating opportunity on front end here, sending to the back end
// This corresponds with opportunityRoutes.js on BE
// let post_id = 0;

// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#opportunity-name').value.trim();
//   const sponsor = document.querySelector('#organization-name').value.trim();
//   const description = document
//     .querySelector('#opportunity-description')
//     .value.trim();
//   const date = document.querySelector('#date-of-opp').value.trim();
//   const location = document.querySelector('#opportunity-location').value.trim();
//   const items = document.querySelector('#items-to-bring').value.trim();
//   const volunteers = document.querySelector('#volunteers-needed').value.trim();

//   if (
//     name &&
//     sponsor &&
//     description &&
//     date &&
//     location &&
//     items &&
//     volunteers &&
//     photo.url
//   ) {

// //        // MODAL
// //        console.log(photo)
// //        // if (!photo.url) {
// //        //   const myModal = new bootstrap.Modal(document.getElementById('myModal'), () =>{
// //        //     myModal.show()
// //        //   })
// //        // }
// //       //  $(document).ready(function(){
// //       //   $("#myBtn").click(function(){
// //       //     $("#myModal").modal();
// //       //     console.log('clicked')
// //       //   });
// //       // });

// //     console.log(photo);

//     let input = JSON.stringify({
//       name,
//       organization_name: sponsor,
//       description,
//       date_of_opp: date,
//       location,
//       items,
//       volunteers_needed: volunteers,
//       photo: photo.url,
//     });

//     // console.log(input)
//     const response = await fetch(`/api/opportunities/`, {
//       method: 'POST',
//       body: input,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       // /profile corresponds to homeRoutes.js on BE
//       document.location.replace('/profile');
//     } else {
//       //TODO: target the modal
//       //TODO: change it to display block
//     }
//   }
// };

// TEST

// UPDATE/POST
const name = document.querySelector('#opportunity-name').value.trim();
const sponsor = document.querySelector('#organization-name').value.trim();
const description = document
  .querySelector('#opportunity-description')
  .value.trim();
const date = document.querySelector('#date-of-opp').value.trim();
const location = document.querySelector('#opportunity-location').value.trim();
const items = document.querySelector('#items-to-bring').value.trim();
const volunteers = document.querySelector('#volunteers-needed').value.trim();

let post_id = 0;

const newFormHandler = async (event) => {
  event.preventDefault();

  let name = name.value.trim();
  let organization_name = sponsor.value.trim();
  let description = description.value.trim();
  let date_of_opp = date.value.trim();
  let location = location.value.trim();
  let items = volunteers.value.trim();

  if (
    name &&
    sponsor &&
    description &&
    date &&
    location &&
    items &&
    volunteers
  ) {
    let response;
    let input = {
      name,
      organization_name,
      description,
      date_of_opp,
      location,
      items,
    };

    if (post_id === 0) {
      response = await fetch(`/api/opportunities`, {
        method: 'POST',
        body: JSON.stringify(input),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      let updated_post = { ...input, id: post_id };

      response = await fetch(`/api/opportunities`, {
        method: 'PUT',
        body: JSON.stringify(updated_post),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create blog');
    }
  }
};

// DELETE
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/opportunities/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      // alert('Failed to delete opportunity');
      //TODO: target the modal
      //TODO: change it to display block
    }
  }
};

const editButtonHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/opportunities/${id}`);
    const data = await response.json();
    console.log(data);

    name.value = data.name;
    sponsor.value = data.sponsor;
    description.value = data.description;
    date.value = data.date;
    location.value = data.location;
    items.value = data.items;
    volunteers.value = data.volunteers;
    post_id = data.id;
  }
};

document
  .querySelector('.new-opportunity-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.opportunity-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.edit-btn')
  .addEventListener('click', editButtonHandler);
