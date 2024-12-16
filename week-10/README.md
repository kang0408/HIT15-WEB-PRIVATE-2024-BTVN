## **X. BTVN**

#### **Bài 1**

Lấy đầu vào từ người dùng bằng `prompt("Hôm nay là ngày gì?")`. Kiểm tra xem ngày đó là ngày cuối tuần hay ngày làm việc, sau đó hiển thị kết quả bằng `alert` (Chú ý **Thứ Bảy** và **Chủ Nhật** là ngày cuối tuần).

Test case:

| Input    | Output                   |
| -------- | ------------------------ |
| Saturday | Saturday is a weekend.   |
| saturDaY | Saturday is a weekend.   |
| Friday   | Friday is a working day. |

#### **Bài 2**

Lấy đầu vào từ người dùng bằng `prompt("Nhập tháng của bạn: ")`. Viết một chương trình xác định số ngày trong tháng đó và hiển thị kết quả bằng `alert`.

Test case:

| Input    | Output                |
| -------- | --------------------- |
| January  | January has 31 days.  |
| JANUARY  | January has 31 days   |
| FEbruary | February has 28 days. |

#### **Bài 3**

Hãy sử dụng **vòng lặp** để in kết quả ra console cây thông sau để đón giáng sinh một mình nào

```javascript
              *
            * * *
          * * * * *
        * * * * * * *
      * * * * * * * * *
    * * * * * * * * * * *
              *
              *
            * * *
```

#### **Bài 4**

- Sử dụng prompt để yêu cầu người dùng nhập các số, cách nhau bằng dấu phẩy (,).
- Sử dụng vòng lặp để duyệt qua chuỗi nhập và sử dụng điều kiện để:
  - Tìm số lớn nhất và số nhỏ nhất trong danh sách.
  - Kiểm tra số chẵn và đếm tổng số số chẵn.
  - Hiển thị kết quả bằng alert.

Test case:

| Input        | Output                                                 |
| ------------ | ------------------------------------------------------ |
| 4,7,2,9,1    | Số lớn nhất: 9 <br> Số nhỏ nhất: 1 <br> Số chẵn: 2     |
| 10,15,22,3,8 | Số lớn nhất: 22 <br> Số nhỏ nhất: 3 <br> Số chẵn: 3    |
| 100,-50,0,3  | Số lớn nhất: 100 <br> Số nhỏ nhất: -50 <br> Số chẵn: 3 |
