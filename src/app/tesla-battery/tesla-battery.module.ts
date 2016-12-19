/**
 * Created by jmlegrand on 18/12/16.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeslaBatteryService} from './tesla-battery.service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        TeslaBatteryService
    ],
    exports: []
})

export class TeslaBatteryModule {}