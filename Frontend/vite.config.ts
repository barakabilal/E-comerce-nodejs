import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv"
dotenv.config()
const host = process.env.VITE_HOST || 'localhost';
export default defineConfig({
  plugins: [react()],
  server: {
    host:host, // Your local IP address for phone developement
    port: 3000,
    hmr: {
      overlay: true,
    },
  },
});

