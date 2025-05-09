const items = document.querySelectorAll(".process-item");

  items.forEach((item) => {
    item.querySelector(".process-header").addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all items
      items.forEach((i) => {
        i.classList.remove("active");
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });