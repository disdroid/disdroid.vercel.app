module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-theme-amaranth",
      options: {
        website: {
              title: "Gatsby Advanced Starter", // Homepage title
              titleShort: "Advanced Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
              name: "Gatsby Advanced Starter", // Website name used for homescreen (PWA) and SEO
              description: "A GatsbyJS starter equipped with advanced features.", // Website description used for RSS feeds/meta description tag
              language: "en", // Sets the global HTML lang attribute
              logoUrl: "/logos/logo-1024.png", // Logo used for SEO
              fbAppId: "1825356251115265", // FB Application ID for using app insights
              twitterName: "Vagr9K", // Twitter handle of the website
              url: "https://disdroid.vercel.app", // Domain of your website without the pathPrefix
              rss: "/rss.xml", // Path to the RSS file
              rssTitle: "Gatsby Advanced Starter RSS Feed", // Title of the RSS feed

              googleAnalyticsId: "UA-VALIDID", // GA tracking ID
              copyright: "© Copyright 2021 | Advanced User", // Copyright string for the footer of the website and RSS feed.

              themeColor: "#D83850", // Used for setting manifest and progress theme colors.
              backgroundColor: "#F7F7F7", // Used for setting manifest background color.
        },
        contentDir: "content",
        assetDir: "static",
      },
    },
  ],
};
