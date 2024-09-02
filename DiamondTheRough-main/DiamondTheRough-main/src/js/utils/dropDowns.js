window.addEventListener("DOMContentLoaded", () => {
   const dropdowns = document.querySelectorAll(".drop-down");

   dropdowns &&
      dropdowns.forEach((dropdown) => {
         dropdown.addEventListener("click", (e) => {
            let target = e.target,
               input = dropdown.querySelector("input");
          

            if (target.classList.contains("drop-down__menu-item")) {
               input.value = target.textContent;
               dropdown.classList.remove("active");
               return;
            }
            if(target === input) {
               dropdown.classList.toggle("active");
            }
        
         });
      });
});
