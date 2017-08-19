
function loadDoc(cFunction) {
    var xhttp=new XMLHttpRequest();
    xhttp.open('GET','guitardata.txt',true);
    xhttp.send();
    xhttp.onreadystatechange= function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            cFunction(this);
        }
    }
}

var cn=0;
function prevImg(xhttp) {
    cn-=1;
    var resp = xhttp.responseText;
    var data = JSON.parse(resp);
    if(cn<0){
     cn=data.allProducts.length-1;
    }
    console.log(cn);
    document.getElementById("banner").src = data.allProducts[cn].image_path;
    document.getElementById("prodInfo").innerHTML=data.allProducts[cn].product_description;
    document.getElementById("shipInfo").innerHTML=data.allProducts[cn].shipping_details;
    document.getElementById("custReview").innerHTML=data.allProducts[cn].customer_reviews;

}

function nextImg(xhttp) {
    cn+=1;
    var resp = xhttp.responseText;
    var data = JSON.parse(resp);
    if (cn > data.allProducts.length-1) {
        cn = 0;
    }
    console.log(cn);
    document.getElementById("banner").src = data.allProducts[cn].image_path;
    document.getElementById("prodInfo").innerHTML=data.allProducts[cn].product_description;
    document.getElementById("shipInfo").innerHTML=data.allProducts[cn].shipping_details;
    document.getElementById("custReview").innerHTML=data.allProducts[cn].customer_reviews;
}

function dispData() {
    var fnm=document.getElementById("inputFname");
    var lnm=document.getElementById("inputLname");
    var cno=document.getElementById("inputCno");
    var eml=document.getElementById("inputEmail");

    document.getElementById("fname").innerHTML=fnm.value;
    document.getElementById("lname").innerHTML=lnm.value;
    document.getElementById("cno").innerHTML=cno.value;
    document.getElementById("emailid").innerHTML=eml.value;
}

function sendData() {
    window.location.href= "Page2.html?"+cn;
}

var str=window.location.href;
var val=str.split("?");
var cn1=val[1];
function receiveData(xhttp) {
    var resp = xhttp.responseText;
    var data = JSON.parse(resp);
    console.log(cn1);
    document.getElementById("guitarImage").src=data.allProducts[cn1].image_path;
    document.getElementById("prod").innerHTML=data.allProducts[cn1].product_description;
    document.getElementById("ship").innerHTML=data.allProducts[cn1].shipping_details;
    document.getElementById("cust").innerHTML=data.allProducts[cn1].customer_reviews;
}

function sendData1() {
    var fnm=document.getElementById("inputFname");
    var lnm=document.getElementById("inputLname");
    var cno=document.getElementById("inputCno");
    var eml=document.getElementById("inputEmail");
    if(fnm.value=="" || lnm.value=="" || cno.value=="" || eml.value=="")
    {
        alert("Please Enter Required fields");
    }
    else
    window.location.href= "Page3.html?"+cn1+ "?" + fnm.value + "?" + lnm.value + "?" + cno.value;
}

var str1=window.location.href;
var val1=str.split("?");
var cn2=val[1];
var nm=val[2] + " " + val[3];
var num=val[4];

function receiveData1(xhttp) {
    var resp = xhttp.responseText;
    var data = JSON.parse(resp);
    console.log(cn2);
    document.getElementById("banner2").src=data.allProducts[cn2].image_path;
    document.getElementById("data1").innerHTML=nm;
    document.getElementById("data2").innerHTML=num;
    document.getElementById("data3").innerHTML=data.allProducts[cn2].product_description;
    document.getElementById("data4").innerHTML=data.allProducts[cn2].shipping_details;
}


