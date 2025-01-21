/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}",'./components/**/*.{js,jsx,ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#161622',
        secondary: {
          DEFAULT: '#FF9C01',
          100: '#FF9001',
          200: '#FF8E01'
        },
        black: {
          DEFAULT: '#000',
          100: '#1E1E2D',
          200: '#232533'
        },
        gray: {
          100: '#CDCDE0',
        }
      },
      fontFamily: {
        "pop-r": ["Poppins-Regular"], // Regular
        "pop-m": ["Poppins-Medium"], // Medium
        "pop-sb": ["Poppins-SemiBold"], // SemiBold
        "pop-b": ["Poppins-Bold"], // Bold
        "pop-eb": ["Poppins-ExtraBold"], // ExtraBold
        "pop-thin": ["Poppins-Thin"], // Thin
        "pop-light": ["Poppins-Light"], // Light
        "pop-blk": ["Poppins-Black"], // Black

        // Italic styles
        "pop-r-i": ["Poppins-RegularItalic"], // Regular Italic
        "pop-m-i": ["Poppins-MediumItalic"], // Medium Italic
        "pop-sb-i": ["Poppins-SemiBoldItalic"], // SemiBold Italic
        "pop-b-i": ["Poppins-BoldItalic"], // Bold Italic
        "pop-eb-i": ["Poppins-ExtraBoldItalic"], // ExtraBold Italic
        "pop-thin-i": ["Poppins-ThinItalic"], // Thin Italic
        "pop-light-i": ["Poppins-LightItalic"], // Light Italic
        "pop-blk-i": ["Poppins-BlackItalic"], // Black Italic
      },
    },
  },
  plugins: [],
}