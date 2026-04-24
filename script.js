var accordians = document.querySelectorAll(".accordian");

accordians.forEach(item => {
    const icon = item.querySelector(".icon");
    const answer = item.querySelector(".answer");

    item.addEventListener("click", () => {
        accordians.forEach(other => {
            if (other !== item) {
                other.querySelector(".answer").classList.remove("active");
                other.querySelector(".icon").classList.remove("active");
            }
        });

        icon.classList.toggle("active");
        answer.classList.toggle("active");
    }); 
});