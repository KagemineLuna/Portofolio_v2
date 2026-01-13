@type {import('tailwindcss').Config} 
export default {
content: [
"./index.html",
"./src/**/.{js,ts,jsx,tsx}",
],
darkMode: 'class', // We are doing this manually with a toggle
theme: {
extend: {
colors: {
// Your specific palette
'amoled-black': '#000000', // True black for OLED screens
'amoled-white': '#ffffff', // Blindingly pure white
'neon-purple': '#a855f7',  // A nice punchy purple (Purple-500/600ish)
'dark-purple': '#581c87',
},
fontFamily: {
sans: ['Inter', 'sans-serif'], // Add a Google font if you want to look professional
}
},
},
plugins: [],
}