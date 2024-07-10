var poem="似醒似睡缓缓的柔光里似悠悠醒自千年的大寐一只瓜从从容容在成熟一只苦瓜不再是涩苦日磨月磋琢出深孕的清莹看茎须缭绕叶掌抚抱哪一年的丰收像一口要吸尽古中国喂了又喂的乳浆完满的圆腻啊酣然而饱那触角不断向外膨胀充实每一粒酪白的葡萄直到瓜尖仍翘着当日的新鲜茫茫九州只缩成一张舆图小时候不知道将它叠起一任推开那无穷无尽硕大似记忆母亲她的胸脯你便向那片肥沃匍匐用蒂用根索她的恩液苦心的悲慈苦苦哺出不幸呢还是大幸这婴孩钟整个大陆的爱在一只苦瓜皮鞋踩过马蹄踏过重吨战车的履带碾过一丝伤痕也不曾留下只留下隔玻璃这奇迹难信犹带着后土依依的祝福在时光以外奇异的光中熟着一个自足的宇宙饱满而不虞腐烂一只仙果不产生在仙山产在人间久朽了你的前身唉久朽为你换胎的那手那巧腕千眄万睐巧将你引渡笑对灵魂在白玉里流转一首歌咏生命曾经是瓜而苦被永恒引渡成果而甘";
setup = _ => {
    resetBG();
    colorMode(HSB)
    rectMode(CENTER)
}

resetBG = _ => {
    var myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("backdrop");
    // myCanvas.style("visibility", "visible;")
    w = min(width, height)
    h = w / 2
    thisHue = random(360);
    background(0);
    frameRate(20);
    noStroke()
}

draw = _ => {
    translate(width / 2, height / 2)
    background(0)
    DrawRect(w, 0, 0, thisHue)
}

DrawRect = (size, x, y) => {
    if (size / h < abs(noise((mouseX / 5 - x) / h + 1, (mouseY / 5 - y) / h + frameCount / 1000, mag(x, y) / w) - .5)) {
        fill((thisHue+size*3)%360, size * 5, 50, 2-size* 0.06) 
        textSize(size*1.5);
        text(poem.charAt((x+(y+h)*(w/size))%poem.length),x,y);
        // rect(x, y, size, size)
    } else {
        size = size / 2
        if (size > 3) {
            DrawRect(size, x - size, y - size)
            DrawRect(size, x + size, y - size)
            DrawRect(size, x - size, y + size)
            DrawRect(size, x + size, y + size)
        }
    }
}

$(window).resize(function () {
    resetBG();
});