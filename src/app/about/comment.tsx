import React, { useState } from "react";

interface Comment {
  id: number;
  text: string;
  user: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.target.value);
  };
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText && userName) {
      const newComment = {
        id: comments.length + 1,
        text: commentText,
        user: userName,
      };
      setComments((prevComments) => [...prevComments, newComment]);
      setCommentText("");
      setUserName("");
    } else {
      alert("Please provide both username and comment.");
    }
  };

    return (
      <div className="md:max-w-[1920px] mb-16 px-8 w-full">
    <div className="comment-section space-y-6">
      <h3 className="text-2xl font-bold font-helvetica mb-4">Comments</h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-4">
        <input
          type="text"
          placeholder="Your name"
          value={userName}
          onChange={handleUserNameChange}
          className="border px-4 py-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Add a comment"
          value={commentText}
          onChange={handleCommentChange}
          className="border px-4 mt-4 py-2 mb-2 w-full"
        />
        <button type="submit" className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 rounded-[4px] px-4 py-1 hover:via-orange-500 hover:to-orange-600 mt-4 w-[120px] text-white ">
          Submit
        </button>
      </form>

      {/* Display Comments */}
      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="border-b py-2">
              <p className="font-semibold">{comment.user}:</p>
              <p>{comment.text}</p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
            </div>
            </div>
  );
};

export default CommentSection;
