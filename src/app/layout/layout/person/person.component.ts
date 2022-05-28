import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPerson } from 'src/app/interfaces';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  @Input() PersonList!: Array<IPerson>;
  @Input() field!: string;
  @Output() editPerson = new EventEmitter<number>();
  @Output() deletePerson = new EventEmitter<number>();

  public type: string = '';
  
  public sortCollum: number = 0;
  public sortType: string = '';
  public sortOrder: any = '';

  constructor() {}

  ngOnInit(): void {}

  ePerson(index: number): void {
    this.editPerson.emit(index);
  }

  dPerson(index: number): void {
    this.deletePerson.emit(index);
  }

  sortFirstName(): void {
    this.sortCollum = 1;
    this.sortType = 'firstName';
    this.sortOrder = !this.sortOrder;
  }
  sortSecondName(): void {
    this.sortCollum = 2;
    this.sortType = 'secondName';
    this.sortOrder = !this.sortOrder;
  }
  sortPhone(): void {
    this.sortCollum = 3;
    this.sortType = 'phone';
    this.sortOrder = !this.sortOrder;
  }
}
