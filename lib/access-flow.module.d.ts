import { DoBootstrap, Injector } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./access-flow.component";
import * as i2 from "./translate.pipe";
import * as i3 from "@angular/common";
import * as i4 from "@angular/common/http";
import * as i5 from "@angular/forms";
export declare class AccessFlowModule implements DoBootstrap {
    private injector;
    constructor(injector: Injector);
    ngDoBootstrap(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccessFlowModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AccessFlowModule, [typeof i1.AccessFlowComponent, typeof i2.TranslatePipe], [typeof i3.CommonModule, typeof i4.HttpClientModule, typeof i5.FormsModule], [typeof i2.TranslatePipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AccessFlowModule>;
}
