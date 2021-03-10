export default class BuySended {
  constructor(email: string, name: string, idProduct: string) {
    this.email = email;
    this.name = name;
    this.idProduct = idProduct;
  }
  email: string;
  name: string;
  idProduct: string;
}
