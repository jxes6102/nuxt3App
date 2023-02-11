<template>
    <div>
        <div class="mine-flex-center flex-col gap-5">
            <p class="mt-4 text-2xl font-bold text-gray-900">is page8 use ai test</p>
            <p v-if="data.length" class="mt-4 text-2xl font-bold text-gray-900">{{ data }}</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const data = ref('')

try {
//   const completion = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: "用繁體中文說可樂起源",
//   });
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    // prompt: "sf\n\n\n 用繁體中文說可樂起源 \"SFDD.\"",
    prompt: "用繁體中文說可樂起源",
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  data.value = completion.data.choices[0].text || 'no res'
  console.log(completion.data.choices[0].text);
  console.log(completion);
//   setTimeout(() => {
//     data.value = completion.data.choices[0].text || 'no res'
//     console.log(completion.data.choices[0].text);
//   }, 3000)
} catch (error:any) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else {
    console.log(error.message);
  }
}
</script>