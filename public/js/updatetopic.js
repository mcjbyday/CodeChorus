
const updateButtonHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#topic-name').value.trim();
  const post_body = document.querySelector('#topic-desc').value.trim();
  const topic_id = document.querySelector('input[name="post-id"]').value;

  if (title && post_body && topic_id) {
    const response = await fetch(`/api/topics/${topic_id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, post_body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create topic');
    }
  }
};



document
  .querySelector('#updateTopicBtn')
  .addEventListener('click', updateButtonHandler);

