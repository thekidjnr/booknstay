module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        laptop: "1280px",
        desktop: "1600px",
      },
      colors: {
        primary: "#51281E",
        primarylight: "#C6B9B5",
        secondary: "#002A34",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        body: ["Poppins", "Open Sans", "Roboto"],
        logo: ["Roboto"],
        header: ["Open Sans"],
        roboto: ["Roboto"],
      },
      backgroundImage: {
        heroImage: "url('../src/photos/home/herophoto.png')",
      },
    },
  },
  plugins: [],
};
