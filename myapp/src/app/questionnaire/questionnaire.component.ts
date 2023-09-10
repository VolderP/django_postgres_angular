import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  step = 1;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextStep(): void {
    if (this.step < 3) {
      this.step += 1;
    } else {
      this.router.navigate(['/results']);
    }
  }
}
