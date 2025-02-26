import Animation    from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/source/animations/Animation.js";
import Board        from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/source/board/Board.js";

// Utils
import Utils        from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/utils%20(DO%20NOT%20RUN)/Utils.js";



/**
 * Pacman Fruit Score Animation
 * @extends {Animation}
 */
export default class FruitScoreAnimation extends Animation {

    /**
     * Pacman Score Animation constructor
     * @param {Board}  board
     * @param {String} text
     * @param {{x: Number, y: Number}} pos
     */
    constructor(board, text, pos) {
        super(board);

        this.text       = text;
        this.pos        = pos;
        this.blocksGame = true;
        this.endTime    = 2400;
    }



    /**
     * Does the Fruit Score animation
     * @returns {Void}
     */
    animate() {
        let color = "rgb(255, 184, 255)";
        if (this.time > 200 && this.time < 2400) {
            const alpha = this.time < 1000 ? 1 : 1 - Math.round((this.time - 1000) * 1.25) / 2000;
            color = Utils.rgba(255, 184, 255, alpha);
        }

        this.canvas.clear();
        this.canvas.drawText({
            size  : 1,
            color : color,
            text  : this.text,
            pos   : {
                x : this.pos.x + 0.5,
                y : this.pos.y + 0.5,
            },
            align : null,
            alpha : null,
        });

        if (this.time > 200) {
            this.blocksGame = false;
        }
    }
}
