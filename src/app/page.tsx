"use client"
import { useState } from "react";
import CryptoJS from "crypto-js";
import { useRouter } from "next/navigation";

export default function LoveLetter() {
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const router = useRouter();

  const encryptMessage = () => {
    if (!message || !password) {
      alert("Please enter a message and a password.");
      return;
    }
    const encrypted = CryptoJS.AES.encrypt(message, password).toString();
    setEncryptedMessage(encrypted);
    const encodedMessage = encodeURIComponent(encrypted);
    router.push(`/read?msg=${encodedMessage}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-pink-400 to-red-500 text-white">
      <div className="bg-white p-6 rounded-lg shadow-lg text-black max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-pink-500">💌 Secret Love Letter 💌</h1>
        <textarea
          className="border p-3 w-full h-40 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Write your secret message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="password"
          className="border p-3 mt-4 w-full rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter a secret password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={encryptMessage}
          className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition"
        >
          Encrypt & Share
        </button>
        {encryptedMessage && (
          <div className="mt-6 p-4 bg-gray-100 border rounded-lg text-black shadow-md">
            <p className="text-lg font-semibold">Share this link:</p>
            <p className="mt-2 break-all italic text-pink-600">{window.location.origin}/read?msg={encodeURIComponent(encryptedMessage)}</p>
          </div>
        )}
      </div>
    </div>
  );
}