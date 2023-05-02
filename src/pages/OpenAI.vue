<template>
  <div class="text-center m-3">
    <h1 class="m-3">Hello, here ! You found the page where I try the Chat-GPT API</h1>
    <div class="m-1 flex">
      <button disabled @click="generateText">Generate </button>
      <router-link to="/"> Back</router-link>
    </div>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'OpenAI',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    async generateText() {
      const completions = await this.$openai.createCompletion({
        model: 'davinci',
        engine: 'davinci',
        temperature: 0.5,
        max_tokens: 5,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        prompt: 'Hello world',
      }).then(console.log).catch(console.error);
      if (completions) {
        console.log(completions);
        // this.text = completions.choices[0].text.trim();
      }
    },
  },
};
</script>
