import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizRoundComponent } from './quiz-round/quiz-round.component';
import { ToLetterPointerPipe } from './to-letter-pointer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuizRoundComponent,
    ToLetterPointerPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
