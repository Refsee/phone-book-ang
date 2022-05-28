import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/interfaces';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public arrPerson: Array<IPerson> = [
    { firstName: 'Mykola', secondName: 'Kholod', phone: '0637755999' },
    { firstName: 'Vasylyna', secondName: 'Kholod', phone: '0732226677' },
    { firstName: 'Ivan', secondName: 'Ivanov', phone: '0977753357' },
    { firstName: 'Petro', secondName: 'Petriv', phone: '0671235335' },
  ];
  public search: string = '';
  public isModal: boolean = false;
  public isEdit: boolean = false;
  public indexEdit!: number;
  public first: string = '';
  public second: string = '';
  public number: string = '';
  constructor() {}

  ngOnInit(): void {}
  openModal(): void {
    this.isModal = true;
  }
  closeModal(): void {
    this.isModal = false;
  }

  deletePerson(index: number): void {
    this.arrPerson = this.arrPerson.filter((item, i) => index != i);
  }
  editPerson(index: number): void {
    this.isModal = true;
    this.isEdit = true;
    this.indexEdit = index;

    this.first = this.arrPerson[index].firstName;
    this.second = this.arrPerson[index].secondName;
    this.number = this.arrPerson[index].phone;
  }

  createPerson() {
    if (this.first != '' && this.second != '' && this.number != '') {
      const person: IPerson = {
        firstName: this.first,
        secondName: this.second,
        phone: this.number,
      };

      if (this.isEdit) {
        this.arrPerson[this.indexEdit] = person;
      } else {
        this.arrPerson.unshift(person);
      }

      this.isModal = false;
      this.isEdit = false;
      this.first = '';
      this.second = '';
      this.number = '';
    }
  }
}
