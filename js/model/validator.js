var validator = {
    kiemTraRong: function (value, idError) {
      if (value.length == 0) {
        document.getElementById(idError).innerText =
          "Trường này không được để trống";
        return false;
      } else {
        document.getElementById(idError).innerText = "";
        return true;
      }
    },
    kiemTraDoDai: function (value, idError, min, max, message) {
      if (value.length < min || value.length > max) {
        document.getElementById(idError).innerText = message;
        return false;
      } else {
        document.getElementById(idError).innerText = "";
        return true;
      }
    },
    kiemTraEmail: function (value, idError, message) {
      const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (re.test(value)) {
        document.getElementById(idError).innerText = "";
        return true;
      } else {
        document.getElementById(idError).innerText = message;
        return fasle;
      }
    },
  };
  
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var gmailTest = "bta@gmail.com";
  var isGmail = gmailTest.match(regex);
  