import { SIZE_CANVAS, CASTLE_IMG } from "../const/const.js";
import { Bomb } from "./Bomb.js";
import { Foe } from "./Foe.js";
import { Perso } from "./Perso.js";

export class Tray {

    canvas = null;
    image = null;
    bomn = null;

    constructor() {
        this.createCanva();
    }

    createCanva() {
        this.canvas = document.createElement('canvas');
        document.body.append(this.canvas);

        this.image = new Image();
        this.image.src = CASTLE_IMG;
        this.canvas.height = this.canvas.width = SIZE_CANVAS;
        this.context = this.canvas.getContext('2d');
        this.initTray();
        this.image.onload = () => this.drawTrayContains();
        this.drawTrayContains();

/*         setInterval(() => {
            this.drawTrayContains();
            this.hero.drawImg();
            this.bombs.forEach(_bomb => _bomb.drawBomb());
        }, 50);

        setInterval(() => {
            this.hero.moveImg();
        }, 50); */
    }

    initTray() {
        this.hero = new Perso(this.context);
        this.bombs = [
            new Bomb(this.context, 50, 100),
            new Bomb(this.context, 200, 100),
            new Bomb(this.context, 500, 256),
            new Bomb(this.context, 365, 100)];

        this.foes = [
            new Foe(this.context, 0, 0),
            new Foe(this.context, 500, 500),
            new Foe(this.context, 200, 0)
        ];
    }


    drawTrayContains() {
        this.context.drawImage(this.image, 0, 0, SIZE_CANVAS, SIZE_CANVAS);
    }

    clearTray() {
        this.context.clearRect(0, 0, SIZE_CANVAS, SIZE_CANVAS);
    }

}