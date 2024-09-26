"use client";


import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [inputVal,setInputVal] = useState("");
  const {push} = useRouter();
  const handleSubmit =(event:FormEvent)=>{
    event.preventDefault();
    push(`/prediction/${inputVal}`)

  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <div className="mb-6 text-center">
    <h1 className="text-3xl font-bold text-gray-800">Enter Your Name</h1>
    <p className="text-gray-600 mt-2">We'll predict your gender and country!</p>
  </div>
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
    <input
      type="text"
      className="text-black border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Type your name..."
      value={inputVal}
      onChange={(e) => setInputVal(e.target.value)}
    />
    <button
      type="submit"
      className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
    >
      Predict Data
    </button>
  </form>
</div>

  );
}
 