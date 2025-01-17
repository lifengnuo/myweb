     //获取图片地址（自行更改）
let imgArr = ['images/lb1.jpg', 'images/lb2.jpg', 'images/lb3.jpg'];

//有轮播效果，并且能选择到某张图片
for (let index in imgArr) {
    let doteEle = document.getElementsByClassName("dote")[0];
    doteEle.innerHTML += `<span οnclick="lun(${index})"></span>`;//创建圆点
}

let j;//声明j（必须在轮播函数外声明，才能使用停止时间函数）
//轮播函数，要传参
function lun(i) {
    let spEle = document.getElementsByClassName("dote")[0].children; //获取圆点
    //判断传参的i，如果是next，即下一张
    if (i == "next") {
        for (let index in imgArr) { //遍历所有的圆点（遍历圆点相当于在遍历图片）
            if (spEle[imgArr.length - 1].style.backgroundColor == "red") { //如果最后一个圆点的背景色为白色，即当前展示的图片是最后一张                
                i = 0; //则让i=0，即下标变为了0，然后从49行开始执行，就从第一张开始展示
            }
            else if (spEle[index].style.backgroundColor == "red") { //如果下标为index的圆点背景色为白色，即当前展示的图片是下标为index的图片
                //则让i=index+1，但index是字符串，所有要先-0，让它的数据类型隐式转换为number；
                //即下标变成了当前图片的下一张，然后从第49行开始执行
                i = index - 0 + 1;
            }
        }
    }
    //判断传参的i，如果是previous，即上一张，同下一张的写法
    if (i == "previous") {
        for (let index in imgArr) {
            if (spEle[0].style.backgroundColor == "red") {
                i = imgArr.length - 1;
            }
            else if (spEle[index].style.backgroundColor == "red") {
                i = index - 1;
            }
        }
    }
    for (let index in imgArr) { //先遍历所有点，让所有点的背景颜色变成默认的
        spEle[index].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
    clearInterval(j); //每次调用前先停止时间函数
    
    //展示下标为i的图片（必须在进行时间函数前先展示传参进来的下标为i的图片，
    //因为时间函数是先等一个时间再进行执行函数，就会出现第一张有多的时间展示）
    document.getElementsByClassName("box2")[0].src = `${imgArr[i]}`;

	   
    spEle[i].style.backgroundColor = "red"; //让下标为i的点变颜色，即让它选中（同61行原因）
    //进行时间函数，从选中的点的下一张开始
    j = setInterval(
        function () {
            for (let index in imgArr) { //先遍历所有点，让所有点的背景颜色变成默认的
                spEle[index].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            }
            i++; //从选中的点的下一张开始进行时间函数，即下标加一
            i == imgArr.length ? i = 0 : ""; //如果下标等于图片数组的长度，就让下标等于0，即展示第一张
            document.getElementsByClassName("box2")[0].src = `${imgArr[i]}`; //变图片
			
            spEle[i].style.backgroundColor = "red"; //变点的颜色
        }, 2000
    )
}

lun(0); //打开网页就从下标为0的图片开始执行轮播函数

