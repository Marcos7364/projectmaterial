import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-cart',
  imports: [MatCardModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cart {
    longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
