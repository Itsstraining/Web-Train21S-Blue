const num = [
    "không",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
  ];
  let a = prompt("Nhập số n:");
  
  function chuc(n) {
    let result = "";
    let sohangchuc = Math.floor(n / 10);
    //   alert(sohangchuc);
    let donvi = n % 10;
  
    if (sohangchuc > 1) {
      result = num[sohangchuc] + " mươi";
      if (donvi == 1) {
        result += " mốt";
      } else if (donvi == 4) {
        2;
        result += " tư";
      } else if (donvi == 5) {
        result += " lăm";
      }
    } else if (sohangchuc == 1) {
      "mười "+num[donvi]
      if (donvi == 5) {
        result += " lăm";
      } else {
        result += num[donvi];
      }
    }
  
    return result;
  }
  
  alert(chuc(a));