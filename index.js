var string=`<style>
/* 开始啦开始啦！首先这是多啦A梦的头 */
.duola .head{
  border: 2px solid #555;
  width: 350px;
  height: 350px;
  position: relative;
  top:50px;
  left:50%;
  margin-left: -160px;
  border-radius: 50%;
  /* background: #07bbee; */
  background: -webkit-radial-gradient(right top,
    #fff 10%,
    #07bbee 20%, 
    #10a6ce 75%,
    #000 100%);
}
/* 这是多啦A梦的脸噢 */
.duola .face{
  width: 306px;
  height: 235px;
  position: absolute;
  top: 79px;
  left:50%;
  margin-left: -153px;
  border-radius: 150px;
  background-color: #fff;
}

/* 眼睛开始喽 */
.eye{
  width: 76px;
  height: 86px;
  background: #fff;
  border: 2px solid #000;
  border-radius: 35px;
  position: absolute;
  top: 51px;
  left:50%;
}
.eye.eye-left{
  margin-left: -76px;
}

/* 眼珠开始哈哈哈哈 */
.yanzhu{
    width: 14px;
    height: 14px;
    background: #000;
    border-radius: 7px;
    position: absolute;
    top:50%;
    animation: eyemove 2s linear infinite;
}
.yanzhu.yanzhu-left{
  right:5px;
}
.yanzhu.yanzhu-right{
  left:5px;
}

/* 鼻子开始 */
.nose{
  width: 35px;
    height: 35px;
    background: #c93300;
    position: absolute;
    top: 123px;
    left: 155px;
    border-radius: 15px;
    border: 2px solid #000;
}
.nose::before{
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  box-shadow: 19px 8px 5px #fff;
}

/* 鼻子竖线开始 */
.top-mouth{
  width: 3px;
    height: 125px;
    background: #333;
    position: absolute;
    top: 157px;
    left: 50%;
    margin-left: -1.5px;
    z-index: 3;
}
/* 嘴巴开始了 */
.bottom-mouth{
    width: 200px;
    height: 400px;
    border-bottom: 3px solid #333;
    border-radius: 120px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: -117px;
}
.bottom-mouth-left,.bottom-mouth-right{
  width: 8px;
  height: 50px;
  position: absolute;
  top: 168px;
  background-color: #ffffff;
}
.bottom-mouth-left{
  left: 73px;
}
.bottom-mouth-right{
  left: 265px;
}

/* 胡子开始呀*/
/* 这是左边胡子 */
.huzi div{
  width: 80px;
  height: 2px;
  background: #333;
  position: absolute;
  margin-bottom: 10px;
}
.huzi-left div{
 left:60px;
}
.huzi-left-top{
  top: 158px;
  transform: rotate(15deg);
}
.huzi-left-middle{
  top: 178px;
}
.huzi-left-bottom{
  top: 198px;
  transform: rotate(-15deg);
}
/* 右边胡子开始啦 */
.huzi-right div{
  right:60px;
 }
.huzi-right-top{
  top: 158px;
  transform: rotate(-15deg);
}
.huzi-right-middle{
  top: 178px;
}
.huzi-right-bottom{
  top: 198px;
  transform: rotate(15deg);
}

/* 铃铛绳子 */
.bell-rope{
    width: 230px;
    height: 30px;
    background: #c40;
    background: -webkit-gradient(linear,left top ,left bottom,from(#c40),to(#800400));
    border-radius: 10px;
    border: 2px solid #000;
    position: absolute;
    top:367px;
    left:50%;
    margin-left: 150px;
}
/* 铃铛正式开始 */
.bell{
    width: 46px;
    height: 46px;
    overflow: hidden;
    border: 2px solid #000;
    border-radius: 50px;
    background: #f9f12a;
    background: -webkit-gradient(linear,left top ,left bottom,from(#f9f12a),color-stop(0.5,#e9e11a),to(#a9a100));
    position: absolute;
    top:10px;
    left:50%;
    margin-left: -23px;
}
  .bell_line{ 
    width: 46px;
    height: 8px;
    background: #f9f12a;
    position: absolute;
    border: 2px solid #333;
    border-radius: 3px 3px 0 0;
    position: absolute;
    top: 10px;
    left:-2px;
}
.bell_circle {
  width: 12px;
  height: 10px;
  background: #000;
  border-radius: 5px;
  position: absolute;
  top: 22px;
  left: 50%;
  margin-left: -6px;
}
 .bell_under {
  width: 3px;
  height: 15px;
  background: #000;
  position: absolute;
  top: 27px;
  left: 50%;
  margin-left: -1.5px;
}
</style>
`
let n=0;
let time=300
// 封装定时器
function x(){
  if(n>string.length){
    clearInterval(id)
    return
  }
  document.querySelector('#demo1').innerText=string.substr(0,n)
  document.querySelector('#demo2').innerHTML=string.substr(0,n)
  n+=1;
  document.querySelector('#demo1').scrollTop=document.querySelector('#demo1').scrollHeight  
}
// 1开始输入的定时器
let id=setInterval(()=>{
  x()}
,time)

// 2设置暂停按钮，就是把id定时器砸掉
document.querySelector('#btn-pause').onclick=function(){
  clearInterval(id)
}

// 3.设置播放的定时器,就是重新开一个id定时器,必须是id，因为暂停的是id,重新开始不是id 德华，无法再次暂停
document.querySelector('#btn-play').onclick=function(){
  id=setInterval(()=>{
    x()
  },time)
}

// 4.设置慢速,记得把之前的定时器砸掉,重点重点！！！！！！！！
document.querySelector('#btn-slow').onclick=function(){
  time=700
  clearInterval(id)
  id=setInterval(()=>{
    x()
  },time)
}

// 5.设置中速,记得把之前的定时器砸掉,重点重点！！！！！！！！
document.querySelector('#btn-normal').onclick=function(){
  time=300
  clearInterval(id)
  id=setInterval(()=>{
    x()
  },time)
}

// 6.设置快速,记得把之前的定时器砸掉,重点重点！！！！！！！！
document.querySelector('#btn-fast').onclick=function(){
  time=0
  clearInterval(id)
  id=setInterval(()=>{
    x()
  },time)
}