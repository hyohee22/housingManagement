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
  