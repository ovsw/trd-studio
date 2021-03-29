export default {
  widgets: [
      {
      name: 'netlify',
      options: {
        title: 'Deploy Website',
        description:
                '<h2>How to make changes live</h2><ol><li>Push the "Deploy" button below to trigger a re-build of the website once you\'ve published a some changes and want to make them live.</li><li>The status badge below will change to say "Building".</li> <li>Once it changes back to "Success" the changes are live.</li></oll>',
        sites: [
          // {
          //   title: 'Sanity Studio',
          //   apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
          //   buildHookId: 'xxxyyyxxxyyyyxxxyyy',
          //   name: 'sanity-gatsby-blog-20-studio',
          // },
          {
            title: 'Front-end',
            apiId: '8ff186bc-a682-4b58-9d29-f676278e94cd',
            buildHookId: '60620ec0d105d500a080c848',
            name: 'Tridia Website'
          }
        ]
      }
    },
    // {
    //   name: 'sanity-tutorials'
    // },
    {
      name: 'project-info'
    },
    // {name: 'structure-menu'},
    // {
    //   name: 'project-users'
    // }
  ]
}