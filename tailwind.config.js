/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
      typing:{
        "0%":{
          width: "0%",
          visibility: "hidden"
        },
        "100%":{
          width :"100%"
        }
      },
      blink:{
        "50%":{
          borderColor:"transparent"
        },
        "100%":{
          borderColor:"white"
        }
      }
      },
      animation:{
        typing:"typing 2s infinite alternate, blink .7s infinite"
      },
      screens:{
        "sm":"480px"
      },
      spacing:{
        "big":"48rem"
      }
    },
    screens:{
        sm:"480px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}

