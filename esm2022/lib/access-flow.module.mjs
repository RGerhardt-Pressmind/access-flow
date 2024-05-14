import { NgModule } from '@angular/core';
import { AccessFlowComponent } from './access-flow.component';
import { createCustomElement } from "@angular/elements";
import { NgClass, NgForOf, NgStyle } from "@angular/common";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { FormsModule } from "@angular/forms";
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export function createTranslateLoader(http) {
    if (window.location.hostname === 'localhost') {
        return new TranslateHttpLoader(http, 'https://accessflow:3352/assets/i18n/', '.json');
    }
    else {
        return new TranslateHttpLoader(http, 'https://d1tuhzlbrb3etd.cloudfront.net/assets/i18n/', '.json');
    }
}
export class AccessFlowModule {
    constructor(injector) {
        this.injector = injector;
        const el = createCustomElement(AccessFlowComponent, { injector: this.injector });
        customElements.define('access-flow', el);
    }
    ngDoBootstrap() {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.8", ngImport: i0, type: AccessFlowModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.8", ngImport: i0, type: AccessFlowModule, declarations: [AccessFlowComponent], imports: [NgStyle, NgClass, HttpClientModule, i1.TranslateModule, NgForOf, FormsModule], exports: [TranslateModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.8", ngImport: i0, type: AccessFlowModule, imports: [HttpClientModule, TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [HttpClient]
                }
            }), FormsModule, TranslateModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.8", ngImport: i0, type: AccessFlowModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AccessFlowComponent
                    ],
                    imports: [NgStyle, NgClass, HttpClientModule, TranslateModule.forRoot({
                            loader: {
                                provide: TranslateLoader,
                                useFactory: (createTranslateLoader),
                                deps: [HttpClient]
                            }
                        }), NgForOf, FormsModule],
                    exports: [
                        TranslateModule
                    ]
                }]
        }], ctorParameters: () => [{ type: i0.Injector }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLWZsb3cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYWNjZXNzLWZsb3cvc3JjL2xpYi9hY2Nlc3MtZmxvdy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFXLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxVQUFVLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7OztBQUUzQyxNQUFNLFVBQVUscUJBQXFCLENBQUMsSUFBZ0I7SUFDcEQsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxXQUFXLEVBQUUsQ0FBQztRQUM3QyxPQUFPLElBQUksbUJBQW1CLENBQUMsSUFBSSxFQUFFLHNDQUFzQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hGLENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxJQUFJLG1CQUFtQixDQUFDLElBQUksRUFBRSxvREFBb0QsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0RyxDQUFDO0FBQ0gsQ0FBQztBQWlCRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDcEMsTUFBTSxFQUFFLEdBQUcsbUJBQW1CLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7UUFDL0UsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGFBQWE7SUFDYixDQUFDOzhHQVBVLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGlCQWJ6QixtQkFBbUIsYUFFWCxPQUFPLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixzQkFNeEMsT0FBTyxFQUFFLFdBQVcsYUFFdEIsZUFBZTsrR0FHTixnQkFBZ0IsWUFYQyxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsT0FBTyxDQUFDO2dCQUNwRSxNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNuQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7aUJBQ25CO2FBQ0YsQ0FBQyxFQUFXLFdBQVcsRUFFdEIsZUFBZTs7MkZBR04sZ0JBQWdCO2tCQWY1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQzs0QkFDcEUsTUFBTSxFQUFFO2dDQUNOLE9BQU8sRUFBRSxlQUFlO2dDQUN4QixVQUFVLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQ0FDbkMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDOzZCQUNuQjt5QkFDRixDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQztvQkFDekIsT0FBTyxFQUFFO3dCQUNQLGVBQWU7cUJBQ2hCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RvciwgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY2Nlc3NGbG93Q29tcG9uZW50fSBmcm9tICcuL2FjY2Vzcy1mbG93LmNvbXBvbmVudCc7XG5pbXBvcnQge2NyZWF0ZUN1c3RvbUVsZW1lbnR9IGZyb20gXCJAYW5ndWxhci9lbGVtZW50c1wiO1xuaW1wb3J0IHtOZ0NsYXNzLCBOZ0Zvck9mLCBOZ1N0eWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1RyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlTW9kdWxlfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7VHJhbnNsYXRlSHR0cExvYWRlcn0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyXCI7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zbGF0ZUxvYWRlcihodHRwOiBIdHRwQ2xpZW50KSB7XG4gIGlmICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnKSB7XG4gICAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHAsICdodHRwczovL2FjY2Vzc2Zsb3c6MzM1Mi9hc3NldHMvaTE4bi8nLCAnLmpzb24nKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IFRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCwgJ2h0dHBzOi8vZDF0dWh6bGJyYjNldGQuY2xvdWRmcm9udC5uZXQvYXNzZXRzL2kxOG4vJywgJy5qc29uJyk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQWNjZXNzRmxvd0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbTmdTdHlsZSwgTmdDbGFzcywgSHR0cENsaWVudE1vZHVsZSwgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgIGxvYWRlcjoge1xuICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgdXNlRmFjdG9yeTogKGNyZWF0ZVRyYW5zbGF0ZUxvYWRlciksXG4gICAgICBkZXBzOiBbSHR0cENsaWVudF1cbiAgICB9XG4gIH0pLCBOZ0Zvck9mLCBGb3Jtc01vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBUcmFuc2xhdGVNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBY2Nlc3NGbG93TW9kdWxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCBlbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoQWNjZXNzRmxvd0NvbXBvbmVudCwge2luamVjdG9yOiB0aGlzLmluamVjdG9yfSk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhY2Nlc3MtZmxvdycsIGVsKTtcbiAgfVxuXG4gIG5nRG9Cb290c3RyYXAoKSB7XG4gIH1cbn1cbiJdfQ==