export function whereBuy() {
  const mapBox = document.querySelector('.where-buy__map-box');
  mapBox.addEventListener('click', (e) => {
    const infoBlocks = document.querySelectorAll('.where-buy__info-block');
    const poinst = document.querySelectorAll('.where-buy__map-point-box');
    let target = e.target;

    if (target.classList.contains('where-buy__map-point-box')) {
      let num;
      poinst.forEach((item, i) => {
        item.classList.remove('active');
        if(item == target) {
            num = i
            item.classList.add('active');
        }
      });
      infoBlocks.forEach((item) => item.classList.remove('active'));
      infoBlocks[num].classList.add('active');
    }
  });
}
