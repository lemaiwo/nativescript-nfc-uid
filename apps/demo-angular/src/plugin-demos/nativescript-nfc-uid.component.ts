import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptNfcUid } from '@demo/shared';
import { } from 'nativescript-nfc-uid';

@Component({
	selector: 'demo-nativescript-nfc-uid',
	templateUrl: 'nativescript-nfc-uid.component.html',
})
export class NativescriptNfcUidComponent {
  
  demoShared: DemoSharedNativescriptNfcUid;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptNfcUid();
  }

}