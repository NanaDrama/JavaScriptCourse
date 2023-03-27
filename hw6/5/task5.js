const circle = document.querySelectorAll(".circle");
circle.forEach(cir => {
    const dataAnim = cir.dataset.anim;
    cir.classList.add(dataAnim);
})
console.log(circle);
