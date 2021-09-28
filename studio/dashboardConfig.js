export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61536a5b1b8f4824ab19b34f',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-4ybhuyfo',
                  apiId: '44a7dc64-5829-4e0b-870c-7040bac6ecd2'
                },
                {
                  buildHookId: '61536a5bf685372619550dd7',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-svt9mhgi',
                  apiId: '9d3dfcab-91f7-4467-a440-67027ca89453'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ronaldo888kgs/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-svt9mhgi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
