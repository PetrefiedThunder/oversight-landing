/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Common entry points from launch posts / DMs land on the dashboard signup,
      // not a 404 on the marketing site.
      { source: "/signup", destination: "https://app.pauseapi.app/signup", permanent: false },
      { source: "/login", destination: "https://app.pauseapi.app/login", permanent: false },
      { source: "/app", destination: "https://app.pauseapi.app", permanent: false },
      { source: "/docs", destination: "https://github.com/PetrefiedThunder/sentinel-sdk#readme", permanent: false },
      { source: "/examples", destination: "https://github.com/PetrefiedThunder/sentinel-examples", permanent: false },
      { source: "/github", destination: "https://github.com/PetrefiedThunder/sentinel-sdk", permanent: false },
      { source: "/pypi", destination: "https://pypi.org/project/sentinel-oversight/", permanent: false },
    ];
  },
};

