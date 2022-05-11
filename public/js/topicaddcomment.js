
const CommentAddHandler = async (event) => {
    event.preventDefault();
  
    const comment_body = document.querySelector('#comment-body').value.trim();
    const topic_id = document.querySelector('input[name="post-id"]').value;
    // console.log(topic_id)
    if (comment_body && topic_id)  {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment_body, topic_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/topic/${topic_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };

document
  .querySelector('#createCommentBtn')
  .addEventListener('click', CommentAddHandler);
