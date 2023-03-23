import React from 'react';
import BubbleContainer from '../BubbleContainer/BubbleContainer';

const MessageSection = () => {
  return (
    <div className="flex items-center  justify-center flex-col">
      Start a conversation... (This will be conditionally rendered)
      <div className="  w-2/3 pl-8  min-h-fit pt-20 pb-26 mb-36   font-bold text-black-50 flex items-start justify-center flex-col ">
        <BubbleContainer />
        <BubbleContainer />
        <BubbleContainer />
        <BubbleContainer />
      </div>
    </div>
  );
};

export default MessageSection;
