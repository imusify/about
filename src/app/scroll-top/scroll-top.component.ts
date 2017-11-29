import { Component, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent {

  public isVisible: boolean;
  public fadeOut: boolean;

  @HostListener('window:scroll', [])
  onScroll() {
    const { scrollTop } = document.documentElement;
    if (scrollTop > 300) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
      this.fadeOut = false;
    }
    if (scrollTop > 1200) {
      this.fadeOut = true;
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.isVisible = false;
    this.fadeOut = false;
   }

  scrollToTop() {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

}
