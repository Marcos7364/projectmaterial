import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatAutocomplete} from './components/mat-autocomplete/mat-autocomplete';
import { AutocompleteOverview } from "./components/autocomplete-overview/autocomplete-overview";
import { Badge } from "./components/badge/badge";
import { Button } from './components/button/button'; 
import { Buttontoggle } from './components/buttontoggle/buttontoggle';
import { Cart } from './components/cart/cart';
import { Checkbox } from './components/checkbox/checkbox';
import { Chips } from './components/chips/chips';
import { Cdialogo } from "./components/cdialogo/cdialogo";
import { Datepicker } from './components/datepicker/datepicker';
import { Divis } from './components/divis/divis';
import { Expanel } from './components/expanel/expanel';
import { Formfield } from './components/formfield/formfield'
import { List } from './components/list/list';
import { Input } from './components/input/input';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';



@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, MatAutocomplete, AutocompleteOverview, 
    Badge, Button, Buttontoggle, Cart, Checkbox, Chips, Cdialogo, 
    Datepicker,Divis, Expanel, Formfield, List, Input, MatBottomSheetModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'projectMaterial';
  selectedComponent: string | null = null;

  showComponent(component: string) {
    this.selectedComponent = component;
  }
}
