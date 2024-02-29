import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from "./components/new/new.component";
import { New2Component } from "./components/new2/new2.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NewComponent, New2Component]
})
export class AppComponent {
  title: string = 'Angular-basic';
}
