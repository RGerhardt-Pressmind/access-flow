import { PipeTransform } from '@angular/core';
import { TranslationService } from "./translation.service";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class TranslatePipe implements PipeTransform {
    private translationService;
    constructor(translationService: TranslationService);
    transform(value: string, params?: {
        [key: string]: string;
    }): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TranslatePipe, "translate", false>;
}
