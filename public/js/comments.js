const comment = document.querySelector('#comment').value.trim(); 

const submitComment = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value.trim(); 
  
    if (
      comment
    ) {
  
  
      console.log(photo);
  
      let input = JSON.stringify({
        comment
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

      }
    }
  };

document
  .querySelector('.btn')
  .addEventListener('submit', submitComment);