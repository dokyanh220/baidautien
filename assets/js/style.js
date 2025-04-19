const buyBtns = document.querySelectorAll('.js-buytickets');
const modal = document.querySelector('.modal');
const modalcontainer = document.querySelector('.js-modal-container');
const closeModal = document.querySelector('.js-closemodal');

// hàm hiển thị modal (thêm class open vào modal)
function showbuytickets() {
    modal.classList.add('open');
}

// hàm ẩn modal (xóa class open khỏi modal)
function hideshowbuytickets() {
    modal.classList.remove('open');
}

// thêm sự kiện click cho tất cả các nút buy tickets
for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showbuytickets)
}

// thêm sự kiện click cho nút close modal
closeModal.addEventListener('click', hideshowbuytickets)

// thêm sự kiện click cho modal để ẩn modal khi click ra ngoài
modal.addEventListener('click', hideshowbuytickets)

modalcontainer.addEventListener('click', function(event) {
    event.stopPropagation(); // ngăn chặn sự kiện click từ modalContent truyền lên modal(sự kiện nổi bọt)
})