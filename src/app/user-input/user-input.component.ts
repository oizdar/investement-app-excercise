import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal<string>('')
  annualInvestment = signal<string>('')
  expectedReturn = signal<string>('')
  duration = signal<string>('')

  onCalculate = output<() => void>();
}
