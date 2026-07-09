import { 
  Component, 
  Input, 
  OnChanges, 
  SimpleChanges, 
  OnInit, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child 
implements OnChanges, 
OnInit, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked, 
OnDestroy {
  @Input() studentName!: string;
  @ViewChild('txtStudent')
  txtStudent!: ElementRef;
  
  constructor() {
    console.log('1. Child Constructor Called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. Child ngOnChanges Called');
    console.log(changes);
  }
  
  ngOnInit(): void {
    console.log('3. Child ngOnInit Called');
  }

  ngDoCheck(): void {
    console.log('4. Child ngDoCheck Called');
  }

  ngAfterContentInit(): void {
    console.log('5. Child ngAfterContentInit Called');
  }

  ngAfterContentChecked(): void {
    console.log('6. Child ngAfterContentChecked Called');
  }

  ngAfterViewInit(): void {
    console.log('7. Child ngAfterViewInit Called');
    this.txtStudent.nativeElement.value = this.studentName;
  }

  ngAfterViewChecked(): void {
    console.log('8. Child ngAfterViewChecked Called');
  }

  ngOnDestroy(): void {
    console.log('9. Child ngOnDestroy Called');
  }
}
