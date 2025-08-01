import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultComponent } from "./investment-result/investment-result.component";
import { UserInput } from "./user-input/user-input.model";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultComponent
  ]
})
export class AppComponent {
  userInputData = signal<UserInput | undefined>(undefined);

  onInputUserData(userInput: UserInput | undefined) {
    console.log('AppComponent received user input:', userInput);
    this.userInputData.set(userInput);
  }
}
