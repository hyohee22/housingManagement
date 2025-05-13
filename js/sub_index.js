 // header
  let menuNav = document.querySelectorAll(".menu_nav");
  let subMenus = document.querySelectorAll(".sub_menu");
  
  menuNav.forEach(function (nav) {
    nav.addEventListener('mouseenter', function () {
      subMenus.forEach(function (sub) {
        sub.style.display = 'none';
      });
    let target = document.getElementById(nav.dataset.target);
      if (target) {
        target.style.display = 'block';
      }
    });
  });
  
  subMenus.forEach(function (sub) {
    sub.addEventListener('mouseenter', function () {
      sub.style.display = 'block';
    });
    sub.addEventListener('mouseleave', function () {
      sub.style.display = 'none';
    });
  });
  
 //언어 변경 표시
  document.addEventListener('DOMContentLoaded', () => {
    let langList = document.querySelector('.lang_list');
    let langIcon = document.querySelector('.lang_icon');
  
    langIcon.addEventListener('click', () => {
      langList.classList.toggle('active');
    });
  });
  
 //accordion
  let menuIcon = document.querySelector('.ham');
  let accordionMenu = document.getElementById('accordion_menu');
  
  menuIcon.addEventListener('click', function () { 
    if (window.innerWidth > 768) return;
    if (accordionMenu.style.display === 'none' || accordionMenu.style.display === '') {
      accordionMenu.style.display = 'block';
    } else {
      accordionMenu.style.display = 'none';
    }
  });
  
  document.querySelectorAll('.accordion_title').forEach(item => {
    item.addEventListener('click', function () {
      let content = this.nextElementSibling;
      document.querySelectorAll('.accordion_content.active').forEach(activeContent => {
        if (activeContent !== content) {
          activeContent.classList.remove('active');
        }
      });
      content.classList.toggle('active');
    });
  });
  
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      accordionMenu.style.display = 'none';
    }
  });
  
/* 페이지네이션 */
let rowsPerPage = 10;
let rows = document.querySelectorAll('#my-table tbody tr')
console.log(rows)
let rowsCount = rows.length;
let pageCount = Math.ceil(rowsCount/ rowsPerPage);
let numbers = document.querySelector('#numbers');

for(let i = 1; i <= pageCount; i++){
  numbers.innerHTML += `<li><a href="">${i}</a></li>`
}

let numberBtn = numbers.querySelectorAll('a');
numberBtn.forEach((item, idx)=>{
  item.addEventListener('click', function(e){
    e.preventDefault();
    displayRow(idx)
  })
})

function displayRow(idx){
  let start = idx * rowsPerPage;
  let end = start + rowsPerPage;
  let rowsArray = [...rows];
  for(let row of  rowsArray){
    row.style.display = 'none';
  }
  let newRows = rowsArray.slice(start, end);
  for(let row of newRows){
    row.style.display = ''
  }
  for(let btn of numberBtn){
    btn.classList.remove('active')
  }
  numberBtn[idx].classList.add('active');
}
displayRow(0);

//좌우버튼 선택
let prevPageBtn = document.querySelector('.fa-angle-left');
let nextPageBtn = document.querySelector('.fa-angle-right');
let pageActiveIdx = 0; 
let maxPageNum = 3; 
console.log(prevPageBtn, nextPageBtn);

for(let nb of numberBtn){nb.style.display='none'}
function displayPage(num){

  for(let nb of numberBtn){
    nb.style.display='none'
  }

  let totalGroup = Math.ceil(pageCount / maxPageNum)

  let start = num * maxPageNum;
  let end = start + maxPageNum; 

  let groupArr = [...numberBtn].slice(start, end)

  for(let btn of groupArr){
    btn.style.display = ''
  }

  if (pageActiveIdx === 0) {
    prevPageBtn.style.display = 'none';
  } else {
    prevPageBtn.style.display = 'inline-block'; 
  }

  if (pageActiveIdx === totalGroup - 1) {
    nextPageBtn.style.display = 'none'; 
  } else {
    nextPageBtn.style.display = 'inline-block'; 
  }
}

nextPageBtn.addEventListener('click', () => {
  pageActiveIdx++;
  displayPage(pageActiveIdx);
  displayRow(pageActiveIdx * maxPageNum);
})

prevPageBtn.addEventListener('click', () => {
  pageActiveIdx--;
  displayPage(pageActiveIdx);
  displayRow(pageActiveIdx * maxPageNum);
})
displayPage(0);