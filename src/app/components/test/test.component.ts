import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})



export class TestComponent implements OnInit {
  @Input() index!: number;
  public fileName = "Test Card"

  constructor() {
   }

  ngOnInit(): void {
  }

  getCardName() {
    return this.fileName;
  }

}
