
const CommentTopicBtnHandler = async (event) => {  
    // await console.log('Is anything happening')
    const currURL = document.location.href;
    await document.location.replace(currURL+`/comment`);
};

document
  .querySelector('#commentTopicBtn')
  .addEventListener('click', CommentTopicBtnHandler);
