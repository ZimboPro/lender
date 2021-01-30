import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Plugins } from '@capacitor/core';
import { Contact, ContactsPlugin } from '../shared/models/iContact';
const { Contacts } = Plugins;

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  form: FormGroup;
  contacts: Contact[];
  filteredContacts: Contact[];

  constructor() { }

  ngOnInit() {
  }

  createForm() {
    this.form = new FormGroup({
      name: new FormControl(),
      contactId: new FormControl()
    });
  }

  getContactList() {
    (Contacts as ContactsPlugin).getPermissions().then(resp => {
      if (resp.granted) {
        (Contacts as ContactsPlugin).getContacts().then(list => {
          this.contacts = list.contacts;
          this.filteredContacts = list.contacts;
        })
      }
    }, err => {

    });
  }

  filter() {

  }

  addEntry() {

  }
}
