import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	navVar;
	title = 'omkar-srinivas-prabhu';
	
	constructor(private router: Router) {
		this.navVar = 1;
	}
	
	navToggle(i) {
		this.navVar = i;
	}
	redirect(path) {
		this.router.navigate([path]);
	}
}
