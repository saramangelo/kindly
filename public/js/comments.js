const submitComment = async () => {
  const comment = document.querySelector('#comment').value.trim();

  if (comment) {
    console.log(comment);

    let input = JSON.stringify({
      comment,
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

document.querySelector('.btn').addEventListener('click', submitComment);
