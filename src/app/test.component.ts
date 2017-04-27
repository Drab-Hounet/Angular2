import { Component }            from '@angular/core';
import { NgModule }             from '@angular/core';
import { Router }               from '@angular/router';

@Component({
  selector: 'my-test',
  template: `<h1> {{title}}</h1>`,
})

export class TestComponent {
  title = 'coucou';
}
