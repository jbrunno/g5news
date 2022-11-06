require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL:
          process.env.STRAPI_API_URL ||
          'http://gyyldb.hospedagemelastica.com.br',
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: ['article', 'category', 'author'],
        queryLimit: 1000
      }
    },
    {
      // ATTENTION: Match the theme name with the theme you're using
      resolve: '@elegantstack/gatsby-theme-flexiblog-agency',
      options: {
        sources: {
          strapi: true,
          local: false
        }
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'G5 News',
    name: 'G5News',
    description:
      'Goiás em Tempo real. Acompanhe as últimas notícias de Brasília, Goiânia e todo o estado de Goiás.',
    address:
      'Av. T-4, Ed. Buena Vista Office Design - 16° andar - 1613 Goiânia - GO',
    email: 'contato@g5news.com.br',
    phone: '(62) 3988-7592',

    //Site Social Media Links
    social: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/siteg5news'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/SiteG5News'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/g5newsgoias/'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'A Redação',
        slug: '/authors'
      },
      {
        name: 'Contato',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Links Rápidos',
        items: [
          {
            name: 'Anuncie conosco',
            slug: '/contact'
          },
          {
            name: 'Quem Somos',
            slug: '/about'
          },
          {
            name: 'Fale Conosco',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Politicas do site',
        items: [
          {
            name: 'Notificação de privacidade',
            slug: '/'
          },
          {
            name: 'Política de cookies',
            slug: '/'
          },
          {
            name: 'Termos de uso',
            slug: '/'
          }
        ]
      }
    ]
  }
}
