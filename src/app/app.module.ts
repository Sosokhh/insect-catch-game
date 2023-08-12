import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InsectCatchComponent } from './insect-catch/insect-catch.component';
import { TimerComponent } from './shared/timer/timer.component';
import {FormsModule} from "@angular/forms";
import { StartGameComponent } from './insect-catch/start-game/start-game.component';
import { ChooseInsectComponent } from './insect-catch/choose-insect/choose-insect.component';
import { GameContainerComponent } from './insect-catch/game-container/game-container.component';

@NgModule({
  declarations: [
    AppComponent,
    InsectCatchComponent,
    TimerComponent,
    StartGameComponent,
    ChooseInsectComponent,
    GameContainerComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
