## Recipes.AI


1. Basic Structure :
    * We are using Vite library,
    * to create logo for our ai, we used Gemini 2.5 pro to create "Recipes.AI" - logo
    * using cloudinary we are getting the logo to our website
    * first basic html structure, and Tailwind css for styling.
    
2. Integration of LLM:
   * for integration we have watched an integration of llm video on youtube :
   

   * so for llm instead using open ai or any other which has limit, 
        i tryed with groq llm which is used for testing kind of purpose.
   * for that i installed Langchain, Groq, and Langchain-LLM-Client packages, openai etc..
   * and using asynchorunous function to get the response from llm.
   * and storing the response in answer varible 

3. Implimenting on UI:
   * to provide question to LLm we have created a state varible in our component
   * and using onchange event updating the Question variable 
   * and using onsubmit event to call a function, which helps to call the llm and get the response

