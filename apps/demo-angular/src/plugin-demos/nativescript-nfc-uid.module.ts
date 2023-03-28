import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptNfcUidComponent } from './nativescript-nfc-uid.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptNfcUidComponent }])],
  declarations: [NativescriptNfcUidComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptNfcUidModule {}
