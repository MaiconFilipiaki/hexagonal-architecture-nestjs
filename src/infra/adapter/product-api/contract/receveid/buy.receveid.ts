export default class BuyReceveid {
  constructor(id: string, status: string, dateOperation: number) {
    this.id = id;
    this.status = status;
    this.dateOperation = dateOperation;
  }

  id: string;
  status: string;
  dateOperation: number;
}
