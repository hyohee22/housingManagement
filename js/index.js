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

// 첫번째 스와이퍼
const popupSwiper = new Swiper(".popup-swiper", {
  navigation: {
    nextEl: ".popup-next",
    prevEl: ".popup-prev",
  },
  pagination: {
    el: ".popup-pagination",
    type: "fraction",
  },
});
AOS.init();


//section_map
const branches = {
  busan: {
    name: "부산울산지사",
    address: "부산광역시 북구 화명대로 20",
    phone: "051-361-2133",
    position: { top: "70%", left: "80%" }
  },
  incheon: {
    name: "인천지사",
    address: "인천광역시 미추홀구 매소홀로 50",
    phone: "032-000-1234",
    position: { top: "35%", left: "45%" }
  },
  gangwon: {
    name: "강원지사",
    address: "강원도 춘천시 방송길 1",
    phone: "033-000-5678",
    position: { top: "25%", left: "60%" }
  },
  chungbuk: {
    name: "충북지사",
    address: "충청북도 청주시 상당구 상당로 82",
    phone: "043-000-2468",
    position: { top: "45%", left: "55%" }
  },
  daejeon: {
    name: "대전충남지사",
    address: "대전광역시 서구 둔산로 100",
    phone: "042-000-3579",
    position: { top: "55%", left: "50%" }
  },
  jeonbuk: {
    name: "전북지사",
    address: "전라북도 전주시 완산구 기린대로 300",
    phone: "063-000-7890",
    position: { top: "65%", left: "40%" }
  },
  gwangju: {
    name: "광주전남지사",
    address: "광주광역시 북구 용봉로 77",
    phone: "062-000-1111",
    position: { top: "75%", left: "35%" }
  },
  head: {
    name: "본부",
    address: "서울특별시 중구 세종대로 110",
    phone: "02-000-2222",
    position: { top: "20%", left: "50%" }
  }
};

const lis = document.querySelectorAll(".branch-menu li");
const $name = document.getElementById("branch-name");
const address = document.getElementById("branch-address");
const phone = document.getElementById("branch-phone");
const marker = document.getElementById("marker");

lis.forEach(li => {
  li.addEventListener("click", () => {
    lis.forEach(el => el.classList.remove("active"));
    li.classList.add("active");

    const id = li.getAttribute("data-branch");
    const data = branches[id];

    $name.textContent = data.name;
    address.textContent = data.address;
    phone.textContent = data.phone;
    marker.style.top = data.position.top;
    marker.style.left = data.position.left;
  });
});

//section_content
const contentData = {
  welfare: {
    title: "주거복지사업",
    desc: "독거노인 등 주거취약계층에게 필요한 서비스를 맞춤형으로 제공함으로 안전하고 쾌적한 주거환경 제공",
    img: "images/work_img1.png"
  },
  rental: {
    title: "임대운영",
    desc: "임대주택의 효율적인 운영과 임차인 지원을 통해 안정적인 주거생활을 돕습니다.",
    img: "images/work_img2.png"
  },
  housing: {
    title: "주택관리",
    desc: "공공임대주택의 시설을 체계적으로 유지·보수하여 쾌적한 주거환경을 유지합니다.",
    img: "images/work_img3.jpg"
  },
  residence: {
    title: "주거관리",
    desc: "주거서비스 제공을 통해 입주민의 삶의 질을 높이고, 공동체 활성화를 도모합니다.",
    img: "images/work_img4.jpg"
  }
};

const menuLinks = document.querySelectorAll(".content_btn_select ul li a");
const resultTitle = document.querySelector(".content_result h2");
const resultDesc = document.querySelector(".content_result p");
const resultImg = document.querySelector(".content_img img");

menuLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.dataset.target;
    const content = contentData[target];
    resultTitle.textContent = content.title;
    resultDesc.textContent = content.desc;
    resultImg.src = content.img;
  });
});

//두번째 스크립트
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 사이드바
let links = document.querySelectorAll('.circle-link');
let sections = document.querySelectorAll('section');


window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 2 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 2) {
      currentSection = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('side');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('side');
    }
  });
});

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.getElementById(link.getAttribute('href').substring(1));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});




// popup
window.onload = function () {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('back').style.display = 'block';
};

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('back').style.display = 'none';
}
