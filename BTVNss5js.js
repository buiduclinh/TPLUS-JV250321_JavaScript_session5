//B1
// let numberArray=[];
// console.log(numberArray);
// numberArray.unshift(5);
// console.log(numberArray);

//B2
// let numbers = [2, 5, 7, 4, 1, 8, 6];
// let n = +prompt(`Nhập số bạn đoán: `)
// if (n===numbers){
//     console.log("BINGO");
// }else {
//     console.log("TRY AGAIN");
// }

//B3
//đặt tên mảng
//đặt vòng lặp để nhập các phần tử vào mảng

// let numbers = [];
// let loop = true;
// while (loop) {
//   let input = +prompt(`Nhập số `);
//   if (input) {
//     numbers.push(input);
//     console.log(numbers);
//   } else {
//     loop = false;
//     numbers.reverse();
//     console.log(numbers);
//   }
// }

//B4
//sử dụng vòng lặp với từng giá trị
//nếu giá trị sau lớn hơn giá trị trước
//hoặc ngược lại thì sẽ dừng lại ở giá trị đó
//cho đến hết vòng lặp
// let numbers = [];
// let loop = true;
// while (loop) {
//   let n = +prompt(`nhập phần tử`);
//   if (n) {
//     numbers.push(n);
//     console.log(n);
//   } else {
//     loop = false;
//     console.log(numbers);
//     let max = numbers[0];
//     for (i = 0; i <= numbers.length - 1; i = i + 1) {
//       if (numbers[i] >= max) {
//         max = numbers[i];
//       }
//     }
//     console.log(max);
//   }
// }

//B5
//đặt tên mảng, input mảng
//điều kiện %2 === 0 là số chẳn và ngược lại là lẻ
//tổng số chẵn và lẻ

// let numbers = [];
// let loop = true;
// while (loop) {
//   let n = +prompt(`nhập phần tử`);
//   if (n) {
//     numbers.push(n);
//     console.log(n);
//   } else {
//     loop = false;
//     console.log(numbers);
//     let sumChan = 0;
//     let sumLe = 0;
//     for (i = 0; i <= numbers.length - 1; i = i + 1) {
//       if (numbers[i] % 2 === 0) {
//         sumChan = sumChan + numbers[i];
//       }else {
//         sumLe = sumLe + numbers[i];
//       }
//     }
//     console.log(sumChan);
//     console.log(sumLe);
//   }
// }

//B6
//nếu vòng lặp có 1 phần tử trùng lặp thì sẽ + 1
// let numbers = [];
// let loop = true;
// while (loop) {
//   let n = +prompt(`nhập phần tử`);
//   if (n) {
//     numbers.push(n);
//     console.log(n);
//   } else {
//     loop = false;
//     console.log(numbers);
//     for (let m = 0; m <= numbers.length - 1; m = m + 1) {
//       let count = 0;
//       for (i = 0; i <= numbers.length - 1; i = i + 1) {
//         if (numbers[i] === numbers[m]) {
//           count = count + 1;
//         }
//       }
//       console.log(`số lần ${numbers[m]} xuất hiện là ${count} lần`);
//     }
//   }
// }

//B7
//sử dụng hai vòng lặp
//nếu phần tử sau lớn hơn phần tử trước
//thì phần tử sau sẽ hoán đổi cho phần tử trước

// let numbers = [];
// let loop = true;
// while (loop) {
//   let n = +prompt(`nhập phần tử`);
//   if (n) {
//     numbers.push(n);
//     console.log(n);
//   } else {
//     loop = false;
//     console.log(numbers);
//     for (let m = 0; m <= numbers.length - 1; m = m + 1) {
//       numbers[m];
//       for (i = 0; i <= numbers.length - 1; i = i + 1) {
//         if (numbers[m] <= numbers[i]) {
//           [numbers[m], numbers[i]] = [numbers[i], numbers[m]];
//         }
//       }
//     }
//     console.log(numbers);
//   }
// }

//B8
//sử dụng hai vòng lặp, nếu i === m thì pop đi giá trị đó
// let numbers = [];
// let loop = true;
// while (loop) {
//   let n = +prompt(`nhập phần tử`);
//   if (n) {
//     numbers.push(n);
//     console.log(n);
//   } else {
//     loop = false;
//     console.log(numbers);
//     for (let m = numbers.length - 1; m >= 0; m = m - 1) {
//       numbers[m];
//       for (i = numbers.length - 1; i > m; i = i - 1) {
//         if (numbers[m] === numbers[i]) {
//           numbers.splice(i, 1);
//         }
//       }
//     }
//     console.log(numbers);
//   }
// }

//B9

// MENU

// Nhập vào mảng
//khai báo biến

// Hiển thị mảng
//hiển thị kết quả

// Thêm phần tử
//thêm vào cuối mảng

// Sửa phần tử
//chọn vị trí cần sửa

// Xóa phần tử
//chọn vị trí cần xóa

// Thoát

//   Lựa chọn của bạn:
// let loop = true;
// let numbers = [];
// while (loop) {
//   let n = +prompt(`MENU

// 1. Nhập vào mảng

// 2. Hiển thị mảng

// 3. Thêm phần tử

// 4. Sửa phần tử

// 5. Xóa phần tử

// 6. Thoát

//   Lựa chọn của bạn: `);
//   if (Number.isNaN(n) || n === "" || !Number.isInteger(n)) {
//     console.log("Invalid Input");
//   } else {
//     switch (n) {
//       case 1:
//         let input = prompt(`nhập phần tử vào dãy `);
//         numbers.push(input);
//         break;
//       case 2:
//         console.log(numbers);
//         break;
//       case 3:
//         let newinput = prompt(`nhập phần tử mới `);
//         numbers.push(newinput);
//         break;
//       case 4:
//         let position = +prompt(`Nhập vị trí cần sửa `);
//         let newinput1 = prompt(`nhập giá trị cần sửa `);
//         numbers.splice(position - 1, 1, newinput1);
//         break;
//       case 5:
//         let del = +prompt(`Nhập vị trí mà bạn muốn xóa `)
//         numbers.splice(del - 1, 1);
//         break;
//       case 6:
//         loop = false;
//         break;

//       default:
//         console.log("Invalid Input");
//         break;
//     }
//   }
// }

//B10
// ================== MENU ===================

// Nhập số phần tử cần nhập và giá trị các phần tử
//input mảng và các phần tử

// In ra giá trị các phần tử đang quản lý
//hiển thị mảng sau khi đã nhập

// In ra giá trị các phần tử chẵn và tính tổng
//hiển thị ra các giá trị chẵn trong mảng
//rồi tính tổng của các giá trị đó

// In ra giá trị lớn nhất và nhỏ nhất trong mảng
//sử dụng 1 vòng lặp for để tìm ra giá trị lớn nhất và nhỏ nhất

// In ra các phần tử là số nguyên tố trong mảng và tính tổng
//xét điều kiện là số nguyên tố
//in ra các giá trị đó và tính tổng

// Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
//input phần tử bất kỳ
//kiểm tra xem phần tử đó có trong mảng hay không
//nếu có thì đếm số lần phần tử đó lặp lại

// Thêm một phần từ vào vị trí chỉ định
//sử dụng mảng với spilce để chỉ định vị trí cần thêm

// Thoát
//  	============================================

//   	Lựa chọn của bạn:
// let loop = true;
// let numbers = [];
// while (loop) {
//   let menu = +prompt(`================== MENU ===================

// 1. Nhập số phần tử cần nhập và giá trị các phần tử
// 2. In ra giá trị các phần tử đang quản lý
// 3. In ra giá trị các phần tử chẵn và tính tổng
// 4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
// 5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
// 6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
// 7. Thêm một phần từ vào vị trí chỉ định
// 8. Thoát
//  	============================================

//   	Lựa chọn của bạn:  `);
//   if (Number.isNaN(menu) || menu === "" || !Number.isInteger(menu)) {
//     console.log("Invalid Input");
//   } else {
//     switch (menu) {
//       case 1:
//         let n = +prompt(`Nhập giá trị vào mảng `);
//         if (Number.isNaN(n) || n === "" || !Number.isInteger(n)) {
//           console.log("Invalid Input");
//         } else {
//           numbers.push(n);
//         }
//         break;
//       case 2:
//         console.log(numbers);
//         break;
//       case 3:
//         let sumChan = 0;
//         for (let i = 0; i <= numbers.length - 1; i = i + 1) {
//           if (numbers[i] % 2 === 0) {
//             sumChan = sumChan + numbers[i];
//             console.log(numbers[i]);
//           }
//         }
//         console.log(sumChan);
//         break;
//       case 4:
//         let max = numbers[0];
//         let min = numbers[0];
//         for (let m = 0; m <= numbers.length - 1; m = m + 1) {
//           if (numbers[m] > max) {
//             max = numbers[m];
//           }
//           if (numbers[m] < min) {
//             min = numbers[m];
//           }
//         }
//         console.log(`Giá trị lớn nhất trong dãy là ${max} `);
//         console.log(`Giá trị lớn nhất trong dãy là ${min} `);
//         break;
//       case 5:
//         let sumPrime = 0;
//         for (m = 0; m <= numbers.length - 1; m = m + 1) {
//           let isPrime = true;
//           let primeNumber = numbers[m];
//           if (primeNumber < 2) {
//             isPrime = false;
//           } else {
//             for (i = 2; i <= Math.sqrt(primeNumber); i = i + 1) {
//               if (primeNumber % i === 0) {
//                 isPrime = false;
//               }
//             }
//           }
//           if (isPrime) {
//             sumPrime = sumPrime + primeNumber;
//             console.log(primeNumber);
//           }
//         }
//         console.log(sumPrime);
//         break;
//       case 6:
//         let count = 1;
//         let input = +prompt(`Nhập số bất kỳ `);
//         if (Number.isNaN(input) || input === "" || !Number.isInteger(input)) {
//           console.log("Invalid Input");
//         }
//         for (i = 0; i <= numbers.length - 1; i = i + 1) {
//           if (input === i) {
//             count = count + 1;
//           }
//         }
//         console.log(`${input} : ${count}`);
//         break;
//       case 7:
//         let newinput = +prompt(`nhập phần tử mới `);
//         let newinputps = +prompt(`chọn vị trí cần input `);
//         if (
//           Number.isNaN(newinput) ||
//           newinput === "" ||
//           !Number.isInteger(newinput) ||
//           Number.isNaN(newinputps) ||
//           newinputps === "" ||
//           !Number.isInteger(newinputps)
//         ) {
//           console.log("Invalid Input");
//         }
//         numbers.splice(newinputps - 1, 0, newinput);
//         break;
//       case 8:
//         loop = false;
//         break;

//       default:
//         break;
//     }
//   }
// }

//B7*** cách khác
// const array = [2, 3, 3, 1, 9, 8, 5, 3];
// console.log("Mang ban dau: ======> ", array);
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (array[j] > array[j + 1]) {
//       let middle = array[j];
//       array[j] = array[j + 1];
//       array[j + 1] = middle;
//     }
//   }
// }

//B8*** cách khác
// console.log("Sau khi sap xep: ============>", array);
// Nguyễn Hữu Minh Dương
// let array = [2, 1, 7, 1, 1, 2, 3, 4, 4, 5];
// console.log("MANG BAN DAU ========> ", array);
// let uniqueArray = [];

// for (let i = 0; i < array.length; i++) {
//   let check = false;
//   for (let j = 0; j < uniqueArray.length; j++) {
//     if (array[i] === uniqueArray[j]) {
//       check = true;
//       break;
//     }
//   }
//   if (check != true) {
//     uniqueArray.push(array[i]);
//   }
// }

// console.log("MANG KO TRUNG LAP ========>", uniqueArray);

//B11:
// let loop = true;
// let numbers = [];
// while (loop) {
//   let n = +prompt(`Nhập phần tử`);
//   if (n) {
//     numbers.push(n);
//     console.log(n);
//   } else {
//     loop = false;
//     let newNumbers = [];
//     console.log(numbers);
//     for (i = 0; i <= numbers.length - 1; i = i + 1) {
//       if (numbers[i] >= 10) {
//         console.log(i);
//         newNumbers.push(numbers[i]);
//       }
//     }
//     console.log(newNumbers);
//   }
// }

//B12
// let loop = true;
// let numbers = [];

// while (loop) {
//   let n = +prompt(`Nhập giá trị vào mảng `);
//   if (n) {
//     numbers.push(n);
//     console.log(n);
//   } else {
//     loop = false;
//     let max = numbers[[0]];
//     console.log(numbers);
//     for (i = 0; i <= numbers.length - 1; i = i + 1) {
//       if (numbers[i] >= max) {
//         max = numbers[i];
//       }
//     }
//     console.log(max);
//     console.log(i-1);
//   }
// }

//B13
// let loop = true;
// let numbers = [];

// while (loop) {
//   let n = +prompt(`Nhập giá trị `);
//   if (n) {
//     numbers.push(n);
//     console.log(n);
//   } else {
//     loop = false;
//     let newarray = [];
//     for (i = 0; i <= numbers.length - 1; i = i + 1) {
//       if (numbers[i] < 0 && Number.isInteger(numbers[i])) {
//         newarray.push(numbers[i]);
//       }
//     }
//     console.log(newarray);
//   }
// }

//B15
// let loop = true;
// let numbers = [];

// while (loop) {
//   let n = +prompt(`Nhập giá trị `);
//   if (n) {
//     numbers.push(n);
//     console.log(n);
//   } else {
//     loop = false;
//     let max = numbers[0];
//     let max1 = numbers[0];
//     for (i = 0; i <= numbers.length - 1; i = i + 1) {
//       if (numbers[i] > max) {
//         max1 = max;
//         max = numbers[i];
//       } else if (numbers[i] > max1 && numbers[i] < max) {
//         max1 = numbers[i];
//       }
//     }
//     console.log(max1);
//   }
// }
