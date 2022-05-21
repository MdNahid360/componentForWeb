(function name() {
    const button = document.querySelectorAll('.btn');
    const storeImg = document.querySelectorAll('.item');

    button.forEach((button) => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const filter = e.target.dataset.filter
            setTimeout(storeImg.forEach((item) => {
                if (filter === "all") {
                    item.style.display = 'block';
                    item.style.transition = 'all 0.2s ease-in-out';
                    item.style.opacity = '100';
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                        item.style.transition = 'all 0.2s ease-in-out';
                        item.style.opacity = '100';
                    } else {
                        item.style.display = 'none';
                        item.style.transition = 'all 0.2s ease-in-out';
                        item.style.opacity = '0';
                    }
                }
            }), 200)

        })
    })
})();