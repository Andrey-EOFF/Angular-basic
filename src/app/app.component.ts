import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShowTitleComponent } from "./components/show-title/show-title.component";

export interface Role {
  role: string,
  text: string
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterModule, CommonModule, ShowTitleComponent]
})
export class AppComponent {
  title: string = 'Angular-basic';

  changeTitle(newTitle:string) {


    this.title = newTitle;

  }

  isParagraphVisible: boolean = true;
  list: string[] = [
    'list one',
    'list two',
    'list three'
  ];

  roles: Role[] = [
    {
      role: 'admin',
      text: 'admin'
    },
    {
      role: 'user',
      text: 'user'
    },
    {
      role: 'customer',
      text: 'Ivan'
    },
    {
      role: 'user',
      text: 'user2'
    }
  ];
 
  show() {
    console.log('isParagraphVisible', this.isParagraphVisible)
  }
  getColor(user: Role): string {
    return user.role === 'admin' ? 'green' : user.role === 'user' ? 'blue' : 'red'
  }
  getDate() {
    return new Date()
  }
}
