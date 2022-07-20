/* eslint linebreak-style: ["error", "windows"] */

// Hamburguer button works
const modal = document.querySelector('#modal-menu');
const hambIcon = document.querySelector('#burguer-icon');
const xIcon = document.querySelector('#x-icon');
const list = document.querySelector('#list-menu');

hambIcon.addEventListener('click', () => {
  modal.style.display = 'block';
});

xIcon.addEventListener('click', () => {
  modal.style.display = 'none';
});

list.addEventListener('click', () => {
  modal.style.display = 'none';
});

//  function to open and close the popup windows
//  ['Titulo', 'Description', 'img1', '2', '3', '4', '5','tech1','2','3','live version','Source']

const project1 = ['First project',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  '/assets/hd1.png',
  '/assets/Rectangle21(1).png',
  '/assets/Rectangle21(2).png',
  '/assets/Rectangle21(3).png',
  '/assets/Rectangle21(4).png',
  'HTML',
  'Ruby on Rails',
  'JavaScript',
  'https://github.com/ErikStoupignan/My_Portfolio',
  'https://github.com/ErikStoupignan/My_Portfolio'];

const project2 = ['Second project',
  'Lorem, ipsum dolor sit amet consectetur adipisicing.',
  '/assets/Rectangle21(4).png',
  '/assets/hd1.png',
  '/assets/Rectangle21(1).png',
  '/assets/Rectangle21(2).png',
  '/assets/Rectangle21(3).png',
  'html',
  'Ruby on Rails',
  'JavaScript',
  'https://github.com/ErikStoupignan/My_Portfolio',
  'https://github.com/ErikStoupignan/My_Portfolio'];

const project3 = ['Super project',
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed cumque qui tenetur ducimus architecto!',
  '/assets/Rectangle21(3).png',
  '/assets/Rectangle21(4).png',
  '/assets/hd1.png',
  '/assets/Rectangle21(1).png',
  '/assets/Rectangle21(2).png',
  'html',
  'Ruby on Rails',
  'JavaScript',
  'https://github.com/ErikStoupignan/My_Portfolio',
  'https://github.com/ErikStoupignan/My_Portfolio'];

const project4 = ['Arduino developer',
  'Adipisicing elit. Sed cumque qui tenetur ducimus architecto!',
  '/assets/Rectangle21(2).png',
  '/assets/Rectangle21(3).png',
  '/assets/Rectangle21(4).png',
  '/assets/hd1.png',
  '/assets/Rectangle21(1).png',
  'html',
  'Ruby on Rails',
  'JavaScript',
  'https://github.com/ErikStoupignan/My_Portfolio',
  'https://github.com/ErikStoupignan/My_Portfolio'];

const project5 = ['Pressure Sensor',
  'Ipsum dolor sit amet, consectetur adipisicing elit. Nulla, iusto eum.Adipisicing elit. Sed cumque qui tenetur ducimus architecto!',
  '/assets/Rectangle21(1).png',
  '/assets/Rectangle21(2).png',
  '/assets/Rectangle21(3).png',
  '/assets/Rectangle21(4).png',
  '/assets/hd1.png',
  'html',
  'Ruby on Rails',
  'JavaScript',
  'https://github.com/ErikStoupignan/My_Portfolio',
  'https://github.com/ErikStoupignan/My_Portfolio'];

const project6 = ['Microverse Programm!',
  'Consectetur adipisicing elit. Nulla, iusto eum.Adipisicing elit. Sed cumque qui tenetur ducimus architecto!',
  '/assets/Microverse-photo.jpg',
  '/assets/Rectangle21(2).png',
  '/assets/Rectangle21(3).png',
  '/assets/Rectangle21(4).png',
  '/assets/hd1.png',
  'html',
  'Ruby on Rails',
  'JavaScript',
  'https://github.com/ErikStoupignan/My_Portfolio',
  'https://github.com/ErikStoupignan/My_Portfolio'];

// function to put the information inside the Popup
// eslint-disable-next-line
function popUp(string) {

  let box;

  // Project1
  if (string === 'project1') {
    box = project1;
  }

  // Project2
  if (string === 'project2') {
    box = project2;
  }

  // Project3
  if (string === 'project3') {
    box = project3;
  }

  // Project4
  if (string === 'project4') {
    box = project4;
  }

  // Project5
  if (string === 'project5') {
    box = project5;
  }

  // Project6
  if (string === 'project6') {
    box = project6;
  }

  if (box !== undefined) {
    document.getElementById('popup-1').classList.toggle('active');
    document.getElementById('menu').style.display = 'none';
    document.getElementById('Popup-title').innerHTML = box[0];
    document.getElementById('Popup-text').innerHTML = box[1];
    document.getElementById('popup-img1').src = box[2];
    document.getElementById('popup-img2').src = box[3];
    document.getElementById('popup-img3').src = box[4];
    document.getElementById('popup-img4').src = box[5];
    document.getElementById('popup-img5').src = box[6];
    document.getElementById('pop-tech-1').innerHTML = box[7];
    document.getElementById('pop-tech-2').innerHTML = box[8];
    document.getElementById('pop-tech-3').innerHTML = box[9];
    document.getElementById('pop-link-1').href = box[10];
    document.getElementById('pop-link-2').href = box[11];
  }
}

// function to exit
// eslint-disable-next-line
function popDown() {
  document.getElementById('popup-1').classList.toggle('active');
  document.getElementById('menu').style.display = 'block';
}
