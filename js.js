    let a;
    document.getElementById("clicks").onclick = function() {
        // Lấy giá trị của radio button được chọn
        const selectedRadio = document.querySelector('input[name="title"]:checked');
        
        if (selectedRadio) {
            a = Number(selectedRadio.value);  // Lấy giá trị của radio và chuyển thành số
            
            if (a === 3) {
                document.getElementById("dan").innerHTML = "yes bạn thật tuyệt vời ❤️❤️";
            } else {
                document.getElementById("dan").innerHTML = "tôi chán bạn cực kì,1 cái đơn giản mà bạn ko biết làm 😥😤😭";
            }
        } else {
            // Nếu không có radio nào được chọn
            document.getElementById("dan").innerHTML = "Bạn chưa chọn lựa chọn nào";
        }
    };
