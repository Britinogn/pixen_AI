<template>
  <div class="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 pb-20">
    <!-- Sticky Header with Glassmorphism -->
    <header class=" top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-blue-200/50 px-4 py-4 shadow-sm">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-1 text-center">
          🎨 Pixen AI Pro
        </h1>
        <p class="text-xs sm:text-sm md:text-base text-gray-600 text-center">
          AI Image Studio with Gemini 2.5 Flash
        </p>
      </div>
    </header>

    <div class="max-w-4xl mx-auto px-4 py-6 space-y-6">
      <!-- Main Card - Mobile First Layout -->
      <div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
        <!-- Prompt Section -->
        <div class="p-4 sm:p-6 bg-linear-to-r from-blue-50 to-indigo-50">
          <h2 class="text-xl sm:text-2xl font-semibold mb-3 text-gray-800 flex items-center gap-2">
            <span class="text-2xl">✨</span>
            <span>Create Magic</span>
          </h2>
          
          <!-- Prompt Textarea -->
          <textarea
            ref="promptRef"
            v-model="prompt"
            placeholder="Describe your vision... e.g., 'A photorealistic cyberpunk cityscape, neon lights, dramatic 8K'"
            rows="4"
            class="w-full p-3 sm:p-4 border-2 border-blue-200 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none text-sm sm:text-base shadow-sm transition-all"
            @keyup.enter.ctrl="generateImage"
          ></textarea>
          
          <!-- Model Selector - Full Width on Mobile -->
          <select 
            v-model="selectedModel" 
            class="w-full p-3 sm:p-3.5 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent mb-3 text-sm sm:text-base font-medium bg-white shadow-sm"
          >
            <option value="gemini-2.5-flash-image">⚡ Gemini 2.5 Flash Image (Native Nano Banana)</option>
            <option value="gemini-1.5-pro">🎨 Gemini 1.5 Pro (Multimodal Fallback)</option>
            <option value="gemini-1.5-flash">🚀 Gemini 1.5 Flash (Fast Multimodal)</option>
          </select>
          
          <!-- Upload Button - Mobile Optimized -->
          <label class="block w-full p-3 sm:p-3.5 border-2 border-dashed border-blue-300 rounded-xl text-center cursor-pointer hover:bg-blue-50 transition-all mb-4 shadow-sm">
            <input
              type="file"
              accept="image/*"
              @change="handleImageUpload"
              class="hidden"
            />
            <span class="text-blue-700 font-semibold text-sm sm:text-base flex items-center justify-center gap-2">
              <span class="text-xl">📸</span>
              <span>{{ editMode ? 'Change Image' : 'Upload to Edit' }}</span>
            </span>
          </label>
          
          <!-- Generate Button - Large Touch Target -->
          <button
            @click="generateImage"
            :disabled="isLoading || !prompt.trim()"
            class="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white py-4 sm:py-4 rounded-xl font-bold text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg active:scale-[0.98] transition-all shadow-md"
          >
            <span v-if="isLoading" class="flex items-center justify-center gap-2">
              <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              <span>Generating...</span>
            </span>
            <span v-else class="flex items-center justify-center gap-2">
              <span>{{ editMode ? '🎨 Edit Image' : '✨ Generate' }}</span>
            </span>
          </button>
          
          <!-- Error Message -->
          <div v-if="error" class="mt-4 p-3 sm:p-4 bg-red-50 border-l-4 border-red-400 rounded-lg text-red-700 text-sm">
            <strong>⚠️ Oops!</strong> {{ error }}
          </div>
        </div>

        <!-- Output Section -->
        <div class="p-4 sm:p-6">
          <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
            <span class="text-2xl">🎨</span>
            <span>Your Creation</span>
          </h2>
          
          <!-- Loading State -->
          <div v-if="isLoading" class="flex flex-col justify-center items-center h-64 sm:h-80 bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl">
            <div class="relative">
              <div class="animate-spin rounded-full h-16 w-16 border-4 border-blue-200"></div>
              <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 absolute top-0 left-0"></div>
            </div>
            <p class="mt-4 text-gray-600 font-medium animate-pulse">Creating your masterpiece...</p>
          </div>
          
          <!-- Generated Image -->
          <div v-else-if="generatedImage" class="space-y-4">
            <div class="relative rounded-xl overflow-hidden shadow-2xl bg-linear-to-br from-gray-100 to-gray-50 p-2">
              <img
                :src="generatedImage"
                alt="AI Generated Art"
                class="w-full h-auto rounded-lg max-h-[60vh] object-contain mx-auto"
              />
            </div>
            
            <!-- Action Buttons Grid - Mobile Optimized -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                @click="downloadImage"
                class="w-full bg-linear-to-r from-green-500 to-emerald-600 text-white py-3 sm:py-3.5 rounded-xl font-semibold hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span class="text-lg">💾</span>
                <span>Download</span>
              </button>
              <button
                @click="shareImage"
                class="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white py-3 sm:py-3.5 rounded-xl font-semibold hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span class="text-lg">📤</span>
                <span>Share</span>
              </button>
              <button
                @click="saveToGallery"
                class="w-full bg-linear-to-r from-purple-500 to-pink-600 text-white py-3 sm:py-3.5 rounded-xl font-semibold hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span class="text-lg">⭐</span>
                <span>Save</span>
              </button>
            </div>
          </div>
          
          <!-- Empty State -->
          <div v-else class="text-center text-gray-400 h-64 sm:h-80 flex flex-col items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-200">
            <span class="text-6xl sm:text-7xl mb-4 opacity-50">🎨</span>
            <p class="text-base sm:text-lg font-medium">Your AI masterpiece will appear here</p>
            <p class="text-xs sm:text-sm mt-2">Start by entering a prompt above</p>
          </div>
        </div>
      </div>

      <!-- Pro Tips - Collapsible on Mobile -->
      <div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
        <button 
          @click="showTips = !showTips"
          class="w-full p-4 sm:p-6 flex items-center justify-between text-left hover:bg-blue-50 transition-colors"
        >
          <h3 class="text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
            <span class="text-xl sm:text-2xl">💡</span>
            <span>Pro Prompting Tips</span>
          </h3>
          <span class="text-2xl transform transition-transform" :class="{ 'rotate-180': showTips }">
            ▼
          </span>
        </button>
        
        <div v-show="showTips" class="px-4 pb-4 sm:px-6 sm:pb-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-700">
            <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <strong class="text-blue-800">🎯 Be Specific:</strong>
              <p class="mt-1 text-gray-600">Photorealistic cyberpunk city in neon lights, rain-slicked streets</p>
            </div>
            <div class="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
              <strong class="text-indigo-800">🎨 Add Style:</strong>
              <p class="mt-1 text-gray-600">In the style of Studio Ghibli" or "ultra-detailed 8K</p>
            </div>
            <div class="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <strong class="text-purple-800">✏️ Edit Mode:</strong>
              <p class="mt-1 text-gray-600">Upload an image + prompt like "add laser effects to the skyline"</p>
            </div>
            <div class="p-3 bg-pink-50 rounded-lg border border-pink-200">
              <strong class="text-pink-800">✅ Stay Positive:</strong>
              <p class="mt-1 text-gray-600">Describe what you want, not what you don't want</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery - Responsive Grid -->
      <div v-if="gallery.length" class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
        <div class="p-4 sm:p-6">
          <h3 class="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 flex items-center justify-between">
            <span class="flex items-center gap-2">
              <span class="text-2xl">🖼️</span>
              <span>Gallery</span>
            </span>
            <span class="text-sm sm:text-base bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
              {{ gallery.length }} {{ gallery.length === 1 ? 'Image' : 'Images' }}
            </span>
          </h3>
          
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            <div
              v-for="(img, idx) in gallery"
              :key="idx"
              class="relative group bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all aspect-square"
            >
              <img 
                :src="img" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                alt="Gallery image"
              />
              <button
                @click="loadFromGallery(idx)"
                class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <span class="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg">
                  <span class="text-lg">✏️</span>
                  <span>Edit</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Safe Area Spacer for Mobile -->
    <div class="h-8"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { GoogleGenAI } from '@google/genai'  // Standard SDK (updated for compatibility)
//import { GoogleGenerativeAI } from '@google/generative-ai'

import { VITE_GEMINI_API_KEY } from '../utils/constant'

const promptRef = ref<HTMLTextAreaElement | null>(null)
const prompt = ref("Create a photorealistic image of an orange cat with green eyes, sitting on a couch.")
const selectedModel = ref('gemini-2.5-flash-image')  // Native image model (GA now)
const editMode = ref(false)
const isLoading = ref(false)
const error = ref('')
const generatedImage = ref<string | undefined>('')
const uploadedImage = ref<string | undefined>('')
const showTips = ref(true)  // Default open for better UX

const apiKey = ref('')
const gallery = ref<string[]>([])

onMounted(async () => {
  const saved = localStorage.getItem('pixenGallery')
  if (saved) gallery.value = JSON.parse(saved)
  
  apiKey.value = VITE_GEMINI_API_KEY

  // Auto-focus prompt
  await nextTick()
  promptRef.value?.focus()
})

const handleImageUpload = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) {
    // Basic size check (compress if >5MB)
    if (file.size > 5 * 1024 * 1024) {
      error.value = 'Image too large (>5MB)—try resizing!'
      return
    }
    const reader = new FileReader()
    reader.onload = (ev) => {
      const result = ev.target?.result as string | undefined
      if (result) {
        uploadedImage.value = result.split(',')[1] ?? ''
        generatedImage.value = result  // Preview upload
        editMode.value = true
        error.value = ''  // Clear errors
      } else {
        error.value = 'Failed to read image file.'
      }
    }
    reader.readAsDataURL(file)
  }
}

const generateImage = async () => {
  if (!prompt.value.trim()) {
    error.value = 'Enter a prompt to start the magic!'
    return
  }
  if (!apiKey.value) {
    error.value = 'API key not configured—check your .env file!'
    return
  }

  const fullPrompt = `Create a picture of: ${prompt.value}`

  isLoading.value = true
  error.value = ''
  generatedImage.value = undefined

  try {
    const genAI = new GoogleGenAI({ apiKey: apiKey.value })

    let contents: string | any[]
    if (uploadedImage.value && editMode.value) {
      contents = [
        { text: fullPrompt },
        {
          inlineData: {
            mimeType: 'image/png',
            data: uploadedImage.value
          }
        }
      ]
    } else {
      contents = fullPrompt
    }

    // ✅ Correct model name for image generation
    const response = await genAI.models.generateContent({
    model: "gemini-1.5-flash", 
      contents
    })

    const parts = (response as any).parts || []
    const imagePart = parts.find((p: any) => p.inlineData)

    if (imagePart?.inlineData?.data) {
      generatedImage.value = `data:image/png;base64,${imagePart.inlineData.data}`
      const textParts = parts
        .filter((p: any) => p.text)
        .map((p: any) => p.text)
        .join(' ')
      if (textParts) console.log('Accompanying text:', textParts)
      editMode.value = false
      uploadedImage.value = undefined
    } else {
      throw new Error('No image data returned — try another prompt or check your model.')
    }

  } catch (err: any) {
    console.error('Image generation error:', err)

    const msg = err.message || JSON.stringify(err)

    // 🔹 API key issues
    if (msg.includes('API_KEY_INVALID') || msg.includes('API key')) {
      error.value = 'Invalid or missing API key. Please verify your key in .env or AI Studio.'
    }

    // 🔹 Quota / rate-limit errors
    else if (msg.includes('429') || msg.includes('RESOURCE_EXHAUSTED') || msg.includes('quotaExceeded')) {
      error.value = `
        <span class="text-red-500">Quota exceeded (Free tier reached or disabled).</span><br>
        Wait 24 hours for reset or 
        <a href="https://aistudio.google.com/app/apikey" target="_blank" class="underline text-blue-400">upgrade your Google AI plan</a>
        to continue. You can monitor usage 
        <a href="https://aistudio.google.com/usage" target="_blank" class="underline text-blue-400">here</a>.
      `
    }

    // 🔹 Model or billing issues
    else if (msg.includes('billing') || msg.includes('limit: 0') || msg.includes('model')) {
      error.value = `
        The selected model requires billing. 
        Switch to <b>gemini-2.5-flash</b> for text only, or enable billing for image generation.
      `
    }

    // 🔹 Generic fallback
    else {
      error.value = 'Something went wrong. Please retry or simplify your prompt.'
    }

    // 🔸 Optional fallback: text model when image quota is exhausted
    if (msg.includes('quota') || msg.includes('limit: 0')) {
      try {
        const genAI = new GoogleGenAI({ apiKey: apiKey.value })
        const fallback = await genAI.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `Describe in detail: ${prompt.value}`
        })
        const text = (fallback as any).response.text()
        generatedImage.value = undefined
        error.value += `<br><br><b>AI description:</b> ${text}`
      } catch {
        console.warn('Fallback failed.')
      }
    }

  } finally {
    isLoading.value = false
  }
}


const downloadImage = () => {
  if (!generatedImage.value) return
  const link = document.createElement('a')
  link.href = generatedImage.value
  link.download = `pixen-ai-${Date.now()}.png`
  link.click()
}

const shareImage = async () => {
  if (!generatedImage.value) return
  if (navigator.share) {
    try {
      // Base64 → Blob for File
      const base64Data = generatedImage.value.split(',')[1]
      if (!base64Data) {
        throw new Error('Invalid image data for sharing')
      }
      const byteStr = atob(base64Data)
      const ab = new ArrayBuffer(byteStr.length)
      const ia = new Uint8Array(ab)
      for (let i = 0; i < byteStr.length; i++) ia[i] = byteStr.charCodeAt(i)
      const blob = new Blob([ab], { type: 'image/png' })
      const file = new File([blob], 'pixen-ai-art.png', { type: 'image/png' })

      await navigator.share({ 
        title: 'My Pixen AI Art', 
        text: prompt.value,
        files: [file]
      })
    } catch (err) {
      console.log('Share cancelled or failed:', err)
      fallbackShare()
    }
  } else {
    fallbackShare()
  }
}

const fallbackShare = () => {
  // Copy to clipboard as fallback
  if (generatedImage.value) {
    navigator.clipboard.writeText(generatedImage.value).then(() => {
      alert('Image copied to clipboard! Paste into an editor.')
    }).catch(() => {
      alert('Right-click the image to copy or save it!')
    })
  }
}

const saveToGallery = () => {
  if (generatedImage.value && !gallery.value.includes(generatedImage.value)) {
    gallery.value.push(generatedImage.value)
    localStorage.setItem('pixenGallery', JSON.stringify(gallery.value))
  }
}

const loadFromGallery = (index: number) => {
  const img = gallery.value[index]
  if (!img) return

  generatedImage.value = img
  const base64 = img.split(',')[1] ?? ''  // Null guard
  uploadedImage.value = base64  // Safe assignment
  editMode.value = true
  prompt.value = 'Edit this image...'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>