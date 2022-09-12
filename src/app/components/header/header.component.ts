import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeThemeService } from 'src/app/shared/services/change-theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(
		private changeThemeService: ChangeThemeService
	) { }

  ngOnInit(): void {
  }

	public clickChangeTheme(event: MouseEvent): void {
		this.changeThemeService.clickChangeTheme(event);
	}

	ngOnDestroy(): void {
		this.changeThemeService.onDestroy();
	}

	

}
