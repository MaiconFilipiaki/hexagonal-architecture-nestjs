export default class PurchaseUser {
  id: string;
  status: string;
  dateOperation: number;
  username: string;
  email: string;
  name: string;

  constructor(
    id: string,
    status: string,
    dateOperation: number,
    username: string,
    email: string,
    name: string,
  ) {
    this.id = id;
    this.status = status;
    this.dateOperation = dateOperation;
    this.username = username;
    this.email = email;
    this.name = name;
  }
}
