document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn");
  const cancel = document.querySelector(".final__link");

  const loader = () => {
    btn.innerHTML = '<div class="spinner"></>';
    const spinner = document.querySelector(".spinner");
    spinner.style.cssText = `
    height: 30px;
    width: 30px;
    margin: 0 auto;
    border-top: 5px solid #fff;
    border-right: 5px solid #fff;
    border-bottom: 5px solid #fff;
    border-left: 5px solid #680262 ;
    border-radius: 50%; 
    `;
    const fps = 1000 / 60;
    let deg = 0;
    const degChange = 6;

    const rotate = () => {
      deg += degChange;
      spinner.style.transform = `rotate(${deg}deg)`;
    };

    setInterval(rotate, fps);
  };

  const cancelOrder = () => {
    btn.innerHTML = "Proceed to Payment";
  };

  btn.addEventListener("click", loader);
  cancel.addEventListener("click", cancelOrder);
});
