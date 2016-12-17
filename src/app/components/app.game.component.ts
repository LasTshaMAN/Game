import {Component, OnInit} from "@angular/core";
import {GameService} from "../services/game.service";


@Component({
    selector: 'my-app',
    template: '<div>Game container ...</div>',
    providers: [GameService]
})
export class AppComponent implements OnInit {

    constructor(private gameService: GameService) {
    }

    ngOnInit(): void {
        console.log('ngOnInit');
        this.gameService.startGame();
    }
}
