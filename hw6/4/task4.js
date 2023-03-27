function information() {
    const button = document.querySelector(".btn");
    const outBlock = document.querySelector(".out");
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const fio = document.querySelector("[data-form = 'ПІБ']").value;
        const phone = document.querySelector("[data-form = 'Номер телефону']").value;
        const birth = document.querySelector("[data-form = 'Дата народження']").value;
        const mail = document.querySelector("[data-form = 'Електронна пошта']").value;

        let res = [fio, phone, birth, mail];
        outBlock.textContent = res.join(", ");
    })
}
console.log(information());
