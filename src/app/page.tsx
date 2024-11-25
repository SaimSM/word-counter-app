'use client';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function WordCounter() {
  const [text, setText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div
      className={`min-h-screen ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-300 via-purple-300 to-pink-400 text-gray-900'
      } flex flex-col items-center justify-center p-6 transition-all`}
    >
      {/* Header */}
      <div className="w-full flex justify-between items-center max-w-5xl mb-6">
        <h1 className="text-4xl font-extrabold tracking-wider">Word Counter</h1>
        <Switch
          checked={darkMode}
          onChange={setDarkMode}
          className={`${
            darkMode ? 'bg-gray-700' : 'bg-gray-300'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              darkMode ? 'translate-x-6 bg-white' : 'translate-x-1 bg-black'
            } inline-block h-4 w-4 transform rounded-full transition-transform`}
          />
        </Switch>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Text Area */}
        <textarea
          className={`w-full p-4 rounded-lg shadow-lg focus:ring-4 ${
            darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-800'
          } focus:ring-blue-400 resize-none h-72`}
          placeholder="Type or paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Word Counter Box */}
        <div
          className={`p-6 rounded-lg shadow-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } flex flex-col items-center justify-center transition-all transform ${
            text ? 'scale-100 opacity-100' : 'scale-90 opacity-75'
          }`}
        >
          <h2 className="text-2xl font-semibold mb-2">
            Total Words:
          </h2>
          <div
            className={`text-6xl font-bold ${
              darkMode ? 'text-yellow-400' : 'text-blue-600'
            } transition-all`}
          >
            {wordCount}
          </div>
          <button
            className={`mt-6 px-6 py-2 font-medium rounded-md shadow-lg transition-all ${
              darkMode
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-red-400 hover:bg-red-500 text-white'
            }`}
            onClick={() => setText('')}
          >
            Clear Text
          </button>
        </div>
      </div>
    </div>
  );
}
