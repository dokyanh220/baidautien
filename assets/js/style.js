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


// sự kiện nút menu trên mobile
var header = document.getElementById("header");
var menu = document.getElementById("mobileMenu");
var headerHeight = header.clientHeight; // lấy chiều cao của header

menu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight; 
    // kiểm tra chiều cao của header có bằng chiều cao ban đầu không
    // so sánh isClosed nếu bằng chiều cao của header thì mở menu, ngược lại thì đóng menu
    if (isClosed) {
        header.style.height = "auto";
    } 
    else {
        header.style.height = null;
    }
}

// khi click vào menu thì sẽ đóng menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');{
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].onclick = function() {
            header.style.height = null; // đóng menu khi click vào menu
        }
    }
}