import Animation    from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/pacman/source/animations/Animation.js";
import Board        from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/pacman/source/board/Board.js";



/**
 * Pacman Ready Animation
 * @extends {Animation}
 */
export default class ReadyAnimation extends Animation {

    /**
     * Pacman Ready Animation constructor
     * @param {Board}    board
     * @param {Function} callback
     */
    constructor(board, callback) {
        super(board, callback);

        this.blocksGame = true;
        this.endTime    = 3000;

        this.canvas.drawText({
            color : "rgb(255, 255, 51)",
            text  : "Ready!",
            pos   : { x: 14, y: this.board.centerTextTop },
            size  : null,
            align : null,
            alpha : null,
        });
    }
}
