module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-theme-disdronic",
      options: {
        website: {
              title: "DisDroid/IQI : Ochre Cache - #Psipher research log", // Homepage title
              titleShort: "DisDroid:ochre|#ciphersec", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
              name: "DisDroid/Ochre|#ciphersec", // Website name used for homescreen (PWA) and SEO
              description: "DisDroid/IQI Ochre research log of #ciphersec.", // Website description used for RSS feeds/meta description tag
              language: "en", // Sets the global HTML lang attribute
              logoUrl: "/logos/logo-1024.png", // Logo used for SEO
              fbAppId: "1825356251115265", // FB Application ID for using app insights
              twitterName: "disdroidi", // Twitter handle of the website
              url: "https://disdroid.vercel.app", // Domain of your website without the pathPrefix
              rss: "/rss.xml", // Path to the RSS file
              rssTitle: "DisDroid/IQI Ochre research log #ciphersec #psipher", // Title of the RSS feed

              googleAnalyticsId: "UA-VALIDID", // GA tracking ID
              copyright: "© Copyright 2022 | DisDroid/IQI", // Copyright string for the footer of the website and RSS feed.

              themeColor: "#D83850", // Used for setting manifest and progress theme colors.
              backgroundColor: "#F7F7F7", // Used for setting manifest background color.
        },
	  // User configuration
        user: {
    	      id: "DisDroid/IQI:ochre|#psipher", // Unique identifier of the user on the website. Used for OpenGraph SEO tags
              firstName: "DisDroid/IQI", // Used for SEO
              lastName: "#PsipherSec", // Used for SEO
              twitterName: "disdroidi", // Twitter username used for SEO
              linkedIn: "your-linkedin", // Used for contact information
              github: "disdroid", // Used for contact information
              email: "iqi@disdroid.co.uk", // Used for contact information and displayed in the RSS feed
              location: "United Kingdom", // User location used for SEO
              about: "DisDroid/IQI Ochre Research Log #Psipher #CipherSec", // User information used for the author section
              avatar: "https://i.pravatar.cc/300", // User avatar used for the author section
        },

        // Organization information used for SEO
        organization: {
              name: "DisDroid/IQI",
              description: "Opencore Intelligence Initiative",
              logoUrl: "/logos/logo-512.png",
              url: "https://disdroid.co.uk", // URL of the organization website
        },
        contentDir: "content",
        assetDir: "static",
      },
    },
  ],
};
