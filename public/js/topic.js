
function initializedEventListeners() {
  let commentButtons = document.querySelectorAll('.commentTopicBtn');

  for (let i = 0; i < commentButtons.length; i++) {
    commentButtons[i].addEventListener("click", CommentTopicBtnHandler);
  }

  if (document.querySelector('#editTopicBtn')) {
    document
    .querySelector('#editTopicBtn')
    .addEventListener('click', EditTopicBtnHandler);
  }

  if (document.querySelector('#confirmDeleteBtn')) {
  document
    .querySelector('#confirmDeleteBtn')
    .addEventListener('click', DeleteTopicBtnHandler);
  }

}

const CommentTopicBtnHandler = async (event) => {  
  // handle comment adding 
  const currURL = document.location.href;
  await document.location.replace(currURL+`/comment`);
};

const EditTopicBtnHandler = async (event) => {
  const currURL = document.location.href;
  await document.location.replace(currURL + `/edit`);
};

const DeleteTopicBtnHandler = async (event) => {
  // take the current topic's id from the URL. display a modal, if confirmed, delete the topic
  const topicId = parseInt(document.location.pathname.split("/").slice(-1))
  
  if (event.target.id == "confirmDeleteBtn") {
  
    const response = await fetch(`/api/topics/${topicId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {

      alert('Failed to delete topic');
    }
  }

};

// bundle all event listeners into one function on load  
initializedEventListeners();