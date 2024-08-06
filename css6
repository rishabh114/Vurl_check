import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-direct-dom',
  template: `<div id="content"></div>`
})
export class DirectDomComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const unsafeHtml = '<img src="x" onerror="alert(\'XSS Attack\')">';
    this.el.nativeElement.querySelector('#content').innerHTML = unsafeHtml;
  }
}
