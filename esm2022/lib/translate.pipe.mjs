import { Pipe } from '@angular/core';
import { map } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "./translation.service";
export class TranslatePipe {
    constructor(translationService) {
        this.translationService = translationService;
    }
    transform(value, params) {
        return this.translationService.currentLanguage$.pipe(map(() => {
            return this.translationService.translate(value, params);
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.8", ngImport: i0, type: TranslatePipe, deps: [{ token: i1.TranslationService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.3.8", ngImport: i0, type: TranslatePipe, name: "translate", pure: false }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.8", ngImport: i0, type: TranslatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'translate',
                    pure: false
                }]
        }], ctorParameters: () => [{ type: i1.TranslationService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hY2Nlc3MtZmxvdy9zcmMvbGliL3RyYW5zbGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBQyxHQUFHLEVBQWEsTUFBTSxNQUFNLENBQUM7OztBQU1yQyxNQUFNLE9BQU8sYUFBYTtJQUV4QixZQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUFHLENBQUM7SUFFOUQsU0FBUyxDQUFDLEtBQWEsRUFBRSxNQUFrQztRQUN6RCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQ2xELEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzhHQVZVLGFBQWE7NEdBQWIsYUFBYTs7MkZBQWIsYUFBYTtrQkFKekIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsV0FBVztvQkFDakIsSUFBSSxFQUFFLEtBQUs7aUJBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RyYW5zbGF0aW9uU2VydmljZX0gZnJvbSBcIi4vdHJhbnNsYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHttYXAsIE9ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RyYW5zbGF0ZScsXG4gIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UuY3VycmVudExhbmd1YWdlJC5waXBlKFxuICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnRyYW5zbGF0ZSh2YWx1ZSwgcGFyYW1zKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19