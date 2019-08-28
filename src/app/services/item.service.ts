import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Observable<Item[]>;

  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('items').valueChanges();
   }

   getItems() {
     return this.items;
   }
}

