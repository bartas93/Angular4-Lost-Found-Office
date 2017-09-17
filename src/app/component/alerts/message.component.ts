import { Component, Inject } from '@angular/core';
import { MD_SNACK_BAR_DATA } from '@angular/material'

@Component({
    selector: 'message.component',
    templateUrl: 'message.component.html',
    styleUrls: ['message.component.css'],
})
export class MessageComponent {
    constructor( @Inject(MD_SNACK_BAR_DATA) public data: any) { }
}