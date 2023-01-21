const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#opportunity-name').value.trim();
  const sponsor = document.querySelector('#organization-name').value.trim();
  const description = document.querySelector('#opportunity-description').value.trim();
  const date = document.querySelector('#date-of-opp').value.trim();
  const location = document.querySelector('#opportunity-location').value.trim();
  const items = document.querySelector('#items-to-bring').value.trim();
  const volunteers = document.querySelector('#volunteers-needed').value.trim();
  // const imageUrl = document.querySelector('#photo').value.trim();

  if (
    name &&
    sponsor &&
    description &&
    date &&
    location &&
    items &&
    volunteers
  ) {
    const response = await fetch(`/api/opportunity`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        sponsor,
        description,
        date,
        location,
        items,
        volunteers
        // imageUrl,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/new-opportunity');
    } else {
      console.log(response)
      alert('Failed to create project');
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
