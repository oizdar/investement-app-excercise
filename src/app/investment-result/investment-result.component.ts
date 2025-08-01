import { Component, effect, input } from '@angular/core';
import { type UserInput } from "../user-input/user-input.model";
import { InvestmentResultService } from "./investment-result.service";
import { type InvestmentResult } from "./investment.result";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  userInputData = input<UserInput | undefined>(undefined);
  investmentResults: InvestmentResult[] = [];

  constructor(private investmentResultService: InvestmentResultService) {
    effect(() => {
      const userInput = this.userInputData();

      if (!userInput) {
        return;
      }

      this.investmentResults = this.investmentResultService.calculateInvestmentResults(userInput);

    })
  }
}
