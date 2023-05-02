import { Configuration, OpenAIApi } from 'openai';

export default (app) => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    organization: import.meta.env.VITE_OPENAI_API_ORG,
  });
  const openai = new OpenAIApi(configuration);

  app.config.globalProperties.$openai = openai;
}
