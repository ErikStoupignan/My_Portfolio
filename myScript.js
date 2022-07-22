// Hamburguer button works
const modal = document.querySelector('#modal-menu');
const hambIcon = document.querySelector('#burguer-icon');
const xIcon = document.querySelector('#x-icon');
const list = document.querySelector('#list-menu');
// Project master container
const master = [
  {
    id: 'project1',
    title: 'First project',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    imgs: ['/assets/hd1.png', '/assets/Rectangle21(1).png', '/assets/Rectangle21(2).png', '/assets/Rectangle21(3).png', '/assets/Rectangle21(4).png'],
    techLlist: ['HTML', 'Ruby on Rails', 'JavaScript'],
    links: ['https://github.com/ErikStoupignan/My_Portfolio', 'https://github.com/ErikStoupignan/My_Portfolio'],
  },
  {
    id: 'project2',
    title: 'Second project',
    paragraph: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    imgs: ['/assets/Rectangle21(1).png', '/assets/Rectangle21(2).png', '/assets/Rectangle21(3).png', '/assets/Rectangle21(4).png', '/assets/hd1.png'],
    techLlist: ['HTML', 'Ruby on Rails', 'JavaScript'],
    links: ['https://github.com/ErikStoupignan/My_Portfolio', 'https://github.com/ErikStoupignan/My_Portfolio'],
  },
  {
    id: 'project3',
    title: 'Super project',
    paragraph: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    imgs: ['/assets/Rectangle21(2).png', '/assets/Rectangle21(3).png', '/assets/Rectangle21(4).png', '/assets/hd1.png', '/assets/Rectangle21(1).png'],
    techLlist: ['HTML', 'Ruby on Rails', 'JavaScript'],
    links: ['https://github.com/ErikStoupignan/My_Portfolio', 'https://github.com/ErikStoupignan/My_Portfolio'],
  },
  {
    id: 'project4',
    title: 'Arduino developer',
    paragraph: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    imgs: ['/assets/Rectangle21(3).png', '/assets/Rectangle21(4).png', '/assets/hd1.png', '/assets/Rectangle21(1).png', '/assets/Rectangle21(2).png'],
    techLlist: ['HTML', 'Ruby on Rails', 'JavaScript'],
    links: ['https://github.com/ErikStoupignan/My_Portfolio', 'https://github.com/ErikStoupignan/My_Portfolio'],
  },
  {
    id: 'project5',
    title: 'Pressure Sensor',
    paragraph: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    imgs: ['/assets/Rectangle21(4).png', '/assets/hd1.png', '/assets/Rectangle21(1).png', '/assets/Rectangle21(2).png', '/assets/Rectangle21(3).png'],
    techLlist: ['HTML', 'Ruby on Rails', 'JavaScript'],
    links: ['https://github.com/ErikStoupignan/My_Portfolio', 'https://github.com/ErikStoupignan/My_Portfolio'],
  },
  {
    id: 'project6',
    title: 'Microverse Programm!',
    paragraph: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    imgs: ['/assets/hd1.png', '/assets/Rectangle21(1).png', '/assets/Rectangle21(2).png', '/assets/Rectangle21(3).png', '/assets/Rectangle21(4).png'],
    techLlist: ['HTML', 'Ruby on Rails', 'JavaScript'],
    links: ['https://github.com/ErikStoupignan/My_Portfolio', 'https://github.com/ErikStoupignan/My_Portfolio'],
  },
];
// Projects variables
const listProject1 = [master[0]];
const listProject2 = [master[1]];
const listProject3 = [master[2]];
const listProject4 = [master[3]];
const listProject5 = [master[4]];
const listProject6 = [master[5]];
// Validation form
const form = document.querySelector('#contact');
const email = document.querySelector('#email-input');
const inputs = document.querySelectorAll('#contact #email-input');
// Preserve data in the browser - Variables
const inputName = document.querySelector('#name-input');
const inputEmail = document.querySelector('#email-input');
const inputMessage = document.querySelector('#textarea-input');
const inputsObject = {};

// Open de hamburguer menu
hambIcon.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close de hamburguer menu
xIcon.addEventListener('click', () => {
  modal.style.display = 'none';
});

// If click in an option from de memu, close the menu
list.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Function to found the index inside the master array
function found(input) {
  for (let i = 0; i < master.length; i += 1) {
    if (master[i].id === input) {
      return i;
    }
  }
  return null;
}

// Project 1
document.getElementById('sectionproyect1').innerHTML = listProject1.map((items) => `<img onclick="popUp('${items.id}')" class="box1 display-none-after" src="${items.imgs[0]}" alt="Introductory cover of the project">
    <img onclick="popUp('${items.id}')" class="box1 display-none" src="${items.imgs[0]}" alt="Introductory cover of the project">
    <div class="box box2">
        <h2 class="subtitle">${items.title}</h2>
    </div>
    <!-- Button's Code -->
    <div class="box ul-container">
        <ul class="ul-technologys">
            <li><a href="#">${items.techLlist[0]}</a></li>
            <li><a href="#">${items.techLlist[1]}</a></li>
            <li><a href="#">${items.techLlist[2]}</a></li>
        </ul>
    </div>
    <!-- See this project button -->
    <div class="box align-button box6">
        <a href="#">
            <div class="buttom-arrow" onclick="popUp('${items.id}')">
                <p>See this project
                <img class="arrow" src="/assets/211621_c_right_arrow_icon.png" alt="">
                </p>
            </div>
        </a>
    </div>`).join('');

// Project 2
document.getElementById('sectionproyect2').innerHTML = listProject2.map((items) => `<img onclick="popUp('${items.id}')" class="box1" src="${items.imgs[0]}" alt="Introductory cover of the project">
    <div class="box box2">
    <h2 class="subtitle">${items.title}</h2>
    </div>
    <!-- Button's Code -->
    <div class="box ul-container">
        <ul class="ul-technologys">
        <li><a href="#">${items.techLlist[0]}</a></li>
        <li><a href="#">${items.techLlist[1]}</a></li>
        <li><a href="#">${items.techLlist[2]}</a></li>
        </ul>
    </div>
    <!-- See this project button -->
    <div class="box align-button box6">
        <a href="#">
            <div class="buttom-arrow" onclick="popUp('${items.id}')">
                <p>See this project
                <img class="arrow" src="/assets/211621_c_right_arrow_icon.png" alt="">
                </p>
            </div>
        </a>
    </div>`).join('');

// Project 3
document.getElementById('sectionproyect3').innerHTML = listProject3.map((items) => `<img onclick="popUp('${items.id}')" class="box1" src="${items.imgs[0]}" alt="Introductory cover of the project">
    <div class="box box2">
    <h2 class="subtitle">${items.title}</h2>
    </div>
    <!-- Button's Code -->
    <div class="box ul-container">
        <ul class="ul-technologys">
        <li><a href="#">${items.techLlist[0]}</a></li>
        <li><a href="#">${items.techLlist[1]}</a></li>
        <li><a href="#">${items.techLlist[2]}</a></li>
        </ul>
    </div>
    <!-- See this project button -->
    <div class="box align-button box6">
        <a href="#">
            <div class="buttom-arrow" onclick="popUp('${items.id}')">
                <p>See this project
                <img class="arrow" src="/assets/211621_c_right_arrow_icon.png" alt="">
                </p>
            </div>
        </a>
    </div>`).join('');

// Project 4
document.getElementById('sectionproyect4').innerHTML = listProject4.map((items) => `<img onclick="popUp('${items.id}')" class="box1" src="${items.imgs[0]}" alt="Introductory cover of the project">
    <div class="box box2">
    <h2 class="subtitle">${items.title}</h2>
    </div>
    <!-- Button's Code -->
    <div class="box ul-container">
        <ul class="ul-technologys">
        <li><a href="#">${items.techLlist[0]}</a></li>
        <li><a href="#">${items.techLlist[1]}</a></li>
        <li><a href="#">${items.techLlist[2]}</a></li>
        </ul>
    </div>
    <!-- See this project button -->
    <div class="box align-button box6">
        <a href="#">
            <div class="buttom-arrow" onclick="popUp('${items.id}')">
                <p>See this project
                <img class="arrow" src="/assets/211621_c_right_arrow_icon.png" alt="">
                </p>
            </div>
        </a>
    </div>`).join('');

// Project 5
document.getElementById('sectionproyect5').innerHTML = listProject5.map((items) => `<img onclick="popUp('${items.id}')" class="box1" src="${items.imgs[0]}" alt="Introductory cover of the project">
    <div class="box box2">
    <h2 class="subtitle">${items.title}</h2>
    </div>
    <!-- Button's Code -->
    <div class="box ul-container">
        <ul class="ul-technologys">
        <li><a href="#">${items.techLlist[0]}</a></li>
        <li><a href="#">${items.techLlist[1]}</a></li>
        <li><a href="#">${items.techLlist[2]}</a></li>
        </ul>
    </div>
    <!-- See this project button -->
    <div class="box align-button box6">
        <a href="#">
            <div class="buttom-arrow" onclick="popUp('${items.id}')">
                <p>See this project
                <img class="arrow" src="/assets/211621_c_right_arrow_icon.png" alt="">
                </p>
            </div>
        </a>
    </div>`).join('');

// Project 6
document.getElementById('sectionproyect6').innerHTML = listProject6.map((items) => `<img onclick="popUp('${items.id}')" class="box1" src="${items.imgs[0]}" alt="Introductory cover of the project">
    <div class="box box2">
    <h2 class="subtitle">${items.title}</h2>
    </div>
    <!-- Button's Code -->
    <div class="box ul-container">
        <ul class="ul-technologys">
        <li><a href="#">${items.techLlist[0]}</a></li>
        <li><a href="#">${items.techLlist[1]}</a></li>
        <li><a href="#">${items.techLlist[2]}</a></li>
        </ul>
    </div>
    <!-- See this project button -->
    <div class="box align-button box6">
        <a href="#">
            <div class="buttom-arrow" onclick="popUp('${items.id}')">
                <p>See this project
                <img class="arrow" src="/assets/211621_c_right_arrow_icon.png" alt="">
                </p>
            </div>
        </a>
    </div>`).join('');

// function to put the information inside the Popup
// eslint-disable-next-line
function popUp(string) {

  document.getElementById('popup-1').classList.toggle('active');
  document.getElementById('menu').style.display = 'none';

  const index = found(string);
  const x = [master[index]];

  document.getElementById('popup-1').innerHTML = x.map((items) => `  <div class="background-blur"></div>
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
      </div>`);
}

// function to exit
// eslint-disable-next-line
function popDown() {
  document.getElementById('popup-1').classList.toggle('active');
  document.getElementById('menu').style.display = 'block';
}

// check with every letter clicked
inputs.forEach((input) => {
  input.addEventListener('keyup', () => {
    const upperCase = email.value.replace(/[^A-Z]/g, '');
    if (upperCase.length > 0) {
      document.getElementById('email-alert').innerHTML = "Don't use capital letters in the email.";
      document.getElementById('email-input').classList.add('red-input');
    } else {
      document.getElementById('email-input').classList.remove('red-input');
      document.getElementById('email-alert').innerHTML = '';
    }
  });
});

// function to review every time the user click on the form button
form.addEventListener('submit', (e) => {
  const upperCase = email.value.replace(/[^A-Z]/g, '');
  if (upperCase.length > 0) {
    e.preventDefault();
  }
});

// Function who push the information of the inputs inside que localStorage
document.querySelector('#contact').addEventListener('change', () => {
  inputsObject.name = inputName.value;
  inputsObject.email = inputEmail.value;
  inputsObject.coment = inputMessage.value;
  localStorage.setItem('data', JSON.stringify(inputsObject));
});

// Function to send the information from the localStorage to the inputs space and fill it
// eslint-disable-next-line
window.onload = function () {
  const data = JSON.parse(localStorage.getItem('data'));
  if (!data) return;
  inputName.value = data.name;
  inputEmail.value = data.email;
  inputMessage.value = data.coment;
};
