/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,svg}"],
  theme: {
    extend: {
      "colors": {
        "dark": "#171717",
        "primary": "#3FE3C2",
        "dashed": "#3F3F3F",
        "custom-gray": "#535353",
        "text": {
          "primary": "#0B0B0B",
          "gray": "#E1E1E1"
        },

      },
      "fontFamily": {
        "inter": "Inter"
      },
      "backgroundImage": {
        "gray-gradient": "linear-gradient(180deg, #171717 0%, #292929 61%, rgba(30, 30, 30, 0.36) 98%)",
        "green-gradient": "linear-gradient(180deg, rgba(40, 98, 61, 0.07) 0%, rgba(47, 121, 98, 0.18) 61%, rgba(30, 30, 30, 0.32) 100%)",
        "text-gradient": "linear-gradient(176.09deg, #FFFFFF 3.37%, #3FE3C2 121.69%)",
        'gradient-gray': 'linear-gradient(180deg, #171717 0%, #292929 61%, rgba(30, 30, 30, 0.36) 98%)'
      }
    },
  },
  plugins: [],
}

