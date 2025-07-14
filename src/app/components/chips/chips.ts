import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
@Component({
  selector: 'app-chips',
  imports: [MatChipsModule],
  templateUrl: './chips.html',
  styleUrl: './chips.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Chips {

}
