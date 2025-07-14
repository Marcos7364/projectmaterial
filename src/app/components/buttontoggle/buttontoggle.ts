import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-buttontoggle',
  imports: [MatButtonToggleModule],
  templateUrl: './buttontoggle.html',
  styleUrl: './buttontoggle.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Buttontoggle {

}
