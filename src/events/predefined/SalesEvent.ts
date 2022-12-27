import { NativeEvent } from '../base/NativeEvent';

export class SalesEvent extends NativeEvent {
  constructor(
    salesData: Record<string, unknown>,
    timeStampMillis: number,
    userData: string
  ) {
    super('Sales');

    this.userData = userData;
    this.serialize = {
      affise_event_sales: salesData,
      affise_event_sales_timestamp: timeStampMillis.toString(),
    };
  }
}
