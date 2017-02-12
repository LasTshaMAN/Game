import { OnInit } from "@angular/core";
import { GameService } from "../services/GameService";
export declare class AppComponent implements OnInit {
    private gameService;
    constructor(gameService: GameService);
    ngOnInit(): void;
}
