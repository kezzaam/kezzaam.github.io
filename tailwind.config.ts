import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkcerulean: '#004E7E',
        poseidon: '#133955',
        peachcobbler: '#FFB181',
        lightskyblue: '#81CFFF',
        macaronicheese: '#FFB39B',
        desertsand: '#ECC6AA',
      },
    },
  },
  plugins: [],
}
export default config
