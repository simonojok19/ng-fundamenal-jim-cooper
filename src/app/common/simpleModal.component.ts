import {Component, ElementRef, Inject, Input, ViewChild} from '@angular/core';
import {JQ_TOKEN} from './index';

@Component({
  selector: 'simple-modal',
  template: `
    <div id="{{ elementId }}" class="modal fade" tabindex="-1" #modalContainer>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span>x</span></button>
                    <h4 class="modal-title">{{ title }}</h4>
                </div>
                <div class="modal-body" (click)="closeModal">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    </div>
  `,
  styles: [`
    .modal-body { height: 250px; overflow-y: scroll;}
  `]
})
export class SimpleModalComponent {
  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('modalContainer') comtainerEl: ElementRef;
  constructor(@Inject(JQ_TOKEN) private $: any) {}
  closeModal() {
    this.$(this.comtainerEl.nativeElement).modal('hide');
  }
}
