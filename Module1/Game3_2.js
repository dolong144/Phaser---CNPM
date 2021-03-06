class Game3_2 extends SceneRoot1 {
  constructor() {
    super("Game3_2");
  }

  create() {
    this.name = "Game3_2";
    this.type = 2;
    this.notice = "notification2";
    this.textTitle = "Color the circles and hexagons";
    this.textTitleX = 405;
    this.nextScene = "RateScene";
    this.extraTypeShape = [Tri];
    this.numberOfBallLeft = 1;
    this.numberOfBallRight = 1;
    super.create();
  }
  addRequiredBrush() {
    this.requireBrush.push({
      hexColor: 0x66CC66,
      tintColor: 0x1b5E20,
      typeShape: Hex,
      colorRect: new Rect(this, module1Setting.brushX2[0] + 80, module1Setting.brushY, 230, 60),
      image: this.add.image(module1Setting.brushX2[0], module1Setting.brushY, "green"),
      text: this.add.text(module1Setting.brushX2[0] + 35, module1Setting.brushY - 20, "Hexagons", {
        fontFamily: font,
        fontSize: textNextToBrush.fontSize,
        color: textNextToBrush.color
      })
    }, {
      hexColor: 0x66CCFF,
      tintColor: 0x3498DB,
      typeShape: Cir,
      colorRect: new Rect(this, module1Setting.brushX2[1] + 80, module1Setting.brushY, 230, 60),
      image: this.add.image(module1Setting.brushX2[1], module1Setting.brushY, "blue"),
      text: this.add.text(module1Setting.brushX2[1] + 35, module1Setting.brushY - 20, "Circles", {
        fontFamily: font,
        fontSize: textNextToBrush.fontSize,
        color: textNextToBrush.color
      })
    });
    super.addRequiredBrush();
  }

  addExtraBrush() {

    this.extraBrush.push({
      hexColor: 0xFBC02D,
      tintColor: 0xFFD600,
      colorRect: new Rect(this, module1Setting.extraBrushX[0] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[0], module1Setting.brushY, "yellow")
    }, {
      hexColor: 0xBFC9CA,
      tintColor: 0xBA4A00,
      colorRect: new Rect(this, module1Setting.extraBrushX[1] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[1], module1Setting.brushY, "gray")
    }, {
      hexColor: 0xDC7633,
      tintColor: 0x00838F,
      colorRect: new Rect(this, module1Setting.extraBrushX[2] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[2], module1Setting.brushY, "brown")
    }, {
      hexColor: 0xFF1744,
      tintColor: 0xFF4081,
      colorRect: new Rect(this, module1Setting.extraBrushX[3] + 30, module1Setting.brushY, 120, 60),
      image: this.add.image(module1Setting.extraBrushX[3], module1Setting.brushY, "pink")
    });
    super.addExtraBrush();
  }

  addExtraImageInFrontOfShape() {
    this.extraImageInFrontOfShape.push(
      this.add.image(config.width / 2 - 220, config.height / 2 + 70, "leg"),
      this.add.image(config.width / 2 - 50, config.height / 2 - 160, "eye"),
      this.add.image(config.width / 2 + 110, config.height / 2 - 160, "eye"),
      this.add.image(config.width / 2 + 235, config.height / 2 - 150, "eye"),
      this.add.image(config.width / 2 + 370, config.height / 2 - 158, "eye")
    );
    super.addExtraImageInFrontOfShape();
  }
  addExtraImageBehindShape() {
    this.extraImageBehindShape.push(
      this.add.image(config.width / 2, config.height / 2, "background3_2"),
      this.add.image(config.width / 2 + 20, config.height / 2 - 110, "worm")
    );
    super.addExtraImageBehindShape();
  }

  addShapes() {
    this.shapes.push(
      //Chim mẹ
      new Hex(this, config.width / 2 - 220, config.height / 2 - 55, 100, 100), //0: Thân
      new Cir(this, config.width / 2 - 100, config.height / 2 - 160, 70, 70), //1: Đầu
      new Tri(this, config.width / 2 - 365, config.height / 2 - 107, 0, 130, 48, 0, 96, 130), //2: Đuôi
      new Hex(this, 300, config.height / 2 + 50, 55, 55), //3
      new Hex(this, 380, config.height / 2 + 100, 30, 30), //4
      new Tri(this, config.width / 2, config.height / 2 - 110, 0, 80, 32, 0, 64, 80), //5: Mỏ

      //Tổ rơm
      new Tri(this, config.width / 2 + 280, config.height / 2 - 33, 0, 400, 128, 0, 128, 300), //6
      new Tri(this, config.width / 2 + 400, config.height / 2 + 60, 0, 150, 64, 0, 64, 200), //7
      new Tri(this, config.width / 2 + 310, config.height / 2 + 80, 0, 180, 64, 0, 64, 150), //8

      //Chim non
      new Hex(this, config.width / 2 + 130, config.height / 2 - 71, 40, 40), //9: Thân
      new Cir(this, config.width / 2 + 130, config.height / 2 - 150, 42, 42), //10: Đầu
      new Tri(this, config.width / 2 + 84, config.height / 2 - 200, 0, 48, 20, 0, 40, 48), //11: Mỏ
      new Cir(this, config.width / 2 + 300, config.height / 2 - 71, 35, 35), //12: Thân
      new Cir(this, config.width / 2 + 260, config.height / 2 - 140, 42, 42), //13: Đầu
      new Tri(this, config.width / 2 + 210, config.height / 2 - 185, 0, 48, 20, 0, 40, 48), //14: Mỏ
      new Hex(this, config.width / 2 + 390, config.height / 2 - 69, 40, 40), //15: Thân
      new Cir(this, config.width / 2 + 390, config.height / 2 - 148, 42, 42), //16: Đầu
      new Tri(this, config.width / 2 + 344, config.height / 2 - 198, 0, 48, 20, 0, 40, 48) //17: Mỏ
    );
    this.shapes[0].angle = -10;
    this.shapes[2].angle = -70;
    this.shapes[3].angle = -10;
    this.shapes[4].angle = 10;
    this.shapes[5].angle = 117;
    this.shapes[6].angle = 73;
    this.shapes[7].angle = -90;
    this.shapes[8].angle = 70;
    this.shapes[11].angle = -40;
    this.shapes[14].angle = -45;
    this.shapes[17].angle = -40;
  }
}
