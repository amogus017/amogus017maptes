const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent";

export async function askGemini(userMessage, kingdomContext = null) {
  console.log("API KEY PREFIX:", import.meta.env.VITE_GEMINI_API_KEY?.slice(0, 8));
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("VITE_GEMINI_API_KEY is not set in your .env file.");
  }

  const systemContext = kingdomContext
    ? `You are a knowledgeable and engaging historical guide specializing in pre-colonial Nusantara — the Southeast Asian kingdoms of 1200–1600 CE. 
The user is currently viewing the ${kingdomContext.name} on an interactive historical atlas.
Here is what is known about this kingdom: ${JSON.stringify(kingdomContext)}.
Answer questions in an educational, engaging tone suitable for Indonesian high school students (SMA level). 
Keep answers concise — 2 to 4 paragraphs maximum. Use clear language.
If the user asks something unrelated to Nusantara or Southeast Asian history, politely redirect them back to the topic.
Do not use markdown formatting like **bold** or ## headers — write in plain paragraphs.`
    : `You are a knowledgeable historical guide for pre-colonial Nusantara and Southeast Asian kingdoms (1200–1600 CE).
Answer in an educational tone suitable for Indonesian high school students (SMA level).
Keep answers concise — 2 to 4 paragraphs. Write in plain paragraphs, no markdown formatting.
If asked about unrelated topics, politely redirect to Nusantara history.`;

  const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: systemContext + "\n\nUser question: " + userMessage,
            },
          ],
        },
      ],
      generationConfig: {
        maxOutputTokens: 400,
        temperature: 0.7,
      },
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err?.error?.message || `Gemini API error: ${response.status}`);
  }

  const data = await response.json();
  return (
    data.candidates?.[0]?.content?.parts?.[0]?.text ??
    "I could not generate a response. Please try again."
  );
}