import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles:[`
	nav a {
		padding: 5px 10px;
		text-decoration: none;
		margin-top: 10px;
		display: inline-block;
		background-color: #eee;
		border-radius: 4px;
	  }
	  nav a:visited, a:link {
		color: #607D8B;
	  }
	  nav a:hover {
		color: #039be5;
		background-color: #CFD8DC;
	  }
	  nav a.active {
		color: #039be5;
	  }
	`],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Manager';
}
 