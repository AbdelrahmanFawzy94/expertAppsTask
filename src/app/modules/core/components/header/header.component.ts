import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('header') headerElement: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.makingFixedNavTop();
  }

  makingFixedNavTop(): void {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        (this.headerElement.nativeElement as HTMLDivElement).classList.add(
          'scrolled'
        );
      } else {
        (this.headerElement.nativeElement as HTMLDivElement).classList.remove(
          'scrolled'
        );
      }
    };
  }
}
