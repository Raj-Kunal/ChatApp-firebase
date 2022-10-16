import React from 'react'
import { auth } from '../firebase'


const style = {
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-2xl `,
    name: `flex mt-[-3.7rem] text-gray-600 text-xs min-w-max`,
    sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right`,
    recieved: `bg-[#e5e5ea] text-black float-left `,
}

const Message = ({message}) => {
  // console.log(`message in ${message}`);
  const messageClass = 
  message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.recieved}`;
  
  return (
    <div>
      <div className={`${style.message} ${messageClass} `}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  )
}

export default Message
