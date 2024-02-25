export class Produit {



  private id : number ;
  private codeAbar : string;
  private marque  :  string;
  private couleur : string ;
  private taille : string;
  private etat : string ;
  private idCategorie :  string ;
  private idSousCategorie : string ;
  private idUnite : string ;
  private type : string ;
  private idMagasin  : string;
  private idFournisseur : string ;
  private prixUnitaire : string ;
  private minQuant  : string;
  private currentQuant: string ;
  private tva: string ;


  get _id(): number {
    return this.id;
  }

  set _id(value: number) {
    this.id = value;
  }

  get _codeAbar(): string {
    return this.codeAbar;
  }

  set _codeAbar(value: string) {
    this.codeAbar = value;
  }

  get _marque(): string {
    return this.marque;
  }

  set _marque(value: string) {
    this.marque = value;
  }

  get _couleur(): string {
    return this.couleur;
  }

  set _couleur(value: string) {
    this.couleur = value;
  }

  get _taille(): string {
    return this.taille;
  }

  set _taille(value: string) {
    this.taille = value;
  }

  get _etat(): string {
    return this.etat;
  }

  set _etat(value: string) {
    this.etat = value;
  }

  get _idCategorie(): string {
    return this.idCategorie;
  }

  set _idCategorie(value: string) {
    this.idCategorie = value;
  }

  get _idSousCategorie(): string {
    return this.idSousCategorie;
  }

  set _idSousCategorie(value: string) {
    this.idSousCategorie = value;
  }

  get _idUnite(): string {
    return this.idUnite;
  }

  set _idUnite(value: string) {
    this.idUnite = value;
  }

  get _type(): string {
    return this.type;
  }

  set _type(value: string) {
    this.type = value;
  }

  get _idMagasin(): string {
    return this.idMagasin;
  }

  set _idMagasin(value: string) {
    this.idMagasin = value;
  }

  get _idFournisseur(): string {
    return this.idFournisseur;
  }

  set _idFournisseur(value: string) {
    this.idFournisseur = value;
  }

  get _prixUnitaire(): string {
    return this.prixUnitaire;
  }

  set _prixUnitaire(value: string) {
    this.prixUnitaire = value;
  }

  get _minQuant(): string {
    return this.minQuant;
  }

  set _minQuant(value: string) {
    this.minQuant = value;
  }

  get _currentQuant(): string {
    return this.currentQuant;
  }

  set _currentQuant(value: string) {
    this.currentQuant = value;
  }

  get _tva(): string {
    return this.tva;
  }

  set _tva(value: string) {
    this.tva = value;
  }
}
