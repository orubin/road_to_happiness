import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync, existsSync } from 'fs'
import { resolve } from 'path'

// Custom plugin to copy assets to public folder
const copyAssetsPlugin = () => {
  return {
    name: 'copy-assets',
    buildEnd() {
      const publicAssetsDir = resolve(__dirname, 'public/assets')
      if (!existsSync(publicAssetsDir)) {
        mkdirSync(publicAssetsDir, { recursive: true })
      }
      
      // Copy the audio file
      const sourceFile = resolve(__dirname, 'assets/soothing-ocean-waves-372489.mp3')
      const destFile = resolve(__dirname, 'public/assets/soothing-ocean-waves-372489.mp3')
      
      if (existsSync(sourceFile)) {
        copyFileSync(sourceFile, destFile)
        console.log('✓ Copied audio file to public/assets/')
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyAssetsPlugin()],
  server: {
    port: 3000,
    open: true
  }
})
