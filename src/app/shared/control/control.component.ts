import { AfterViewInit, Component, contentChild, ContentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ControlComponent implements AfterViewInit{

  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>; // non-signal

  private control2 = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input'); // signal

  ngAfterViewInit(){
    console.log(this.control);
    console.log(this.control2);
  }

  title = input.required<string>();
}
