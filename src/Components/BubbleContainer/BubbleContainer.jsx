import React from 'react';

const BubbleContainer = ({message, sender}) => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.pravatar.cc/300" alt="user-avatar" />
        </div>
      </div>
      <div className="chat-bubble">
       {message}
      </div>
    </div>
  );
};

export default BubbleContainer;
