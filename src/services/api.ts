
const API_KEY = import.meta.env.VITE_API_KEY;

import {GoogleGenerativeAI} from "@google/generative-ai"

// Inicializa o modelo usando a chave de API do ambiente
const model = new GoogleGenerativeAI(API_KEY).getGenerativeModel({
      model: 'gemini-1.5-flash',
    });


const TextGeneration = async (prompt:string):Promise<string> =>{
try {

    console.log('Enviando requisição para gerar conteúdo...');
    const result = await model.generateContent(prompt);
    return result.response.text();

} catch (error) {
    console.error('Falha ao fazer a chamada à API:', error);
    throw error;
}
}

export default TextGeneration