import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomSkeletonComponent} from './custom-skeleton/custom-skeleton.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot(),
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        CustomSkeletonComponent
    ],
    exports: [
        CustomSkeletonComponent
    ],
    entryComponents: [],
})
export class ComponentsModule {
}
