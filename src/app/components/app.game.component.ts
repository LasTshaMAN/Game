import {Component, OnInit} from "@angular/core";
import {GameService} from "../services/GameService";


@Component({
    selector: 'my-app',
    template: '<div>Game container ...</div>',
    providers: [GameService]
})
export class AppComponent implements OnInit {

    private gameService: GameService;

    constructor(gameService: GameService) {
        this.gameService = gameService;
    }

    ngOnInit(): void {
        console.log('ngOnInit');
        // this.gameService.startGame();
    }
}
