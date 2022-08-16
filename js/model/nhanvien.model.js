class NhanVien {
  constructor(taiKhoan, ten, email, matKhau, ngay, luong, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.ten = ten;
    this.email = email;
    this.matKhau = matKhau;
    this.ngay = ngay;
    this.luong = luong;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tinhTongLuong = function () {
      if (this.chucVu == "Sếp") {
        return this.luong * 3;
      }
      if (this.chucVu == "Trưởng phòng") {
        return this.luong * 2;
      } else {
        return this.luong * 1;
      }
    };
    this.xepLoai = function () {
      if (this.gioLam * 1 >= 192) {
        return "xuất sắc";
      } else if (this.gioLam * 1 >= 176) {
        return "giỏi";
      } else if (this.gioLam * 1 >= 160) {
        return "khá";
      } else {
        return "trung bình";
      }
    };
  }
}
