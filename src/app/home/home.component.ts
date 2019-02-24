import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="col=12 mt-3">
  <div class="jumbotron ">
    <h1 class="display-4">Home</h1>
    <p class="lead">This is a sample HR project.</p>
    <hr class="my-4">
    <p>Prepared with Angular CLI 7.2.4 and Bootstrap4 using Visual Studio Code as IDE.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg mr-3" href="/employees" role="button">Candidates</a>
      <a class="btn btn-light btn-lg" href="/aboutus" role="button">About Us</a>
    </p>
</div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
