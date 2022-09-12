import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2, RendererFactory2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
		@Inject(DOCUMENT) private document: Document,
		private renderer: Renderer2
	) { }

  ngOnInit(): void {
  }

	public clickChangeTheme(event: MouseEvent): void {
		
		// эту логику вынести в сервис
		
		if (this.document.body.classList.contains('light-theme')) {
			this.document.body.classList.remove('light-theme');
			this.document.body.classList.add('dark-theme');
		} else if (this.document.body.classList.contains('dark-theme')) {
			this.document.body.classList.remove('dark-theme');
			this.document.body.classList.add('light-theme');
		}

		// эту логику вынести в сервис
		
	}

}
