// Sample product data
const sampleProducts = [
    {
        id: 1,
        title: "Ghế sofa cũ",
        description: "Ghế sofa 3 chỗ ngồi, màu xám, còn tốt 80%. Phù hợp cho phòng khách.",
        category: "furniture",
        location: "Quận 1, TP.HCM",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        date: "2024-01-15"
    },
    {
        id: 2,
        title: "Laptop Dell Inspiron",
        description: "Laptop Dell Inspiron 15 inch, RAM 8GB, SSD 256GB. Còn hoạt động tốt.",
        category: "electronics",
        location: "Quận 3, TP.HCM",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        date: "2024-01-14"
    },
    {
        id: 3,
        title: "Áo khoác nam",
        description: "Áo khoác nam size L, màu đen, chất liệu cotton. Còn mới 90%.",
        category: "clothing",
        location: "Quận 7, TP.HCM",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        date: "2024-01-13"
    },
    {
        id: 4,
        title: "Sách giáo khoa Toán 12",
        description: "Bộ sách giáo khoa Toán 12, còn mới, không viết vẽ gì.",
        category: "books",
        location: "Quận 5, TP.HCM",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        date: "2024-01-12"
    },
    {
        id: 5,
        title: "Bộ nồi inox",
        description: "Bộ nồi inox 5 chiếc, còn mới 95%. Phù hợp cho gia đình 4-5 người.",
        category: "kitchen",
        location: "Quận 2, TP.HCM",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        date: "2024-01-11"
    },
    {
        id: 6,
        title: "Xe đạp thể thao",
        description: "Xe đạp thể thao nam, size 26 inch, màu xanh. Còn tốt 85%.",
        category: "other",
        location: "Quận 10, TP.HCM",
        image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        date: "2024-01-10"
    }
];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const addProductModal = document.getElementById('addProductModal');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadProducts(sampleProducts);
    setupEventListeners();
    setupSmoothScrolling();
    setupMobileMenu();
});

// Load products into the grid
function loadProducts(products) {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create a product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => showProductDetail(product);
    
    const categoryLabels = {
        'furniture': 'Đồ nội thất',
        'electronics': 'Điện tử',
        'clothing': 'Quần áo',
        'books': 'Sách vở',
        'kitchen': 'Đồ bếp',
        'other': 'Khác'
    };
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/300x200?text=Không+có+hình+ảnh'">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-meta">
                <span class="product-category">${categoryLabels[product.category]}</span>
                <span>${formatDate(product.date)}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
}

// Search products
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    
    const filteredProducts = sampleProducts.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm) || 
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    loadProducts(filteredProducts);
}

// Show product detail modal
function showProductDetail(product) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    
    const categoryLabels = {
        'furniture': 'Đồ nội thất',
        'electronics': 'Điện tử',
        'clothing': 'Quần áo',
        'books': 'Sách vở',
        'kitchen': 'Đồ bếp',
        'other': 'Khác'
    };
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">
                <div>
                    <img src="${product.image}" alt="${product.title}" style="width: 100%; border-radius: 10px;" onerror="this.src='https://via.placeholder.com/300x300?text=Không+có+hình+ảnh'">
                </div>
                <div>
                    <h2>${product.title}</h2>
                    <p style="color: #666; margin: 1rem 0;">${product.description}</p>
                    <div style="margin: 1rem 0;">
                        <strong>Danh mục:</strong> ${categoryLabels[product.category]}
                    </div>
                    <div style="margin: 1rem 0;">
                        <strong>Địa điểm:</strong> ${product.location}
                    </div>
                    <div style="margin: 1rem 0;">
                        <strong>Ngày đăng:</strong> ${formatDate(product.date)}
                    </div>
                    <button class="btn btn-primary" style="margin-top: 1rem;">
                        <i class="fas fa-comments"></i> Liên hệ người bán
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    };
}

// Modal functions
function openLoginModal() {
    loginModal.style.display = 'block';
}

function closeLoginModal() {
    loginModal.style.display = 'none';
}

function openRegisterModal() {
    registerModal.style.display = 'block';
}

function closeRegisterModal() {
    registerModal.style.display = 'none';
}

function openAddProductModal() {
    addProductModal.style.display = 'block';
}

function closeAddProductModal() {
    addProductModal.style.display = 'none';
}

function switchToRegister() {
    closeLoginModal();
    openRegisterModal();
}

function switchToLogin() {
    closeRegisterModal();
    openLoginModal();
}

// Scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', searchProducts);
    categoryFilter.addEventListener('change', searchProducts);
    
    // Close modals when clicking outside
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };
    
    // Form submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
    });
}

// Handle form submissions
function handleFormSubmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    console.log('Form submitted:', data);
    
    // Show success message
    showNotification('Thành công! Dữ liệu đã được gửi.', 'success');
    
    // Close modal if it's a modal form
    const modal = form.closest('.modal');
    if (modal) {
        modal.style.display = 'none';
    }
    
    // Reset form
    form.reset();
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#27ae60' : '#3498db'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup mobile menu
function setupMobileMenu() {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Add loading animation
function showLoading() {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="spinner"></div>';
    loading.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;
    
    const spinner = loading.querySelector('.spinner');
    spinner.style.cssText = `
        width: 50px;
        height: 50px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    `;
    
    document.body.appendChild(loading);
    
    return loading;
}

// Add spinner animation
const spinnerStyle = document.createElement('style');
spinnerStyle.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(spinnerStyle);

// Simulate loading when searching
function searchProducts() {
    const loading = showLoading();
    
    setTimeout(() => {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        
        const filteredProducts = sampleProducts.filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(searchTerm) || 
                                product.description.toLowerCase().includes(searchTerm);
            const matchesCategory = !selectedCategory || product.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });
        
        loadProducts(filteredProducts);
        loading.remove();
    }, 500);
} 