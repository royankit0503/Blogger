function deletePost(id){
    var idSplit= id.split("-");
    var idNum = idSplit[2];

    var blogListModalIndex="blog-list-modal-"+idNum
    var blogListModal = document.getElementById(blogListModalIndex);

    if(blogListModal.style.display=="" || blogListModal.style.display=="none"){
        blogListModal.style.display="block";
    }
    var postDeleteBtnIndex="post-delete-"+idNum
    var postDeleteBtn = document.getElementById(postDeleteBtnIndex);

    var deletePostModalYesIndex = "delete-post-modal-yes-"+idNum;
    var deletePostModelYes= document.getElementById(deletePostModalYesIndex);
    deletePostModelYes.onclick = function() {
        event.stopPropagation();
          blogListModal.style.display = "none";
    }


    var deletePostModalNoIndex = "delete-post-modal-no-"+idNum;
    var deletePostModelNo = document.getElementById(deletePostModalNoIndex)
    deletePostModelNo.onclick = function() {
        event.stopPropagation();
    }

    window.onclick = function(event) {
        event.stopPropagation();
          if (event.target == blogListModal) {
            blogListModal.style.display = "none";
          }
    }
}

