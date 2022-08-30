AOS.init();

setTimeout(() => {
  btn()
}, 2000)

function btn() {
  document.querySelector('.btn__anim').classList.remove('d-none');
  document.querySelector('.btn__anim').classList.add('animate__jackInTheBox');
}

// Картинки
const mainProduct = document.querySelectorAll('.productions__img ')
const view = document.querySelector('.view')
const closeBtn = document.querySelector('.view__btn')
mainProduct.forEach(el => {
  el.addEventListener('click', function (e) {
    view.classList.add('active')
    let img = this.querySelector('img').getAttribute('src')
    view.querySelector('img').src = img
  })
})


closeBtn.addEventListener('click', function (e) {
  view.classList.remove('active');
})


// Анимация при скролле

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('animation-class');
    } else {
      change.target.classList.remove('animation-class');
    }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.scroll-item');

for (let elm of elements) {
  observer.observe(elm);
}



