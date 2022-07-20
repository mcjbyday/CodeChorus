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
  const id = event.target.getAttribute('data-id');

  await document.location.replace(`/topic/${id}/comment`);
};

const EditTopicBtnHandler = async (event) => {
  const id = event.target.getAttribute('data-id');

  await document.location.replace(`/topic/${id}/edit`);
  
};

const DeleteTopicBtnHandler = async (event) => {  
  
  // provide confirmation to user via a modal when they express intent to delete a topic 
  const id = event.target.getAttribute('data-id');
  
  const response = await fetch(`/api/topics/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to delete topic');
  }
    
};

function initializedEventListeners() {
  let deleteButtons = document.querySelectorAll('.confirmDeleteBtn');

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", DeleteTopicBtnHandler);
  }

  document
  .querySelector('.new-topic-form')
  .addEventListener('submit', newFormHandler);

  document
  .querySelector('.editTopicBtn')
  .addEventListener('click', EditTopicBtnHandler);
  
  document
  .querySelector('.commentTopicBtn')
  .addEventListener('click', CommentTopicBtnHandler);

}

initializedEventListeners();
