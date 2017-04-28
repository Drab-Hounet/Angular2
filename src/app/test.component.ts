import { Component }    from '@angular/core';

@Component({
  selector: 'my-test',
  template: ` <h1> {{title}}</h1>
              <ul>
                <my-list></my-list>
              </ul>
              `,
})

export class TestComponent {
  title = 'coucou';
}
