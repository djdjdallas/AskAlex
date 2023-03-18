import React, { useState } from "react";

function Popup() {
  const [prompt, setPrompt] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(event) {
    setPrompt(event.target.value);
  }

  async function generateSuggestions() {
    const API_KEY = "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";
    const API_URL =
      "https://api.openai.com/v1/engines/text-davinci-003/completions";
    setIsLoading(true);
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        prompt: `Provide 3 better prompts along with context ideas to ask chatgpt to ${prompt}.\n\n1.`,
        max_tokens: 1000,
        n: 1,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    const suggestedPrompts = data.choices[0].text.split("\n");
    console.log(isLoading);
    setSuggestions(suggestedPrompts);
  }
  function handleCopy(suggestion) {
    navigator.clipboard.writeText(suggestion);
  }

  return (
    <div className="ml-4 popup w-[91%] flex flex-col bg-gradient-to-r from-[#f9fbfc] to-[#eef4fd] rounded-lg">
      <div className="flex justify-center items-center w-[100%] mt-3">
        {suggestions ? (
          <div className="infoBox w-[90%] h-[100%] mt-4 text-xl space-y-3 flex-row justify-center items-center">
            <div className="border-[1px] border-purple-300 p-4 rounded-md shadow bg-white ">
              <h1 style={{ fontFamily: "Baskeville" }}>
                Ask Alex allows users to generate helpful and creative
                suggestions for various prompts using advanced artificial
                intelligence technology.
              </h1>
            </div>
            <div className="infoBox border-[1px] border-purple-300 rounded-md shadow-lg p-4 bg-white ">
              <h1
                style={{
                  fontFamily: "Baskeville",
                }}
              >
                With just a few clicks, users can input their prompts and
                receive customized suggestions that can be used for a variety of
                applications, including writing, brainstorming, and
                problem-solving.
              </h1>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex justify-center items-center my-5">
        <input
          style={{ fontFamily: "Baskeville" }}
          className="input shadow outline-none focus:outline-none focus:ring text-sm font-bold border-2 border-[#E7EAFB] rounded-md w-[90%]  h-20 placeholder:text-black placeholder:pl-1
          "
          type="text"
          value={prompt}
          onChange={handleInputChange}
          placeholder="Write a poem about tupac"
        />
      </div>
      <button
        style={{ fontFamily: "Baskeville" }}
        className="myButton cursor-pointer text-2xl font-bold bg-gradient-to-r from-[#8C61FF] to-[#0BB2FF] rounded-md p-2 m-5 text-white
         animate-pulse transition transform duration-300 ease-in-out hover:shadow-xl shadow-md"
        onClick={generateSuggestions}
      >
        Generate Suggestions
      </button>
      {suggestions.length > 0 ? (
        <ul
          className="text-xl font-bold flex-row p-2 space-y-3 "
          style={{ fontFamily: "Baskeville" }}
        >
          {suggestions.map((suggestion, index) => (
            <li
              className=" text-white ml-1 bg-gradient-to-r from-[#5E50A0] to-[#C4C2F3] rounded-md p-2 "
              key={index}
            >
              {suggestion}
              <button
                className="cursor-pointer"
                onClick={() => handleCopy(suggestion)}
              ></button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="font-bold text-2xl text-center">
          {isLoading ? "Alex is thinking..." : ""}
        </p>
      )}
    </div>
  );
}

export default Popup;
