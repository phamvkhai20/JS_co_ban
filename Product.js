var ListProduct=[]
function AddProduct(){
    var tenSp=document.querySelector('#tenSP').value;
    var dongia=document.querySelector('#donGia').value;
    var soLuong=document.querySelector('#soLuong').value;

    var product={
        tenSP:tenSp,
        donGia:dongia,
        soLuong:soLuong
    }
    ListProduct.push(product)
    RederProduct(ListProduct)
}
function RederProduct(ListProduct){
    var tongTien=document.querySelector("#tongTien");
    var BodyTable=document.querySelector("#BodyTable");
    var tongtien=0
    const renderP=ListProduct.map((product,index)=>{
    tongtien+=(Number(product.donGia)*Number(product.soLuong))
    return `<tr>
    <td><input type="checkbox" name="type" value="${index}" /></td>
    <th scope="row">${index}</th>
        <td>${product.tenSP}</td>
        <td><input onchange="handleChangeGia(${index})" id="gia${index}" type="number"  value=${product.donGia} /></td>
        <td><input  onchange="handleChangeSoLuong(${index})" id="soluong${index}" type="number" value=${product.soLuong} /></td>
        <td id="tongTien${index}">${product.soLuong*product.donGia}</td>
        <input id="tongtienTemp${index}" type="hidden" value=${Number(product.donGia)*Number(product.soLuong)} />
    </tr>`}
    )
    var tongTienIp=document.querySelector("#tongtienIP");
    tongTienIp.value=tongtien;
    tongTien.innerHTML=tongtien
    BodyTable.innerHTML=renderP
}
function handleChangeGia(index){
    console.log(index)
    var tongTienIp=document.querySelector("#tongtienIP").value;
    var tongTienSP=document.querySelector(`#tongtienTemp${index}`).value;
    var gia=document.querySelector(`#gia${index}`).value;
    var soluong=document.querySelector(`#soluong${index}`).value;
    var tongTiens=document.querySelector(`#tongTien${index}`);

    ListProduct.filter((p,el)=>el!==index);
    
    var tongTien=document.querySelector("#tongTien");
    tongtienSP=Number(gia)*Number(soluong);
    tongTiens.innerHTML=tongtienSP
    tongtienChange=tongTienIp-tongTienSP+(gia*soluong)
    tongTien.innerHTML=tongtienChange;
}    
function handleChangeSoLuong(index){
    console.log(index)
    var tongTienIp=document.querySelector("#tongtienIP").value;
    var tongTienSP=document.querySelector(`#tongtienTemp${index}`).value;
    var gia=document.querySelector(`#gia${index}`).value;
    var soluong=document.querySelector(`#soluong${index}`).value;
    var tongTiens=document.querySelector(`#tongTien${index}`);

    ListProduct.filter((p,el)=>el!==index);
    
    var tongTien=document.querySelector("#tongTien");
    tongtienSP=Number(gia)*Number(soluong);
    tongTiens.innerHTML=tongtienSP
    tongtienChange=tongTienIp-tongTienSP+(gia*soluong)
    tongTien.innerHTML=tongtienChange;
    
}
var values = [];
$('#BodyTable').change(function() {
    {
      $('#BodyTable :checked').each(function() {
        values.push(Number($(this).val()));
      });
    }
});

function deleteList(){
    console.log(ListProduct,values)
    var listNew= ListProduct.filter(
        function(e,index) {
          return this.indexOf(index) < 0;
        },
        values
    );
    RederProduct(listNew)
    console.log(listNew)
}