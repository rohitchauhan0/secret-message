"use client"
import { useState} from "react";
import CryptoJS from "crypto-js";
import { useSearchParams } from "next/navigation";

export default function ReadLoveLetter() {
  const [decryptedMessage, setDecryptedMessage] = useState("");
  const [password, setPassword] = useState("");
  const searchParams = useSearchParams();
  const msg = searchParams.get("msg");

  const decryptMessage = () => {
    if (!msg || !password) {
      alert("Please enter the password.");
      return;
    }
    try {
      const bytes = CryptoJS.AES.decrypt(decodeURIComponent(msg), password);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      if (!originalText) throw new Error("Wrong password");
      setDecryptedMessage(originalText);
    } catch (error) {
      alert("Invalid password or message");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-pink-400 to-red-500 text-white">
      <div className="bg-white p-6 rounded-lg shadow-lg text-black max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-pink-500">💌 Read Your Secret Love Letter 💌</h1>
        <input
          type="password"
          className="border p-3 w-full rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter the secret password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={decryptMessage}
          className="mt-4 bg-pink-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition"
        >
          Decrypt Message
        </button>
        {decryptedMessage && (
          <div className="mt-6 p-4 bg-gray-100 border rounded-lg text-black shadow-md">
            <p className="text-lg font-semibold">Decrypted Message:</p>
            <p className="mt-2 italic">&quot;{decryptedMessage}&quot;</p>
          </div>
        )}
      </div>
    </div>
  );
}