import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY); 

export async function getFinancialAdvice(totalBudget, totalIncome, totalSpend) {
  try {
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} USD 
      - Expenses: ${totalSpend} USD 
      - Incomes: ${totalIncome} USD
      Provide detailed financial advice in 2 sentences.
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" }); //corrected model name.

    const result = await model.generateContent(userPrompt); //simplified prompt.

    const response = result.response.text();
    console.log(response);

    return response;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    if (error.response) {
      console.error("API response error:", error.response);
    }
    return "Sorry, I couldn't fetch the financial advice at this moment.";
  }
}