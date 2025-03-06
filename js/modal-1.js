(() => {
    const refs = {
        // Додати атрибут data-modal-open на кнопку відкриття
        openModalBtn: document.querySelector('[data-modal-1-open]'),
        // Додати атрибут data-modal-close на кнопку закриття
        closeModalBtn: document.querySelector('[data-modal-1-close]'),
        // Додати атрибут data-modal на бекдроп модалки
        modal: document.querySelector('[data-modal-1]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        // is-open це клас який буде додаватися/забиратися на бекдроп при відкритті/закритті модального вікна
        refs.modal.classList.toggle('is-open');
    }
})();