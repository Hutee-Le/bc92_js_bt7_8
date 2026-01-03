/*
========================================
BÀI TẬP MẢNG – MÔ HÌNH 3 KHỐI
----------------------------------------
INPUT
- Nhập số, lưu vào mảng

PROCESS
- Xử lý mảng bằng vòng lặp

OUTPUT
- Hiển thị kết quả ra web
========================================
*/

let mang = [];
let mangSoThuc = [];

function themSo() {
    let so = Number(document.getElementById("soNhap").value);
    mang.push(so);
    document.getElementById("mangHienTai").innerHTML = mang;
}

function themSoThuc() {
    let so = Number(document.getElementById("soThuc").value);
    mangSoThuc.push(so);
    document.getElementById("mangSoThuc").innerHTML = mangSoThuc;
}

function tongSoDuong() {
    let tong = 0;
    for (let i = 0; i < mang.length; i++) {
        if (mang[i] > 0) tong += mang[i];
    }
    hienThi("Tổng số dương: " + tong);
}

function demSoDuong() {
    let dem = 0;
    for (let x of mang) {
        if (x > 0) dem++;
    }
    hienThi("Số lượng số dương: " + dem);
}

function timSoNhoNhat() {
    let min = mang[0];
    for (let x of mang) {
        if (x < min) min = x;
    }
    hienThi("Số nhỏ nhất: " + min);
}

function timSoDuongNhoNhat() {
    let min = null;
    for (let x of mang) {
        if (x > 0 && (min === null || x < min)) min = x;
    }
    hienThi("Số dương nhỏ nhất: " + (min ?? "Không có"));
}

function timSoChanCuoi() {
    let kq = -1;
    for (let x of mang) {
        if (x % 2 === 0) kq = x;
    }
    hienThi("Số chẵn cuối: " + kq);
}

function doiCho() {
    let i = Number(document.getElementById("viTri1").value);
    let j = Number(document.getElementById("viTri2").value);
    [mang[i], mang[j]] = [mang[j], mang[i]];
    document.getElementById("mangHienTai").innerHTML = mang;
}

function sapXepTang() {
    mang.sort((a, b) => a - b);
    document.getElementById("mangHienTai").innerHTML = mang;
}

function laSoNguyenTo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function timSoNguyenTo() {
    let kq = -1;
    for (let x of mang) {
        if (laSoNguyenTo(x)) {
            kq = x;
            break;
        }
    }
    hienThi("Số nguyên tố đầu tiên: " + kq);
}

function demSoNguyen() {
    let dem = 0;
    for (let x of mangSoThuc) {
        if (Number.isInteger(x)) dem++;
    }
    hienThi("Số nguyên trong mảng số thực: " + dem);
}

function soSanhAmDuong() {
    let am = 0;
    let duong = 0;

    for (let x of mang) {
        if (x > 0) {
            duong++;
        } else if (x < 0) {
            am++;
        }
    }

    let ketQua = "";

    if (duong > am) {
        ketQua = "Số dương nhiều hơn";
    } else if (am > duong) {
        ketQua = "Số âm nhiều hơn";
    } else {
        ketQua = "Số lượng số âm và số dương bằng nhau";
    }

    hienThi(ketQua);
}

function hienThi(noiDung) {
    document.getElementById("ketQua").innerHTML = noiDung;
}
