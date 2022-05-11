
const CommentTopicBtnHandler = async (event) => {  
  // await console.log('Is anything happening')
  const currURL = document.location.href;
  await document.location.replace(currURL+`/comment`);
};

const EditTopicBtnHandler = async (event) => {
  const currURL = document.location.href;
  await document.location.replace(currURL + `/edit`);
};

const DeleteTopicBtnHandler = async (event) => {  
  console.log(event.target.dataset.id);
  // var myID = document.querySelector('#deleteTopicBtn').dataset.id;
  // console.log(myID);
  // console.log("my dataid\n" + event.target.getAttribute('data-id'));
  // await console.log('Is anything happening')
  // const confirmation = window.confirm("Are you sure you'd like to delete this topic?");
  //   // console.log(topic_id)
  // if (event.target.hasAttribute('data-id') && confirmation) {
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



document
.querySelector('#editTopicBtn')
.addEventListener('click', EditTopicBtnHandler);



document
.querySelector('#deleteTopicBtn')
.addEventListener('click', DeleteTopicBtnHandler);



document
.querySelector('#commentTopicBtn')
.addEventListener('click', CommentTopicBtnHandler);



