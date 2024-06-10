// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],

//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Update paths as needed
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(161deg, #C02425 -84.55%, #F0CB35 91.19%)',
      },
    },
  },
  plugins: [],
}

