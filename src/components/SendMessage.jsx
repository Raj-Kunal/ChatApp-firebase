import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase";

const SendMessage = ({scroll}) => {
  const [input, setInput] = useState("");
  const sendMessage = async(e) => {
    e.preventDefault();
    if(input === ""){
        alert("Please enter a valid message");
        return;
    }
    const { uid, displayName } = auth.currentUser;
    let message = input;
    setInput("");
    await addDoc(collection(db, "messages"), {
        text: message,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
    })
    setInput("");
    scroll.current.scrollIntoView({behaviour: "smooth"});
  }  

  return (
    <form className="h-12 w-full max-w-[850px] flex text-xl fixed bottom-0 mt-3" onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Message"
        className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="w-[20%] bg-green-500 ">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
