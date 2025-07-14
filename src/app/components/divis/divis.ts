import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-divis',
  imports: [MatListModule, MatDividerModule],
  templateUrl: './divis.html',
  styleUrl: './divis.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Divis {

}
