import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'angular-nest-herokuapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public opened = false;
  public userImage = true;

  @ViewChild('horizontalUserPopout')
  public horizontalUserPopout: ElementRef<HTMLDivElement>;

  @HostListener('keyup.escape')
  public onEscapeKeyUp() {
    this.opened = false;
  }

  @HostListener('click', ['$event'])
  public handleAutomaticUserPopoutClose($event) {
    const { horizontalUserPopout, opened } = this;
    const $target = $event?.target;
    const $horizontalUserPopout = horizontalUserPopout?.nativeElement;
    // If there's no good input or we're
    // not even open, short-circuit.
    if (!$target || !$horizontalUserPopout || !opened) {
      return;
    }
    // Otherwise close the popout if the
    // click is outside our container.
    if (!$horizontalUserPopout.contains($target)) {
      this.opened = false;
    }
  }

  public toggleOpen(): void {
    this.opened = !this.opened;
  }

  public handleNavMenuClick(): void {
    this.opened = false;
  }
}
