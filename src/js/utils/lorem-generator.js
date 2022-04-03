const //Vocabulary used to generate random text, they are top 1000 frequently used Chinese characters.
  WORDS =
    '的一，是在不了 有和人這中大為上個國我以要 他時來用們生到作地於出就分對成會可主發年動同工也能下過子說産種面而方後多定行學法所民得經十三之進著等部度家電力裏如水化高自二理起小物現實加量 都兩體制機當使點從業本去把性好應開它合還因由其些 然 前外天政四日那社義事平形相全表間樣與關各重新線內數正心反你明看原又麼利比或但質氣第向道命此變條只沒結解問意建月公無系軍很情者最立代想已通 並提直題黨程展五果 料象員革位入常文總次品式活設及管特件長求老頭基資邊流路 級少圖山統接知較長將組見計別她手角期根論運農指幾九區強放決西被乾做必戰先回則任取據處隊南給色光門即保治北造百規熱領 七海地口東導器壓志世金增爭濟階油思術極交受聯 什認六共權收 證改清己美再采轉更 單風切打白教速花帶安場身車例真務具萬每目至達走積示議聲報鬥完類八離華名確才科張信馬節話米整空元況今集溫傳土許步群廣石記需段研界拉林律叫且究觀越織裝影算低持音衆書布複容兒須際商非驗連斷深難近礦千周委素技備半辦青省列習響約支般史感勞便團往酸曆市克何除消構府稱太准精值號率族維劃 選標寫存候毛親快效斯。院查江型眼王按格養易置派層片始卻專狀育廠京識適屬圓包火住調滿縣局照參紅細引聽該鐵價嚴首底液官德調隨病蘇失爾死講配女黃推顯談罪神藝呢席含企望密批營項防舉球英氧勢告李台落木幫輪 破亞師圍注遠 字材排供 河態封另施減樹溶怎止案言士均武固葉魚波“視僅費緊愛左章早朝害續輕服試食充兵源判護司足某練差致板田降黑犯負擊範繼興似余堅曲輸修的故城夫夠送笑船占右 財吃富春職覺漢畫功巴跟雖雜飛檢吸助升陽互初創抗考投壞策古徑 換未跑留鋼曾端責站簡 述錢副盡帝射草” 沖承獨令限阿宣環雙請超微讓控州良軸找否紀益依優頂礎載倒房突坐粉敵略客袁冷勝絕析塊劑測絲協重訴念陳仍羅鹽友洋錯苦夜刑 移頻逐靠混母短皮終聚汽村雲哪既距衛停烈央察燒迅行境若 印洲刻括激孔搞甚室待 核校散侵吧甲遊久菜味舊模湖貨損預阻毫普穩乙媽植息擴銀語揮酒守拿序紙醫缺雨嗎針劉啊急唱誤訓願審附獲茶鮮糧斤孩脫硫肥善龍演父漸血歡械掌歌沙著剛攻謂盾討晚粒亂燃矛乎殺 藥甯魯貴鍾煤讀班伯香介迫句豐培握蘭擔弦蛋沈假穿執答樂誰順煙縮征臉喜松腳困異免背星福買染井概慢怕磁倍祖皇促靜補評翻肉踐尼衣寬揚棉希傷操垂秋宜氫套筆督振架亮末憲慶編牛觸映 雷銷詩座居抓裂胞呼娘景威綠晶厚盟 衡雞孫延危膠還屋鄉臨陸顧掉呀燈歲措束耐劇玉趙跳哥季課凱胡額款紹卷齊偉蒸殖永宗苗川妒岩弱零楊奏沿露杆探滑鎮飯濃航懷趕',
  //Punctuations used to generate random text
  PUNCTUATIONS = '，，，，。',
  //Vocabulary size
  vocabSize = WORDS.length,
  //Punctuation size
  puncSize = PUNCTUATIONS.length,
  //min length between two punctuations
  minlengthToNextPunc = 10,
  //max length between two punctuations
  maxlengthToNextPunc = 20;

export const lorem = function (min, max, options) {
  var //options
    options = options || {},
    //whether include punctuations in generated text
    usePunc = typeof options.usePunc === 'undefined' ? true : options.usePunc,
    //array to store random text
    str = [],
    //default length is 10
    length = Math.floor(Math.random() * (max - min + 1)) + min || 10,
    //interation chosen to generate each character
    i = 0,
    //chosen charactor index in the vocabulary
    chosen,
    //counter used to count characters after last punctuation
    puncCounter = 0,
    //text length from current punctuation to next punctuation, a random number between maxlengthToNextPunc and minlengthToNextPunc
    lengthToNextPunc =
      Math.floor(Math.random() * (maxlengthToNextPunc - minlengthToNextPunc)) +
      minlengthToNextPunc;

  while (i < length) {
    //choose one character randomly
    chosen = Math.floor(Math.random() * vocabSize);

    //punctuation or normal character ?
    if (
      usePunc &&
      puncCounter == lengthToNextPunc &&
      minlengthToNextPunc < length - i
    ) {
      //push a randowm selected punctuation
      str.push(PUNCTUATIONS.charAt(Math.floor(Math.random() * puncSize)));

      //pick length to next punctuation randomly
      lengthToNextPunc =
        Math.floor(
          Math.random() * (maxlengthToNextPunc - minlengthToNextPunc)
        ) + minlengthToNextPunc;

      //reset counter for next punctuation
      puncCounter = 0;
    } else {
      //normal character
      str.push(WORDS.charAt(chosen));
    }

    //add counter
    puncCounter++;
    i++;
  }

  //ends random text with 。
  if (usePunc) {
    str.push('。');
  }
  return str.join('');
};
