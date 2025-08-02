import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StructuredOutputParser } from "@langchain/core/output_parsers";


// this model helps us to get the respone from Groq LLM 

const model = new ChatGroq({
  apiKey: "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", 
  model: "llama-3.1-8b-instant",
});


// chatpromptTemplate is used to instruct llm to generate a particular response within the boundaries of the topic

const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a help ful recipe assistant. You ONLY answer questions related to cooking, recipes, or ingredients. If the question is unrelated, respond with: 'I'm only able to help with recipe-related-queries.'"],
    ["user", "{input}"]
]);


// const parser = StructuredOutputParser.fromNamesAndDescriptions({
//   title: "The title of the recipe",
//   ingredients: "A list of ingredients required for the recipe",
//   steps: "Step-by-step instructions for the recipe"
// });


// const chain = RunnableSequence.from([prompt, model, parser]);

// const result = chain.run("What is the best way to cook a steak?");
// console.log(result);


// using async opertions to get the response from the model

export async function getAnswer(question) {

  let answer; // variable to store the response

    try{
        const promptValue = await prompt.format({ input: question }); // providing the instructions to llm
        const response = await model.invoke(promptValue); // getting the response from llm
        answer = response.content; // storing the respone in answer varible

    }catch(e){
        console.log(e);
    }

    return answer 

    
}


