AOS.init();


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


