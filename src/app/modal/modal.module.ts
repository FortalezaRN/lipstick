import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './modal.component';

@NgModule({
    imports: [IonicModule],
    declarations: [ModalComponent],
    entryComponents: [ModalComponent],
    exports: [ModalComponent]
})

export class ModalComponentModule { }