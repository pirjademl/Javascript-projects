const plusBtn=document.querySelectorAll('.fa-solid');
const contentWrapper=document.querySelectorAll(".dropdown-wrapper");

const plusBtns = document.querySelectorAll('.fa-solid');
const contentWrappers = document.querySelectorAll(".dropdown-wrapper");

plusBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Toggle the "active" class for the corresponding content wrapper
        contentWrappers[index].classList.toggle("active");
    });
});
