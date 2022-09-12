import { DOCUMENT } from '@angular/common';
import { Injectable } from '@angular/core';
import { Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { media } from '../functions/media';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ChangeThemeService {
	
	private renderer!: Renderer2;
	private mediaSystemLight$: Observable<boolean> = media('(prefers-color-scheme: light)');
	private mediaSystemLightSubs: Subscription = this.mediaSystemLight$.subscribe(bool => {
		this.systemTheme = bool === true ? 'light' : 'dark';
		if (this.initClickChangeTheme === false) {
			if (this.systemTheme === 'light') {
				this.changeTheme('light');
			} else if (this.systemTheme === 'dark') {
				this.changeTheme('dark');
			}
		}
	});
	private systemTheme!: 'light' | 'dark';
	private initClickChangeTheme: boolean = false;

  constructor(
		@Inject(DOCUMENT) private document: Document,
		private rendererFactory: RendererFactory2
	) { 
		this.renderer = rendererFactory.createRenderer(null, null);
		this.onInit();
	}

	public onInit(): void {
		
	}
		
	public clickChangeTheme(event: MouseEvent) {
		this.initClickChangeTheme = true;

		const theme = this.document.body.classList.contains('light-theme') ? 'dark' : 'light';
		this.changeTheme(theme);
	}

	private changeTheme(theme: 'light' | 'dark') {
		if (theme === 'light') {
			this.renderer.removeClass(this.document.body, 'dark-theme');
			this.renderer.addClass(this.document.body, 'light-theme');
		} else if (theme === 'dark') {
			this.renderer.removeClass(this.document.body, 'light-theme');
			this.renderer.addClass(this.document.body, 'dark-theme');
		}
	}

	public getSystemTheme() {
		return this.systemTheme;
	}

	public onDestroy(): void {
		this.mediaSystemLightSubs.unsubscribe();
	}
	
}
