import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // if using React

export default defineConfig({
  base: '/PoetreeX-Automate-Studio/', // Add this line!
  plugins: [react()],
})
