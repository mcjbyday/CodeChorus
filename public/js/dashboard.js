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

const CommentTopicBtnHandler = async (event) => {  
  // await console.log('Is anything happening')
  const id = event.target.getAttribute('data-id');
  // console.log("displayme" + event.target.dataset.id);
  // console.log("my dataid\n" + event.target.getAttribute('data-id'));
  // await console.log('Is anything happening')
  // const topic_id = document.querySelector('input[name="post-id"]').value;

  await document.location.replace(`/topic/${id}/comment`);
};

const EditTopicBtnHandler = async (event) => {
  const id = event.target.getAttribute('data-id');

  await document.location.replace(`/topic/${id}/edit`);
  
};

const DeleteTopicBtnHandler = async (event) => {  
  
  const confirmation = await window.confirm("Are you sure you'd like to delete this topic?");
  
  if (event.target.hasAttribute('data-id') && confirmation) {
    // if (event.target.hasAttribute('data-id')) {
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


// dashboard 
// click on your post, brings you to an edit form 


document
  .querySelector('.new-topic-form')
  .addEventListener('submit', newFormHandler);

  document
  .querySelector('.editTopicBtn')
  .addEventListener('click', EditTopicBtnHandler);
  
  
  document
  .querySelector('.deleteTopicBtn')
  .addEventListener('click', DeleteTopicBtnHandler);
  
  
  document
  .querySelector('.commentTopicBtn')
  .addEventListener('click', CommentTopicBtnHandler);

