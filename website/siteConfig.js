const users = [{
    caption: `radarsu`,
    image: `/img/undraw_open_source.svg`,
    infoLink: `https://radarsu.radrat.pl`,
    pinned: true,
}];

const siteConfig = {
    title: `Prosty system RPG`,
    tagline: `Podręcznik`,
    url: `https://rpg.radrat.pl`,
    baseUrl: `/`,

    projectName: `prosty-system-rpg`,
    organizationName: `Artur Kurowski`,

    headerLinks: [{
        doc: `introduction/index`,
        label: 'Podręcznik'
    }],

    users,

    // icons
    headerIcon: `img/favicon.ico`,
    footerIcon: `img/favicon.ico`,
    favicon: `img/favicon.ico`,

    // website colors
    colors: {
        primaryColor: `#41171d`,
        secondaryColor: `#2d1014`,
    },

    /*
    fonts: {
      myFont: [
        "Times New Roman",
        "Serif"
      ],
      myOtherFont: [
        "-apple-system",
        "system-ui"
      ]
    },
    */

    copyright: `Copyright © ${new Date().getFullYear()} Artur Kurowski 2019`,

    highlight: {
        theme: `default`,
    },

    scripts: [`https://buttons.github.io/buttons.js`],

    onPageNav: `separate`,
    cleanUrl: true,

    ogImage: `img/undraw_online.svg`,
    twitterImage: `img/undraw_tweetstorm.svg`,

    enableUpdateBy: true,
    enableUpdateTime: true,
    docsSideNavCollapsible: true,
};

module.exports = siteConfig;
