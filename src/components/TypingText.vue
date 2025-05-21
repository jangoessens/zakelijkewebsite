<template>
  <div class="typing-text">
    <span v-if="spelled.length">{{ spelled }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({ words: Array })

const spelled = ref('')
onMounted(() => {
  const typeWord = async (word) => {
    for (let i = 0; i < word.length; i++) {
      spelled.value += word[i]
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * (200 - 50) + 50)
      )
    }
  }

  const backspaceWord = async () => {
    while (spelled.value.length > 0) {
      spelled.value = spelled.value.slice(0, -1)
      await new Promise((resolve) => setTimeout(resolve, 75))
    }
  }

  const loopWords = async () => {
    while (true) {
      for (const word of props.words) {
        await typeWord(word)
        await new Promise((resolve) => setTimeout(resolve, 1500))
        await backspaceWord()
        await new Promise((resolve) => setTimeout(resolve, 500))
      }
    }
  }

  loopWords()
})
</script>