export class Principal {
  constructor() {
    this.authorities = new Array<number>();
  }
  public isAuthenticated: boolean;
  public userFullName: any;
  public authorities: Array<number>;
}