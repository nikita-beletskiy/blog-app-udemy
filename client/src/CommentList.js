import React from 'react';

const CommentList = ({ comments }) => {
  const renderedComments = comments.map(comment => {
    const commentText =
      comment.status === 'rejected'
        ? 'This comment has been rejected'
        : comment.status === 'pending'
        ? 'This comment is awaiting moderation'
        : comment.content;

    return <li key={comment.id}>{commentText}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
