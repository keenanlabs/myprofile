const config = {
  siteTitle: 'Publisher Mobile Apps',
  siteTitleShort: 'Akhmad Ghofarudin Kurniawan',
  siteTitleAlt: 'Akhmad Ghofarudin Kurniawan',
  siteLogo: '/logos/logo.png',
  siteUrl: 'https://akurniawan.com',
  repo: 'https://github.com/keenanlabs',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription: 'Hi Im Akhmad Ghofarudin Kurniawan, Ceo at JustApp.id',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-125079658-2',
  disqusShortname: 'Keenanlabs',
  postDefaultCategoryID: 'Tech',
  userName: 'Keenanlabs',
  userEmail: 'cs@justapp.id',
  userTwitter: 'Keenanlabs',
  userLocation: 'INDONESIA',
  userDescription: 'Hi Im Akhmad Ghofarudin Kurniawan, Ceo at JustApp.id',
  menuLinks: [
    
    { name: 'About',
      link: '/me/',
    },
    {
      name: 'Blog',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/'
    },
    
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
