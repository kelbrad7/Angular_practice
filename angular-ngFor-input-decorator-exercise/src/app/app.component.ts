import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   users:
    {
      username: string,
      id: number
    }  [] =
    [
    { username: 'Kelly',  id: 1  },
    { username: 'Joel',   id: 2  },
    { username: 'Emily',  id: 3  },
    { username: 'Molly',  id: 4  }
  ]
}
