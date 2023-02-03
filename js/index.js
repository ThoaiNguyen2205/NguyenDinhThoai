
// Bài tập 1: Tính lương nhân viên
function tinhTongLuong(){
    /* Input
        tienLuong1Ngay:number
        soNgayLam:number */
    var tienLuong1Ngay = 100000;
    var soNgayLam = document.getElementById('soNgayLam').value ;
    /* Output
        tienLuong : number*/
    var tienLuong = 0;
    /* Process */
    tienLuong = tienLuong1Ngay * soNgayLam;

    document.getElementById('tienLuong').innerHTML=tienLuong.toLocaleString() + ' VNĐ';
}

//Bài tập 2:Tính giá trị trung bình

function trungBinh(){
    /* Input
      soThuc1 : number
      soThuc2 : number
      soThuc3 : number
      soThuc4 : number
      soThuc5 : number */
    var soThuc1 = Number(document.getElementById('soThuc1').value) ;
    var soThuc2 = Number(document.getElementById('soThuc2').value) ;
    var soThuc3 = Number(document.getElementById('soThuc3').value) ;
    var soThuc4 = Number(document.getElementById('soThuc4').value) ;
    var soThuc5 = Number(document.getElementById('soThuc5').value) ;
    /* Output
    giaTriTrungBinh: number */

    var giaTriTrungBinh = 0;
    /* Process */   
    giaTriTrungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;

    document.getElementById('giaTriTrungBinh').innerHTML=giaTriTrungBinh;      
}

// Bài tập 3: Quy đổi tiền 

function quyDoiTien(){
    /* Input
       tiGia: number
       soLuongUSD : number  */
    const tiGia = 23500;
    var soLuongUSD = document.getElementById('soLuongUSD').value;
    /* Output 
       soLuongVND: number */
    var soLuongVND = 0;
    /* Process */
    soLuongVND = soLuongUSD * tiGia ;
    document.getElementById('soLuongVND').innerHTML=soLuongVND .toLocaleString() + ' VNĐ';
}
 
// Bài tập 4: Tính chu vi và diện tích hình chữ nhật

function tinhChuViDienTich(){
    /* Input
       chieuDai: number
       chieuRong: number  */
    var chieuDai = Number(document.getElementById('chieuDai').value);
    var chieuRong = Number (document.getElementById('chieuRong').value);
    /* Output
       chuVi:number
       dienTich:number  */
    var chuVi = 0;
    var dienTich = 0;
    //Process:
    chuVi = (chieuDai + chieuRong) *2;
    dienTich = chieuDai * chieuRong ;
    document.getElementById('chuVi').innerHTML='Chu Vi = ' +chuVi + ' Mét';
    document.getElementById('dienTich').innerHTML ='Diện Tích = ' + dienTich + ' M2';
}

// Bài tập 5: Tính tổng 2 ký số của số cần nhập 
function tinhTong2KySo(){
    /* Input
       soCanNhap: number  */
       var soCanNhap = Number(document.getElementById('soCanNhap').value); 
       /* Output 
          tong2KySo:number */
       var tong2KySo = 0 ;
       // Process
       var soHangDonVi = soCanNhap % 10;
       var soHangChuc = Math.floor(soCanNhap/10);
       tong2KySo = soHangDonVi + soHangChuc ;
       
       document.getElementById('tong2KySo').innerHTML=tong2KySo;
}

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


    
    

