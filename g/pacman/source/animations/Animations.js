import DeathAnimation      from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/source/animations/DeathAnimation.js";
import EndLevelAnimation   from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/source/animations/EndLevelAnimation.js";
import FruitScoreAnimation from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/source/animations/FruitScoreAnimation.js";
import GameOverAnimation   from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/source/animations/GameOverAnimation.js";
import GhostScoreAnimation from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/source/animations/GhostScoreAnimation.js";
import NewLevelAnimation   from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/source/animations/NewLevelAnimation.js";
import PausedAnimation     from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/source/animations/PausedAnimation.js";
import ReadyAnimation      from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/source/animations/ReadyAnimation.js";
import Board               from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/source/board/Board.js";
import Blob                from "https://raw.githubusercontent.com/BuBuStuff/Application-Host/refs/heads/main/g/source/Blob.js";



/**
 * Pacman Animations
 */
export default class Animations {

    /**
     * Pacman Animations constructor
     * @param {Board} board
     */
    constructor(board) {
        this.board      = board;
        this.canvas     = board.screenCanvas;
        this.animations = [];
    }



    /**
     * Returns true if there is an animation
     * @returns {Boolean}
     */
    get isAnimating() {
        return this.animations.length &&
            this.animations.some((anim) => anim.blocksGame);
    }

    /**
     * Animates the current animation, if possible
     * @param {Number} time
     * @returns {Void}
     */
    animate(time) {
        if (this.animations.length) {
            this.animations.forEach((animation, index, object) => {
                animation.incTimer(time);
                if (animation.isAnimating) {
                    animation.animate();
                } else {
                    animation.onEnd();
                    object.splice(index, 1);
                }
            });
        }
    }

    /**
     * Ends all the Animations
     * @returns {Void}
     */
    endAll() {
        this.animations.forEach((anim) => anim.onEnd());
        this.animations = [];
    }

    /**
     * Adds a new animation
     * @param {*} animation
     * @returns {Void}
     */
    add(animation) {
        this.animations.push(animation);
    }



    /**
     * Creates the Ready Animation
     * @param {Function} callback
     * @returns {Void}
     */
    ready(callback) {
        this.add(new ReadyAnimation(this.board, callback));
    }

    /**
     * Creates the Paused Animation
     * @returns {Void}
     */
    paused() {
        this.add(new PausedAnimation(this.board));
    }

    /**
     * Creates the Blob's Death Animation
     * @param {Blob}     blob
     * @param {Function} callback
     * @returns {Void}
     */
    death(blob, callback) {
        this.add(new DeathAnimation(this.board, callback, blob));
    }

    /**
     * Creates the Game Over Animation
     * @param {Function} callback
     * @returns {Void}
     */
    gameOver(callback) {
        this.add(new GameOverAnimation(this.board, callback));
    }

    /**
     * Creates the Ghost Score Animation
     * @param {String} score
     * @param {{x: Number, y: Number}} pos
     * @returns {Void}
     */
    ghostScore(score, pos) {
        this.add(new GhostScoreAnimation(this.board, score, pos));
    }

    /**
     * Creates the Fruit Score Animation
     * @param {String} score
     * @param {{x: Number, y: Number}} pos
     * @returns {Void}
     */
    fruitScore(score, pos) {
        this.add(new FruitScoreAnimation(this.board, score, pos));
    }

    /**
     * Creates the End Level Animation
     * @param {Function} callback
     * @returns {Void}
     */
    endLevel(callback) {
        this.add(new EndLevelAnimation(this.board, callback));
    }

    /**
     * Creates the New Level Animation
     * @param {Number}   level
     * @param {Function} callback
     * @returns {Void}
     */
    newLevel(level, callback) {
        this.add(new NewLevelAnimation(this.board, callback, level));
    }
}
