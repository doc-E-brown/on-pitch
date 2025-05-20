import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#1E40ddAF',
        'green-custom': '#10B981',
      },
    },
  },
  plugins: [],
}

export default config
