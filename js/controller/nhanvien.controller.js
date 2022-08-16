function layThongTinTuForm() {
  const taiKhoan = document.getElementById("tknv").value;
  const ten = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const matKhau = document.getElementById("password").value;
  const ngay = document.getElementById("datepicker").value;
  const luong = document.getElementById("luongCB").value;
  const chucVu = document.getElementById("chucvu").value;
  const gio = document.getElementById("gioLam").value;
  return new NhanVien(taiKhoan, ten, email, matKhau, ngay, luong, chucVu, gio);
}

function renderDSNV(nvArr) {
  var contentHTML = "";
  for (var i = 0; i < nvArr.length; i++) {
    var nv = nvArr[i];
    var trContent = `<tr>
      <td>${nv.taiKhoan}</td> 
      <td>${nv.ten}</td> 
      <td>${nv.email}</td>
      <td>${nv.ngay}</td>
      <td>${nv.chucVu}</td> 
      <td>${nv.tinhTongLuong()}</td> 
      <td>${nv.xepLoai()}</td> 
      <td>
      <button class="btn btn-danger" onclick="xoaNhanVien('${
        nv.taiKhoan
      }')">Xoá</button>
      <button class="btn btn-success" onclick="suaNhanVien('${
        nv.taiKhoan
      }')" data-toggle="modal" data-target="#myModal" >Sửa</botton> 
      </td>
      </tr>`;
    contentHTML += trContent;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

function timKiemViTri(id, dsnv) {
  for (var index = 0; index < dsnv.length; index++) {
    var nv = dsnv[index];
    if (nv.taiKhoan == id) {
      return index;
    }
  }
  return -1;
}

function xoaNhanVien(id) {
  var index = timKiemViTri(id, dsnv);
  if (index != -1) {
    dsnv.splice(index, 1);
    renderDSNV(dsnv);
    var dsnvJson = JSON.stringify(dsnv);
    localStorage.setItem(DSNV_LOCALSTORAGE, dsnvJson);
  }
}

function showThongTinLenForm(nv) {
  document.getElementById("tknv").value = nv.taiKhoan;
  document.getElementById("name").value = nv.ten;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.matKhau;
  document.getElementById("datepicker").value = nv.ngay;
  document.getElementById("luongCB").value = nv.luong;
  document.getElementById("chucvu").value = nv.chucVu;
  document.getElementById("gioLam").value = nv.gioLam;
}

function suaNhanVien(id) {
  var index = timKiemViTri(id, dsnv);
  if (index != -1) {
    var nv = dsnv[index];
    showThongTinLenForm(nv);
  }
}
