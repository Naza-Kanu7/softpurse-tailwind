/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'features-bg': "url('../public/images/FeaturesSectionBg.png')",
        'steps-bg': "url('../public/images/StepsBgImg.png')",
        'faq-bg': "url('../public/images/FAQBgImg.png')",
      },
    },
    screens: {
      '2sm': {'max': '365px'},
      // => @media (max-width: 365px) { ... }
      
      sm: '500px',
      // => @media (min-width: 500px) { ... }

      md: '750px',
      // => @media (min-width: 750px) { ... }

      lg: '950px',
      // => @media (min-width: 950px) { ... }

      xl: '1150px',
      // => @media (min-width: 1150px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    colors: {
      'custom-color': '#009994',
      'whit': '#FFF',
      'banner-bg': '#D1D1D6',
      'banner-button': '#000533',
      'blue-color': '#010534',
      'faq-border': '#9f9f9f',
      'footer-bg': '#1D3167'
    },
    
  },
  plugins: [],
}

