let fruitGallery = [
  {
    id: "cont1",
    bigImage: "./assets/1.1.jpeg",
    sTopImg: "./assets/1.2.jpeg",
    sBotImg: "./assets/1.3.jpeg",
    engTitle: "APPLE LEAF - APPLE FRUIT",
    hinTitle: "सेव"
  },
  {
    id: "cont2",
    bigImage: "./assets/2.1.jpeg",
    sTopImg: "./assets/2.2.jpeg",
    sBotImg: "./assets/2.3.jpeg",
    engTitle: "FIG LEAF - FIG FRUIT",
    hinTitle: "अंजीर"
  },
  {
    id: "cont3",
    bigImage: "./assets/3.1.jpeg",
    sTopImg: "./assets/3.2.jpeg",
    sBotImg: "./assets/3.3.jpeg",
    engTitle: "GRAPES LEAF - GRAPES FRUIT",
    hinTitle: "अंगूर"
  },
  {
    id: "cont4",
    bigImage: "./assets/4.1.jpeg",
    sTopImg: "./assets/4.2.jpeg",
    sBotImg: "./assets/4.3.jpeg",
    engTitle: "CASHEW LEAVES - CASHEW NUT",
    hinTitle: "काजू"
  },
  {
    id: "cont5",
    bigImage: "./assets/5.1.jpeg",
    sTopImg: "./assets/5.2.jpeg",
    sBotImg: "./assets/5.3.jpeg",
    engTitle: "MANGO LEAVES - MANGO FRUIT",
    hinTitle: "आम"
  },
  {
    id: "cont6",
    bigImage: "./assets/6.1.jpeg",
    sTopImg: "./assets/6.2.jpeg",
    sBotImg: "./assets/6.3.jpeg",
    engTitle: "BANANA LEAVES - BANANA FRUIT",
    hinTitle: "केला"
  },
  {
    id: "cont7",
    bigImage: "./assets/7.1.jpeg",
    sTopImg: "./assets/7.2.jpeg",
    sBotImg: "./assets/7.3.jpeg",
    engTitle: "STRAWBERRY LEAVES - STRAWBERRY FRUIT",
    hinTitle: "स्ट्रॉबेरी"
  },
  {
    id: "cont8",
    bigImage: "./assets/8.1.jpeg",
    sTopImg: "./assets/8.2.jpeg",
    sBotImg: "./assets/8.3.jpeg",
    engTitle: "COCONUT LEAVES - COCONUT FRUIT",
    hinTitle: "नारियल"
  },
  {
    id: "cont9",
    bigImage: "./assets/9.1.jpeg",
    sTopImg: "./assets/9.2.jpeg",
    sBotImg: "./assets/9.3.jpeg",
    engTitle: "POMEGRANATE LEAVES - POMEGRANATE FRUIT",
    hinTitle: "अनार"
  },
  {
    id: "cont10",
    bigImage: "./assets/10.1.jpeg",
    sTopImg: "./assets/10.2.jpeg",
    sBotImg: "./assets/10.3.jpeg",
    engTitle: "CHIKOO LEAVES - CHIKOO FRUIT",
    hinTitle: "चीकू"
  },
  {
    id: "cont11",
    bigImage: "./assets/11.1.jpeg",
    sTopImg: "./assets/11.2.jpeg",
    sBotImg: "./assets/11.3.jpeg",
    engTitle: "MULBERRY LEAVES - MULBERRY FRUIT",
    hinTitle: "शहतूत"
  },
  {
    id: "cont12",
    bigImage: "./assets/12.1.jpeg",
    sTopImg: "./assets/12.2.jpeg",
    sBotImg: "./assets/12.3.jpeg",
    engTitle: "CUSTARD APPLE LEAVES - CUSTARD APPLE FRUIT",
    hinTitle: "सीताफल"
  },
  {
    id: "cont13",
    bigImage: "./assets/13.1.jpeg",
    sTopImg: "./assets/13.2.jpeg",
    sBotImg: "./assets/13.3.jpeg",
    engTitle: "JACKFRUIT LEAVES - JACKFRUIT FRUIT",
    hinTitle: "कटहल"
  },
  {
    id: "cont14",
    bigImage: "./assets/14.1.jpeg",
    sTopImg: "./assets/14.2.jpeg",
    sBotImg: "./assets/14.3.jpeg",
    engTitle: "JUJUBE LEAVES - JUJUBE FRUIT",
    hinTitle: "बेर"
  },
  {
    id: "cont15",
    bigImage: "./assets/15.1.jpeg",
    sTopImg: "./assets/15.2.jpeg",
    sBotImg: "./assets/15.3.jpeg",
    engTitle: "WATERMELON LEAVES - WATERMELON FRUIT",
    hinTitle: "तरबूज"
  }
]

let chart = document.getElementById("chart");

let generateChart = () => {

    return (chart.innerHTML = fruitGallery.map((x) => {
        return `
    <div class="box">
        <div class="imagediv">
          <img class="firstbigpic" src="${x.bigImage}" alt="" />
          <img class="smallpic" src="${x.sTopImg}" alt="" />
          <img class="smallpic" src="${x.sBotImg}" alt="" />
        </div>
        <p class="firstp">
          <span> ${x.engTitle} </span>
          <span class="hindi">${x.hinTitle}</span>
        </p>
      </div>

    
    `
})

.join(""));
};



generateChart();