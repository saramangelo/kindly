// FRONT END - Creating opportunity on front end here, sending to the back end
// This corresponds with opportunityRoutes.js on BE
let post_id = 0;

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

  if (
    name &&
    sponsor &&
    description &&
    date &&
    location &&
    items &&
    volunteers &&
    photo.url
  ) {
    console.log(photo);

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
    }

    //Error bars when no entry is provided by users.
  } else {
    if (!name) {
      document.querySelector('#opportunity-name').className =
        'input-error form-control';
    }
    if (!sponsor) {
      document.querySelector('#organization-name').className =
        'input-error form-control';
    }
    if (!date) {
      document.querySelector('#date-of-opp').className =
        'input-error form-control';
    }
    if (!location) {
      document.querySelector('#opportunity-location').className =
        'input-error form-control';
    }
    if (!description) {
      document.querySelector(' #opportunity-description').className =
        'input-error form-control';
    }
    if (!items) {
      document.querySelector(' #items-to-bring').className =
        'input-error form-control';
    }
    if (!volunteers) {
      document.querySelector(' #volunteers-needed').className =
        'input-error form-control';
    }

    document.querySelector('.error-text').textContent =
      'You need to complete all fields & add an image to create an opportunity';
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/opportunities/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
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
