document.addEventListener('DOMContentLoaded', function () {
    const modalButtons = document.querySelectorAll('.modal-button');

    modalButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.style.display = 'block';

                // Close modal when clicking the close button
                const closeButtons = modal.getElementsByClassName('close-button');
                if (closeButtons[0]) {
                    closeButtons[0].addEventListener('click', function () {
                        modal.style.display = 'none';
                    });
                }
            }
        });
    });
});
