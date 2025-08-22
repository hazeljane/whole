import { Component } from '@angular/core';
import { RouterOutlet, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterOutlet, RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']  
})
export class HeaderComponent {
  showMenu = false;

  toggleShowMenu() {
    this.showMenu = !this.showMenu;
  }
}
