export class Magasin {

  private id: number ;
  private designation: string ;
  private wilaya: string ;
  private codePostal: string;
  private adresse: string  ;
  private mass2oul: string ;
  private numTel: number ;
  private fax: string ;
  private amin: string ;


  get _id(): number {
    return this.id;
  }

  set _id(value: number) {
    this.id = value;
  }

  get _designation(): string {
    return this.designation;
  }

  set _designation(value: string) {
    this.designation = value;
  }

  get _wilaya(): string {
    return this.wilaya;
  }

  set _wilaya(value: string) {
    this.wilaya = value;
  }

  get _codePostal(): string {
    return this.codePostal;
  }

  set _codePostal(value: string) {
    this.codePostal = value;
  }

  get _adresse(): string {
    return this.adresse;
  }

  set _adresse(value: string) {
    this.adresse = value;
  }

  get _mass2oul(): string {
    return this.mass2oul;
  }

  set _mass2oul(value: string) {
    this.mass2oul = value;
  }

  get _numTel(): number {
    return this.numTel;
  }

  set _numTel(value: number) {
    this.numTel = value;
  }

  get _fax(): string {
    return this.fax;
  }

  set _fax(value: string) {
    this.fax = value;
  }

  get _amin(): string {
    return this.amin;
  }

  set _amin(value: string) {
    this.amin = value;
  }
}
