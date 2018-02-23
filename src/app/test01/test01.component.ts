import { Component, OnInit } from '@angular/core';
import { ButtonsService } from '../services/buttons.service';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.scss']
})
export class Test01Component implements OnInit {
  buttons = [];
  constructor(private buttonsService: ButtonsService) { }

  ngOnInit() {
    this.buttonsService.getButtons().subscribe(
      data => {
        this.buttons = data;
      },
      error => {
        console.log('Error:', error);
      }
    );
  }

}
