document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(
    ".section-title, .concept-text, .menu-category, .access-content"
  );

  targets.forEach(target => target.classList.add("fade-up"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 画面内に入ったらアニメーション開始
        entry.target.classList.add("show");
      } else {
        // 画面外に出たら初期状態に戻す
        entry.target.classList.remove("show");
      }
    });
  }, {
    threshold: 0.15
  });

  targets.forEach(target => observer.observe(target));
});

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("loaded");
    }, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.header nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute('href')
            );

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});