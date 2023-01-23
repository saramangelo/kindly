// FRONT END - Creating opportunity on front end here, sending to the back end
// This corresponds with opportunityRoutes.js on BE

const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#opportunity-name').value.trim();
  const sponsor = document.querySelector('#organization-name').value.trim();
  const description = document
    .querySelector('#opportunity-description')
    .value.trim();
  const date = document.querySelector('#date-of-opp').value.trim();
  const location = document.querySelector('#opportunity-location').value.trim();
  const items = document.querySelector('#items-to-bring').value.trim();
  const volunteers = document.querySelector('#volunteers-needed').value.trim();

  // ISO to String Method for date
  function createUTCdateForISO(date) {
    const offset = new Date().getTimezoneOffset();
    const myDate = Date.parse(date) - offset + 60 + 1000;
    const dateAsISO = new Date(myDate).toISOString();
    console.log(dateAsISO);
    return dateAsISO;
  }

  if (
    name &&
    sponsor &&
    description &&
    date &&
    location &&
    items &&
    volunteers
  ) {
    console.log(photo)
    let input = JSON.stringify({
      name,
      organization_name: sponsor,
      description,
      date_of_opp: date,
      location,
      items,
      volunteers_needed: volunteers,
      photo: photo.url,
    });

    // console.log(input)
    const response = await fetch(`/api/opportunities/`, {
      method: 'POST',
      body: input,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // /profile corresponds to homeRoutes.js on BE
      document.location.replace('/profile');
    } else {
      console.log(response);
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
