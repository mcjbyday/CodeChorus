const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#topic-name').value.trim();
  // const needed_funding = document.querySelector('#topic-funding').value.trim();
  const post_body = document.querySelector('#topic-desc').value.trim();

  if (title && post_body) {
    const response = await fetch(`/api/topics`, {
      method: 'POST',
      body: JSON.stringify({ title, post_body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create topic');
    }
  }
};



const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    
    const response = await fetch(`/api/topics/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete topic');
    }
  }
};

const updateButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/topics/${id}`, {
        method: 'PUT',
      });
  
      if (response.ok) {
        document.location.replace(`/topics/${id}`);
      } else {
        alert('Failed to edit topic');
      }
    }

}

// dashboard 
// click on your post, brings you to an edit form 


document
  .querySelector('.new-topic-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('#delBtn')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('#updBtn')
  .addEventListener('click', updateButtonHandler);



//modification of data happens in API
// rendering all occurs in home routes
// put request in topicRoutes
// refresh page wwhen an edit is submitted