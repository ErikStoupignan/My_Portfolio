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

// function to open and close the popup windows
// project# =  ['Titulo'        , 'Description'          , 'img1', 'img', 'img', 'img', 'img','tech1','tech2','tech3','link live version','link to source']
let project1 = ['First project',
                 'Welcome to my project',
                 '/assets/hd1.png',
                 '/assets/desktop/desk-img-1.png',
                 '/assets/desktop/desk-img-2.png',
                 '/assets/desktop/desk-img-3.png',
                 '/assets/desktop/desk-img-4.png',
                 'HTML',
                 'Ruby on Rails',
                 'JavaScript',
                 'https://github.com/ErikStoupignan/My_Portfolio',
                 'https://github.com/ErikStoupignan/My_Portfolio'];

let project2 = ['Second project',
                 'Welcome to my project',
                 '/assets/desktop/desk-img-4.png',
                 '/assets/hd1.png',
                 '/assets/desktop/desk-img-1.png',
                 '/assets/desktop/desk-img-2.png',
                 '/assets/desktop/desk-img-3.png',
                 'html',
                 'Ruby on Rails',
                 'JavaScript',
                 'https://github.com/ErikStoupignan/My_Portfolio',
                 'https://github.com/ErikStoupignan/My_Portfolio'];


// function to put the information inside the Popup 
function popUp(string) {

   // Project1
  if ( string == 'project1'){
  document.getElementById("popup-1").classList.toggle("active");

  document.getElementById("Popup-title").innerHTML = project1[0];
  document.getElementById("Popup-text").innerHTML = project1[1];
  document.getElementById("popup-img1").scr = project1[2];
  document.getElementById("popup-img2").scr = project1[3];
  document.getElementById("popup-img3").scr = project1[4];
  document.getElementById("popup-img4").scr = project1[5];
  document.getElementById("popup-img5").scr = project1[6];
  document.getElementById("pop-tech-1").innerHTML = project1[7];
  document.getElementById("pop-tech-2").innerHTML = project1[8];
  document.getElementById("pop-tech-3").innerHTML = project1[9];
  document.getElementById("pop-link-1").href = project1[10];
  document.getElementById("pop-link-2").href = project1[11];
  } 

    // Project2
  if ( string == 'project2'){
    console.log(string);
  } 

    // Project3
  if ( string == 'project3'){
    console.log(string);
  } 

    // Project4
  if ( string == 'project4'){
    console.log(string);
  } 

    // Project5
   if ( string == 'project5'){
    console.log(string);
  } 

    // Project6
  if ( string == 'project6'){
    console.log(string);
  } 
}

// function to exit 
function popDown() {
  document.getElementById("popup-1").classList.toggle("active");
  };

