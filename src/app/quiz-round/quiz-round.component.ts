import { Component } from '@angular/core';

export class QuizAnswer {

  public get title(): string {
    return this._title;
  }

  public get isRight(): boolean {
    return this._isRight;
  }

  constructor(private _title: string, private _isRight: boolean = false) { }

}

export class QuizRound {

  public get question(): string {
    return this._question;
  }

  public get answers(): QuizAnswer[] {
    return this._answers;
  }

  constructor(private _question: string, private _answers: QuizAnswer[]) { }

}

@Component({
  selector: 'app-quiz-round',
  templateUrl: './quiz-round.component.html',
  styleUrls: ['./quiz-round.component.scss']
})
export class QuizRoundComponent {

  private _selectedAnswer: QuizAnswer;
  private _isAnswerConfirmed: boolean;

  private _quizRound: QuizRound;
  public get quizRound(): QuizRound {
    return this._quizRound;
  }

  constructor() {
    this._quizRound = new QuizRound(
      'Как правильно закончить пословицу: «Не откладывай на завтра то, что можно…»?',
      [
        new QuizAnswer('Сделать сегодня', true),
        new QuizAnswer('Сделать послезавтра'),
        new QuizAnswer('Сделать через месяц'),
        new QuizAnswer('Никогда не делать')
      ]
    );
  }

  public getClassesForConfirmedAnswer(answer: QuizAnswer): {} {
    if (this._isAnswerConfirmed && this._selectedAnswer) {
      const output = {
        "app-quiz-round--answer_correct": answer.isRight
      }
      return output;
    }
  }

  public isSomeAnswerSelected(): boolean {
    const output = !!this._selectedAnswer;
    return output;
  }

  public isAnswerSelected(answer: QuizAnswer): boolean {
    const output = this._selectedAnswer === answer;
    return output;
  }

  public onAnswerClick(answer: QuizAnswer): void {
    this._selectedAnswer = answer;
  }

  public confirmAnswer(): void {
    this._isAnswerConfirmed = true;
  }

}
