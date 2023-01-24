const submitComment = async () => {
  const comments = document.querySelector('#comment').value.trim();
  const opportunity_id = document.querySelector('#opportunity');
  let oppId = opportunity_id.getAttribute('data-id');
  console.log(oppId);
  if (comment) {
    console.log(comment);

    let input = JSON.stringify({
      comments,
      opportunity_id: oppId,
    });

    // console.log(input)
    const response = await fetch(`/api/comments/`, {
      method: 'POST',
      body: input,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {

      document.location.replace(`/opportunity/${oppId}`);
    } else {
    }
  }
};

document.querySelector('.btn').addEventListener('click', submitComment);
