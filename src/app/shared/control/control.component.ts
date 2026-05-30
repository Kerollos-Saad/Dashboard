import { Component, contentChild, ContentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ControlComponent {

  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>; // non-signal

  private control2 = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input'); // signal

  title = input.required<string>();
}
