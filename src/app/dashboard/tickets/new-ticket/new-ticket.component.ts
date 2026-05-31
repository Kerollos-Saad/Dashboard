import { Component, ElementRef, output, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  
  enteredTitle = '';
  enteredText = '';
  add = output<{tilte: string; text: string}>();

  OnSubmit(TitleObj: HTMLInputElement, TitleInput: string, Description: string){
    
    // this.add.emit({tilte: TitleInput, text: Description});
    // this.form?.nativeElement.reset();

    this.add.emit({tilte: this.enteredTitle, text: this.enteredText});
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
