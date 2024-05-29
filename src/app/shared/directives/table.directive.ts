import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTable]',
  standalone: true,
})
export class TableDirective implements OnInit{
  //directives Angular tarafından bir elementin özellliklerini genişletmek veya düzenlemek için kullanılır.
  constructor(private elementRef:ElementRef){}//elementref: directive'i uyguladığımız elementin referansını alır.
  ngOnInit(): void {
    (this.elementRef.nativeElement as HTMLTableElement).classList.add('table');//table stil classı ekledik.
    
  }
 }
