<template>
    <div>
        <div v-if="!dealStatus" class="mine-flex-center flex-col gap-5">
            <p class="mt-4 text-2xl font-bold text-gray-900">is page8 use ai test</p>
            <input v-model="question" type="text" class="w-[60%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="問題輸入">
            <button @click="action" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">送出</button>
        </div>
        <div class="mine-flex-center flex-col gap-5 mt-2">
          <div v-if="data.length" class="w-4/5 h-auto mt-4 text-2xl font-bold text-gray-900">{{ data }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Configuration, OpenAIApi } from 'openai'

const question = ref('')
let configuration
let openai:any
const init = () => {
  configuration = new Configuration({
    apiKey: "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",
  })
  openai = new OpenAIApi(configuration)
  console.log('init ok',openai)
}

init()

const data = ref('')
const dealStatus = ref(false)
const action = async() => {
  console.log('dodo')
  if(question.value.length <= 5) {
    question.value = ''
    return false
  }
  /**
   * model 模型
   * prompt 問題主體
   * temperature 回應隨機度
   * max_tokens 問題字數限制
   * frequency_penalty presence_penalty 重覆性懲罰
   */
  try {
    dealStatus.value = true
    data.value = "思考中..."
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: question.value,
      temperature: 0.6,
      max_tokens: 512,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    data.value = completion.data.choices[0].text || 'no res'
    console.log('text',completion.data.choices[0].text)
    console.log('completion',completion)
  } catch (error:any) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
    } else {
      console.log(error.message)
    }
  } finally {
    dealStatus.value = false
  }
}
console.log('a')
await new Promise((resolve) => {
  console.log('b')
  setTimeout(resolve, 2000)
})
console.log('c')
</script>