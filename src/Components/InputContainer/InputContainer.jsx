import React from 'react';

const InputContainer = () => {
  return (
    <div className="h-20 mt-4 bottom-0 fixed w-full font-bold text-slate-50 flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <input className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        SEND
      </button>
    </div>
  );
};

export default InputContainer;
