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

       // MODAL
       console.log(photo)
       // if (!photo.url) {
       //   const myModal = new bootstrap.Modal(document.getElementById('myModal'), () =>{
       //     myModal.show()
       //   })
       // }
       $(document).ready(function(){
        $("#myBtn").click(function(){
          $("#myModal").modal();
          console.log('clicked')
        });
      });

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
    } else {
      //TODO: target the modal
      //TODO: change it to display block
    }
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
    } else {
      // alert('Failed to delete opportunity');
      //TODO: target the modal
      //TODO: change it to display block
    }
  }
};

document
  .querySelector('.new-opportunity-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.opportunity-list')
  .addEventListener('click', delButtonHandler);

