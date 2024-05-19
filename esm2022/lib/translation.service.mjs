import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class TranslationService {
    constructor() {
        this.languageSubject = new BehaviorSubject('de');
        this.currentLanguage$ = this.languageSubject.asObservable();
        this.translations = {
            'de': {
                "accessFlow": {
                    "openSymbol": {
                        "label": "AccessFlow-Barrierefreiheitsmenü öffnen, um Einstellungen vorzunehmen."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Ansicht schließen"
                        }
                    },
                    "languages": {
                        "title": "Sprache ({{language}})",
                        "label": "Ermöglicht das Ändern der Sprache der AccessFlow-Oberfläche mit einem Klick.",
                        "input": {
                            "label": "Nach der gewünschten Sprache suchen."
                        },
                        "availableLanguages": {
                            "label": "Oberfläche auf die Sprache {{language}} umstellen."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Kontrast",
                            "label": "Stellt die Webseite in verschiedenen Kontraststufen dar."
                        },
                        "links": {
                            "title": "Links",
                            "label": "Hebt alle Links auf der Webseite farblich hervor."
                        },
                        "biggerText": {
                            "title": "Größerer Text",
                            "label": "Vergrößert die Schriftart relativ zur aktuellen Schriftgröße."
                        },
                        "textSpacing": {
                            "title": "Textabstand",
                            "label": "Erhöht den Abstand zwischen Zeichen und Wörtern."
                        },
                        "imagesRemove": {
                            "title": "Bilder entfernen",
                            "label": "Alle Bildelemente auf der Webseite werden ausgeblendet."
                        },
                        "lineHeight": {
                            "title": "Zeilenhöhe",
                            "label": "Die Zeilenhöhe wird bei jedem Textelement auf der Webseite erhöht."
                        },
                        "saturation": {
                            "title": "Sättigung",
                            "label": "Die Sättigung der Webseite wird erhöht bzw. verringert, um eine bessere Lesbarkeit zu gewährleisten."
                        },
                        "mouseCursor": {
                            "title": "Mauszeiger",
                            "label": "Der Mauszeiger wird um den Faktor 3 vergrößert, um ihn besser im Fokus zu haben."
                        },
                        "siteStructure": {
                            "title": "Seitenstruktur",
                            "label": "Alle Überschriften und Links werden nach ihrer Wichtigkeit sortiert untereinander aufgelistet, wodurch eine einfache Navigation durch die Seite ermöglicht wird."
                        },
                        "tooltips": {
                            "title": "Tooltips",
                            "label": "Alle Elemente, die ein `title`- oder `label`-Attribut besitzen, zeigen beim Überfahren mit der Maus einen sichtbaren Tooltip an."
                        },
                        "readableText": {
                            "title": "Lesbarer Text",
                            "label": "Um den Text besser lesbar zu machen, wird eine neue Schriftart geladen. Dabei wird auch eine speziell für Legastheniker geeignete Schriftart zur Auswahl gegeben."
                        },
                        "stopAnimation": {
                            "title": "Animationen stoppen",
                            "label": "Hält alle Videos und Animationen auf der gesamten Webseite an."
                        }
                    },
                    "reportError": {
                        "button": "Fehler melden",
                        "label": "Einen Fehler bei AccessFlow melden"
                    },
                    "overAccessFlow": {
                        "label": "Über Access-Flow"
                    }
                }
            }
        };
    }
    setLanguage(lang) {
        this.languageSubject.next(lang);
    }
    translate(key, params) {
        const lang = this.languageSubject.getValue();
        let translation = this.getTranslation(this.translations[lang], key.split('.'));
        if (params) {
            translation = this.replaceParams(translation, params);
        }
        return translation;
    }
    getTranslation(translations, keys) {
        return keys.reduce((obj, key) => obj && obj[key], translations) || keys.join('.');
    }
    replaceParams(translation, params) {
        return Object.keys(params).reduce((str, key) => {
            return str.replace(new RegExp(`{{${key}}}`, 'g'), params[key]);
        }, translation);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.8", ngImport: i0, type: TranslationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.8", ngImport: i0, type: TranslationService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.8", ngImport: i0, type: TranslationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FjY2Vzcy1mbG93L3NyYy9saWIvdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3ZDLE1BQU0sT0FBTyxrQkFBa0I7SUFIL0I7UUFJVSxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQzVELHFCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFL0MsaUJBQVksR0FBOEM7WUFDaEUsSUFBSSxFQUFFO2dCQUNKLFlBQVksRUFBRTtvQkFDWixZQUFZLEVBQUU7d0JBQ1osT0FBTyxFQUFFLHdFQUF3RTtxQkFDbEY7b0JBRUQsUUFBUSxFQUFFO3dCQUNSLFdBQVcsRUFBRTs0QkFDWCxPQUFPLEVBQUUsbUJBQW1CO3lCQUM3QjtxQkFDRjtvQkFFRCxXQUFXLEVBQUU7d0JBQ1gsT0FBTyxFQUFFLHdCQUF3Qjt3QkFDakMsT0FBTyxFQUFFLDhFQUE4RTt3QkFDdkYsT0FBTyxFQUFFOzRCQUNQLE9BQU8sRUFBRSxzQ0FBc0M7eUJBQ2hEO3dCQUNELG9CQUFvQixFQUFFOzRCQUNwQixPQUFPLEVBQUUsb0RBQW9EO3lCQUM5RDtxQkFDRjtvQkFFRCxPQUFPLEVBQUU7d0JBQ1AsVUFBVSxFQUFFOzRCQUNWLE9BQU8sRUFBRSxVQUFVOzRCQUNuQixPQUFPLEVBQUUsMERBQTBEO3lCQUNwRTt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsT0FBTyxFQUFFLE9BQU87NEJBQ2hCLE9BQU8sRUFBRSxtREFBbUQ7eUJBQzdEO3dCQUNELFlBQVksRUFBRTs0QkFDWixPQUFPLEVBQUUsZUFBZTs0QkFDeEIsT0FB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YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgbGFuZ3VhZ2VTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCdkZScpO1xuICBjdXJyZW50TGFuZ3VhZ2UkID0gdGhpcy5sYW5ndWFnZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB9ID0ge1xuICAgICdkZSc6IHtcbiAgICAgIFwiYWNjZXNzRmxvd1wiOiB7XG4gICAgICAgIFwib3BlblN5bWJvbFwiOiB7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcIkFjY2Vzc0Zsb3ctQmFycmllcmVmcmVpaGVpdHNtZW7DvCDDtmZmbmVuLCB1bSBFaW5zdGVsbHVuZ2VuIHZvcnp1bmVobWVuLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJoZWFkZXJcIjoge1xuICAgICAgICAgIFwiY2xvc2VJY29uXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJBbnNpY2h0IHNjaGxpZcOfZW5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcImxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIlNwcmFjaGUgKHt7bGFuZ3VhZ2V9fSlcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwiRXJtw7ZnbGljaHQgZGFzIMOEbmRlcm4gZGVyIFNwcmFjaGUgZGVyIEFjY2Vzc0Zsb3ctT2JlcmZsw6RjaGUgbWl0IGVpbmVtIEtsaWNrLlwiLFxuICAgICAgICAgIFwiaW5wdXRcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk5hY2ggZGVyIGdld8O8bnNjaHRlbiBTcHJhY2hlIHN1Y2hlbi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJhdmFpbGFibGVMYW5ndWFnZXNcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk9iZXJmbMOkY2hlIGF1ZiBkaWUgU3ByYWNoZSB7e2xhbmd1YWdlfX0gdW1zdGVsbGVuLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwidG9vbHNcIjoge1xuICAgICAgICAgIFwiY29udHJhc3RcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIktvbnRyYXN0XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiU3RlbGx0IGRpZSBXZWJzZWl0ZSBpbiB2ZXJzY2hpZWRlbmVuIEtvbnRyYXN0c3R1ZmVuIGRhci5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsaW5rc1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTGlua3NcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJIZWJ0IGFsbGUgTGlua3MgYXVmIGRlciBXZWJzZWl0ZSBmYXJibGljaCBoZXJ2b3IuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYmlnZ2VyVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiR3LDtsOfZXJlciBUZXh0XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVmVyZ3LDtsOfZXJ0IGRpZSBTY2hyaWZ0YXJ0IHJlbGF0aXYgenVyIGFrdHVlbGxlbiBTY2hyaWZ0Z3LDtsOfZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0ZXh0U3BhY2luZ1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGV4dGFic3RhbmRcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJFcmjDtmh0IGRlbiBBYnN0YW5kIHp3aXNjaGVuIFplaWNoZW4gdW5kIFfDtnJ0ZXJuLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImltYWdlc1JlbW92ZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQmlsZGVyIGVudGZlcm5lblwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFsbGUgQmlsZGVsZW1lbnRlIGF1ZiBkZXIgV2Vic2VpdGUgd2VyZGVuIGF1c2dlYmxlbmRldC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJaZWlsZW5ow7ZoZVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkRpZSBaZWlsZW5ow7ZoZSB3aXJkIGJlaSBqZWRlbSBUZXh0ZWxlbWVudCBhdWYgZGVyIFdlYnNlaXRlIGVyaMO2aHQuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2F0dXJhdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU8OkdHRpZ3VuZ1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkRpZSBTw6R0dGlndW5nIGRlciBXZWJzZWl0ZSB3aXJkIGVyaMO2aHQgYnp3LiB2ZXJyaW5nZXJ0LCB1bSBlaW5lIGJlc3NlcmUgTGVzYmFya2VpdCB6dSBnZXfDpGhybGVpc3Rlbi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3VzZUN1cnNvclwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTWF1c3plaWdlclwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkRlciBNYXVzemVpZ2VyIHdpcmQgdW0gZGVuIEZha3RvciAzIHZlcmdyw7bDn2VydCwgdW0gaWhuIGJlc3NlciBpbSBGb2t1cyB6dSBoYWJlbi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaXRlU3RydWN0dXJlXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTZWl0ZW5zdHJ1a3R1clwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFsbGUgw5xiZXJzY2hyaWZ0ZW4gdW5kIExpbmtzIHdlcmRlbiBuYWNoIGlocmVyIFdpY2h0aWdrZWl0IHNvcnRpZXJ0IHVudGVyZWluYW5kZXIgYXVmZ2VsaXN0ZXQsIHdvZHVyY2ggZWluZSBlaW5mYWNoZSBOYXZpZ2F0aW9uIGR1cmNoIGRpZSBTZWl0ZSBlcm3DtmdsaWNodCB3aXJkLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRvb2x0aXBzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUb29sdGlwc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFsbGUgRWxlbWVudGUsIGRpZSBlaW4gYHRpdGxlYC0gb2RlciBgbGFiZWxgLUF0dHJpYnV0IGJlc2l0emVuLCB6ZWlnZW4gYmVpbSDDnGJlcmZhaHJlbiBtaXQgZGVyIE1hdXMgZWluZW4gc2ljaHRiYXJlbiBUb29sdGlwIGFuLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlYWRhYmxlVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTGVzYmFyZXIgVGV4dFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlVtIGRlbiBUZXh0IGJlc3NlciBsZXNiYXIgenUgbWFjaGVuLCB3aXJkIGVpbmUgbmV1ZSBTY2hyaWZ0YXJ0IGdlbGFkZW4uIERhYmVpIHdpcmQgYXVjaCBlaW5lIHNwZXppZWxsIGbDvHIgTGVnYXN0aGVuaWtlciBnZWVpZ25ldGUgU2NocmlmdGFydCB6dXIgQXVzd2FobCBnZWdlYmVuLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkFuaW1hdGlvbmVuIHN0b3BwZW5cIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJIw6RsdCBhbGxlIFZpZGVvcyB1bmQgQW5pbWF0aW9uZW4gYXVmIGRlciBnZXNhbXRlbiBXZWJzZWl0ZSBhbi5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXBvcnRFcnJvclwiOiB7XG4gICAgICAgICAgXCJidXR0b25cIjogXCJGZWhsZXIgbWVsZGVuXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIkVpbmVuIEZlaGxlciBiZWkgQWNjZXNzRmxvdyBtZWxkZW5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm92ZXJBY2Nlc3NGbG93XCI6e1xuICAgICAgICAgIFwibGFiZWxcIjogXCLDnGJlciBBY2Nlc3MtRmxvd1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc2V0TGFuZ3VhZ2UobGFuZzogc3RyaW5nKSB7XG4gICAgdGhpcy5sYW5ndWFnZVN1YmplY3QubmV4dChsYW5nKTtcbiAgfVxuXG4gIHRyYW5zbGF0ZShrZXk6IHN0cmluZywgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHN0cmluZyB7XG4gICAgY29uc3QgbGFuZyA9IHRoaXMubGFuZ3VhZ2VTdWJqZWN0LmdldFZhbHVlKCk7XG4gICAgbGV0IHRyYW5zbGF0aW9uID0gdGhpcy5nZXRUcmFuc2xhdGlvbih0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSwga2V5LnNwbGl0KCcuJykpO1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIHRyYW5zbGF0aW9uID0gdGhpcy5yZXBsYWNlUGFyYW1zKHRyYW5zbGF0aW9uLCBwYXJhbXMpO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNsYXRpb247XG4gIH1cblxuICBwcml2YXRlIGdldFRyYW5zbGF0aW9uKHRyYW5zbGF0aW9uczogYW55LCBrZXlzOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGtleXMucmVkdWNlKChvYmosIGtleSkgPT4gb2JqICYmIG9ialtrZXldLCB0cmFuc2xhdGlvbnMpIHx8IGtleXMuam9pbignLicpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXBsYWNlUGFyYW1zKHRyYW5zbGF0aW9uOiBzdHJpbmcsIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhcmFtcykucmVkdWNlKChzdHIsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYHt7JHtrZXl9fX1gLCAnZycpLCBwYXJhbXNba2V5XSk7XG4gICAgfSwgdHJhbnNsYXRpb24pO1xuICB9XG59XG4iXX0=