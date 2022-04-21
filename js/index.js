$(document).ready(function() {
    var i = 1; // Khởi tạo số thứ1
    $("#btn2").click(function() {
        $("#myModal").modal();
    })

    function kiemTraTen(){
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == ""){
            $("#tbName").html("Không để trống");
            return false;
        }
        if(!mauKT.test($("#Name").val())){
            $("#tbName").html("Mỗi kí tự đầu viết hoa không sử dụng số");
            return false;
        }
        $("tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);

    function kiemTraSoAo(){
       
        var mauKT = /^\d*$/;
        if ($("#Ao").val() == ""){
            $("#tbAo").html("Không để trống");
            return false;
        }
        if(!mauKT.test($("#Ao").val())){
            $("#tbAo").html("dùng từ 1 đến 100");
            return true;
        }else{
            var soAo = $("#Ao").val();
            if (soAo < 1 || soAo >100){
                $("#tbAo").html("từ 1 đến 100");
            }else{
                $("#tbName").html("*");
                return true;
            }
        }
    }
    $("#Ao").blur(kiemTraSoAo);


    function kiemTraDiaChi(){
       
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#DC").val() == ""){
            $("#tbDc").html("Không để trống");
            return false;
        }
        if(!mauKT.test($("#DC").val())){
            $("#tbDc").html("Mỗi kí tự đầu viết hoa, không sử dụng số");
            return true;
        }
        $("#tbDc").html("*");
        return true;
    }
     $("#DC").blur(kiemTraDiaChi);


    function kiemTraNTT(){

        if ($("#NTT").val() == ""){
            $("#tbDc").html("Không để trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate()+7);
        if(today>ntt){
            $("#tbNTT").html("Phải sau ngắt hiện tại 7 ngày");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
     $("#NTT").blur(kiemTraNTT);

     function kiemTraSDT(){
        
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val() == ""){
            $("#tbSDT").html("Không để trống");
            return false;
        }
        if(!mauKT.test($("#SDT").val())){
            $("#tbSDT").html("Theo dạng 0xxx-xxx-xxx");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemtraSDT);

    $("#Save").click(function(){
        if(kiemTraTen() == true && kiemTraSoAo() == true && kiemTraSDT() == true && kiemTraNTT() == true && kiemTraDiaChi() == true){
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#Ao").val() + "</th>";
            row += "<th>" + $("#DC").val() + "</th>";
            row += "<th>" + $("#NTT").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
         }
    })
   

})