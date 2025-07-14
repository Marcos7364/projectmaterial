import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-badge-overview',
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './badge-overview.html',
  styleUrl: './badge-overview.css'
})
export class BadgeOverview {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
