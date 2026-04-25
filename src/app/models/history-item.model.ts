import { Item } from './item.model';

export type OperationType = 'view' | 'add' | 'edit' | 'delete';

export interface HistoryItem {
  item: Item;
  viewedAt: Date;
  operation?: OperationType;
  operationTime?: Date;
}
