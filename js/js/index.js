var phones = [{
    "id": "1",
    "img": "img/phone1.png",
    "title": "小米CC9",
    "price": "1799元起",
}, {
    "id": "2",
    "img": "img/phone2.png",
    "title": "小米CC9e ",
    "price": "1299元起",
}, {
    "id": "3",
    "img": "img/phone3.png",
    "title": "小米CC9美图定制版",
    "price": "2599元",
}, {
    "id": "4",
    "img": "img/phone4.png",
    "title": "小米9",
    "price": "￥2799元起",
}, {
    "id": "5",
    "img": "img/phone5.png",
    "title": "小米8 屏幕指纹版",
    "price": "1799元起",
}, {
    "id": "6",
    "img": "img/phone6.png",
    "title": "小米MIX3",
    "price": "2999元",
}];
var str = "";
for (var i = 0; i < phones.length; i++) {
    str += ` 
    <li>
    <a href = "##"><img src =${phones[i].img} ></a
    </li>
    <p>${phones[i].title}</p>
    <p>${phones[i].price}</p>
`
}
var cont = document.getElementById("cont");
console.log(cont);
cont.innerHTML = str;