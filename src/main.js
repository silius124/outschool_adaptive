import "./style.css";

document.querySelector("#burger").addEventListener("click", () => {
  document.querySelector("#burger").classList.toggle("active");
  document.querySelector("#burger-menu").classList.toggle("flex");
  document.querySelector("#burger-menu").classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
});

const tabsTrigger = document.querySelectorAll(".tab-trigger");
const tabsContent = document.querySelectorAll(".tab-content");
tabsContent.forEach((content) => {
  content.classList.add("hidden");
  tabsContent[0].classList.remove("hidden");
});
tabsTrigger.forEach((trigger, i) => {
  trigger.addEventListener("click", () => {
    tabsTrigger.forEach((t) => {
      t.classList.remove("active");
    });
    trigger.classList.add("active");

    tabsContent.forEach((content) => {
      content.classList.add("hidden");
    });
    tabsContent[i].classList.remove("hidden");
  });
});
