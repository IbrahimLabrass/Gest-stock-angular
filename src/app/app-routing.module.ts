import { MagasinComponent } from './magasin/magasin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IdentifComponent} from './identif/identif.component';
import {AccueilComponent} from './accueil/accueil.component';
import {EtatMatiereComponent} from './etat-matiere/etat-matiere.component';
import {AccueilContentComponent} from './accueil-content/accueil-content.component';
import {CaractTransfertComponent} from './caract-transfert/caract-transfert.component';
import {PrincipePComponent} from './principe-p/principe-p.component';
import {UserSysComponent} from './user-sys/user-sys.component';
import {StatComponent} from './stat/stat.component';
import {RegionComponent} from './region/region.component';
import {ClientComponent} from './client/client.component';
import {UnitiesComponent} from './client/unities/unities.component';
import {StockComponent} from './client/stock/stock.component';
import {SoldeComponent} from './client/solde/solde.component';
import {EnregistrementUserComponent} from './client/enregistrement-user/enregistrement-user.component';
import {AjoutSoldeComponent} from './client/ajout-solde/ajout-solde.component';
import {AgentStockComponent} from './agent-stock/agent-stock.component';
import {EnrDemandeComponent} from './agent-stock/enr-demande/enr-demande.component';
import {EnrRecComponent} from './agent-stock/enr-rec/enr-rec.component';
import {EnrTranComponent} from './agent-stock/enr-tran/enr-tran.component';
import {MahdharComponent} from './agent-stock/mahdhar/mahdhar.component';
import {RecuComponent} from './agent-stock/recu/recu.component';
import {CaractComponent} from './agent-stock/caract/caract.component';
import {PersonalisationComponent} from './personalisation/personalisation.component';
import {PersonalisationClientComponent} from "./client/personalisation-client/personalisation-client.component";
import { StructuresComponent } from './structures/structures.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
const routes: Routes = [
  {
    path: '',
    component: IdentifComponent
  },


  {
    path: 'personalisation',
    component: PersonalisationComponent
  },

  {
    path: 'structures',
    component: StructuresComponent
  },

  {
    path: 'fournisseurs',
    component: FournisseursComponent
  },

  {
    path: 'magasin',
    component: MagasinComponent
  },

  {
    path: 'Accueil',
    component: AccueilContentComponent
  },

  {
    path: 'caractr',
    component: CaractTransfertComponent
  },

  {
    path: 'etatmat',
    component: EtatMatiereComponent
  },

  {
    path: 'principeP',
    component: PrincipePComponent
  },


  {
    path: 'userSys',
    component: UserSysComponent

  },

  {
    path: 'stat',
    component: StatComponent

  },

  {
    path: 'region',
    component: RegionComponent

  },
  {
    path: 'client',
    component:  ClientComponent,
  },

  {
    path: 'clientPerso',
    component:  PersonalisationClientComponent,
  },

  {
    path: 'unite',
    component:  UnitiesComponent
  },

  {path: 'stock', component:  StockComponent
  },
  {path: 'solde', component:  SoldeComponent} ,

  {path: 'EnregUser', component:  EnregistrementUserComponent},

  {path: 'AjoutSolde', component:  AjoutSoldeComponent} ,

  {path: 'agent', component:  AgentStockComponent} ,

  {path: 'enrDemande', component:  EnrDemandeComponent} ,

  {path: 'enrRec', component:  EnrRecComponent} ,

  {path: 'enrtran', component:  EnrTranComponent} ,

  {path: 'mahdhar', component:  MahdharComponent} ,

  {path: 'recu', component:  RecuComponent} ,

  {path: 'caract', component:  CaractComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
