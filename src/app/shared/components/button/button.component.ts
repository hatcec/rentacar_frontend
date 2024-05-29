import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() type:'button'| 'submit' |'reset' ='button';
  //@Input() variant:string='primary';
  @Input() variant: ButtonVariant = 'primary';//belirli bir tip alabilir ve tipler belirli
  @Output() click=new EventEmitter<MouseEvent>();//(click)=onClick(event);

  onClick(event: MouseEvent) {//button tıklandığında çalışacak
    //output eventini tetikleyebilirz.
    this.click.emit(event);
  }


  get buttonClass(): string {
    return `btn btn-${this.variant}`;
  }

}
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';
