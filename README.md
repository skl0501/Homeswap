[README.md](https://github.com/user-attachments/files/21576781/README.md)
# HomeSwap - Website Trao đổi Đồ dùng Gia đình

## Giới thiệu

HomeSwap là một website hiện đại được thiết kế để kết nối cộng đồng trong việc trao đổi đồ dùng gia đình. Website giúp người dùng tìm kiếm, đăng bán và trao đổi các sản phẩm không còn sử dụng, góp phần tiết kiệm chi phí và bảo vệ môi trường.

## Tính năng chính

### 🏠 **Giao diện hiện đại**
- Thiết kế responsive, tương thích với mọi thiết bị
- Giao diện đẹp mắt với gradient và animation
- Navigation menu thông minh với smooth scrolling

### 🔍 **Tìm kiếm và lọc sản phẩm**
- Tìm kiếm theo tên sản phẩm và mô tả
- Lọc theo danh mục: Đồ nội thất, Điện tử, Quần áo, Sách vở, Đồ bếp, Khác
- Hiển thị kết quả tìm kiếm real-time

### 📱 **Tương tác người dùng**
- Modal đăng nhập/đăng ký
- Form đăng sản phẩm mới
- Chi tiết sản phẩm với modal popup
- Thông báo thành công khi thực hiện các hành động

### 🎨 **Hiệu ứng và Animation**
- Loading animation khi tìm kiếm
- Hover effects trên các card sản phẩm
- Smooth scrolling navigation
- Mobile menu với hamburger icon

## Cấu trúc file

```
homeswap-website/
├── index.html          # Trang chủ HTML
├── styles.css          # File CSS chính
├── script.js           # JavaScript cho tương tác
└── README.md          # Hướng dẫn sử dụng
```

## Cách sử dụng

### 1. Mở website
- Mở file `index.html` trong trình duyệt web
- Hoặc sử dụng live server để chạy local

### 2. Khám phá tính năng

#### **Tìm kiếm sản phẩm:**
- Sử dụng ô tìm kiếm để tìm sản phẩm theo tên
- Chọn danh mục từ dropdown để lọc sản phẩm
- Kết quả sẽ hiển thị ngay lập tức

#### **Xem chi tiết sản phẩm:**
- Click vào bất kỳ card sản phẩm nào
- Modal sẽ hiển thị thông tin chi tiết
- Click bên ngoài modal để đóng

#### **Đăng ký/Đăng nhập:**
- Click nút "Đăng ký" hoặc "Đăng nhập" trên header
- Điền thông tin vào form
- Có thể chuyển đổi giữa đăng ký và đăng nhập

#### **Đăng sản phẩm mới:**
- Click nút "Đăng sản phẩm" trên hero section
- Điền thông tin sản phẩm vào form
- Upload hình ảnh (nếu có)

### 3. Responsive Design
- Website tự động điều chỉnh layout trên mobile
- Menu hamburger trên thiết bị di động
- Grid layout thích ứng với kích thước màn hình

## Danh mục sản phẩm

Website hỗ trợ các danh mục sau:

- **Đồ nội thất**: Ghế, bàn, tủ, giường, sofa...
- **Điện tử**: Laptop, điện thoại, máy tính, thiết bị gia dụng...
- **Quần áo**: Áo, quần, giày dép, phụ kiện...
- **Sách vở**: Sách giáo khoa, sách tham khảo, vở...
- **Đồ bếp**: Nồi, chảo, dụng cụ nấu ăn...
- **Khác**: Các sản phẩm không thuộc danh mục trên

## Công nghệ sử dụng

- **HTML5**: Cấu trúc semantic
- **CSS3**: Flexbox, Grid, Animations, Responsive Design
- **JavaScript ES6+**: DOM manipulation, Event handling, Async operations
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## Tùy chỉnh

### Thêm sản phẩm mới:
Chỉnh sửa mảng `sampleProducts` trong file `script.js`:

```javascript
const sampleProducts = [
    {
        id: 7,
        title: "Tên sản phẩm",
        description: "Mô tả sản phẩm",
        category: "furniture", // hoặc category khác
        location: "Địa điểm",
        image: "URL hình ảnh",
        date: "YYYY-MM-DD"
    }
    // Thêm sản phẩm khác...
];
```

### Thay đổi màu sắc:
Chỉnh sửa biến CSS trong file `styles.css`:

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2980b9;
    --accent-color: #f39c12;
}
```

### Thêm danh mục mới:
1. Thêm option trong HTML select
2. Cập nhật object `categoryLabels` trong JavaScript
3. Thêm CSS cho category mới

## Tính năng nâng cao có thể thêm

- **Backend Integration**: Kết nối với database thực
- **User Authentication**: Hệ thống đăng nhập thực
- **Image Upload**: Upload và lưu trữ hình ảnh
- **Real-time Chat**: Chat giữa người mua và bán
- **Payment Integration**: Tích hợp thanh toán
- **Rating System**: Đánh giá người dùng
- **Push Notifications**: Thông báo real-time

## Hỗ trợ

Nếu có vấn đề hoặc câu hỏi, vui lòng liên hệ:
- Email: info@homeswap.vn
- Điện thoại: +84 123 456 789

## License

© 2024 HomeSwap. Tất cả quyền được bảo lưu.

---

**Lưu ý**: Đây là phiên bản demo với dữ liệu mẫu. Để sử dụng trong thực tế, cần tích hợp với backend và database thực. 
