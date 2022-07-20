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

  document.getElementById('popup-1').classList.toggle('active');

  const index = found(string);
  let x = [master[index]];

  document.getElementById('popup-1').innerHTML = x.map ( items => 
  `  <div class="background-blur"></div>
      <div class="container-pop">
          <div class="close-btn" onclick= "popDown()" >&times;</div>

          <h2 id="Popup-title">${items.title}</h2>
          <ul class="tech-pop-ul">
              <li id="pop-tech-1">${items.techLlist[0]}</li>
              <li id="pop-tech-2">${items.techLlist[1]}</li>
              <li id="pop-tech-3">${items.techLlist[2]}</li>
          </ul>
  
          <div class="carrusel">
              <img id="popup-img1" class="pic1 zoom" src="${items.imgs[0]}" alt="">
              <img id="popup-img2" class="pic2 zoom" src="${items.imgs[1]}" alt="">
              <img id="popup-img3" class="pic3 zoom" src="${items.imgs[2]}" alt="">
              <img id="popup-img4" class="pic4 zoom" src="${items.imgs[3]}" alt="">
              <img id="popup-img5" class="pic5 zoom" src="${items.imgs[4]}" alt="">
          </div>
          <p id="Popup-text">${items.paragraph}</p>

          <section class="container-pop-button">
              <div class="pop-button"><a id='pop-link-1' href="${items.links[0]}"> <span>See live</span><i class="fas fa-external-link-alt"></i>  </a></div>
              <div class="pop-button"><a id='pop-link-2' href="${items.links[1]}"> <span>See source</span><i class="fab fa-github"></i>  </a></div>
          </section>

          <section class="previous-next-container">
              <span class="p-n-button">
                  <i class="fas fa-arrow-left"></i>
                  <span>Previous project </span>
              </span>
              <span class="p-n-button">
                  <span>Next project</span>
                  <i class="fas fa-arrow-right"></i>
              </span>
          </section>
      </div>`
  )
}

// function to exit
// eslint-disable-next-line
function popDown() {
  document.getElementById('popup-1').classList.toggle('active');
  document.getElementById('menu').style.display = 'block';
}

