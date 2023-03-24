import React, { useEffect, useState } from 'react';
import supabase from '../../Config/supabaseClient';

import BubbleContainer from '../BubbleContainer/BubbleContainer';

const MessageSection = () => {
  const [error, setError] = useState(null);
  const [updateMessages, setUpdateMessages] = useState(false);
  const [messages, setMessages] = useState(null);

  const [sendingMessage, setSendingMessage] = useState("");
  const [sendingError, setSendingError] = useState(null);

  const handleSubmit = async () => {
    console.log(sendingMessage);
    if (!sendingMessage) {
      setSendingError('Please enter some message to send');
    } else {
      const { data, error } = await supabase
        .from('Messages')
        .insert([{ sender: 'kotesh', message: sendingMessage }])
        .select();
      if (error) {
        console.log(error);
        setSendingError('Please enter valid message to send');
      }
      if (data) {
        console.log(data);
        setSendingError('');
        console.log(sendingMessage);
        setSendingMessage(""); //this should be executed after successfull API call which add the message
      }
    }
  };
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
  }, [updateMessages]);
  return (
    <div>
      <div className="flex items-center  pt-40  text-white justify-center flex-col">
        <div className="chat-bubble">
          This is the beginning of your conversation...
        </div>
        <div className="  w-2/3 pl-8    min-h-fit pt-20 pb-26 mb-36   font-bold text-black-50 flex items-start justify-center flex-col ">
          {error && <p>{error}</p>}
          {messages &&
            messages.map((message) => {
              return <BubbleContainer key={message.id} {...message} />;
            })}
        </div>
      </div>
      <div className="h-20 mt-4 bottom-0 fixed w-full font-bold text-slate-50 flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <input
          className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          value={sendingMessage}
          onChange={(e) => {
            setSendingMessage(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => {
            handleSubmit();
            setUpdateMessages(!updateMessages);
          }}
        >
          SEND
        </button>
        {sendingError && <p>{sendingError}</p>}
      </div>
    </div>
  );
};

export default MessageSection;
