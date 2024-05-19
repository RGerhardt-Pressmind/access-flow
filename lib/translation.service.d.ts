import * as i0 from "@angular/core";
export declare class TranslationService {
    private languageSubject;
    currentLanguage$: import("rxjs").Observable<string>;
    private translations;
    setLanguage(lang: string): void;
    translate(key: string, params?: {
        [key: string]: string;
    }): string;
    private getTranslation;
    private replaceParams;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TranslationService>;
}
