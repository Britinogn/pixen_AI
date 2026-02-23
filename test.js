import { GoogleGenAI } from "@google/genai";

// Replace "YOUR_API_KEY" with your actual API key
const ai = new GoogleGenAI({ apiKey: "AIzaSyAzOgiGyiUP1qiaw5KTPUq2wdXJ6Z70GRo" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

await main();
