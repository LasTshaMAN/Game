import { Injectable } from '@angular/core';

import * as Phaser from 'phaser';

@Injectable()
export class GameService {

    startGame() {
        console.log('startGame');
        var player: Phaser.Sprite;
        var cameraCursors: Phaser.CursorKeys;

        var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
            preload: () => {
                game.load.image("background","C:\Angular\assets\debug-grid-1920x1920.png");
                game.load.image("player","C:\Angular\assets\debug-grid-1920x1920.png");
            },

            create: () => {
                game.add.tileSprite(0, 0, 1920, 1920, "background");
                game.world.setBounds(0, 0, 1920, 1920);
                game.physics.startSystem(Phaser.Physics.P2JS);
                player = game.add.sprite(game.world.centerX, game.world.centerY, "player");
                game.physics.p2.enable(player);
                cameraCursors = game.input.keyboard.createCursorKeys();
                game.camera.follow(player);
            },

            update: () => {
                player.body.setZeroVelocity();

                if (cameraCursors.up.isDown) {
                    player.body.moveUp(300)
                } else if (cameraCursors.down.isDown) {
                    player.body.moveDown(300);
                }

                if (cameraCursors.left.isDown) {
                    player.body.velocity.x = -300;
                } else if (cameraCursors.right.isDown) {
                    player.body.moveRight(300);
                }
            },

            render: () => {
                game.debug.cameraInfo(game.camera, 32, 32);
                game.debug.spriteCoords(player, 32, 500);
            }
        });
    }
}
