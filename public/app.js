document.querySelectorAll(".price").forEach((node) => {
  node.textContent = new Intl.NumberFormat("ru-Ru", {
    currency: "rub",
    style: "currency",
    maximumSignificantDigits: 3,
  }).format(node.textContent);
});

const $cardCourse = document.querySelector(".card-course");
$cardCourse.addEventListener("click", (event) => {
  if (event.target.classList.contains("js-remove")) {
    const id = event.target.dataset.id;
    console.log(id);

    fetch("/card/remove/" + id, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((card) => {
        console.log(card);
      });
  }
});
