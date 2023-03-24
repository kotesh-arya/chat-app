import React, { useState } from 'react';
import supabase from '../../Config/supabaseClient';

const InputContainer = () => {
  const [sendingMessage, setSendingMessage] = useState('');
  const [sendingError, setSendingError] = useState(null);
  console.log(sendingMessage);
  const handleSubmit = async () => {
    console.log(sendingMessage);
    if (sendingMessage === '') {
      setSendingError('Please valid message to send');
    } else {
      const { data, error } = await supabase
        .from('Messages')
        .insert([{ sender: 'kotesh', message: sendingMessage }])
        .select();
      if (error) {
        console.log(error);
        setSendingError('Please valid message to send');
      }
      if (data) {
        console.log(data);
        setSendingError('');
      }
    }

    setSendingMessage(''); //this should be executed after successfull API call which add the message
  };
  return (
    <div className="h-20 mt-4 bottom-0 fixed w-full font-bold text-slate-50 flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <input
        className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
        defaultValue={sendingMessage}
        onChange={(e) => {
          setSendingMessage(e.target.value);
        }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => {
          handleSubmit();
        }}
      >
        SEND
      </button>
      {sendingError && <p>{sendingError}</p>}
    </div>
  );
};

export default InputContainer;
