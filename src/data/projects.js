const projects = [
  {
    id: 1,
    title: 'Covid Metrics',
    description: 'Covid-19 Metrics is an API based web app that fetches information about covid-19 cases in the United Kingdom and renders this information in a UI. It\'s Home page displays confirmed cases for the United Kingdom and its regions. Each region has a Details page to which you can navigate by clicking on the region cards displayed in the Home page. When you navigate to one of the region details pages, the app will render more specific details for that particular region. Region details include information like confirmed cases, deaths, and recovered patients.',
    images: { cover: './media/wrk-img-1.svg', project: './media/covid-metrics-scrnsht.png' },
    technologies: [
      { id: 1, tech: 'HTML/CSS' },
      { id: 2, tech: 'React' },
      { id: 3, tech: 'Redux' },
    ],
    links: { demo: 'https://rpire.github.io/covid-metrics', repository: 'https://github.com/rpire/covid-metrics' },
  },
  {
    id: 2,
    title: 'Math Magicians',
    description: 'Math magicians is a single-page web application built with React, conformed by three different pages. The home page contains information about the app and how to navigate to the other two pages. The calculator page has the calculator app functionality that can solve basic mathematic operations. Finally, the quote page displays a quote related to mathematics.',
    images: { cover: './media/wrk-img-2.svg', project: './media/covid-metrics-scrnsht.png' },
    technologies: [
      { id: 1, tech: 'HTML/CSS' },
      { id: 2, tech: 'React' },
    ],
    links: { demo: 'https://rpire.github.io/covid-metrics', repository: 'https://github.com/rpire/covid-metrics' },
  },
  {
    id: 3,
    title: 'Paytracker',
    description: 'Paytracker is a mobile web app built using Ruby on Rails. It lets you create categories and add you expenses on each category to keep track of them. It implements logic mechanics with an authentication and authorization system.',
    images: { cover: './media/wrk-img-3.svg', project: './media/covid-metrics-scrnsht.png' },
    technologies: [
      { id: 1, tech: 'Ruby on Rails' },
      { id: 2, tech: 'Sass' },
    ],
    links: { demo: 'https://rpire.github.io/covid-metrics', repository: 'https://github.com/rpire/covid-metrics' },
  },
  {
    id: 4,
    title: 'Awesome Books',
    description: 'Awesome Books useful reading list application. Store your awesome books into the local storage so you can keep track of the books you want to read or enjoyed reading.',
    images: { cover: './media/wrk-img-4.svg', project: './media/covid-metrics-scrnsht.png' },
    technologies: [
      { id: 1, tech: 'HTML' },
      { id: 2, tech: 'Bootstrap' },
      { id: 3, tech: 'JavaScript' },
    ],
    links: { demo: 'https://rpire.github.io/covid-metrics', repository: 'https://github.com/rpire/covid-metrics' },
  },
  {
    id: 5,
    title: 'OLC Re-Opening Site',
    description: 'This is a website buit for the re-opening event of Obelisk Language Center. Obelisk Language Center is a language school located in Barquisimeto, Venezuela, more precisely at the 20th Av / 9th and 10th on the second floor of the DaVinci\'s Commercial Center. This school is currently closed because of the pandemics and it really doesn\'t have a re-opening date, but lets hope things get better soon and Obelisk can restart operations!',
    images: { cover: './media/wrk-img-5.svg', project: './media/covid-metrics-scrnsht.png' },
    technologies: [
      { id: 1, tech: 'HTML/CSS' },
      { id: 2, tech: 'JavaScript' },
    ],
    links: { demo: 'https://rpire.github.io/covid-metrics', repository: 'https://github.com/rpire/covid-metrics' },
  },
  {
    id: 6,
    title: 'Pokédex',
    description: 'Poke-Dex is an API based webapp that displays cards containing information (like their image, type and location) about different pokemon. This is a single-page application(SPA) which contains the home page and comments modal pop-ups. Users can click on the heart icon to give a like to their favorite and post comments by clicking on the comment button in the modal.',
    images: { cover: './media/wrk-img-6.svg', project: './media/covid-metrics-scrnsht.png' },
    technologies: [
      { id: 1, tech: 'HTML/CSS' },
      { id: 2, tech: 'JavaScript' },
      { id: 3, tech: 'Webpack' },
    ],
    links: { demo: 'https://rpire.github.io/covid-metrics', repository: 'https://github.com/rpire/covid-metrics' },
  },
];

export default projects;
