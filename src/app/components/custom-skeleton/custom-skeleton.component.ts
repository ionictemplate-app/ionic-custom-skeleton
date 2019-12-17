import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-skeleton',
    templateUrl: './custom-skeleton.component.html',
    styleUrls: ['./custom-skeleton.component.scss'],
})
export class CustomSkeletonComponent {
    @Input() avatar = false;
    list = [1];

    @Input() set rows(val: number) {
        this.list = Array.from({length: val}, (v, i) => i);
    }

    constructor() {
    }
}
