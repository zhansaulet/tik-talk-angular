import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { ProfileService } from './data/services/profile.service';
import { JsonPipe } from '@angular/common';
import { Profile } from './data/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly profileService = inject(ProfileService);
  profiles: Profile[] = [];

  constructor() {
    this.profileService
      .getTestAccounts()
      .subscribe((res) => (this.profiles = res));
  }
}
