import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

	public getItem<T>(key: string): null | T {
		const item = window.localStorage.getItem(key);

		if (item === null) { // если пусто
			return null;
		} else {
			return window.JSON.parse(item);
		}
	}

	public setItem<T>(key: string, value: T): void {
		window.localStorage.setItem(key, window.JSON.stringify(value));
	}

	public removeItem(key: string): void {
		window.localStorage.removeItem(key);
	}

	public clear(): void {
		window.localStorage.clear();
	}

	public getLocalStorageObj(): Record<string, any> {
		const localStorageObj: Record<string, any> = {};
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i);
			if (key === null) {
				continue;
			}

			const value = this.getItem<any>(key);
			if (value === null) {
				continue;
			}

			localStorageObj[key] = value;			
		}

		return localStorageObj;
	}
	
}
