import { Injectable } from '@angular/core';
import { UserInput } from "../user-input/user-input.model";
import { InvestmentResult } from "./investment.result";

@Injectable({
  providedIn: 'root'
})
export class InvestmentResultService {

  calculateInvestmentResults(userData: UserInput): InvestmentResult[] {
    const annualData: InvestmentResult[] = [];
    let investmentValue = userData.initialInvestment;

    for (let i = 0; i < userData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (userData.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userData.annualInvestment;
      const totalInterest =
        investmentValue - userData.annualInvestment * year - userData.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: userData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: userData.initialInvestment + userData.annualInvestment * year,
        investmentValue: userData.initialInvestment + (userData.annualInvestment * year) + totalInterest
      });
    }

    return annualData;
  }
}
