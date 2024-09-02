export default class Modal {
   constructor(openBtns = [], closeBtns = [], modal) {
      this.openBtns = openBtns;
      this.closeBtns = closeBtns;
      this.modal = modal;
      this.#openModal();
      this.#closeModal();
   }

   #openModal() {
      this.openBtns.forEach((btn) => {
         btn.addEventListener("click", () => {
            this.modal.classList.add("active");
         });
      });
   }

   #closeModal() {
      this.closeBtns.forEach((btn) => {
         btn.addEventListener("click", () => {
            this.modal.classList.remove("active");
         });
      });
   }

   getModalElem() {
      return this.modal;
   }
}
