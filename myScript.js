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


const master = [
  {   id: 'project1', title: 'First project', 
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  imgs: ['/assets/hd1.png', '/assets/Rectangle21(1).png', '/assets/Rectangle21(2).png', '/assets/Rectangle21(3).png', '/assets/Rectangle21(4).png'],
  techLlist: [ 'HTML', 'Ruby on Rails', 'JavaScript',],
  links: [ 'https://github.com/ErikStoupignan/My_Portfolio', 'https://github.com/ErikStoupignan/My_Portfolio'],
  },
  {  id: 'project2', title: 'Second project', 
  paragraph: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  imgs: ['/assets/Rectangle21(1).png', '/assets/Rectangle21(2).png', '/assets/Rectangle21(3).png', '/assets/Rectangle21(4).png', '/assets/hd1.png'],
  techLlist: [ 'HTML', 'Ruby on Rails', 'JavaScript',],
  links: [ 'https://github.com/ErikStoupignan/My_Portfolio', 'https://github.com/ErikStoupignan/My_Portfolio'],
  },
  {  id: 'project3', title: 'Super project', 
  paragraph: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  imgs: ['/assets/Rectangle21(1).png', '/assets/Rectangle21(2).png', '/assets/Rectangle21(3).png', '/assets/Rectangle21(4).png', '/assets/hd1.png'],
  techLlist: [ 'HTML', 'Ruby on Rails', 'JavaScript',],
  links: [ 'https://github.com/ErikStoupignan/My_Portfolio', 'https://github.com/ErikStoupignan/My_Portfolio'],
  },
  {  id: 'project4', title: 'Arduino developer', 
  paragraph: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  imgs: ['/assets/Rectangle21(1).png', '/assets/Rectangle21(2).png', '/assets/Rectangle21(3).png', '/assets/Rectangle21(4).png', '/assets/hd1.png'],
  techLlist: [ 'HTML', 'Ruby on Rails', 'JavaScript',],
  links: [ 'https://github.com/ErikStoupignan/My_Portfolio', 'https://github.com/ErikStoupignan/My_Portfolio'],
  },
  {  id: 'project5', title: 'Pressure Sensor', 
  paragraph: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  imgs: ['/assets/Rectangle21(1).png', '/assets/Rectangle21(2).png', '/assets/Rectangle21(3).png', '/assets/Rectangle21(4).png', '/assets/hd1.png'],
  techLlist: [ 'HTML', 'Ruby on Rails', 'JavaScript',],
  links: [ 'https://github.com/ErikStoupignan/My_Portfolio', 'https://github.com/ErikStoupignan/My_Portfolio'],
  },
  {  id: 'project6', title: 'Microverse Programm!', 
  paragraph: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  imgs: ['/assets/Rectangle21(1).png', '/assets/Rectangle21(2).png', '/assets/Rectangle21(3).png', '/assets/Rectangle21(4).png', '/assets/hd1.png'],
  techLlist: [ 'HTML', 'Ruby on Rails', 'JavaScript',],
  links: [ 'https://github.com/ErikStoupignan/My_Portfolio', 'https://github.com/ErikStoupignan/My_Portfolio'],
  },
] 


// Function to found the index inside the master array
function found(input) {
  for (let i = 0 ; i < master.length ; i++){
    if (master[i].id === input) {
    return i; 
    }
  }
}
  
// function to put the information inside the Popup
// eslint-disable-next-line
function popUp(string) {
const index = found(string);

  document.getElementById('popup-1').classList.toggle('active');
  document.getElementById('menu').style.display = 'none';
  document.getElementById('Popup-title').innerHTML = master[index].title;
  document.getElementById('Popup-text').innerHTML = master[index].paragraph;
  document.getElementById('popup-img1').src = master[index].imgs[0];
  document.getElementById('popup-img2').src = master[index].imgs[1];
  document.getElementById('popup-img3').src = master[index].imgs[2];
  document.getElementById('popup-img4').src = master[index].imgs[3];
  document.getElementById('popup-img5').src = master[index].imgs[4];
  document.getElementById('pop-tech-1').innerHTML = master[index].techLlist[0];
  document.getElementById('pop-tech-2').innerHTML = master[index].techLlist[1];
  document.getElementById('pop-tech-3').innerHTML = master[index].techLlist[2];
  document.getElementById('pop-link-1').href = master[index].links[0];
  document.getElementById('pop-link-2').href = master[index].links[1];
}

// function to exit
// eslint-disable-next-line
function popDown() {
  document.getElementById('popup-1').classList.toggle('active');
  document.getElementById('menu').style.display = 'block';
}

