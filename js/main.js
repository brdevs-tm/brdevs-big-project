const ratingInputs = document.querySelectorAll('input[name^="rating"]');

ratingInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const selectedRating = input.value;
    console.log("Selected rating: " + selectedRating);

    // Perform any other actions or effects here
    // For example, shooting small stars animation
    const starsContainer = input.parentElement;
    const selectedStars = starsContainer.querySelectorAll(
      "label:nth-child(-n+" + selectedRating + ")"
    );

    selectedStars.forEach((star) => {
      // Apply your animation or effect to the selected stars
      star.classList.add("shooting-star");
    });
  });
});

function toggleLike(element) {
  element.classList.toggle("active");
}
