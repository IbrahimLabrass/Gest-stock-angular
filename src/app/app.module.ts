import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdentifComponent } from './identif/identif.component';

import { AccueilComponent } from './accueil/accueil.component';
import {DemoNgZorroAntdModule} from './ng-zorro-antd.module';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {NZ_ICONS} from 'ng-zorro-antd/icon';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EtatMatiereComponent } from './etat-matiere/etat-matiere.component';
import { AccueilContentComponent } from './accueil-content/accueil-content.component';
import { CaractTransfertComponent } from './caract-transfert/caract-transfert.component';
import { PrincipePComponent } from './principe-p/principe-p.component';
import { UserSysComponent } from './user-sys/user-sys.component';
import { StatComponent } from './stat/stat.component';
import { RegionComponent } from './region/region.component';
import { UserComponent } from './user/user.component';
import { ClientComponent } from './client/client.component';
import { UnitiesComponent } from './client/unities/unities.component';
import { StockComponent } from './client/stock/stock.component';
import { SoldeComponent } from './client/solde/solde.component';
import { EnregistrementUserComponent } from './client/enregistrement-user/enregistrement-user.component';
import { AjoutSoldeComponent } from './client/ajout-solde/ajout-solde.component';
import { AgentStockComponent } from './agent-stock/agent-stock.component';
import { EnrDemandeComponent } from './agent-stock/enr-demande/enr-demande.component';
import { EnrTranComponent } from './agent-stock/enr-tran/enr-tran.component';
import { EnrRecComponent } from './agent-stock/enr-rec/enr-rec.component';
import { CaractComponent } from './agent-stock/caract/caract.component';
import { RecuComponent } from './agent-stock/recu/recu.component';
import { MahdharComponent } from './agent-stock/mahdhar/mahdhar.component';
import {ButtonModule} from "primeng/button";
import { PersonalisationComponent } from './personalisation/personalisation.component';
import { PersonalisationClientComponent } from './client/personalisation-client/personalisation-client.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { StructuresComponent } from './structures/structures.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { MagasinComponent } from './magasin/magasin.component';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);
@NgModule({
  declarations: [
    AppComponent,
    IdentifComponent,

    AccueilComponent,

    EtatMatiereComponent,

    AccueilContentComponent,

    CaractTransfertComponent,

    PrincipePComponent,

    UserSysComponent,

    StatComponent,

    RegionComponent,

    UserComponent,

    ClientComponent,

    UnitiesComponent,

    StockComponent,

    SoldeComponent,

    EnregistrementUserComponent,

    AjoutSoldeComponent,

    AgentStockComponent,

    EnrDemandeComponent,

    EnrTranComponent,

    EnrRecComponent,

    CaractComponent,

    RecuComponent,

    MahdharComponent,

    PersonalisationComponent,

    PersonalisationClientComponent,

    StructuresComponent,

    FournisseursComponent,

    MagasinComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    DemoNgZorroAntdModule,
    FormsModule,
    HttpClientModule ,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    ButtonModule,
    NzSelectModule,
    Ng2SearchPipeModule

  ],

  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } , {provide : LocationStrategy , useClass : HashLocationStrategy } ] ,

  bootstrap: [AppComponent]
})
export class AppModule { }
