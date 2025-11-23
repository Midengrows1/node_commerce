document.querySelectorAll(".price").forEach((node) => {
  node.textContent = new Intl.NumberFormat("ru-Ru", {
    currency: "rub",
    style: "currency",
    maximumSignificantDigits: 3,
  }).format(node.textContent);
});
