export class Fournisseur {

  private id: number ;
  private email: string  ;

  private typeF: string;
  private numTel: string;
  private fax: string ;
  private codeF: string ;
  private pays: string;
  private mou3aref: string;
  private adresse: string;
  emailF: any;


  get _id(): number {
    return this.id;
  }

  set _id(value: number) {
    this.id = value;
  }

  get _email(): string {
    return this.email;
  }

  set _email(value: string) {
    this.email = value;
  }

  get _typeF(): string {
    return this.typeF;
  }

  set _typeF(value: string) {
    this.typeF = value;
  }

  get _numTel(): string {
    return this.numTel;
  }

  set _numTel(value: string) {
    this.numTel = value;
  }

  get _fax(): string {
    return this.fax;
  }

  set _fax(value: string) {
    this.fax = value;
  }

  get _codeF(): string {
    return this.codeF;
  }

  set _codeF(value: string) {
    this.codeF = value;
  }

  get _pays(): string {
    return this.pays;
  }

  set _pays(value: string) {
    this.pays = value;
  }

  get _mou3aref(): string {
    return this.mou3aref;
  }

  set _mou3aref(value: string) {
    this.mou3aref = value;
  }

  get _adresse(): string {
    return this.adresse;
  }

  set _adresse(value: string) {
    this.adresse = value;
  }
}
