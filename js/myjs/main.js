let dsnv = [];
const DSNV_LOCALSTORAGE = "DSNV_LOCALSTORAGE";
var dsnvJson = localStorage.getItem(DSNV_LOCALSTORAGE);
if (dsnvJson != null) {
  dsnv = JSON.parse(dsnvJson);
  for (var index = 0; index < dsnv.length; index++) {
    nv = dsnv[index];
    dsnv[index] = new NhanVien(
      nv.taiKhoan,
      nv.ten,
      nv.email,
      nv.matKhau,
      nv.ngay,
      nv.luong,
      nv.chucVu,
      nv.gioLam
    );
  }
  renderDSNV(dsnv);
}

themNhanVien = () => {
  let newNv = layThongTinTuForm();
  // if (kiemTraFull(newNv)) {
  dsnv.push(newNv);
  var dsnvJson = JSON.stringify(dsnv);
  localStorage.setItem(DSNV_LOCALSTORAGE, dsnvJson);
  renderDSNV(dsnv);
  // }
};

function capNhatNV() {
  var oldNV = layThongTinTuForm();
  var index = timKiemViTri(oldNV.taiKhoan, dsnv);
  // if (kiemTraFull(oldNV)) {
  dsnv[index] = oldNV;
  var dsnvJson = JSON.stringify(dsnv);
  localStorage.setItem(DSNV_LOCALSTORAGE, dsnvJson);
  renderDSNV(dsnv);
  // }
}

function resetNV() {
  document.getElementById("tknv").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("datepicker").value = "";
  document.getElementById("luongCB").value = "";
  document.getElementById("chucvu").value = "";
  document.getElementById("gioLam").value = "";
}

function searchNV() {
  var loaiNV = document.getElementById("searchName").value;
  console.log("loaiNV: ", loaiNV);

  let dsnvSearch = [];
  for (let index = 0; index < dsnv.length; index++) {
    if (dsnv[index].xepLoai() == loaiNV) {
      dsnvSearch.push(dsnv[index]);
    }
  }
  console.log("dsnvSearch: ", dsnvSearch);
  renderDSNV(dsnvSearch);
}

function kiemTraFull(newNv) {
  var isValid =
    validator.kiemTraRong(newNv.taiKhoan, "tbTKNV") &&
    validator.kiemTraDoDai(
      newNv.taiKhoan,
      "tbTKNV",
      4,
      6,
      "Tài khoản phải có 4 - 6 ký số"
    );
  isValid &= validator.kiemTraRong(newNv.ten, "tbTen");

  isValid &=
    validator.kiemTraRong(newNv.email, "tbEmail") &&
    validator.kiemTraEmail(newNv.email, "tbEmail", "Email không hợp lệ");
  return isValid;
}
