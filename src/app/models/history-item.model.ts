import { Item } from './item.model';

export interface HistoryItem {
  item: Item;
  viewedAt: Date;
}
