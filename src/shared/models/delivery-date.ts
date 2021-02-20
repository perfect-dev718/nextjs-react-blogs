export enum DeliveryDateStatus {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable',
}

export interface DeliveryDate {
  time: string;
  fee: number;
  status: DeliveryDateStatus;
}
