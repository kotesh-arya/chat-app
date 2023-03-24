import React, { useEffect, useState } from 'react';
import supabase from '../../Config/supabaseClient';

import BubbleContainer from '../BubbleContainer/BubbleContainer';

const MessageSection = () => {
  console.log(supabase);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState(null);
  useEffect(() => {
    const getMessages = async () => {
      const { data, error } = await supabase.from('Messages').select();
      if (error) {
        setError('Failed to Load the Messages, please try again');
        setMessages(null);
        console.log(error);
      } else {
        setMessages(data);
        setError(null);
        console.log(data);
      }
    };
    getMessages();
  }, []);
  return (
    <div className="flex items-center  pt-40  text-white justify-center flex-col">
      <div className="chat-bubble">
        This is the beginning of your conversation...
      </div>
      <div className="  w-2/3 pl-8    min-h-fit pt-20 pb-26 mb-36   font-bold text-black-50 flex items-center justify-center flex-col ">
        {error && <p>{error}</p>}
        {messages &&
          messages.map((message) => {
            return <BubbleContainer key={message.id} {...message} />;
          })}
      </div>
    </div>
  );
};

export default MessageSection;
