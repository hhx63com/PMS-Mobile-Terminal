import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = '../../assets/items.json';
  private items: Item[] = [];
  private itemsLoaded = false;

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    if (!this.itemsLoaded) {
      return this.http.get<Item[]>(this.apiUrl).pipe(
        map((data: Item[]) => {
          this.items = data;
          this.itemsLoaded = true;
          return data;
        })
      );
    }
    return of(this.items);
  }

  getItemById(id: number): Observable<Item> {
    const item = this.items.find(item => item.item_id === id);
    return of(item!);
  }

  addItem(item: Item): Observable<Item> {
    const newItem = { ...item, item_id: Math.max(...this.items.map(item => item.item_id)) + 1 };
    this.items.push(newItem);
    return of(newItem);
  }

  updateItem(id: number, item: Item): Observable<Item> {
    const index = this.items.findIndex(item => item.item_id === id);
    if (index !== -1) {
      this.items[index] = { ...item, item_id: id };
      return of(this.items[index]);
    }
    return of(item);
  }

  deleteItem(id: number): Observable<void> {
    this.items = this.items.filter(item => item.item_id !== id);
    return of(undefined);
  }
}