import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    isAvatar = true;
    isLoading = true;
    list = [
        {
            name: 'Girl, Kayak, Canoe',
            content: '',
            img: 'assets/images/list/1.jpg',
            isOpen: false
        },
        {
            name: 'Sport, Strength Training',
            content: '',
            img: 'assets/images/list/2.jpg',
            isOpen: false
        },
        {
            name: 'Motorcycle, Speed, Helmet',
            content: '',
            img: 'assets/images/list/3.jpg',
            isOpen: false
        },
        {
            name: 'Sport,Training,Sixpack',
            content: '',
            img: 'assets/images/list/4.jpg',
            isOpen: false
        },
        {
            name: 'Training,Arms,Blonde',
            content: '',
            img: 'assets/images/list/5.jpg',
            isOpen: false
        },
        {
            name: 'Football Boot, Sport',
            content: '',
            img: 'assets/images/list/6.jpg',
            isOpen: false
        },
        {
            name: 'SurfboardWater Sports',
            content: '',
            img: 'assets/images/list/7.jpg',
            isOpen: false
        },
        {
            name: 'Ski Touring, Backcountry Skiing',
            content: '',
            img: 'assets/images/list/8.jpg',
            isOpen: false
        },
        {
            name: 'Pose, Fitness, Girl',
            content: '',
            img: 'assets/images/list/9.jpg',
            isOpen: false
        },
        {
            name: 'Ski Touring, Backcountry Skiing',
            content: '',
            img: 'assets/images/list/10.jpg',
            isOpen: false
        },
        {
            name: 'Pose, Fitness, Girl',
            content: '',
            img: 'assets/images/list/11.jpg',
            isOpen: false
        }
    ];

    constructor() {
    }

    onToggle() {
        this.isLoading = !this.isLoading;
    }

    onToggleDisplay() {
        this.isAvatar = !this.isAvatar;
    }

}
