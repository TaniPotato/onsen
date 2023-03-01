//CSVファイルを読み込む関数getCSV()の定義
function getCSV(){
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "data/onsen_list_utf.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行
	
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function(){
	convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
    }
}
 
// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
    var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\r\n"); // 改行を区切り文字として行を要素とした配列を生成
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
        //温泉クラスの初期設定
        onsen_list[i]=new onsen_class(result[i][0],result[i][1],result[i][2],result[i][3],result[i][4]);
    }
}

//温泉に関する情報を格納するクラス
var onsen_class=class{
  //コンストラクタ
  constructor(name,image,place,photograper,url){
    this.name=name;//温泉名
    this.image=image;//画像名
    this.place=place;//県
    this.photograper=photograper;//撮影者
    this.url=url;//撮影者のリンク
  }
}
//ストップボタンをクリックした時
function roulette_stop(){
  //document.getElementById("").play();
}
//スタートボタンをクリックした時
function Button_start_Click(){
  //document.getElementById("sound_roulette").play();
  //document.getElementById("sound_roulette").volume=0;
  button_start.style.visibility="hidden";
  document.getElementById("photo_by").style.visibility="visible";
  document.getElementById("sound_nda").play();

    //ダラララララ１
  var roulette1 = setInterval(function(){
      document.getElementById("sound_ba").play();
      random = Math.floor(Math.random() * (onsen_list.length-1.0));
      //画像，県名，温泉地名，撮影者（撮影者のリンク）
      new_onsen_image.src='img/'+onsen_list[random].image+'.jpg';
      new_onsen_place.innerText=onsen_list[random].place;
      new_onsen_name.innerText=onsen_list[random].name+"温泉";
      new_onsen_photograper.innerText=onsen_list[random].photograper;
      new_onsen_photograper.setAttribute('href',onsen_list[random].url);
  }, 100)
  //一定時間でダラララララ１を止める
    setTimeout(function(){
    clearInterval(roulette1);
    //ダラララララ２
    var roulette2 = setInterval(function(){
        document.getElementById("sound_ba").play();
        random = Math.floor(Math.random() * (onsen_list.length-1.0));
        //画像，県名，温泉地名，撮影者（撮影者のリンク）
        new_onsen_image.src='img/'+onsen_list[random].image+'.jpg';
        new_onsen_place.innerText=onsen_list[random].place;
        new_onsen_name.innerText=onsen_list[random].name+"温泉";
        new_onsen_photograper.innerText=onsen_list[random].photograper;
        new_onsen_photograper.setAttribute('href',onsen_list[random].url);
    }, 800)
      //一定時間でダラララララ２を止める
      setTimeout(function(){
          clearInterval(roulette2);
          //document.getElementById("sound_roulette").pause();
          //document.getElementById("sound_roulette").currentTime=0;
          //document.getElementById("sound_roulette2").volume=0;
          document.getElementById("sound_roulette2").play();
          button_start.style.visibility="visible";
          roulette_stop();
      }, 3000);
  }, 5000);
}

function Button_test_Click(){
  var i=0;
  var roulette = setInterval(function(){
    new_onsen_image.src='img/'+onsen_list[i].image+'.jpg';
    new_onsen_place.innerText=onsen_list[i].place;
    new_onsen_name.innerText=onsen_list[i].name+"温泉";
    new_onsen_photograper.innerText=onsen_list[i].photograper;
    new_onsen_photograper.setAttribute('href',onsen_list[i].url);
    console.log(new_onsen_name.innerText);
    i++;
  }, 10)

  setTimeout(function(){
    clearInterval(roulette);
  },1000)
}
//htmlとの紐づけ
let button_start= document.getElementById('button_start');
button_start.onclick = Button_start_Click;

let button_test=document.getElementById('button_test');
button_test.onclick=Button_test_Click;

let new_onsen_name=document.getElementById('onsen_name');
let new_onsen_place=document.getElementById('onsen_place');
let new_onsen_photograper=document.getElementById('onsen_photograper');
let new_onsen_image=document.getElementById('onsen_image');

//温泉クラスの宣言
var onsen_list=[];
var onsen_num=90;

getCSV(); //最初に実行される

