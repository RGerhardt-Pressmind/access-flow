import { Injector } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import * as i0 from "@angular/core";
import * as i1 from "./access-flow.component";
import * as i2 from "@angular/common";
import * as i3 from "@angular/common/http";
import * as i4 from "@ngx-translate/core";
import * as i5 from "@angular/forms";
export declare function createTranslateLoader(http: HttpClient): TranslateHttpLoader;
export declare class AccessFlowModule {
    private injector;
    constructor(injector: Injector);
    ngDoBootstrap(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccessFlowModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AccessFlowModule, [typeof i1.AccessFlowComponent], [typeof i2.NgStyle, typeof i2.NgClass, typeof i3.HttpClientModule, typeof i4.TranslateModule, typeof i2.NgForOf, typeof i5.FormsModule], [typeof i4.TranslateModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AccessFlowModule>;
}
