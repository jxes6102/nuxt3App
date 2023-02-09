<template>
    <div>
        <div class="mine-flex-center gap-5">
            <p class="mt-4 text-2xl font-bold text-gray-900">is page7 use vueI18n</p>
        </div>
        <client-only>
            <div class="mine-flex-center flex-col items-center bg-white">
                <h1 class="text-2xl font-medium text-blue-500">
                    {{ $t('hello') }}
                </h1>
                <h1 class="text-2xl font-medium text-blue-500">
                    {{ $t('language') }}
                </h1>
                <h1 class="text-2xl font-medium text-blue-500">
                    {{ $t('dog') }}
                </h1>
                <h1 class="text-2xl font-medium text-blue-500">
                    {{ $t('adj') }}
                </h1>
            </div>
        </client-only>
        <div class="mine-flex-center gap-4 mt-5">
            <button v-for="(item) in data" :key="item.key"
                type="button" class="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                @click="changeLanguage(item.key)"> {{ item.text }}
            </button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { locale,setLocale  } = useI18n()
const data = ref([
    {text:'English',key:'en'},
    {text:'繁體中文',key:'zh'},
])

const defaultLocaleCode = locale.value
if (process.client) {
    locale.value = localStorage.getItem('i18n-lang') ?? defaultLocaleCode
}

const changeLanguage = (localeCode:string) => {
  locale.value = localeCode
  localStorage.setItem('i18n-lang', localeCode)
}
</script>