
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 60,
    autoplay:{
    delay:2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints:{
    0:{
      slidesPerView: 1,
    },

    700:{
      slidesPerView: 2,
    },
    950:{
      slidesPerView: 3,
    },
    },
  });

  const p_btns = document.querySelector("#p_btns");
  const p_btn = document.querySelectorAll(".p-btn");
  const p_img_elem = document.querySelectorAll(".child-projec");
  const button1 = document.querySelector(".btn-3");
  const image_element = document.querySelectorAll(".btn---1")
  console.log(image_element );

  const p_btnss = p_btn_clicked = addEventListener("click", (e) =>{
   const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) =>curElem.classList.remove("p-image-aciteive"))

  p_btn_clicked.classList.add("p-image-aciteive");

  const btn_num = p_btn_clicked.dataset.btnNum;
p_img_elem.forEach((curElem) =>curElem.classList.add("p-image-not-aciteive"));

const image_ative = document.querySelectorAll(`.btn--${btn_num}`)

image_ative.forEach((curElem) =>curElem.classList.remove("p-image-not-aciteive"));
  });

  const speed = 200;

  // animate Number
  const counterNums = document.querySelectorAll(".nums");
   counterNums.forEach((curElem)=>{
    const updateNumber = () =>{
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const initialData = parseInt(curElem.innerText);
    // console.log(initialData)
    const incrementNumber = Math.trunc(targetNumber/speed)
    // console.log(incrementNumber)
    if(initialData < targetNumber){
      curElem.innerText = `${initialData + incrementNumber}+`;
      setTimeout(updateNumber, 10)
    }
  }
  updateNumber(); 
   }); 