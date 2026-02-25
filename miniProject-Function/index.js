let names = ["Laptop", "Bàn phím", "Chuột", "Màn hình"];
let prices = [1500, 400, 250, 900];
let stocks = [10, 0, 50, 5];

let choice;
const displayMenu = () => {
    choice = +prompt(`
        --- Hệ thống quản lý kho hàng ---
        1. Lọc sản phẩm cao cấp (>500)
        2. Kiểm định trạng thái dữ liệu (Hết hàng/Giá sàn)
        3. Phân tích giá trị vốn hóa
        4. Triển khai chiến dịch chiết khấu (Giảm 10%)
        5. Truy vấn sản phẩm theo từ khóa
        6. Báo cáo tình trạng tồn kho
        7. Thoát chương trình
        
        Vui lòng nhập lựa chọn của bạn (1-7):`);
};

// Case 1: Lọc danh mục sản phẩm cao cấp
const filtePreProduct = (names, prices) => {
    console.log("Sản phẩm cao cấp:");

    names.forEach((name, index) => {
        if (prices[index] > 500) {
            console.log(`${name}: ${prices[index]}`);
            
        }
    });
    
};

// Case 2:  Kiểm định trạng thái dữ liệu
const checkProduct = (prices, stocks) => {
    let outStock = stocks.some(stock => {
        return stock === 0;
    });

    if (outStock) {
        console.log("Có sản phẩm hết hàng");
        
    }else{
        console.log("Chưa có sản phẩm nào hết hàng");
        
    }

    let levelPrice = prices.every(price => {
        return price > 100;
    });

    if (levelPrice) {
        console.log("Toàn bộ hàng hóa đảm bảo giá sàn trên 100");
        
    } else {
        console.log("Có sản phẩm giá sàn dưới 100");
        
    }
};

// Case 3: Phân tích giá trị vốn hóa
const handleTotal = (prices, stocks) => {
    let total = prices.reduce((acc, cur, index) => {
        return acc += cur * stocks[index];
    }, 0);
    console.log("Tổng giá trị tài sản hiện có trong kho: ", total);
    
};

// Case 4: Triển khai chiến dịch chiết khấu
const discountProduct = (prices) => {
    prices.forEach((price, index) => {
        prices[index] = price * 0.9;
    });
    console.log("Đã áp dụng giảm giá 10%");
    
};

// Case 5: Truy vấn sản phẩm theo từ khóa
const searchProduct = (searchNameProduct ,names, prices, stocks) => {
    let result = names.filter((name, index) => {
        return name.toLowerCase().includes(searchNameProduct.toLowerCase().trim());
    });

};

do {
    displayMenu();

    switch (choice) {
        case 1:
            filtePreProduct(names, prices);
            break;

        case 2:
            checkProduct(prices, stocks);
            break;

        case 3:
            handleTotal(prices, stocks);
            break;

        case 4:
            discountProduct(prices);
            break;

        case 5:
            let searchNameProduct = prompt("Nhập tên sản phẩm cần tìm: ");
            
            break;

        case 6:
            
            break;
        
        case 7:
            console.log("Kết thúc chương trình!");
            
            break;
    
        default:
            break;
    }

} while (choice!==7);