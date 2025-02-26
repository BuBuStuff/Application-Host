import Board        from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/pacman/source/board/Board.js";
import Canvas       from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/pacman/source/board/Canvas.js";
import Blob         from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/pacman/source/Blob.js";
import Ghost        from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/pacman/source/ghosts/Ghost.js";



/**
 * Pacman Clyde
 * @extends {Ghost}
 */
export default class Clyde extends Ghost {

    /**
     * Pacman Clyde constructor
     * @param {Board}   board
     * @param {Canvas}  canvas
     * @param {?Number} dots
     */
    constructor(board, canvas, dots) {
        super(board);

        this.paths = {
            inPen    : [
                { dir : { x:  0, y: -1 }, targetY : 14, next : 1 },
                { dir : { x:  0, y:  1 }, targetY : 15, next : 0 },
            ],
            exitPen  : [
                { dir : { x: -1, y:  0 }, targetX : 14,   next : 1    },
                { dir : { x:  0, y: -1 }, targetY : 11.5, next : null },
            ],
            enterPen : [
                { dir : { x: -1, y:  0 }, targetX : 14,   next : 1    },
                { dir : { x:  0, y:  1 }, targetY : 14.5, next : 2    },
                { dir : { x:  1, y:  0 }, targetX : 16,   next : null },
            ],
        };

        this.id      = 3;
        this.start   = { x: 16, y: 14.5 };
        this.scatter = { x:  0, y:   31 };
        this.inPen   = true;
        this.color   = Clyde.color;

        this.init(canvas, dots);
        this.setPath("inPen");
    }

    /**
     * Returns the Ghost's name
     * @returns {String}
     */
    static get text() {
        return "Clyde";
    }

    /**
     * Returns the Ghost's color
     * @returns {String}
     */
    static get color() {
        return "rgb(255, 153, 0)";
    }



    /**
     * Clyde's target is the Blob possition if is further away and the Scatter if is closer
     * @param {Blob} blob
     * @returns {{x: Number, y: Number}}
     */
    chase(blob) {
        const x = Math.pow(this.tile.x - blob.tile.x, 2);
        const y = Math.pow(this.tile.y - blob.tile.y, 2);

        if (Math.sqrt(x + y) > 8) {
            return blob.tile;
        }
        return this.scatter;
    }
}
