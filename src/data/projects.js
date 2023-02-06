const projects = [
  {
    id: 1,
    title: 'EmojiApp',
    description: 'EmojiApp is an API-based web app that fetches information about all emojis types that exist using HTML & Unicode format and renders this information in a UI. Each Emoji has a Details page which you can navigate by clicking on the Emoji cards displayed on the Home page. When you navigate to one of the region details pages, the app will render more specific details for that particular Emoji.',
    images: { cover: './media/wrk-img-1.svg', project: './media/EmojiApp/Emoji-scrnsht.jpg' },
    technologies: [
      { id: 1, tech: 'HTML/CSS' },
      { id: 2, tech: 'React' },
      { id: 3, tech: 'Redux' },
    ],
    links: { demo: 'https://emojiapp-essb.netlify.app/', repository: 'https://github.com/ErikStoupignan/Capstone_3_-EmojiApp' },
  },
  {
    id: 2,
    title: 'Math Magicians',
    description: 'Math magicians is a single-page web application built with React, conformed by three different pages. The home page contains information about the app and how to navigate to the other two pages. The calculator page has the calculator app functionality that can solve basic mathematic operations. Finally, the quote page displays a quote related to mathematics.',
    images: { cover: './media/wrk-img-2.svg', project: './media/MathMagicians/MathMagicians.png' },
    technologies: [
      { id: 1, tech: 'HTML/CSS' },
      { id: 2, tech: 'React' },
    ],
    links: { demo: 'https://github.com/ErikStoupignan/math-magician', repository: 'https://github.com/ErikStoupignan/math-magician' },
  },
  {
    id: 3,
    title: 'INTERCULTURAL EXCHANGE MEXICO-CANADA 2023',
    description: 'Project carried out to test our knowledge of CSS/SASS. Using a template as a base, I set up this online conference website, customized with the content for a "Mexico-Canada Intercultural Exchange 2023".',
    images: { cover: './media/wrk-img-3.svg', project: './media/Mexico-Canada-2023/ConferenceWebSite.png' },
    technologies: [
      { id: 1, tech: 'Ruby on Rails' },
      { id: 2, tech: 'Sass' },
    ],
    links: { demo: 'https://erikstoupignan.github.io/Capstone-project-module-1/index.html', repository: 'https://github.com/ErikStoupignan/Capstone-project-module-1' },
  },
  {
    id: 4,
    title: 'Awesome Books',
    description: 'Awesome Books useful reading list application. Store your awesome books in the local storage so you can keep track of the books you want to read or enjoy reading.',
    images: { cover: './media/wrk-img-4.svg', project: './media/AwesomeBooks/AwesomeBooks.png' },
    technologies: [
      { id: 1, tech: 'HTML' },
      { id: 2, tech: 'Bootstrap' },
      { id: 3, tech: 'JavaScript' },
    ],
    links: { demo: 'https://erikstoupignan.github.io/AwesomeBooks-ES6-proyect/', repository: 'https://github.com/ErikStoupignan/AwesomeBooks-ES6-proyect' },
  },
  {
    id: 5,
    title: 'LeaderBoard',
    description: 'This application is used to track the score of the players. It presents a list of names with their respective punctuation and is adorned with an attractive wallpaper of the Simpson\'s kitchen. The data collected is stored in an API so the application has the data in real-time as long as it has an internet connection.',
    images: { cover: './media/wrk-img-5.svg', project: './media/LeaderBoard/LeaderBoard.png' },
    technologies: [
      { id: 1, tech: 'HTML/CSS' },
      { id: 2, tech: 'JavaScript' },
    ],
    links: { demo: 'https://erikstoupignan.github.io/Leaderboard/', repository: 'https://github.com/ErikStoupignan/Leaderboard' },
  },
  {
    id: 6,
    title: 'Pokédex',
    description: 'Poke-Dex is an API-based web app that displays cards containing information (like their image, type, and location) about different pokemon. This is a single-page application(SPA) that contains the home page and comments modal pop-ups. Users can click on the heart icon to give a like to their favorite and post comments by clicking on the comment button in the modal.',
    images: { cover: './media/wrk-img-6.svg', project: './media/Pokedex/poke-dex-scrnsht.png' },
    technologies: [
      { id: 1, tech: 'HTML/CSS' },
      { id: 2, tech: 'JavaScript' },
      { id: 3, tech: 'Webpack' },
    ],
    links: { demo: 'https://erikstoupignan.github.io/Capstone-m2-APIs-baseapp-pokemon/', repository: 'https://github.com/ErikStoupignan/Capstone-m2-APIs-baseapp-pokemon' },
  },
];

export default projects;
