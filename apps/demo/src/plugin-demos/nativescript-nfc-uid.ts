import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptNfcUid } from '@demo/shared';
import { } from 'nativescript-nfc-uid';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptNfcUid {
	
}
