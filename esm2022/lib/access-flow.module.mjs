import { NgModule } from '@angular/core';
import { AccessFlowComponent } from './access-flow.component';
import { createCustomElement } from "@angular/elements";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { TranslatePipe } from "./translate.pipe";
import { TranslationService } from "./translation.service";
import * as i0 from "@angular/core";
export class AccessFlowModule {
    constructor(injector) {
        this.injector = injector;
        const el = createCustomElement(AccessFlowComponent, { injector: this.injector });
        customElements.define('access-flow', el);
    }
    ngDoBootstrap() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.8", ngImport: i0, type: AccessFlowModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.8", ngImport: i0, type: AccessFlowModule, declarations: [AccessFlowComponent,
            TranslatePipe], imports: [CommonModule,
            HttpClientModule,
            FormsModule], exports: [TranslatePipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.8", ngImport: i0, type: AccessFlowModule, providers: [
            TranslationService
        ], imports: [CommonModule,
            HttpClientModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.8", ngImport: i0, type: AccessFlowModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AccessFlowComponent,
                        TranslatePipe
                    ],
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        FormsModule
                    ],
                    exports: [
                        TranslatePipe
                    ],
                    providers: [
                        TranslationService
                    ]
                }]
        }], ctorParameters: () => [{ type: i0.Injector }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLWZsb3cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYWNjZXNzLWZsb3cvc3JjL2xpYi9hY2Nlc3MtZmxvdy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF3QixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7O0FBbUJ6RCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDcEMsTUFBTSxFQUFFLEdBQUcsbUJBQW1CLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDakYsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGFBQWEsS0FBSSxDQUFDOzhHQU5QLGdCQUFnQjsrR0FBaEIsZ0JBQWdCLGlCQWZ6QixtQkFBbUI7WUFDbkIsYUFBYSxhQUdiLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsV0FBVyxhQUdYLGFBQWE7K0dBTUosZ0JBQWdCLGFBSmhCO1lBQ1Qsa0JBQWtCO1NBQ25CLFlBVEMsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixXQUFXOzsyRkFTRixnQkFBZ0I7a0JBakI1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixtQkFBbUI7d0JBQ25CLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixXQUFXO3FCQUNaO29CQUNELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3FCQUNkO29CQUNELFNBQVMsRUFBRTt3QkFDVCxrQkFBa0I7cUJBQ25CO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb0Jvb3RzdHJhcCwgSW5qZWN0b3IsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWNjZXNzRmxvd0NvbXBvbmVudH0gZnJvbSAnLi9hY2Nlc3MtZmxvdy5jb21wb25lbnQnO1xuaW1wb3J0IHtjcmVhdGVDdXN0b21FbGVtZW50fSBmcm9tIFwiQGFuZ3VsYXIvZWxlbWVudHNcIjtcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge1RyYW5zbGF0ZVBpcGV9IGZyb20gXCIuL3RyYW5zbGF0ZS5waXBlXCI7XG5pbXBvcnQge1RyYW5zbGF0aW9uU2VydmljZX0gZnJvbSBcIi4vdHJhbnNsYXRpb24uc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBY2Nlc3NGbG93Q29tcG9uZW50LFxuICAgIFRyYW5zbGF0ZVBpcGVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUcmFuc2xhdGVQaXBlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFRyYW5zbGF0aW9uU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFjY2Vzc0Zsb3dNb2R1bGUgaW1wbGVtZW50cyBEb0Jvb3RzdHJhcCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgY29uc3QgZWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KEFjY2Vzc0Zsb3dDb21wb25lbnQsIHsgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhY2Nlc3MtZmxvdycsIGVsKTtcbiAgfVxuXG4gIG5nRG9Cb290c3RyYXAoKSB7fVxufVxuIl19