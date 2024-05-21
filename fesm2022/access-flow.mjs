import * as i0 from '@angular/core';
import { Injectable, Pipe, Component, Inject, ViewChild, Input, HostListener, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import { BehaviorSubject, map } from 'rxjs';
import * as i3 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

class TranslationService {
    constructor() {
        this.languageSubject = new BehaviorSubject('de');
        this.currentLanguage$ = this.languageSubject.asObservable();
        this.translations = {
            "de": {
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
            },
            "en": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Open the AccessFlow accessibility menu to make settings."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Close view"
                        }
                    },
                    "languages": {
                        "title": "Language ({{language}})",
                        "label": "Allows you to change the language of the AccessFlow interface with one click.",
                        "input": {
                            "label": "Search for the desired language."
                        },
                        "availableLanguages": {
                            "label": "Switch the interface to the {{language}} language."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Contrast",
                            "label": "Displays the website in different contrast levels."
                        },
                        "links": {
                            "title": "Links",
                            "label": "Highlights all links on the website in colour."
                        },
                        "biggerText": {
                            "title": "Larger text",
                            "label": "Enlarges the font relative to the current font size."
                        },
                        "textSpacing": {
                            "title": "Text spacing",
                            "label": "Increases the space between characters and words."
                        },
                        "imagesRemove": {
                            "title": "Remove images",
                            "label": "All image elements on the website are hidden."
                        },
                        "lineHeight": {
                            "title": "Line height",
                            "label": "The line height is increased for each text element on the web page."
                        },
                        "saturation": {
                            "title": "Saturation",
                            "label": "The saturation of the website is increased or decreased to ensure better readability."
                        },
                        "mouseCursor": {
                            "title": "Mouse pointer",
                            "label": "The mouse pointer is enlarged by a factor of 3 in order to have it better in focus."
                        },
                        "siteStructure": {
                            "title": "Page structure",
                            "label": "All headings and links are listed one below the other in order of importance, making it easy to navigate through the page."
                        },
                        "tooltips": {
                            "title": "Tooltips",
                            "label": "All elements that have a `title` or `label` attribute display a visible tooltip when hovering over them with the mouse."
                        },
                        "readableText": {
                            "title": "Readable text",
                            "label": "A new font is loaded to make the text easier to read. A font especially suitable for dyslexics is also provided for selection."
                        },
                        "stopAnimation": {
                            "title": "Stop animations",
                            "label": "Pauses all videos and animations on the entire website."
                        }
                    },
                    "reportError": {
                        "button": "Report error",
                        "label": "Report an error with AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "About Access-Flow"
                    }
                }
            },
            "ar": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "افتح قائمة إمكانية الوصول إلى AccessFlow لضبط الإعدادات."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "عرض قريب"
                        }
                    },
                    "languages": {
                        "title": "اللغة ({{language}})",
                        "label": "يتيح لك تغيير لغة واجهة AccessFlow بنقرة واحدة.",
                        "input": {
                            "label": "ابحث عن اللغة المطلوبة."
                        },
                        "availableLanguages": {
                            "label": "قم بتبديل الواجهة إلى لغة {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "التباين",
                            "label": "يعرض الموقع الإلكتروني بمستويات تباين مختلفة."
                        },
                        "links": {
                            "title": "الروابط",
                            "label": "إبراز جميع الروابط على الموقع الإلكتروني بالألوان."
                        },
                        "biggerText": {
                            "title": "نص أكبر",
                            "label": "تكبير الخط بالنسبة لحجم الخط الحالي."
                        },
                        "textSpacing": {
                            "title": "تباعد النص",
                            "label": "يزيد المسافة بين الأحرف والكلمات."
                        },
                        "imagesRemove": {
                            "title": "إزالة الصور",
                            "label": "جميع عناصر الصور على الموقع الإلكتروني مخفية."
                        },
                        "lineHeight": {
                            "title": "ارتفاع الخط",
                            "label": "يتم زيادة ارتفاع السطر لكل عنصر نصي على صفحة الويب."
                        },
                        "saturation": {
                            "title": "التشبع",
                            "label": "يتم زيادة أو تقليل تشبع الموقع الإلكتروني لضمان سهولة القراءة بشكل أفضل."
                        },
                        "mouseCursor": {
                            "title": "مؤشر الماوس",
                            "label": "يتم تكبير مؤشر الفأرة بمعامل 3 من أجل الحصول على تركيز أفضل."
                        },
                        "siteStructure": {
                            "title": "هيكل الصفحة",
                            "label": "جميع العناوين والروابط مدرجة واحدة أسفل الأخرى بالترتيب حسب الأهمية، مما يسهل التنقل عبر الصفحة."
                        },
                        "tooltips": {
                            "title": "تلميحات الأدوات",
                            "label": "تعرض جميع العناصر التي تحتوي على سمة \"العنوان\" أو \"التسمية\" تلميح أداة مرئي عند التمرير فوقها بالماوس."
                        },
                        "readableText": {
                            "title": "نص قابل للقراءة",
                            "label": "يتم تحميل خط جديد لتسهيل قراءة النص. كما يتم توفير خط مناسب خصيصاً لمصابي عسر القراءة للاختيار."
                        },
                        "stopAnimation": {
                            "title": "إيقاف الرسوم المتحركة",
                            "label": "إيقاف جميع مقاطع الفيديو والرسوم المتحركة مؤقتاً على الموقع الإلكتروني بالكامل."
                        }
                    },
                    "reportError": {
                        "button": "الإبلاغ عن خطأ",
                        "label": "الإبلاغ عن خطأ في AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "حول Access-Flow"
                    }
                }
            },
            "bg": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Отворете менюто за достъпност на AccessFlow, за да направите настройки."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Изглед отблизо"
                        }
                    },
                    "languages": {
                        "title": "Език ({{language}})",
                        "label": "Позволява ви да промените езика на интерфейса на AccessFlow с едно кликване.",
                        "input": {
                            "label": "Потърсете желания език."
                        },
                        "availableLanguages": {
                            "label": "Превключване на интерфейса на езика {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Контраст",
                            "label": "Показва уебсайта в различни нива на контраст."
                        },
                        "links": {
                            "title": "Връзки",
                            "label": "Подчертава всички връзки в уебсайта в цвят."
                        },
                        "biggerText": {
                            "title": "По-голям текст",
                            "label": "Увеличава шрифта спрямо текущия размер на шрифта."
                        },
                        "textSpacing": {
                            "title": "Разстояние между текстовете",
                            "label": "Увеличава разстоянието между символите и думите."
                        },
                        "imagesRemove": {
                            "title": "Премахване на изображения",
                            "label": "Всички елементи на изображенията в уебсайта са скрити."
                        },
                        "lineHeight": {
                            "title": "Височина на линията",
                            "label": "Височината на реда се увеличава за всеки текстов елемент в уеб страницата."
                        },
                        "saturation": {
                            "title": "Насищане",
                            "label": "Наситеността на уебсайта се увеличава или намалява, за да се осигури по-добра четливост."
                        },
                        "mouseCursor": {
                            "title": "Показалец на мишката",
                            "label": "Показалецът на мишката е увеличен 3 пъти, за да се фокусира по-добре."
                        },
                        "siteStructure": {
                            "title": "Структура на страницата",
                            "label": "Всички заглавия и връзки са подредени едно под друго по важност, което улеснява навигацията в страницата."
                        },
                        "tooltips": {
                            "title": "Съвети за инструменти",
                            "label": "Всички елементи, които имат атрибут `title` или `label`, показват видима подсказка, когато минете над тях с мишката."
                        },
                        "readableText": {
                            "title": "Четим текст",
                            "label": "Зарежда се нов шрифт, за да се чете по-лесно текстът. Предоставен е за избор и шрифт, особено подходящ за дислексици."
                        },
                        "stopAnimation": {
                            "title": "Спиране на анимациите",
                            "label": "Спира на пауза всички видеоклипове и анимации в целия уебсайт."
                        }
                    },
                    "reportError": {
                        "button": "Докладване на грешка",
                        "label": "Докладване на грешка с AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "За Access-Flow"
                    }
                }
            },
            "zh": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "打开 AccessFlow 可访问性菜单进行设置。"
                    },
                    "header": {
                        "closeIcon": {
                            "label": "近观"
                        }
                    },
                    "languages": {
                        "title": "语言 ({{language}})",
                        "label": "允许您单击更改 AccessFlow 界面的语言。",
                        "input": {
                            "label": "搜索所需的语言。"
                        },
                        "availableLanguages": {
                            "label": "将界面切换为 {{language}} 语言。"
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "对比",
                            "label": "以不同的对比度显示网站。"
                        },
                        "links": {
                            "title": "链接",
                            "label": "用彩色突出显示网站上的所有链接。"
                        },
                        "biggerText": {
                            "title": "放大文本",
                            "label": "相对于当前字体大小放大字体。"
                        },
                        "textSpacing": {
                            "title": "文本间距",
                            "label": "增加字符和单词之间的空格。"
                        },
                        "imagesRemove": {
                            "title": "删除图像",
                            "label": "网站上的所有图像元素都是隐藏的。"
                        },
                        "lineHeight": {
                            "title": "线条高度",
                            "label": "网页上每个文本元素的行高都会增加。"
                        },
                        "saturation": {
                            "title": "饱和度",
                            "label": "提高或降低网站的饱和度，以确保更好的可读性。"
                        },
                        "mouseCursor": {
                            "title": "鼠标指针",
                            "label": "鼠标指针放大了 3 倍，以便更好地对焦。"
                        },
                        "siteStructure": {
                            "title": "页面结构",
                            "label": "所有标题和链接都按重要程度一一对应排列，便于浏览页面。"
                        },
                        "tooltips": {
                            "title": "工具提示",
                            "label": "当鼠标悬停在所有具有 \"标题 \"或 \"标签 \"属性的元素上时，它们都会显示可见的工具提示。"
                        },
                        "readableText": {
                            "title": "可读文本",
                            "label": "加载了一种新字体，使文本更易于阅读。还提供了一种特别适合阅读障碍患者的字体供选择。"
                        },
                        "stopAnimation": {
                            "title": "停止动画",
                            "label": "暂停整个网站上的所有视频和动画。"
                        }
                    },
                    "reportError": {
                        "button": "报告错误",
                        "label": "报告 AccessFlow 中的错误"
                    },
                    "overAccessFlow": {
                        "label": "关于 Access-Flow"
                    }
                }
            },
            "da": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Åbn AccessFlow-tilgængelighedsmenuen for at foretage indstillinger."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Nærbillede"
                        }
                    },
                    "languages": {
                        "title": "Sprog ({{language}})",
                        "label": "Giver dig mulighed for at ændre sproget i AccessFlow-grænsefladen med et enkelt klik.",
                        "input": {
                            "label": "Søg efter det ønskede sprog."
                        },
                        "availableLanguages": {
                            "label": "Skift grænseflade til sproget {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Kontraster",
                            "label": "Viser hjemmesiden i forskellige kontrastniveauer."
                        },
                        "links": {
                            "title": "Links",
                            "label": "Fremhæver alle links på hjemmesiden i farver."
                        },
                        "biggerText": {
                            "title": "Større tekst",
                            "label": "Forstørrer skrifttypen i forhold til den aktuelle skriftstørrelse."
                        },
                        "textSpacing": {
                            "title": "Afstand mellem tekster",
                            "label": "Øger afstanden mellem tegn og ord."
                        },
                        "imagesRemove": {
                            "title": "Fjern billeder",
                            "label": "Alle billedelementer på hjemmesiden er skjulte."
                        },
                        "lineHeight": {
                            "title": "Linjehøjde",
                            "label": "Linjehøjden øges for hvert tekstelement på websiden."
                        },
                        "saturation": {
                            "title": "Mætning",
                            "label": "Mætningen på hjemmesiden øges eller mindskes for at sikre bedre læsbarhed."
                        },
                        "mouseCursor": {
                            "title": "Musemarkør",
                            "label": "Musemarkøren er forstørret med en faktor 3 for at få den bedre i fokus."
                        },
                        "siteStructure": {
                            "title": "Sidens struktur",
                            "label": "Alle overskrifter og links er listet under hinanden i prioriteret rækkefølge, så det er nemt at navigere rundt på siden."
                        },
                        "tooltips": {
                            "title": "Værktøjstip",
                            "label": "Alle elementer, der har en `title`- eller `label`-attribut, viser et synligt værktøjstip, når man holder musen over dem."
                        },
                        "readableText": {
                            "title": "Læsbar tekst",
                            "label": "En ny skrifttype er indlæst for at gøre teksten lettere at læse. Der kan også vælges en skrifttype, der er særligt velegnet til ordblinde."
                        },
                        "stopAnimation": {
                            "title": "Stop animationer",
                            "label": "Sætter alle videoer og animationer på pause på hele websitet."
                        }
                    },
                    "reportError": {
                        "button": "Rapporter fejl",
                        "label": "Rapporter en fejl med AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "Om Access-Flow"
                    }
                }
            },
            "et": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Seadete tegemiseks avage AccessFlow ligipääsetavuse menüü."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Lähivaade"
                        }
                    },
                    "languages": {
                        "title": "Keel ({{language}})",
                        "label": "Võimaldab AccessFlow kasutajaliidese keelt ühe klõpsuga muuta.",
                        "input": {
                            "label": "Otsige soovitud keel."
                        },
                        "availableLanguages": {
                            "label": "Vahetage kasutajaliides {{language}} keelele."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Kontrast",
                            "label": "Kuvab veebisaidi eri kontrastitasemetel."
                        },
                        "links": {
                            "title": "Lingid",
                            "label": "Rõhutab kõiki veebilehel olevaid linke värviliselt."
                        },
                        "biggerText": {
                            "title": "Suurem tekst",
                            "label": "Suurendab kirjastiili praeguse kirjasuuruse suhtes."
                        },
                        "textSpacing": {
                            "title": "Teksti vahekaugus",
                            "label": "Suurendab tähemärkide ja sõnade vahelist ruumi."
                        },
                        "imagesRemove": {
                            "title": "Piltide eemaldamine",
                            "label": "Kõik veebilehe pildielemendid on peidetud."
                        },
                        "lineHeight": {
                            "title": "Joone kõrgus",
                            "label": "Ridade kõrgust suurendatakse iga veebilehe tekstielemendi puhul."
                        },
                        "saturation": {
                            "title": "Küllastumine",
                            "label": "Parema loetavuse tagamiseks suurendatakse või vähendatakse veebilehe küllastust."
                        },
                        "mouseCursor": {
                            "title": "Hiire osuti",
                            "label": "Hiirekursorit suurendatakse 3 korda, et see oleks paremini fookuses."
                        },
                        "siteStructure": {
                            "title": "Lehekülje struktuur",
                            "label": "Kõik rubriigid ja lingid on loetletud üksteise all tähtsuse järjekorras, mis hõlbustab lehel navigeerimist."
                        },
                        "tooltips": {
                            "title": "Tööriistad",
                            "label": "Kõik elemendid, millel on atribuut \"pealkiri\" või \"silt\", kuvavad hiirega nende kohal hõljudes nähtava vihje."
                        },
                        "readableText": {
                            "title": "Loetav tekst",
                            "label": "Teksti paremaks loetavuseks laaditakse uus font. Valimiseks on ette nähtud ka spetsiaalselt düsleksiklastele sobiv kirjatüüp."
                        },
                        "stopAnimation": {
                            "title": "Stopp-animatsioonid",
                            "label": "Peatab kõik videod ja animatsioonid kogu veebisaidil."
                        }
                    },
                    "reportError": {
                        "button": "Vea teatamine",
                        "label": "Teatage veast AccessFlow'ga"
                    },
                    "overAccessFlow": {
                        "label": "Access-Flow'st"
                    }
                }
            },
            "fi": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Avaa AccessFlow-yhteensopivuusvalikko asetusten tekemistä varten."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Lähikuva"
                        }
                    },
                    "languages": {
                        "title": "Kieli ({{language}})",
                        "label": "Voit vaihtaa AccessFlow-käyttöliittymän kielen yhdellä napsautuksella.",
                        "input": {
                            "label": "Etsi haluamasi kieli."
                        },
                        "availableLanguages": {
                            "label": "Vaihda käyttöliittymä {{language}}-kielelle."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Kontrasti",
                            "label": "Näyttää verkkosivuston eri kontrastitasoilla."
                        },
                        "links": {
                            "title": "Linkit",
                            "label": "Korostaa kaikki verkkosivuston linkit värillisinä."
                        },
                        "biggerText": {
                            "title": "Suurempi teksti",
                            "label": "Suurentaa fonttia suhteessa nykyiseen fonttikokoon."
                        },
                        "textSpacing": {
                            "title": "Tekstiväli",
                            "label": "Lisää merkkien ja sanojen välistä tilaa."
                        },
                        "imagesRemove": {
                            "title": "Poista kuvat",
                            "label": "Kaikki verkkosivuston kuvaelementit on piilotettu."
                        },
                        "lineHeight": {
                            "title": "Viivan korkeus",
                            "label": "Rivikorkeutta kasvatetaan jokaiselle verkkosivun tekstielementille."
                        },
                        "saturation": {
                            "title": "Saturaatio",
                            "label": "Sivuston värikylläisyyttä lisätään tai vähennetään paremman luettavuuden varmistamiseksi."
                        },
                        "mouseCursor": {
                            "title": "Hiiren osoitin",
                            "label": "Hiiren osoitin on suurennettu 3-kertaiseksi, jotta se olisi paremmin tarkennettu."
                        },
                        "siteStructure": {
                            "title": "Sivun rakenne",
                            "label": "Kaikki otsikot ja linkit on lueteltu tärkeysjärjestyksessä toistensa alapuolella, joten sivulla on helppo navigoida."
                        },
                        "tooltips": {
                            "title": "Työkaluvihjeet",
                            "label": "Kaikki elementit, joilla on `title`- tai `label`-attribuutti, näyttävät näkyvän työkaluvihjeen, kun viet hiiren hiiren niiden päälle."
                        },
                        "readableText": {
                            "title": "Luettava teksti",
                            "label": "Uusi fontti ladataan, jotta teksti olisi helpommin luettavissa. Valittavana on myös erityisesti lukihäiriöisille sopiva fontti."
                        },
                        "stopAnimation": {
                            "title": "Pysäytä animaatiot",
                            "label": "Pysäyttää kaikki videot ja animaatiot koko verkkosivustolla."
                        }
                    },
                    "reportError": {
                        "button": "Ilmoita virhe",
                        "label": "Ilmoita virhe AccessFlow'n kanssa"
                    },
                    "overAccessFlow": {
                        "label": "Tietoja Access-Flow'sta"
                    }
                }
            },
            "fr": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Ouvrir le menu d'accessibilité d'AccessFlow pour effectuer des réglages."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Fermer la vue"
                        }
                    },
                    "languages": {
                        "title": "Langue ({{language}})",
                        "label": "Permet de changer la langue de l'interface AccessFlow en un clic.",
                        "input": {
                            "label": "Rechercher la langue souhaitée."
                        },
                        "availableLanguages": {
                            "label": "Changer la langue de l'interface {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Contraste",
                            "label": "Présente la page web avec différents niveaux de contraste."
                        },
                        "links": {
                            "title": "Liens",
                            "label": "Fait ressortir tous les liens de la page web en couleur."
                        },
                        "biggerText": {
                            "title": "Texte plus grand",
                            "label": "Augmente la taille de la police par rapport à la taille actuelle."
                        },
                        "textSpacing": {
                            "title": "Espacement du texte",
                            "label": "Augmente l'espacement entre les caractères et les mots."
                        },
                        "imagesRemove": {
                            "title": "Supprimer les images",
                            "label": "Tous les éléments d'image de la page web sont masqués."
                        },
                        "lineHeight": {
                            "title": "Hauteur de la ligne",
                            "label": "La hauteur de la ligne est augmentée pour chaque élément de texte sur la page web."
                        },
                        "saturation": {
                            "title": "Saturation",
                            "label": "La saturation de la page web est augmentée ou diminuée afin de garantir une meilleure lisibilité."
                        },
                        "mouseCursor": {
                            "title": "Pointeur de la souris",
                            "label": "Le pointeur de la souris est agrandi d'un facteur 3 afin de mieux le mettre en évidence."
                        },
                        "siteStructure": {
                            "title": "Structure des pages",
                            "label": "Tous les titres et liens sont classés par ordre d'importance, ce qui facilite la navigation dans le site."
                        },
                        "tooltips": {
                            "title": "Infobulles",
                            "label": "Tous les éléments qui possèdent un attribut `title` ou `label` affichent une info-bulle visible au passage de la souris."
                        },
                        "readableText": {
                            "title": "Texte lisible",
                            "label": "Pour rendre le texte plus lisible, une nouvelle police de caractères est chargée. Une police spécialement adaptée aux dyslexiques est également proposée au choix."
                        },
                        "stopAnimation": {
                            "title": "Arrêter les animations",
                            "label": "Met en pause toutes les vidéos et animations sur l'ensemble du site."
                        }
                    },
                    "reportError": {
                        "button": "Signaler une erreur",
                        "label": "Signaler une erreur à AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "À propos d'Access-Flow"
                    }
                }
            },
            "el": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Ανοίξτε το μενού προσβασιμότητας AccessFlow για να προβείτε σε ρυθμίσεις."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Κοντινή άποψη"
                        }
                    },
                    "languages": {
                        "title": "Γλώσσα ({{language}})",
                        "label": "Σας επιτρέπει να αλλάξετε τη γλώσσα της διεπαφής AccessFlow με ένα κλικ.",
                        "input": {
                            "label": "Αναζητήστε την επιθυμητή γλώσσα."
                        },
                        "availableLanguages": {
                            "label": "Εναλλαγή της διεπαφής στη γλώσσα {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Αντίθεση",
                            "label": "Εμφανίζει τον ιστότοπο σε διαφορετικά επίπεδα αντίθεσης."
                        },
                        "links": {
                            "title": "Σύνδεσμοι",
                            "label": "Επισημαίνει όλους τους συνδέσμους στον ιστότοπο με χρώμα."
                        },
                        "biggerText": {
                            "title": "Μεγαλύτερο κείμενο",
                            "label": "Μεγαλώνει τη γραμματοσειρά σε σχέση με το τρέχον μέγεθος γραμματοσειράς."
                        },
                        "textSpacing": {
                            "title": "Απόσταση κειμένου",
                            "label": "Αυξάνει το διάστημα μεταξύ χαρακτήρων και λέξεων."
                        },
                        "imagesRemove": {
                            "title": "Αφαίρεση εικόνων",
                            "label": "Όλα τα στοιχεία εικόνας στον ιστότοπο είναι κρυμμένα."
                        },
                        "lineHeight": {
                            "title": "Ύψος γραμμής",
                            "label": "Το ύψος γραμμής αυξάνεται για κάθε στοιχείο κειμένου στην ιστοσελίδα."
                        },
                        "saturation": {
                            "title": "Κορεσμός",
                            "label": "Ο κορεσμός του ιστότοπου αυξάνεται ή μειώνεται για να εξασφαλιστεί καλύτερη αναγνωσιμότητα."
                        },
                        "mouseCursor": {
                            "title": "Δείκτης ποντικιού",
                            "label": "Ο δείκτης του ποντικιού μεγεθύνεται κατά 3 φορές για να είναι καλύτερα εστιασμένος."
                        },
                        "siteStructure": {
                            "title": "Δομή σελίδας",
                            "label": "Όλες οι επικεφαλίδες και οι σύνδεσμοι παρατίθενται ο ένας κάτω από τον άλλο με σειρά σπουδαιότητας, διευκολύνοντας την πλοήγηση στη σελίδα."
                        },
                        "tooltips": {
                            "title": "Συμβουλές εργαλείων",
                            "label": "Όλα τα στοιχεία που έχουν ένα χαρακτηριστικό \"τίτλος\" ή \"ετικέτα\" εμφανίζουν μια ορατή συμβουλή εργαλείων όταν περνάτε από πάνω τους με το ποντίκι."
                        },
                        "readableText": {
                            "title": "Αναγνώσιμο κείμενο",
                            "label": "Μια νέα γραμματοσειρά φορτώνεται για να κάνει το κείμενο πιο ευανάγνωστο. Παρέχεται επίσης προς επιλογή μια γραμματοσειρά ειδικά κατάλληλη για δυσλεκτικούς."
                        },
                        "stopAnimation": {
                            "title": "Διακοπή κινούμενων σχεδίων",
                            "label": "Διακόπτει όλα τα βίντεο και τα κινούμενα σχέδια σε ολόκληρο τον ιστότοπο."
                        }
                    },
                    "reportError": {
                        "button": "Αναφορά σφάλματος",
                        "label": "Αναφορά σφάλματος με το AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "Σχετικά με την Access-Flow"
                    }
                }
            },
            "id": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Buka menu aksesibilitas AccessFlow untuk membuat pengaturan."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Tampilan dekat"
                        }
                    },
                    "languages": {
                        "title": "Bahasa ({{language}})",
                        "label": "Memungkinkan Anda mengubah bahasa antarmuka AccessFlow dengan satu klik.",
                        "input": {
                            "label": "Cari bahasa yang diinginkan."
                        },
                        "availableLanguages": {
                            "label": "Mengalihkan antarmuka ke bahasa {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Kontras",
                            "label": "Menampilkan situs web dalam tingkat kontras yang berbeda."
                        },
                        "links": {
                            "title": "Tautan",
                            "label": "Menyorot semua tautan di situs web dalam warna."
                        },
                        "biggerText": {
                            "title": "Teks yang lebih besar",
                            "label": "Memperbesar font relatif terhadap ukuran font saat ini."
                        },
                        "textSpacing": {
                            "title": "Spasi teks",
                            "label": "Menambah spasi di antara karakter dan kata."
                        },
                        "imagesRemove": {
                            "title": "Menghapus gambar",
                            "label": "Semua elemen gambar pada situs web disembunyikan."
                        },
                        "lineHeight": {
                            "title": "Tinggi garis",
                            "label": "Tinggi baris ditingkatkan untuk setiap elemen teks pada halaman web."
                        },
                        "saturation": {
                            "title": "Kejenuhan",
                            "label": "Tingkat kejenuhan situs web ditingkatkan atau dikurangi untuk memastikan keterbacaan yang lebih baik."
                        },
                        "mouseCursor": {
                            "title": "Penunjuk mouse",
                            "label": "Penunjuk mouse diperbesar dengan faktor 3 agar lebih baik dalam fokus."
                        },
                        "siteStructure": {
                            "title": "Struktur halaman",
                            "label": "Semua judul dan tautan dicantumkan satu di bawah yang lain berdasarkan urutan kepentingannya, sehingga memudahkan untuk menavigasi halaman."
                        },
                        "tooltips": {
                            "title": "Keterangan alat",
                            "label": "Semua elemen yang memiliki atribut `title` atau `label` akan menampilkan keterangan alat yang dapat dilihat saat Anda mengarahkan mouse ke elemen tersebut."
                        },
                        "readableText": {
                            "title": "Teks yang dapat dibaca",
                            "label": "Font baru dimuat untuk membuat teks lebih mudah dibaca. Font yang secara khusus cocok untuk penderita disleksia juga disediakan untuk dipilih."
                        },
                        "stopAnimation": {
                            "title": "Menghentikan animasi",
                            "label": "Menjeda semua video dan animasi di seluruh situs web."
                        }
                    },
                    "reportError": {
                        "button": "Laporkan kesalahan",
                        "label": "Melaporkan kesalahan dengan AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "Tentang Aliran Akses"
                    }
                }
            },
            "it": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Aprire il menu AccessFlow per effettuare le impostazioni."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Vista da vicino"
                        }
                    },
                    "languages": {
                        "title": "Lingua ({{language}})",
                        "label": "Permette di cambiare la lingua dell'interfaccia di AccessFlow con un solo clic.",
                        "input": {
                            "label": "Cercare la lingua desiderata."
                        },
                        "availableLanguages": {
                            "label": "Passa l'interfaccia alla lingua {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Contrasto",
                            "label": "Visualizza il sito web con diversi livelli di contrasto."
                        },
                        "links": {
                            "title": "Collegamenti",
                            "label": "Evidenzia a colori tutti i link del sito web."
                        },
                        "biggerText": {
                            "title": "Testo più grande",
                            "label": "Ingrandisce il carattere rispetto alla dimensione corrente."
                        },
                        "textSpacing": {
                            "title": "Spaziatura del testo",
                            "label": "Aumenta lo spazio tra i caratteri e le parole."
                        },
                        "imagesRemove": {
                            "title": "Rimuovere le immagini",
                            "label": "Tutti gli elementi di immagine del sito web sono nascosti."
                        },
                        "lineHeight": {
                            "title": "Altezza della linea",
                            "label": "L'altezza della linea viene aumentata per ogni elemento di testo della pagina web."
                        },
                        "saturation": {
                            "title": "Saturazione",
                            "label": "La saturazione del sito web viene aumentata o diminuita per garantire una migliore leggibilità."
                        },
                        "mouseCursor": {
                            "title": "Puntatore del mouse",
                            "label": "Il puntatore del mouse viene ingrandito di un fattore 3 per poterlo mettere meglio a fuoco."
                        },
                        "siteStructure": {
                            "title": "Struttura della pagina",
                            "label": "Tutti i titoli e i link sono elencati uno sotto l'altro in ordine di importanza, per facilitare la navigazione nella pagina."
                        },
                        "tooltips": {
                            "title": "Suggerimenti",
                            "label": "Tutti gli elementi che hanno un attributo `title` o `label` visualizzano un tooltip visibile quando ci si passa sopra con il mouse."
                        },
                        "readableText": {
                            "title": "Testo leggibile",
                            "label": "Viene caricato un nuovo font per facilitare la lettura del testo. È possibile selezionare anche un font particolarmente adatto ai dislessici."
                        },
                        "stopAnimation": {
                            "title": "Interrompere le animazioni",
                            "label": "Mette in pausa tutti i video e le animazioni dell'intero sito web."
                        }
                    },
                    "reportError": {
                        "button": "Segnala un errore",
                        "label": "Segnalare un errore con AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "Informazioni su Access-Flow"
                    }
                }
            },
            "ja": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "AccessFlowアクセシビリティメニューを開き、設定を行います。"
                    },
                    "header": {
                        "closeIcon": {
                            "label": "クローズビュー"
                        }
                    },
                    "languages": {
                        "title": "言語 ({{language}})",
                        "label": "AccessFlowインターフェースの言語をワンクリックで変更できます。",
                        "input": {
                            "label": "希望の言語を検索します。"
                        },
                        "availableLanguages": {
                            "label": "インターフェイスを {{language}} 言語に切り替える。"
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "コントラスト",
                            "label": "異なるコントラストレベルでウェブサイトを表示します。"
                        },
                        "links": {
                            "title": "リンク",
                            "label": "ウェブサイト上のすべてのリンクをカラーでハイライト。"
                        },
                        "biggerText": {
                            "title": "拡大テキスト",
                            "label": "現在のフォントサイズに対して相対的にフォントを拡大する。"
                        },
                        "textSpacing": {
                            "title": "テキスト間隔",
                            "label": "文字と単語の間隔を広げます。"
                        },
                        "imagesRemove": {
                            "title": "画像を削除",
                            "label": "ウェブサイト上のすべての画像要素が非表示になります。"
                        },
                        "lineHeight": {
                            "title": "行の高さ",
                            "label": "ウェブサイトのすべてのテキスト要素の行の高さが増加します。"
                        },
                        "saturation": {
                            "title": "彩度",
                            "label": "ウェブサイトの彩度を増減して、より読みやすくします。"
                        },
                        "mouseCursor": {
                            "title": "マウスカーソル",
                            "label": "マウスカーソルを3倍に拡大して、より焦点を合わせやすくします。"
                        },
                        "siteStructure": {
                            "title": "サイト構造",
                            "label": "すべての見出しとリンクが重要度の順に並べられているため、サイト内を簡単に移動できます。"
                        },
                        "tooltips": {
                            "title": "ツールチップ",
                            "label": "「title」または「label」属性を持つすべての要素には、マウスを重ねると表示されるツールチップが表示されます。"
                        },
                        "readableText": {
                            "title": "読みやすいテキスト",
                            "label": "テキストを読みやすくするために新しいフォントが読み込まれます。また、特に読字障害者向けのフォントも選択できます。"
                        },
                        "stopAnimation": {
                            "title": "アニメーションを停止",
                            "label": "サイト全体のすべてのビデオとアニメーションを一時停止します。"
                        }
                    },
                    "reportError": {
                        "button": "エラーを報告",
                        "label": "AccessFlowでエラーを報告"
                    },
                    "overAccessFlow": {
                        "label": "Access-Flowについて"
                    }
                }
            },
            "ko": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "AccessFlow 접근성 메뉴를 열어 설정합니다."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "근접 보기"
                        }
                    },
                    "languages": {
                        "title": "언어 ({{language}})",
                        "label": "한 번의 클릭으로 AccessFlow 인터페이스 언어를 변경할 수 있습니다.",
                        "input": {
                            "label": "원하는 언어를 검색합니다."
                        },
                        "availableLanguages": {
                            "label": "인터페이스를 {{language}} 언어로 변경합니다."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "대비",
                            "label": "다양한 대비 수준으로 웹 사이트를 표시합니다."
                        },
                        "links": {
                            "title": "링크",
                            "label": "웹 사이트의 모든 링크를 색상으로 강조합니다."
                        },
                        "biggerText": {
                            "title": "크게 보기",
                            "label": "현재 글꼴 크기에 비해 글꼴을 확대합니다."
                        },
                        "textSpacing": {
                            "title": "텍스트 간격",
                            "label": "문자와 단어 사이의 간격을 넓힙니다."
                        },
                        "imagesRemove": {
                            "title": "이미지 제거",
                            "label": "웹 사이트의 모든 이미지 요소가 숨겨집니다."
                        },
                        "lineHeight": {
                            "title": "줄 높이",
                            "label": "웹 사이트의 모든 텍스트 요소에 대해 줄 높이가 증가합니다."
                        },
                        "saturation": {
                            "title": "채도",
                            "label": "웹 사이트의 채도를 높이거나 낮추어 더 나은 가독성을 보장합니다."
                        },
                        "mouseCursor": {
                            "title": "마우스 커서",
                            "label": "마우스 커서를 3배로 확대하여 더 잘 초점을 맞출 수 있습니다."
                        },
                        "siteStructure": {
                            "title": "사이트 구조",
                            "label": "모든 제목과 링크가 중요도 순으로 나열되어 있어 사이트 내에서 쉽게 탐색할 수 있습니다."
                        },
                        "tooltips": {
                            "title": "툴팁",
                            "label": "`title` 또는 `label` 속성이 있는 모든 요소는 마우스를 올리면 툴팁이 표시됩니다."
                        },
                        "readableText": {
                            "title": "가독성 있는 텍스트",
                            "label": "텍스트를 더 쉽게 읽을 수 있도록 새로운 글꼴이 로드됩니다. 디스렉시아 환자에게 적합한 글꼴도 선택할 수 있습니다."
                        },
                        "stopAnimation": {
                            "title": "애니메이션 중지",
                            "label": "사이트 전체의 모든 비디오와 애니메이션을 일시 중지합니다."
                        }
                    },
                    "reportError": {
                        "button": "오류 신고",
                        "label": "AccessFlow와 오류 신고"
                    },
                    "overAccessFlow": {
                        "label": "Access-Flow 정보"
                    }
                }
            },
            "lv": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Atveriet AccessFlow pieejamības izvēlni, lai veiktu iestatījumus."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Tuva skats"
                        }
                    },
                    "languages": {
                        "title": "Valoda ({{language}})",
                        "label": "Ļauj vienā klikšķī mainīt AccessFlow saskarnes valodu.",
                        "input": {
                            "label": "Meklēt vēlamo valodu."
                        },
                        "availableLanguages": {
                            "label": "Pārslēdziet saskarni uz {{language}} valodu."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Kontrasts",
                            "label": "Parāda tīmekļa vietni ar dažādiem kontrasta līmeņiem."
                        },
                        "links": {
                            "title": "Saites",
                            "label": "Izceļ visas tīmekļa vietnes saites ar krāsu."
                        },
                        "biggerText": {
                            "title": "Lielāks teksts",
                            "label": "Palielina fontu attiecībā pret pašreizējo fonta lielumu."
                        },
                        "textSpacing": {
                            "title": "Teksta atstarpe",
                            "label": "Palielina atstarpi starp rakstzīmēm un vārdiem."
                        },
                        "imagesRemove": {
                            "title": "Noņemt attēlus",
                            "label": "Visi tīmekļa vietnes attēli ir paslēpti."
                        },
                        "lineHeight": {
                            "title": "Rindas augstums",
                            "label": "Rindas augstums tiek palielināts katram tīmekļa vietnes teksta elementam."
                        },
                        "saturation": {
                            "title": "Piesātinājums",
                            "label": "Tīmekļa vietnes piesātinājums tiek palielināts vai samazināts, lai nodrošinātu labāku lasāmību."
                        },
                        "mouseCursor": {
                            "title": "Peles kursors",
                            "label": "Peles kursors tiek palielināts 3 reizes, lai to būtu vieglāk izcelt."
                        },
                        "siteStructure": {
                            "title": "Vietnes struktūra",
                            "label": "Visi virsraksti un saites ir uzskaitīti viens zem otra svarīguma secībā, tādējādi viegli navigējot vietnē."
                        },
                        "tooltips": {
                            "title": "Rīka padomi",
                            "label": "Visi elementi, kam ir `title` vai `label` atribūts, parāda redzamu rīka padomi, kad virzāties ar peles kursoru uz tiem."
                        },
                        "readableText": {
                            "title": "Lasāms teksts",
                            "label": "Tiek ielādēts jauns fonts, lai teksts būtu vieglāk lasāms. Izvēlēties var arī fontu, kas īpaši piemērots disleksijas pacientiem."
                        },
                        "stopAnimation": {
                            "title": "Pārtraukt animācijas",
                            "label": "Pauzē visus video un animācijas visā tīmekļa vietnē."
                        }
                    },
                    "reportError": {
                        "button": "Ziņot par kļūdu",
                        "label": "Ziņot par kļūdu ar AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "Par Access-Flow"
                    }
                }
            },
            "lt": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Atidarykite \"AccessFlow\" prieinamumo meniu ir atlikite nustatymus."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Vaizdas iš arti"
                        }
                    },
                    "languages": {
                        "title": "Kalba ({{language}})",
                        "label": "Leidžia vienu paspaudimu pakeisti \"AccessFlow\" sąsajos kalbą.",
                        "input": {
                            "label": "Ieškokite norimos kalbos."
                        },
                        "availableLanguages": {
                            "label": "Perjunkite sąsają į {{language}} kalbą."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Kontrastas",
                            "label": "Rodyti svetainę su skirtingais kontrasto lygiais."
                        },
                        "links": {
                            "title": "Nuorodos",
                            "label": "Paryškinti visus svetainės nuorodas spalva."
                        },
                        "biggerText": {
                            "title": "Didesnis tekstas",
                            "label": "Padidinti šriftą lyginant su dabartiniu šrifto dydžiu."
                        },
                        "textSpacing": {
                            "title": "Teksto tarpas",
                            "label": "Padidinti tarpą tarp simbolių ir žodžių."
                        },
                        "imagesRemove": {
                            "title": "Pašalinti vaizdus",
                            "label": "Visi svetainės vaizdai yra paslėpti."
                        },
                        "lineHeight": {
                            "title": "Eilutės aukštis",
                            "label": "Kiekvienam teksto elementui svetainėje padidinamas eilutės aukštis."
                        },
                        "saturation": {
                            "title": "Sotis",
                            "label": "Svetainės sotis padidinama arba sumažinama, kad būtų užtikrintas geresnis skaitymas."
                        },
                        "mouseCursor": {
                            "title": "Pelės rodyklė",
                            "label": "Pelės rodyklė padidinama 3 kartus, kad būtų geriau pabrėžta."
                        },
                        "siteStructure": {
                            "title": "Svetainės struktūra",
                            "label": "Visi antraščiai ir nuorodos pateikiami vienas po kito pagal svarbą, palengvinant naršymą svetainėje."
                        },
                        "tooltips": {
                            "title": "Įrankių patarimai",
                            "label": "Visi elementai, turintys atributą `title` arba `label`, rodo matomą įrankių patarimą, kai pele užvedama ant jų."
                        },
                        "readableText": {
                            "title": "Skaitymas tekstas",
                            "label": "Naujas šriftas įkeliamas, kad tekstas būtų lengviau skaitomas. Taip pat galima pasirinkti šriftą, specialiai pritaikytą disleksijos pacientams."
                        },
                        "stopAnimation": {
                            "title": "Sustabdyti animacijas",
                            "label": "Pauzė visiems vaizdo įrašams ir animacijoms visoje svetainėje."
                        }
                    },
                    "reportError": {
                        "button": "Pranešti apie klaidą",
                        "label": "Pranešti apie klaidą su AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "Apie Access-Flow"
                    }
                }
            },
            "nl": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Open het AccessFlow-toegankelijkheidsmenu om instellingen te maken."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Close-up weergave"
                        }
                    },
                    "languages": {
                        "title": "Taal ({{language}})",
                        "label": "Hiermee kunt u met één klik de taal van de AccessFlow-interface wijzigen.",
                        "input": {
                            "label": "Zoek de gewenste taal."
                        },
                        "availableLanguages": {
                            "label": "Schakel de interface over naar de taal {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Contrast",
                            "label": "Toont de website in verschillende contrastniveaus."
                        },
                        "links": {
                            "title": "Links",
                            "label": "Markeert alle links op de website met kleur."
                        },
                        "biggerText": {
                            "title": "Grotere tekst",
                            "label": "Vergroot het lettertype ten opzichte van de huidige lettergrootte."
                        },
                        "textSpacing": {
                            "title": "Tekstafstand",
                            "label": "Vergroot de afstand tussen tekens en woorden."
                        },
                        "imagesRemove": {
                            "title": "Afbeeldingen verwijderen",
                            "label": "Alle afbeeldingselementen op de website zijn verborgen."
                        },
                        "lineHeight": {
                            "title": "Regelhoogte",
                            "label": "De regelhoogte wordt verhoogd voor elk tekstelement op de webpagina."
                        },
                        "saturation": {
                            "title": "Verzadiging",
                            "label": "De verzadiging van de website wordt verhoogd of verlaagd om een betere leesbaarheid te garanderen."
                        },
                        "mouseCursor": {
                            "title": "Muisaanwijzer",
                            "label": "De muisaanwijzer wordt 3 keer vergroot om beter te kunnen focussen."
                        },
                        "siteStructure": {
                            "title": "Sitestructuur",
                            "label": "Alle koppen en links worden onder elkaar vermeld op basis van hun belangrijkheid, waardoor het gemakkelijker wordt om door de pagina te navigeren."
                        },
                        "tooltips": {
                            "title": "Tooltips",
                            "label": "Alle elementen die een `title` of `label` attribuut hebben, tonen een zichtbare tooltip wanneer u er met de muis overheen gaat."
                        },
                        "readableText": {
                            "title": "Leesbare tekst",
                            "label": "Er wordt een nieuw lettertype geladen om de tekst leesbaarder te maken. Er is ook een lettertype beschikbaar dat speciaal geschikt is voor dyslectici."
                        },
                        "stopAnimation": {
                            "title": "Animatie stoppen",
                            "label": "Pauzeert alle video's en animaties op de hele website."
                        }
                    },
                    "reportError": {
                        "button": "Fout melden",
                        "label": "Meld een fout met AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "Over Access-Flow"
                    }
                }
            },
            "no": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Åpne AccessFlow-tilgjengelighetsmenyen for å gjøre innstillinger."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Nærvisning"
                        }
                    },
                    "languages": {
                        "title": "Språk ({{language}})",
                        "label": "Lar deg endre AccessFlow-grensesnittets språk med ett klikk.",
                        "input": {
                            "label": "Søk etter ønsket språk."
                        },
                        "availableLanguages": {
                            "label": "Bytt grensesnitt til {{language}} språk."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Kontrast",
                            "label": "Viser nettsiden i forskjellige kontrastnivåer."
                        },
                        "links": {
                            "title": "Lenker",
                            "label": "Markerer alle lenker på nettsiden med farge."
                        },
                        "biggerText": {
                            "title": "Større tekst",
                            "label": "Forstørrer skrifttypen i forhold til gjeldende skriftstørrelse."
                        },
                        "textSpacing": {
                            "title": "Tekstavstand",
                            "label": "Øker avstanden mellom tegn og ord."
                        },
                        "imagesRemove": {
                            "title": "Fjern bilder",
                            "label": "Alle bildelementer på nettsiden er skjult."
                        },
                        "lineHeight": {
                            "title": "Linjehøyde",
                            "label": "Linjehøyden økes for hvert tekstelement på nettsiden."
                        },
                        "saturation": {
                            "title": "Metning",
                            "label": "Nettstedets metning økes eller reduseres for å sikre bedre lesbarhet."
                        },
                        "mouseCursor": {
                            "title": "Musepeker",
                            "label": "Musepekeren forstørres 3 ganger for bedre fokus."
                        },
                        "siteStructure": {
                            "title": "Nettstedsstruktur",
                            "label": "Alle overskrifter og lenker er oppført under hverandre i rekkefølge av viktighet, noe som gjør det enklere å navigere på siden."
                        },
                        "tooltips": {
                            "title": "Verktøytips",
                            "label": "Alle elementer som har en `title` eller `label` attributt, viser et synlig verktøytips når du svever over dem med musen."
                        },
                        "readableText": {
                            "title": "Lesbar tekst",
                            "label": "Et nytt skrifttype lastes inn for å gjøre teksten mer lesbar. Det er også tilgjengelig en skrifttype spesielt egnet for dyslektikere."
                        },
                        "stopAnimation": {
                            "title": "Stopp animasjon",
                            "label": "Setter alle videoer og animasjoner på hele nettstedet på pause."
                        }
                    },
                    "reportError": {
                        "button": "Rapporter feil",
                        "label": "Rapporter en feil med AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "Om Access-Flow"
                    }
                }
            },
            "pl": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Otwórz menu dostępności AccessFlow, aby dokonać ustawień."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Powiększony widok"
                        }
                    },
                    "languages": {
                        "title": "Język ({{language}})",
                        "label": "Pozwala zmienić język interfejsu AccessFlow jednym kliknięciem.",
                        "input": {
                            "label": "Wyszukaj pożądany język."
                        },
                        "availableLanguages": {
                            "label": "Przełącz interfejs na język {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Kontrast",
                            "label": "Wyświetla stronę internetową w różnych poziomach kontrastu."
                        },
                        "links": {
                            "title": "Linki",
                            "label": "Podkreśla wszystkie linki na stronie internetowej kolorem."
                        },
                        "biggerText": {
                            "title": "Większy tekst",
                            "label": "Powiększa czcionkę w stosunku do bieżącego rozmiaru czcionki."
                        },
                        "textSpacing": {
                            "title": "Odstępy między tekstem",
                            "label": "Zwiększa odstępy między znakami i słowami."
                        },
                        "imagesRemove": {
                            "title": "Usuń obrazy",
                            "label": "Wszystkie elementy obrazu na stronie internetowej są ukryte."
                        },
                        "lineHeight": {
                            "title": "Wysokość linii",
                            "label": "Wysokość linii jest zwiększana dla każdego elementu tekstu na stronie internetowej."
                        },
                        "saturation": {
                            "title": "Nasycenie",
                            "label": "Nasycenie strony internetowej jest zwiększane lub zmniejszane, aby zapewnić lepszą czytelność."
                        },
                        "mouseCursor": {
                            "title": "Kursor myszy",
                            "label": "Kursor myszy jest powiększany trzykrotnie, aby lepiej się skupić."
                        },
                        "siteStructure": {
                            "title": "Struktura strony",
                            "label": "Wszystkie nagłówki i linki są wymienione jeden pod drugim według ich ważności, ułatwiając nawigację na stronie."
                        },
                        "tooltips": {
                            "title": "Wskazówki",
                            "label": "Wszystkie elementy, które mają atrybut `title` lub `label`, wyświetlają widoczną wskazówkę, gdy najedziesz na nie myszą."
                        },
                        "readableText": {
                            "title": "Czytelny tekst",
                            "label": "Nowa czcionka jest ładowana, aby ułatwić czytanie tekstu. Można również wybrać czcionkę specjalnie dostosowaną dla osób z dysleksją."
                        },
                        "stopAnimation": {
                            "title": "Zatrzymaj animację",
                            "label": "Wstrzymuje wszystkie filmy i animacje na całej stronie internetowej."
                        }
                    },
                    "reportError": {
                        "button": "Zgłoś błąd",
                        "label": "Zgłoś błąd z AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "O Access-Flow"
                    }
                }
            },
            "pt": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Abra o menu de acessibilidade AccessFlow para fazer configurações."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Visualização ampliada"
                        }
                    },
                    "languages": {
                        "title": "Idioma ({{language}})",
                        "label": "Permite alterar o idioma da interface do AccessFlow com um único clique.",
                        "input": {
                            "label": "Pesquise o idioma desejado."
                        },
                        "availableLanguages": {
                            "label": "Mude a interface para o idioma {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Contraste",
                            "label": "Exibe o site em diferentes níveis de contraste."
                        },
                        "links": {
                            "title": "Links",
                            "label": "Destaca todos os links do site com cor."
                        },
                        "biggerText": {
                            "title": "Texto maior",
                            "label": "Aumenta a fonte em relação ao tamanho atual da fonte."
                        },
                        "textSpacing": {
                            "title": "Espaçamento de texto",
                            "label": "Aumenta o espaço entre caracteres e palavras."
                        },
                        "imagesRemove": {
                            "title": "Remover imagens",
                            "label": "Todos os elementos de imagem do site estão ocultos."
                        },
                        "lineHeight": {
                            "title": "Altura da linha",
                            "label": "A altura da linha é aumentada para cada elemento de texto na página da web."
                        },
                        "saturation": {
                            "title": "Saturação",
                            "label": "A saturação do site é aumentada ou diminuída para garantir uma melhor legibilidade."
                        },
                        "mouseCursor": {
                            "title": "Cursor do mouse",
                            "label": "O cursor do mouse é ampliado 3 vezes para melhor foco."
                        },
                        "siteStructure": {
                            "title": "Estrutura do site",
                            "label": "Todos os títulos e links são listados um abaixo do outro em ordem de importância, facilitando a navegação na página."
                        },
                        "tooltips": {
                            "title": "Dicas de ferramentas",
                            "label": "Todos os elementos que têm um atributo `title` ou `label` exibem uma dica de ferramenta visível quando você passa o mouse sobre eles."
                        },
                        "readableText": {
                            "title": "Texto legível",
                            "label": "Uma nova fonte é carregada para facilitar a leitura do texto. Também é possível selecionar uma fonte especialmente adequada para disléxicos."
                        },
                        "stopAnimation": {
                            "title": "Parar animações",
                            "label": "Pausa todos os vídeos e animações em todo o site."
                        }
                    },
                    "reportError": {
                        "button": "Reportar erro",
                        "label": "Reportar um erro com AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "Sobre Access-Flow"
                    }
                }
            },
            "ro": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Deschideți meniul de accesibilitate AccessFlow pentru a face setări."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Vizualizare apropiată"
                        }
                    },
                    "languages": {
                        "title": "Limbă ({{language}})",
                        "label": "Permite schimbarea limbii interfeței AccessFlow printr-un singur clic.",
                        "input": {
                            "label": "Căutați limba dorită."
                        },
                        "availableLanguages": {
                            "label": "Comutați interfața la limba {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Contrast",
                            "label": "Afișează site-ul în diferite niveluri de contrast."
                        },
                        "links": {
                            "title": "Linkuri",
                            "label": "Evidențiază toate linkurile de pe site cu culoare."
                        },
                        "biggerText": {
                            "title": "Text mai mare",
                            "label": "Mărește fontul în raport cu dimensiunea actuală a fontului."
                        },
                        "textSpacing": {
                            "title": "Spațierea textului",
                            "label": "Mărește spațiul dintre caractere și cuvinte."
                        },
                        "imagesRemove": {
                            "title": "Elimină imaginile",
                            "label": "Toate elementele de imagine de pe site sunt ascunse."
                        },
                        "lineHeight": {
                            "title": "Înălțimea liniei",
                            "label": "Înălțimea liniei este mărită pentru fiecare element de text de pe pagină."
                        },
                        "saturation": {
                            "title": "Saturație",
                            "label": "Saturația site-ului este mărită sau micșorată pentru a asigura o mai bună lizibilitate."
                        },
                        "mouseCursor": {
                            "title": "Cursorul mouse-ului",
                            "label": "Cursorul mouse-ului este mărit de 3 ori pentru un mai bun focus."
                        },
                        "siteStructure": {
                            "title": "Structura site-ului",
                            "label": "Toate titlurile și linkurile sunt listate unul sub altul în ordinea importanței, facilitând navigarea pe pagină."
                        },
                        "tooltips": {
                            "title": "Sugestii pentru instrumente",
                            "label": "Toate elementele care au un atribut `title` sau `label` afișează o sugestie pentru instrumente vizibilă atunci când plasați cursorul mouse-ului pe ele."
                        },
                        "readableText": {
                            "title": "Text lizibil",
                            "label": "Se încarcă un nou font pentru a face textul mai ușor de citit. De asemenea, este disponibil un font special potrivit pentru persoanele cu dislexie."
                        },
                        "stopAnimation": {
                            "title": "Oprește animațiile",
                            "label": "Pune pe pauză toate videoclipurile și animațiile de pe întregul site."
                        }
                    },
                    "reportError": {
                        "button": "Raportați o eroare",
                        "label": "Raportați o eroare cu AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "Despre Access-Flow"
                    }
                }
            },
            "ru": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Откройте меню доступности AccessFlow, чтобы внести настройки."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Увеличенный вид"
                        }
                    },
                    "languages": {
                        "title": "Язык ({{language}})",
                        "label": "Позволяет изменить язык интерфейса AccessFlow одним щелчком.",
                        "input": {
                            "label": "Поиск желаемого языка."
                        },
                        "availableLanguages": {
                            "label": "Переключите интерфейс на язык {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Контраст",
                            "label": "Отображает веб-сайт в различных уровнях контрастности."
                        },
                        "links": {
                            "title": "Ссылки",
                            "label": "Выделяет все ссылки на веб-сайте цветом."
                        },
                        "biggerText": {
                            "title": "Увеличенный текст",
                            "label": "Увеличивает шрифт по сравнению с текущим размером шрифта."
                        },
                        "textSpacing": {
                            "title": "Междустрочный интервал",
                            "label": "Увеличивает расстояние между символами и словами."
                        },
                        "imagesRemove": {
                            "title": "Удалить изображения",
                            "label": "Все элементы изображения на веб-сайте скрыты."
                        },
                        "lineHeight": {
                            "title": "Высота строки",
                            "label": "Высота строки увеличивается для каждого текстового элемента на веб-странице."
                        },
                        "saturation": {
                            "title": "Насыщенность",
                            "label": "Насыщенность веб-сайта увеличивается или уменьшается для обеспечения лучшей читаемости."
                        },
                        "mouseCursor": {
                            "title": "Курсор мыши",
                            "label": "Курсор мыши увеличивается в 3 раза для лучшего фокусирования."
                        },
                        "siteStructure": {
                            "title": "Структура сайта",
                            "label": "Все заголовки и ссылки перечислены один под другим в порядке важности, что облегчает навигацию по странице."
                        },
                        "tooltips": {
                            "title": "Подсказки",
                            "label": "Все элементы, у которых есть атрибут `title` или `label`, отображают видимую подсказку при наведении на них курсора мыши."
                        },
                        "readableText": {
                            "title": "Читаемый текст",
                            "label": "Загружается новый шрифт для улучшения читаемости текста. Также доступен шрифт, специально предназначенный для дислексиков."
                        },
                        "stopAnimation": {
                            "title": "Остановить анимацию",
                            "label": "Приостанавливает все видео и анимации на всем веб-сайте."
                        }
                    },
                    "reportError": {
                        "button": "Сообщить об ошибке",
                        "label": "Сообщить об ошибке с AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "О Access-Flow"
                    }
                }
            },
            "sv": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Öppna tillgänglighetsmenyn AccessFlow för att göra inställningar."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Närbild"
                        }
                    },
                    "languages": {
                        "title": "Språk ({{language}})",
                        "label": "Låter dig ändra AccessFlow-gränssnittets språk med en enda klickning.",
                        "input": {
                            "label": "Sök efter önskat språk."
                        },
                        "availableLanguages": {
                            "label": "Växla gränssnittet till {{language}} språk."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Kontrast",
                            "label": "Visar webbplatsen i olika kontrastnivåer."
                        },
                        "links": {
                            "title": "Länkar",
                            "label": "Markerar alla länkar på webbplatsen med färg."
                        },
                        "biggerText": {
                            "title": "Större text",
                            "label": "Förstorar teckensnittet jämfört med den aktuella teckenstorleken."
                        },
                        "textSpacing": {
                            "title": "Textavstånd",
                            "label": "Ökar avståndet mellan tecken och ord."
                        },
                        "imagesRemove": {
                            "title": "Ta bort bilder",
                            "label": "Alla bildkomponenter på webbplatsen är dolda."
                        },
                        "lineHeight": {
                            "title": "Radhöjd",
                            "label": "Radhöjden ökas för varje textelement på webbsidan."
                        },
                        "saturation": {
                            "title": "Mättnad",
                            "label": "Webbplatsens mättnad ökas eller minskas för att säkerställa bättre läsbarhet."
                        },
                        "mouseCursor": {
                            "title": "Muskursor",
                            "label": "Muskursorn förstoras 3 gånger för bättre fokus."
                        },
                        "siteStructure": {
                            "title": "Webbplatsstruktur",
                            "label": "Alla rubriker och länkar listas under varandra i ordning av viktighet, vilket gör det enklare att navigera på sidan."
                        },
                        "tooltips": {
                            "title": "Verktygstips",
                            "label": "Alla element som har en `title` eller `label`-attribut visar ett synligt verktygstips när du sveper över dem med musen."
                        },
                        "readableText": {
                            "title": "Läsbar text",
                            "label": "En ny typsnitt laddas för att göra texten lättare att läsa. Det finns också en typsnitt som är speciellt anpassad för dyslektiker."
                        },
                        "stopAnimation": {
                            "title": "Stoppa animationer",
                            "label": "Pausar alla videor och animationer på hela webbplatsen."
                        }
                    },
                    "reportError": {
                        "button": "Rapportera fel",
                        "label": "Rapportera ett fel med AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "Om Access-Flow"
                    }
                }
            },
            "sk": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Otvorte menu dostupnosti AccessFlow a vykonajte nastavenia."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Zväčšený zobrazenie"
                        }
                    },
                    "languages": {
                        "title": "Jazyk ({{language}})",
                        "label": "Umožňuje zmeniť jazyk rozhrania AccessFlow jedným kliknutím.",
                        "input": {
                            "label": "Vyhľadajte požadovaný jazyk."
                        },
                        "availableLanguages": {
                            "label": "Prepni rozhranie na jazyk {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Kontrast",
                            "label": "Zobrazuje webovú stránku v rôznych úrovniach kontrastu."
                        },
                        "links": {
                            "title": "Odkazy",
                            "label": "Zvýrazňuje všetky odkazy na webovej stránke farbou."
                        },
                        "biggerText": {
                            "title": "Väčší text",
                            "label": "Zväčšuje písmo v porovnaní s aktuálnou veľkosťou písma."
                        },
                        "textSpacing": {
                            "title": "Rozostup textu",
                            "label": "Zväčšuje rozostup medzi znakmi a slovami."
                        },
                        "imagesRemove": {
                            "title": "Odstrániť obrázky",
                            "label": "Všetky obrázkové prvky na webovej stránke sú skryté."
                        },
                        "lineHeight": {
                            "title": "Výška riadku",
                            "label": "Výška riadku sa zvyšuje pre každý textový element na webovej stránke."
                        },
                        "saturation": {
                            "title": "Sýtosť",
                            "label": "Sýtosť webovej stránky sa zvyšuje alebo znižuje, aby sa zabezpečila lepšia čitateľnosť."
                        },
                        "mouseCursor": {
                            "title": "Kurzor myši",
                            "label": "Kurzor myši sa zväčšuje 3-krát pre lepšie zaostrenie."
                        },
                        "siteStructure": {
                            "title": "Štruktúra stránky",
                            "label": "Všetky nadpisy a odkazy sú uvedené pod sebou podľa dôležitosti, čo uľahčuje navigáciu na stránke."
                        },
                        "tooltips": {
                            "title": "Tipy na nástroje",
                            "label": "Všetky prvky, ktoré majú atribút `title` alebo `label`, zobrazujú viditeľný tip na nástroje, keď na ne prejdete myšou."
                        },
                        "readableText": {
                            "title": "Čitateľný text",
                            "label": "Načíta sa nový písmo, aby sa text stal ľahšie čitateľným. K dispozícii je tiež písmo špeciálne určené pre dyslektikov."
                        },
                        "stopAnimation": {
                            "title": "Zastaviť animácie",
                            "label": "Pozastaví všetky videá a animácie na celej webovej stránke."
                        }
                    },
                    "reportError": {
                        "button": "Nahlásiť chybu",
                        "label": "Nahláste chybu s AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "O Access-Flow"
                    }
                }
            },
            "sl": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Odpri meni dostopnosti AccessFlow za nastavitve."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Povečan pogled"
                        }
                    },
                    "languages": {
                        "title": "Jezik ({{language}})",
                        "label": "Omogoča spremembo jezika vmesnika AccessFlow z enim klikom.",
                        "input": {
                            "label": "Poiščite želeni jezik."
                        },
                        "availableLanguages": {
                            "label": "Preklopi vmesnik na jezik {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Kontrast",
                            "label": "Prikaže spletno mesto v različnih kontrastnih ravneh."
                        },
                        "links": {
                            "title": "Povezave",
                            "label": "Poudari vse povezave na spletnem mestu z barvo."
                        },
                        "biggerText": {
                            "title": "Večje besedilo",
                            "label": "Poveča pisavo glede na trenutno velikost pisave."
                        },
                        "textSpacing": {
                            "title": "Razmik besedila",
                            "label": "Poveča razdaljo med znaki in besedami."
                        },
                        "imagesRemove": {
                            "title": "Odstrani slike",
                            "label": "Vse slikovne elemente na spletnem mestu so skriti."
                        },
                        "lineHeight": {
                            "title": "Višina vrstice",
                            "label": "Višina vrstice se poveča za vsak element besedila na spletni strani."
                        },
                        "saturation": {
                            "title": "Nasičenost",
                            "label": "Nasičenost spletnega mesta se poveča ali zmanjša za boljšo berljivost."
                        },
                        "mouseCursor": {
                            "title": "Miškin kazalec",
                            "label": "Miškin kazalec se poveča 3-krat za boljši fokus."
                        },
                        "siteStructure": {
                            "title": "Struktura spletnega mesta",
                            "label": "Vsi naslovi in povezave so navedeni en pod drugim glede na njihovo pomembnost, kar olajša navigacijo po strani."
                        },
                        "tooltips": {
                            "title": "Namigi",
                            "label": "Vsi elementi, ki imajo atribut `title` ali `label`, prikažejo vidni namig, ko se z miško premaknete nad njih."
                        },
                        "readableText": {
                            "title": "Berljivo besedilo",
                            "label": "Naloži se nova pisava, da bo besedilo bolj berljivo. Na voljo je tudi pisava, ki je posebej primerna za dislektike."
                        },
                        "stopAnimation": {
                            "title": "Ustavi animacije",
                            "label": "Zaustavi vse videoposnetke in animacije na celotnem spletnem mestu."
                        }
                    },
                    "reportError": {
                        "button": "Prijavi napako",
                        "label": "Prijavite napako z AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "O Access-Flow"
                    }
                }
            },
            "es": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Abra el menú de accesibilidad de AccessFlow para realizar los ajustes."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Vista ampliada"
                        }
                    },
                    "languages": {
                        "title": "Idioma ({{language}})",
                        "label": "Permite cambiar el idioma de la interfaz de AccessFlow con un solo clic.",
                        "input": {
                            "label": "Busca el idioma deseado."
                        },
                        "availableLanguages": {
                            "label": "Cambiar la interfaz al idioma {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Contraste",
                            "label": "Muestra el sitio web en diferentes niveles de contraste."
                        },
                        "links": {
                            "title": "Enlaces",
                            "label": "Resalta todos los enlaces del sitio web con color."
                        },
                        "biggerText": {
                            "title": "Texto más grande",
                            "label": "Aumenta el tamaño de la fuente en relación con el tamaño de fuente actual."
                        },
                        "textSpacing": {
                            "title": "Espaciado de texto",
                            "label": "Aumenta el espacio entre caracteres y palabras."
                        },
                        "imagesRemove": {
                            "title": "Eliminar imágenes",
                            "label": "Todos los elementos de imagen en el sitio web están ocultos."
                        },
                        "lineHeight": {
                            "title": "Altura de línea",
                            "label": "La altura de línea se incrementa para cada elemento de texto en la página web."
                        },
                        "saturation": {
                            "title": "Saturación",
                            "label": "La saturación del sitio web se incrementa o disminuye para garantizar una mejor legibilidad."
                        },
                        "mouseCursor": {
                            "title": "Cursor del ratón",
                            "label": "El cursor del ratón se amplía 3 veces para un mejor enfoque."
                        },
                        "siteStructure": {
                            "title": "Estructura del sitio",
                            "label": "Todos los títulos y enlaces se enumeran uno debajo del otro en orden de importancia, lo que facilita la navegación en la página."
                        },
                        "tooltips": {
                            "title": "Sugerencias",
                            "label": "Todos los elementos que tienen un atributo `title` o `label` muestran una sugerencia visible cuando se pasa el ratón sobre ellos."
                        },
                        "readableText": {
                            "title": "Texto legible",
                            "label": "Se carga una nueva fuente para hacer el texto más legible. También está disponible una fuente especialmente adecuada para disléxicos."
                        },
                        "stopAnimation": {
                            "title": "Detener animaciones",
                            "label": "Pausa todos los videos y animaciones en todo el sitio web."
                        }
                    },
                    "reportError": {
                        "button": "Informar de un error",
                        "label": "Informar de un error con AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "Sobre Access-Flow"
                    }
                }
            },
            "cs": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Otevřete nabídku přístupnosti AccessFlow pro provedení nastavení."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Zvětšený pohled"
                        }
                    },
                    "languages": {
                        "title": "Jazyk ({{language}})",
                        "label": "Umožňuje změnit jazyk rozhraní AccessFlow jedním kliknutím.",
                        "input": {
                            "label": "Vyhledejte požadovaný jazyk."
                        },
                        "availableLanguages": {
                            "label": "Přepněte rozhraní na jazyk {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Kontrast",
                            "label": "Zobrazuje webovou stránku v různých úrovních kontrastu."
                        },
                        "links": {
                            "title": "Odkazy",
                            "label": "Zvýrazňuje všechny odkazy na webové stránce barvou."
                        },
                        "biggerText": {
                            "title": "Větší text",
                            "label": "Zvětšuje písmo ve srovnání s aktuální velikostí písma."
                        },
                        "textSpacing": {
                            "title": "Odstup textu",
                            "label": "Zvětšuje odstup mezi znaky a slovy."
                        },
                        "imagesRemove": {
                            "title": "Odstranit obrázky",
                            "label": "Všechny obrázkové prvky na webové stránce jsou skryty."
                        },
                        "lineHeight": {
                            "title": "Výška řádku",
                            "label": "Výška řádku je zvýšena pro každý textový prvek na webové stránce."
                        },
                        "saturation": {
                            "title": "Sytost",
                            "label": "Sytost webové stránky je zvýšena nebo snížena pro zajištění lepší čitelnosti."
                        },
                        "mouseCursor": {
                            "title": "Kurzor myši",
                            "label": "Kurzor myši je zvětšen 3krát pro lepší zaostření."
                        },
                        "siteStructure": {
                            "title": "Struktura stránky",
                            "label": "Všechny nadpisy a odkazy jsou uvedeny pod sebou podle důležitosti, což usnadňuje navigaci na stránce."
                        },
                        "tooltips": {
                            "title": "Tipy",
                            "label": "Všechny prvky, které mají atribut `title` nebo `label`, zobrazují viditelný tip, když na ně najedete myší."
                        },
                        "readableText": {
                            "title": "Čitelný text",
                            "label": "Načte se nový font pro zlepšení čitelnosti textu. K dispozici je také font speciálně navržený pro dyslektiky."
                        },
                        "stopAnimation": {
                            "title": "Zastavit animace",
                            "label": "Pozastaví všechny videa a animace na celém webu."
                        }
                    },
                    "reportError": {
                        "button": "Nahlásit chybu",
                        "label": "Nahlásit chybu s AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "O Access-Flow"
                    }
                }
            },
            "tr": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Ayarlar yapmak için erişilebilirlik menüsü AccessFlow'u açın."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Büyütülmüş görünüm"
                        }
                    },
                    "languages": {
                        "title": "Dil ({{language}})",
                        "label": "AccessFlow arayüz dilini tek tıklamayla değiştirmenizi sağlar.",
                        "input": {
                            "label": "Aranan dili arayın."
                        },
                        "availableLanguages": {
                            "label": "Arayüzü {{language}} diline değiştirin."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Kontrast",
                            "label": "Web sitesini farklı kontrast seviyelerinde gösterir."
                        },
                        "links": {
                            "title": "Bağlantılar",
                            "label": "Web sitesindeki tüm bağlantıları renk ile vurgular."
                        },
                        "biggerText": {
                            "title": "Daha büyük metin",
                            "label": "Mevcut metin boyutuna göre yazı tipini büyütür."
                        },
                        "textSpacing": {
                            "title": "Metin aralığı",
                            "label": "Karakterler ve kelimeler arasındaki boşluğu artırır."
                        },
                        "imagesRemove": {
                            "title": "Resimleri kaldır",
                            "label": "Web sitesindeki tüm resim öğeleri gizlidir."
                        },
                        "lineHeight": {
                            "title": "Satır yüksekliği",
                            "label": "Web sayfasındaki her metin öğesi için satır yüksekliği artırılır."
                        },
                        "saturation": {
                            "title": "Doyma",
                            "label": "Web sitesinin doygunluğu artırılır veya azaltılır, daha iyi okunabilirlik sağlamak için."
                        },
                        "mouseCursor": {
                            "title": "Fare imleci",
                            "label": "Fare imleci odaklanmayı artırmak için 3 kat büyütülür."
                        },
                        "siteStructure": {
                            "title": "Site yapısı",
                            "label": "Tüm başlıklar ve bağlantılar önem sırasına göre alt alta listelenir, sayfada gezinmeyi kolaylaştırır."
                        },
                        "tooltips": {
                            "title": "İpuçları",
                            "label": "Bir `title` veya `label` niteliğine sahip tüm öğeler, fare ile üzerlerine gelindiğinde görünür bir araç ipucu görüntüler."
                        },
                        "readableText": {
                            "title": "Okunabilir metin",
                            "label": "Metni daha okunabilir hale getirmek için yeni bir yazı tipi yüklenir. Disleksi hastaları için özel olarak tasarlanmış bir yazı tipi de mevcuttur."
                        },
                        "stopAnimation": {
                            "title": "Animasyonları durdur",
                            "label": ""
                        }
                    },
                    "reportError": {
                        "button": "Hata bildir",
                        "label": "AccessFlow ile ilgili bir hatayı bildirin."
                    },
                    "overAccessFlow": {
                        "label": "Access-Flow Hakkında"
                    }
                }
            },
            "uk": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Відкрийте меню доступності AccessFlow, щоб внести налаштування."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Збільшений вигляд"
                        }
                    },
                    "languages": {
                        "title": "Мова ({{language}})",
                        "label": "Дозволяє змінити мову інтерфейсу AccessFlow одним кліком.",
                        "input": {
                            "label": "Шукайте потрібну мову."
                        },
                        "availableLanguages": {
                            "label": "Перемкніть інтерфейс на мову {{language}}."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Контраст",
                            "label": "Показує веб-сайт на різних рівнях контрастності."
                        },
                        "links": {
                            "title": "Посилання",
                            "label": "Виділяє всі посилання на веб-сайті кольором."
                        },
                        "biggerText": {
                            "title": "Збільшений текст",
                            "label": "Збільшує шрифт порівняно з поточним розміром шрифту."
                        },
                        "textSpacing": {
                            "title": "Міжрядковий інтервал",
                            "label": "Збільшує відстань між символами та словами."
                        },
                        "imagesRemove": {
                            "title": "Видалити зображення",
                            "label": "Усі елементи зображення на веб-сайті приховані."
                        },
                        "lineHeight": {
                            "title": "Висота рядка",
                            "label": "Висота рядка збільшується для кожного текстового елемента на веб-сторінці."
                        },
                        "saturation": {
                            "title": "Насиченість",
                            "label": "Насиченість веб-сайту збільшується або зменшується для забезпечення кращої читабельності."
                        },
                        "mouseCursor": {
                            "title": "Курсор миші",
                            "label": "Курсор миші збільшується в 3 рази для кращого фокусування."
                        },
                        "siteStructure": {
                            "title": "Структура сайту",
                            "label": "Усі заголовки та посилання перераховані один під одним в порядку важливості, що полегшує навігацію на сторінці."
                        },
                        "tooltips": {
                            "title": "Підказки",
                            "label": "Усі елементи, які мають атрибут `title` або `label`, показують видиму підказку для інструментів при наведенні на них курсора миші."
                        },
                        "readableText": {
                            "title": "Читабельний текст",
                            "label": "Завантажується новий шрифт для поліпшення читабельності тексту. Також доступний шрифт, спеціально призначений для дислексіків."
                        },
                        "stopAnimation": {
                            "title": "Зупинити анімацію",
                            "label": "Призупиняє всі відео та анімації на всьому веб-сайті."
                        }
                    },
                    "reportError": {
                        "button": "Повідомити про помилку",
                        "label": "Повідомити про помилку з AccessFlow"
                    },
                    "overAccessFlow": {
                        "label": "Про Access-Flow"
                    }
                }
            },
            "hu": {
                "accessFlow": {
                    "openSymbol": {
                        "label": "Nyissa meg az AccessFlow hozzáférhetőségi menüt a beállítások elvégzéséhez."
                    },
                    "header": {
                        "closeIcon": {
                            "label": "Nagyított nézet"
                        }
                    },
                    "languages": {
                        "title": "Nyelv ({{language}})",
                        "label": "Lehetővé teszi az AccessFlow felület nyelvének egyetlen kattintással történő megváltoztatását.",
                        "input": {
                            "label": "Keresse meg a kívánt nyelvet."
                        },
                        "availableLanguages": {
                            "label": "Váltson az {{language}} nyelvű felületre."
                        }
                    },
                    "tools": {
                        "contrast": {
                            "title": "Kontraszt",
                            "label": "A webhelyet különböző kontraszt szinteken jeleníti meg."
                        },
                        "links": {
                            "title": "Hivatkozások",
                            "label": "Az összes hivatkozást a webhelyen színnel kiemeli."
                        },
                        "biggerText": {
                            "title": "Nagyobb szöveg",
                            "label": "A betűméretet az aktuális betűmérethez képest nagyítja."
                        },
                        "textSpacing": {
                            "title": "Szövegtávolság",
                            "label": "Növeli a karakterek és szavak közötti távolságot."
                        },
                        "imagesRemove": {
                            "title": "Képek eltávolítása",
                            "label": "Az összes képelem a webhelyen el van rejtve."
                        },
                        "lineHeight": {
                            "title": "Sor magassága",
                            "label": "A sor magassága minden szövegelem esetében növekszik a webhelyen."
                        },
                        "saturation": {
                            "title": "Telítettség",
                            "label": "A webhely telítettsége növekszik vagy csökken a jobb olvashatóság érdekében."
                        },
                        "mouseCursor": {
                            "title": "Egérkurzor",
                            "label": "Az egérkurzor 3-szorosára nagyítva jobb fókuszálást biztosít."
                        },
                        "siteStructure": {
                            "title": "Webhely szerkezete",
                            "label": "Az összes cím és hivatkozás fontosságuk sorrendjében egymás alatt vannak felsorolva, ami megkönnyíti az oldalon való navigációt."
                        },
                        "tooltips": {
                            "title": "Eszközleírások",
                            "label": "Az összes elem, amelynek `title` vagy `label` attribútuma van, látható eszközleírást jelenít meg, amikor az egérrel rájuk mutat."
                        },
                        "readableText": {
                            "title": "Olvasható szöveg",
                            "label": "Egy új betűtípus betöltése a szöveg olvashatóságának javítása érdekében. Ezenkívül elérhető egy betűtípus, amely kifejezetten diszlexiások számára készült."
                        },
                        "stopAnimation": {
                            "title": "Animációk leállítása",
                            "label": "Az összes videót és animációt a webhelyen leállítja."
                        }
                    },
                    "reportError": {
                        "button": "Hiba bejelentése",
                        "label": "Hiba bejelentése az AccessFlow használatával"
                    },
                    "overAccessFlow": {
                        "label": "Az Access-Flow-ról"
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

class TranslatePipe {
    constructor(translationService) {
        this.translationService = translationService;
    }
    transform(value, params) {
        return this.translationService.currentLanguage$.pipe(map(() => {
            return this.translationService.translate(value, params);
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.8", ngImport: i0, type: TranslatePipe, deps: [{ token: TranslationService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.3.8", ngImport: i0, type: TranslatePipe, name: "translate", pure: false }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.8", ngImport: i0, type: TranslatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'translate',
                    pure: false
                }]
        }], ctorParameters: () => [{ type: TranslationService }] });

class AccessFlowComponent {
    onResize(event) {
        this.calculateToolsHeight();
    }
    onKeydownHandler(event) {
        // check press ctrl + u
        if (event.ctrlKey && event.key === 'u') {
            this.openAccessibility();
        }
    }
    onMousemoveHandler(event) {
        //check ist cursor longer then 300ms on the same position, then call function, showTooltip, parameter is the element under the mouse
        if (this.enabledTools.tooltips) {
            if (this.intervalTooltip) {
                clearTimeout(this.intervalTooltip);
                this.intervalTooltip = null;
            }
            this.intervalTooltip = setTimeout(() => {
                if (this.enabledTools.tooltips) {
                    this.openTooltip(event, document.elementFromPoint(event.clientX, event.clientY));
                }
                clearTimeout(this.intervalTooltip);
                this.intervalTooltip = null;
            }, 300);
        }
    }
    constructor(document, element, renderer, translationService) {
        this.document = document;
        this.element = element;
        this.renderer = renderer;
        this.translationService = translationService;
        this.size = 100;
        this.position = 'rightBottom';
        this.showAccessibility = false;
        this.enabledTools = {
            contrast: '',
            links: '',
            biggerText: '',
            textSpacing: '',
            imagesRemove: '',
            lineHeight: '',
            saturation: '',
            mouseCursor: '',
            siteStructure: '',
            tooltips: '',
            readableText: '',
            stopAnimation: ''
        };
        this.languageSearch = '';
        this.openLanguage = false;
        this.availableLanguages = [
            {
                code: 'en',
                name: 'English',
                inEnglish: 'USA',
                rtl: false
            },
            {
                name: 'اللغة العربية',
                code: 'ar',
                inEnglish: 'Arabic',
                rtl: true
            },
            {
                name: 'Български',
                code: 'bg',
                inEnglish: 'Bulgarian',
                rtl: false
            },
            {
                name: '中文',
                code: 'zh',
                inEnglish: 'Chinese',
                rtl: false
            },
            {
                name: 'Dansk',
                code: 'da',
                inEnglish: 'Danish',
                rtl: false
            },
            {
                code: 'de',
                name: 'Deutsch',
                inEnglish: 'German',
                rtl: false
            },
            {
                name: 'Eesti',
                code: 'et',
                inEnglish: 'Estonian',
                rtl: false
            },
            {
                name: 'Suomalainen',
                code: 'fi',
                inEnglish: 'Finnish',
                rtl: false
            },
            {
                name: 'Français',
                code: 'fr',
                inEnglish: 'French',
                rtl: false
            },
            {
                name: 'Ελληνική',
                code: 'el',
                inEnglish: 'Greek',
                rtl: false
            },
            {
                name: 'Bahasa Indonesia',
                code: 'id',
                inEnglish: 'Indonesian',
                rtl: false
            },
            {
                name: 'Italiano',
                code: 'it',
                inEnglish: 'Italian',
                rtl: false
            },
            {
                name: '日本語',
                code: 'ja',
                inEnglish: 'Japanese',
                rtl: false
            },
            {
                name: '한국어',
                code: 'ko',
                inEnglish: 'Korean',
                rtl: false
            },
            {
                name: 'Latviešu',
                code: 'lv',
                inEnglish: 'Latvian',
                rtl: false
            },
            {
                name: 'Lietuvių kalba',
                code: 'lt',
                inEnglish: 'Lithuanian',
                rtl: false
            },
            {
                name: 'Nederlands',
                code: 'nl',
                inEnglish: 'Dutch',
                rtl: false
            },
            {
                name: 'Norsk',
                code: 'no',
                inEnglish: 'Norwegian',
                rtl: false
            },
            {
                name: 'Polski',
                code: 'pl',
                inEnglish: 'Polish',
                rtl: false
            },
            {
                name: 'Português',
                code: 'pt',
                inEnglish: 'Portuguese',
                rtl: false
            },
            {
                name: 'Românesc',
                code: 'ro',
                inEnglish: 'Romanian',
                rtl: false
            },
            {
                name: 'Русский',
                code: 'ru',
                inEnglish: 'Russian',
                rtl: false
            },
            {
                name: 'Svenska',
                code: 'sv',
                inEnglish: 'Swedish',
                rtl: false
            },
            {
                name: 'Slovensky',
                code: 'sk',
                inEnglish: 'Slovak',
                rtl: false
            },
            {
                name: 'Slovenski',
                code: 'sl',
                inEnglish: 'Slovenian',
                rtl: false
            },
            {
                name: 'Español',
                code: 'es',
                inEnglish: 'Spanish',
                rtl: false
            },
            {
                name: 'Česky',
                code: 'cs',
                inEnglish: 'Czech',
                rtl: false
            },
            {
                name: 'Türkçe',
                code: 'tr',
                inEnglish: 'Turkish',
                rtl: false
            },
            {
                name: 'Українська',
                code: 'uk',
                inEnglish: 'Ukrainian',
                rtl: false
            },
            {
                name: 'Magyar',
                code: 'hu',
                inEnglish: 'Hungarian',
                rtl: false
            }
        ];
        this.selectedLanguage = { code: 'de', name: 'Deutsch' };
        const style = document.createElement('style');
        style.textContent = `
       @import url('https://fonts.cdnfonts.com/css/open-dyslexic');
      .af-cursor *{
        cursor: url('data:image/svg+xml;utf8,<svg width="70px" fill="%23ffffff" stroke="%23000000" stroke-width="4" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m27.109 16.57l4.2148 55.301 10.805-11.289 13.188 22.84 15.59-9-13.188-22.84 15.18-3.7109-45.785-31.301z"/></svg>') 20 25, auto !important;
      }
    `;
        this.document.head.appendChild(style);
    }
    getBrowserLanguage() {
        return navigator.language || navigator.userLanguage;
    }
    isLanguageInSearch(language) {
        let found = true;
        if (this.languageSearch.trim() != '') {
            found = language.name.toLowerCase().includes(this.languageSearch.toLowerCase()) || language.code.toLowerCase().includes(this.languageSearch.toLowerCase());
        }
        return found;
    }
    changeOpenLanguage() {
        this.openLanguage = !this.openLanguage;
        setTimeout(() => {
            if (this.searchbarLanguage?.nativeElement) {
                this.searchbarLanguage.nativeElement.focus();
            }
            this.calculateToolsHeight();
        }, 0);
    }
    changeLanguage(language) {
        // check is language availableLanguages
        let languageAvailable = this.availableLanguages.find((lang) => {
            return lang.code == language;
        });
        if (languageAvailable) {
            // set language
            this.selectedLanguage = languageAvailable;
        }
        else {
            this.selectedLanguage = this.availableLanguages.find((lang) => {
                return lang.code == 'de';
            });
        }
        localStorage.setItem('selectedLanguage', this.selectedLanguage);
        this.translationService.setLanguage(this.selectedLanguage.code);
    }
    calculateToolsHeight() {
        // set new max height for tools, remove all another ElementRefs
        let substractHeight = 75;
        if (this.footer?.nativeElement) {
            substractHeight += this.footer.nativeElement.clientHeight;
        }
        if (this.header?.nativeElement) {
            substractHeight += this.header.nativeElement.clientHeight;
        }
        if (this.languages?.nativeElement) {
            substractHeight += this.languages.nativeElement.clientHeight;
        }
        if (this.toolsContainer?.nativeElement) {
            this.toolsContainer.nativeElement.style.height = 'calc(100vh - ' + substractHeight + 'px)';
        }
    }
    openTooltip(event, element) {
        let allTooltipInfos = this.getAllParentInfos(element);
        if (allTooltipInfos.trim() == '') {
            return;
        }
        this.removeOldTooltip(false);
        let tooltip = document.createElement('div');
        tooltip.classList.add('af-tooltip');
        tooltip.style.position = 'fixed';
        tooltip.style.top = (event.clientY + 10) + 'px';
        tooltip.style.left = (event.clientX + 10) + 'px';
        tooltip.style.backgroundColor = 'black';
        tooltip.style.color = 'white';
        tooltip.style.padding = '10px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.zIndex = '999999999';
        tooltip.style.maxWidth = '300px';
        tooltip.style.wordWrap = 'break-word';
        tooltip.style.textAlign = 'center';
        tooltip.style.fontSize = '14px';
        tooltip.style.fontFamily = 'Arial';
        tooltip.style.border = '2px solid white';
        tooltip.style.outline = '2px solid black';
        tooltip.innerHTML = allTooltipInfos;
        document.body.appendChild(tooltip);
        // check is af-tooltip over the window, then move it to the left
        if (tooltip.getBoundingClientRect().right > window.innerWidth) {
            tooltip.style.left = (event.clientX - tooltip.getBoundingClientRect().width - 10) + 'px';
        }
        // check is af-tooltip over the window, then move it to the top
        if (tooltip.getBoundingClientRect().bottom > window.innerHeight) {
            tooltip.style.top = (event.clientY - tooltip.getBoundingClientRect().height - 10) + 'px';
        }
        setTimeout(() => {
            tooltip.remove();
        }, 5000);
    }
    getAllParentInfos(element) {
        let allInfos = [];
        if (element.alt || element.getAttribute('aria-label') || element.title) {
            if (element.alt && element.alt.trim() != '') {
                allInfos.push(element.alt);
            }
            if (element.getAttribute('aria-label') && element.getAttribute('aria-label').trim() != '') {
                allInfos.push(element.getAttribute('aria-label'));
            }
            if (element.title && element.title.trim() != '') {
                allInfos.push(element.title);
            }
        }
        // check parent, when not body
        if (element.parentElement && element.parentElement.tagName && element.parentElement.tagName.toLowerCase() != 'body') {
            let parentInfos = this.getAllParentInfos(element.parentElement);
            if (parentInfos.length > 0) {
                allInfos = allInfos.concat(parentInfos);
            }
        }
        return allInfos.join(' - ');
    }
    ngOnInit() {
        let accessFlow = localStorage.getItem('access-flow');
        if (accessFlow) {
            this.enabledTools = JSON.parse(accessFlow);
        }
        this.checkTools();
        let language = this.getBrowserLanguage();
        if (language) {
            this.changeLanguage(language);
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.calculateToolsHeight();
        }, 0);
    }
    openAccessibility() {
        this.showAccessibility = (!this.showAccessibility);
        if (this.showAccessibility) {
            setTimeout(() => {
                this.calculateToolsHeight();
            }, 0);
        }
    }
    enableTool(tool) {
        switch (tool) {
            case 'stopAnimation':
                this.enabledTools.stopAnimation = (this.enabledTools.stopAnimation == '' ? '1' : '');
                break;
            case 'readableText':
                this.enabledTools.readableText = (this.enabledTools.readableText == '' ? '1' : (this.enabledTools.readableText == '1' ? '2' : ''));
                break;
            case 'contrast':
                this.enabledTools.contrast = (this.enabledTools.contrast == '' ? '1' : (this.enabledTools.contrast == '1' ? '2' : (this.enabledTools.contrast == '2' ? '3' : '')));
                break;
            case 'links':
                this.enabledTools.links = (this.enabledTools.links == '' ? '1' : '');
                break;
            case 'biggerText':
                this.enabledTools.biggerText = (this.enabledTools.biggerText == '' ? '1' : (this.enabledTools.biggerText == '1' ? '2' : (this.enabledTools.biggerText == '2' ? '3' : '')));
                break;
            case 'textSpacing':
                this.enabledTools.textSpacing = (this.enabledTools.textSpacing == '' ? '1' : (this.enabledTools.textSpacing == '1' ? '2' : (this.enabledTools.textSpacing == '2' ? '3' : '')));
                break;
            case 'imagesRemove':
                this.enabledTools.imagesRemove = (this.enabledTools.imagesRemove == '' ? '1' : '');
                break;
            case 'lineHeight':
                this.enabledTools.lineHeight = (this.enabledTools.lineHeight == '' ? '1' : (this.enabledTools.lineHeight == '1' ? '2' : (this.enabledTools.lineHeight == '2' ? '3' : '')));
                break;
            case 'saturation':
                this.enabledTools.saturation = (this.enabledTools.saturation == '' ? '1' : (this.enabledTools.saturation == '1' ? '2' : (this.enabledTools.saturation == '2' ? '3' : '')));
                break;
            case 'mouseCursor':
                this.enabledTools.mouseCursor = (this.enabledTools.mouseCursor == '' ? '1' : '');
                break;
            case 'siteStructure':
                this.enabledTools.siteStructure = (this.enabledTools.siteStructure == '' ? '1' : '');
                break;
            case 'tooltips':
                this.enabledTools.tooltips = (this.enabledTools.tooltips == '' ? '1' : '');
                break;
        }
        localStorage.setItem('access-flow', JSON.stringify(this.enabledTools));
        this.checkTools();
    }
    removeOldTooltip(withTimeout = false) {
        if (withTimeout) {
            setTimeout(() => {
                // remove old af-tooltip
                let oldTooltip = document.querySelector('.af-tooltip');
                if (oldTooltip) {
                    oldTooltip.remove();
                }
            }, 100);
        }
        else {
            let oldTooltip = document.querySelector('.af-tooltip');
            if (oldTooltip) {
                oldTooltip.remove();
            }
        }
    }
    openGithubIssues() {
        window.open('https://github.com/RGerhardt-Pressmind/access-flow/issues', '_blank');
    }
    openGithub() {
        window.open('https://github.com/RGerhardt-Pressmind/access-flow', '_blank');
    }
    checkTools() {
        if (!this.enabledTools.tooltips) {
            this.removeOldTooltip();
        }
        let elements = document.querySelectorAll('span, p, div, h1, h2, h3, h4, h5, h6');
        // remove from elements when closest parent is access-flow
        elements = Array.from(elements).filter((element) => {
            return element.closest('access-flow') === null;
        });
        document.body.classList.remove('af-invert-colors-1');
        this.element.nativeElement.classList.remove('af-invert-colors-1');
        elements.forEach((element) => {
            element.style.backgroundColor = '';
            element.style.color = '';
            element.style.lineHeight = '';
            element.style.wordSpacing = '';
            element.style.letterSpacing = '';
            element.style.zoom = '';
            element.style.filter = '';
            element.style.fontFamily = '';
        });
        document.documentElement.style.filter = '';
        if (this.enabledTools.stopAnimation) {
            let animations = document.querySelectorAll('*');
            animations.forEach((animation) => {
                animation.style.animationPlayState = 'paused';
                animation.style.transition = 'none';
            });
            // Stoppe alle Videos
            document.querySelectorAll('video').forEach(video => {
                video.pause();
            });
        }
        else {
            let animations = document.querySelectorAll('*');
            animations.forEach((animation) => {
                animation.style.animationPlayState = '';
                animation.style.transition = '';
            });
        }
        if (this.enabledTools.contrast) {
            if (this.enabledTools.contrast == '1') {
                elements.forEach((element) => {
                    element.style.backgroundColor = 'black';
                    element.style.color = 'yellow';
                });
            }
            else if (this.enabledTools.contrast == '2') {
                elements.forEach((element) => {
                    element.style.backgroundColor = 'black';
                    element.style.color = 'white';
                });
            }
            else if (this.enabledTools.contrast == '3') {
                elements.forEach((element) => {
                    element.style.backgroundColor = 'white';
                    element.style.color = 'black';
                });
            }
        }
        if (this.enabledTools.imagesRemove) {
            let images = document.querySelectorAll('img');
            images.forEach((image) => {
                image.style.opacity = '0';
            });
        }
        else {
            let images = document.querySelectorAll('img');
            images.forEach((image) => {
                image.style.opacity = '';
            });
        }
        if (this.enabledTools.mouseCursor) {
            document.body.classList.add('af-cursor');
        }
        else {
            document.body.classList.remove('af-cursor');
        }
        if (this.enabledTools.saturation) {
            let saturation = '200%';
            if (this.enabledTools.saturation == '2') {
                saturation = '50%';
            }
            else if (this.enabledTools.saturation == '3') {
                saturation = '0%';
            }
            this.renderer.setStyle(this.document.documentElement, 'filter', 'saturate(' + saturation + ')');
            //document.documentElement.style.filter = 'saturation(' + saturation + ')';
        }
        if (this.enabledTools.links) {
            let links = document.querySelectorAll('a');
            links.forEach((link) => {
                link.style.textDecoration = 'underline';
                link.style.color = 'yellow';
                link.style.backgroundColor = 'black';
            });
        }
        else {
            let links = document.querySelectorAll('a');
            links.forEach((link) => {
                link.style.textDecoration = '';
                link.style.color = '';
                link.style.backgroundColor = '';
            });
        }
        if (this.enabledTools.lineHeight) {
            let lineHeight = '3em';
            if (this.enabledTools.lineHeight == '2') {
                lineHeight = '4em';
            }
            else if (this.enabledTools.lineHeight == '3') {
                lineHeight = '5em';
            }
            elements.forEach((element) => {
                element.style.lineHeight = lineHeight;
            });
        }
        else {
            elements.forEach((element) => {
                element.style.lineHeight = '';
            });
        }
        if (this.enabledTools.textSpacing) {
            let wordSpacing = '0.15em';
            let letterSpacing = '0.13em';
            if (this.enabledTools.textSpacing == '2') {
                wordSpacing = '0.25em';
                letterSpacing = '0.23em';
            }
            else if (this.enabledTools.textSpacing == '3') {
                wordSpacing = '0.35em';
                letterSpacing = '0.33em';
            }
            elements.forEach((element) => {
                element.style.wordSpacing = wordSpacing;
                element.style.letterSpacing = letterSpacing;
            });
        }
        else {
            elements.forEach((element) => {
                element.style.wordSpacing = '';
                element.style.letterSpacing = '';
            });
        }
        if (this.enabledTools.biggerText) {
            let newValue = '1.1';
            if (this.enabledTools.biggerText == '2') {
                newValue = '1.2';
            }
            else if (this.enabledTools.biggerText == '3') {
                newValue = '1.3';
            }
            elements.forEach((element) => {
                element.style.zoom = newValue;
            });
        }
        else {
            elements.forEach((element) => {
                element.style.zoom = '';
            });
        }
        if (this.enabledTools.readableText) {
            let fontFace = 'Arial, sans-serif';
            if (this.enabledTools.readableText == '2') {
                fontFace = "'Open-Dyslexic', sans-serif";
            }
            elements.forEach((element) => {
                element.style.fontFamily = fontFace;
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.8", ngImport: i0, type: AccessFlowComponent, deps: [{ token: DOCUMENT }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: TranslationService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.8", type: AccessFlowComponent, selector: "access-flow", inputs: { size: "size", position: "position", showAccessibility: "showAccessibility" }, host: { listeners: { "window:resize": "onResize($event)", "document:keydown": "onKeydownHandler($event)", "document:mousemove": "onMousemoveHandler($event)" } }, viewQueries: [{ propertyName: "footer", first: true, predicate: ["footer"], descendants: true }, { propertyName: "languages", first: true, predicate: ["languages"], descendants: true }, { propertyName: "header", first: true, predicate: ["header"], descendants: true }, { propertyName: "toolsContainer", first: true, predicate: ["toolsContainer"], descendants: true }, { propertyName: "searchbarLanguage", first: true, predicate: ["searchbarLanguage"], descendants: true }], ngImport: i0, template: "@if(!showAccessibility)\n{\n  <svg (click)=\"openAccessibility()\" [attr.aria-label]=\"'accessFlow.openSymbol.label' | translate | async\" class=\"icon {{position}}\" [ngStyle]=\"{'width': size+'px', 'height': size+'px'}\" viewBox=\"0 0 567 567\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;\"><g><path d=\"M281.567,286.242l-147.196,179.234c-21.604,26.306 -60.501,30.124 -86.807,8.52l-0.148,-0.122c-26.306,-21.604 -30.124,-60.501 -8.52,-86.807l147.196,-179.234c21.604,-26.306 60.501,-30.124 86.807,-8.52l0.149,0.122c26.306,21.604 30.123,60.501 8.519,86.807Z\" style=\"fill:#ff9e00;\"/><path d=\"M526.513,182.125l-147.196,179.234c-21.604,26.306 -60.501,30.123 -86.807,8.519l-0.149,-0.121c-26.306,-21.604 -30.123,-60.501 -8.519,-86.807l147.196,-179.234c21.604,-26.306 60.501,-30.124 86.807,-8.52l0.148,0.122c26.306,21.604 30.124,60.501 8.52,86.807Z\" style=\"fill:#00cbef;\"/><g><path d=\"M215.171,367.435c-53.088,-43.84 -60.797,-122.511 -17.134,-175.829c43.662,-53.317 122.31,-61.271 175.755,-17.868l-158.621,193.697Z\" style=\"fill:#ff1e43;\"/><path d=\"M215.112,367.576c53.446,43.403 132.093,35.45 175.756,-17.868c43.662,-53.318 35.954,-131.989 -17.135,-175.828l-158.621,193.696Z\" style=\"fill:#008cee;\"/></g></g></svg>\n}\n\n@if(showAccessibility)\n{\n  <div class=\"accessibility\" [ngClass]=\"{'rtl': selectedLanguage.rtl}\">\n    <div class=\"af-container\">\n      <div #header class=\"header\">\n        <svg class=\"logo\" aria-label=\"AccessFlow Logo\" viewBox=\"0 0 1134 426\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;\"><g transform=\"matrix(97.879,0,0,97.879,991.793,364.743)\"></g><text x=\"169.217px\" y=\"364.743px\" style=\"font-family:'GetVoIPGrotesque', 'GetVoIP Grotesque', sans-serif;font-weight:700;font-size:97.879px;\">A<tspan x=\"250.849px 328.467px 406.085px 485.073px 565.53px 645.986px 723.996px 801.418px 891.858px \" y=\"364.743px 364.743px 364.743px 364.743px 364.743px 364.743px 364.743px 364.743px 364.743px \">CCESSFLOW</tspan></text><g><path d=\"M250.587,195.088l-129.957,158.242c-19.074,23.226 -53.416,26.596 -76.641,7.522l-0.131,-0.107c-23.225,-19.074 -26.596,-53.416 -7.522,-76.641l129.957,-158.243c19.074,-23.225 53.416,-26.596 76.641,-7.522l0.131,0.108c23.225,19.074 26.596,53.415 7.522,76.641Z\" style=\"fill:#ff9e00;\"/><path d=\"M466.846,103.164l-129.958,158.243c-19.073,23.225 -53.415,26.596 -76.64,7.522l-0.131,-0.108c-23.226,-19.073 -26.596,-53.415 -7.522,-76.64l129.957,-158.243c19.074,-23.226 53.415,-26.596 76.641,-7.522l0.131,0.107c23.225,19.074 26.595,53.416 7.522,76.641Z\" style=\"fill:#00cbef;\"/><g><path d=\"M191.966,266.771c-46.87,-38.705 -53.676,-108.163 -15.127,-155.236c38.549,-47.073 107.985,-54.095 155.172,-15.775l-140.045,171.011Z\" style=\"fill:#ff1e43;\"/><path d=\"M191.915,266.896c47.186,38.32 116.622,31.298 155.171,-15.775c38.55,-47.074 31.744,-116.532 -15.127,-155.237l-140.044,171.012Z\" style=\"fill:#008cee;\"/></g></g></svg>\n\n        <svg [attr.aria-label]=\"'accessFlow.header.closeIcon.label' | translate | async\" (click)=\"showAccessibility = false\" class=\"closeIcon\" version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n         <path d=\"m75.758 33.594l-9.3516-9.3477-16.406 16.402-16.406-16.402-9.3516 9.3477 16.406 16.406-16.406 16.402 9.3516 9.3516 16.406-16.402 16.406 16.406 9.3516-9.3516-16.406-16.41zm-25.758 66.406c-27.613 0-50-22.387-50-50.004 0-27.609 22.387-49.996 50-49.996s49.996 22.387 49.996 49.996c0.003906 27.617-22.379 50.004-49.996 50.004z\"/>\n        </svg>\n\n      </div>\n\n      <div #languages class=\"languages\">\n        <div class=\"headerLanguage\" (click)=\"changeOpenLanguage()\" [attr.aria-label]=\"'accessFlow.languages.label' | translate | async\">\n          <p class=\"strong\">{{'accessFlow.languages.title' | translate: {language: selectedLanguage.name} | async }}</p>\n          <svg class=\"arrowRight\" version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n           <path d=\"m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z\"/>\n          </svg>\n        </div>\n\n        @if(openLanguage)\n        {\n          <div class=\"languageContent\">\n            <div class=\"searchbar\">\n              <input type=\"text\" [attr.aria-label]=\"'accessFlow.languages.input.label' | translate | async\" #searchbarLanguage [(ngModel)]=\"languageSearch\">\n            </div>\n            <div class=\"availableLanguages\">\n              <ul>\n                @for(language of availableLanguages; track language.code)\n                {\n                  <li [ngClass]=\"{'selected': language.code == selectedLanguage.code, 'visible': (isLanguageInSearch(language))}\" (click)=\"changeLanguage(language.code)\" [attr.aria-label]=\"'accessFlow.languages.availableLanguages.label' | translate: {language: language.name} | async\">\n                    <div class=\"box\">{{language.code}}</div>\n                    <div class=\"name\">{{language.name}} <span class=\"inEnglish\">({{language.inEnglish}})</span></div>\n                  </li>\n                }\n              </ul>\n            </div>\n          </div>\n        }\n      </div>\n\n      <div #toolsContainer class=\"toolsContainer\">\n        <ul class=\"tools\">\n          <li [attr.aria-label]=\"'accessFlow.tools.contrast.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.contrast}\" (click)=\"enableTool('contrast')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path d=\"m50 6.25c-12.156 0-23.812 4.8281-32.41 13.426-8.5938 8.5938-13.422 20.25-13.422 32.406s4.8281 23.816 13.422 32.41c8.5977 8.5938 20.254 13.426 32.41 13.426s23.812-4.832 32.41-13.426c8.5938-8.5938 13.422-20.254 13.422-32.41s-4.8281-23.812-13.422-32.406c-8.5977-8.5977-20.254-13.426-32.41-13.426zm-2.082 67.895-15.645 15.625h-0.003907c-2.3711-1.1172-4.6289-2.4531-6.75-4l22.398-22.414zm0 5.875v13.73c-3.8984-0.19922-7.75-0.94922-11.438-2.2305zm0-39.207-33.332 33.332h-0.003907c-1.4062-2.3008-2.5781-4.7344-3.5-7.2695l36.836-36.855zm0-16.668-38.25 38.23c-0.80859-3.0977-1.2539-6.2773-1.3359-9.4805l39.582-39.582zm-3.3359-13.352-35.852 35.875c1.1953-9.0938 5.3555-17.535 11.84-24.023 6.4805-6.4844 14.922-10.652 24.012-11.852zm-27.52 66.668 30.855-30.773v10.793l-25.648 25.645c-1.8984-1.7031-3.6406-3.5703-5.207-5.582z\"/>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.contrast.title' | translate | async\">{{'accessFlow.tools.contrast.title' | translate | async}}</div>\n\n            @if(enabledTools.contrast != '')\n            {\n              <div class=\"bars\">\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.contrast == '1'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.contrast == '2'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.contrast == '3'}\"></div>\n              </div>\n            }\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.links.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.links}\" (click)=\"enableTool('links')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path d=\"m88.125 60.312-48.438-48.438c-3.75-3.75-8.75-5.625-14.062-5.625-5 0-10 1.875-13.75 5.625-7.5 7.5-7.5 20 0 27.812l48.438 48.438c3.75 3.75 8.75 5.625 13.75 5.625 5.3125 0 10.312-2.1875 13.75-5.625 3.75-3.75 5.625-8.75 5.625-13.75 0.3125-5.3125-1.5625-10.312-5.3125-14.062zm-21.875 5.9375c0.625-0.625 0.9375-1.25 1.5625-1.875l6.875 6.875c0.3125 0.3125 0.625 0.9375 0.625 1.5625s-0.3125 1.25-0.625 1.5625c-0.9375 0.9375-2.5 0.9375-3.4375 0l-6.875-6.875c0.625-0.3125 1.25-0.625 1.875-1.25zm-50-50c2.5-2.5 5.9375-3.75 9.375-3.75s6.875 1.25 9.375 3.75l26.562 26.562c4.0625 4.0625 5 10 2.5 15.312-0.625 1.25-1.5625 2.5-2.5 3.75-0.625 0.625-1.25 0.9375-1.875 1.5625l-4.6875-4.6875c0.625-0.3125 1.25-0.9375 1.875-1.25 1.5625-1.5625 2.5-3.75 2.5-5.9375s-0.9375-4.375-2.5-6.25l-24.375-24.375c-3.4375-3.125-9.0625-3.125-12.188 0-1.25 1.5625-2.1875 3.75-2.1875 5.9375s0.9375 4.375 2.5 6.25l8.4375 8.4375c-0.625 1.5625-0.9375 3.4375-0.9375 5.3125l-11.875-11.875c-5.3125-5-5.3125-13.438 0-18.75zm30 32.5c0-0.625 0.3125-1.25 0.625-1.5625 0.9375-0.9375 2.5-0.9375 3.4375 0l2.5 2.5c0.3125 0.3125 0.625 0.9375 0.625 1.5625s-0.3125 1.25-0.625 1.5625c-0.9375 0.9375-2.5 0.9375-3.4375 0l-2.5-2.5c-0.3125-0.3125-0.625-0.9375-0.625-1.5625zm-12.5-15c-0.625 0.625-0.9375 1.25-1.5625 1.875l-6.875-7.1875c-0.625-0.3125-0.9375-0.9375-0.9375-1.5625s0.3125-1.25 0.625-1.5625c0.9375-0.9375 2.5-0.9375 3.4375 0l6.875 6.875c-0.3125 0.625-0.9375 0.9375-1.5625 1.5625zm50 50c-2.5 2.5-5.9375 3.75-9.375 3.75-3.75 0-6.875-1.25-9.375-3.75l-26.562-26.562c-4.0625-4.0625-5-10-2.5-15.312 0.625-1.25 1.5625-2.5 2.5-3.75 0.625-0.625 1.25-0.9375 1.875-1.5625l4.6875 4.6875c-0.625 0.3125-1.25 0.9375-1.875 1.25-1.5625 1.5625-2.5 3.75-2.5 5.9375s0.9375 4.375 2.5 6.25l24.375 24.375c1.5625 1.5625 3.75 2.5 5.9375 2.5s4.375-0.9375 5.9375-2.5 2.5-3.75 2.5-5.9375-0.9375-4.375-2.5-6.25l-8.4375-8.4375c0.625-1.875 0.9375-3.75 0.9375-5.625l11.875 11.875c2.5 2.5 4.0625 5.9375 4.0625 9.375-0.3125 3.75-1.5625 7.1875-4.0625 9.6875z\"/>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.links.title' | translate | async\">{{'accessFlow.tools.links.title' | translate | async}}</div>\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.biggerText.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.biggerText}\" (click)=\"enableTool('biggerText')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <g>\n              <path d=\"m26 29h14v42h-8v6h22v-6h-8v-42h14v6h6v-9c0-1.6562-1.3438-3-3-3h-40c-1.6562 0-3 1.3438-3 3v9h6z\"/>\n              <path d=\"m65 44v8h-8v6h8v10c0 4.9688 4.0312 9 9 9h6v-6h-6c-1.6562 0-3-1.3438-3-3v-10h8v-6h-8v-8z\"/>\n             </g>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.biggerText.title' | translate | async\">{{'accessFlow.tools.biggerText.title' | translate | async}}</div>\n\n            @if(enabledTools.biggerText != '')\n            {\n              <div class=\"bars\">\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.biggerText == '1'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.biggerText == '2'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.biggerText == '3'}\"></div>\n              </div>\n            }\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.textSpacing.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.textSpacing}\" (click)=\"enableTool('textSpacing')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path d=\"m92.844 83.469-12.5 12.5c-0.58594 0.58984-1.3867 0.92578-2.2188 0.92578s-1.6328-0.33594-2.2188-0.92578c-0.58984-0.58594-0.92578-1.3867-0.92578-2.2188s0.33594-1.6328 0.92578-2.2188l7.1875-7.1562h-66.188l7.1875 7.1562c0.58984 0.58594 0.92578 1.3867 0.92578 2.2188s-0.33594 1.6328-0.92578 2.2188c-0.58594 0.58984-1.3867 0.92578-2.2188 0.92578s-1.6328-0.33594-2.2188-0.92578l-12.5-12.5c-0.58984-0.58594-0.92578-1.3867-0.92578-2.2188s0.33594-1.6328 0.92578-2.2188l12.5-12.5c1.2266-1.2266 3.2109-1.2266 4.4375 0s1.2266 3.2109 0 4.4375l-7.1875 7.1562h66.188l-7.1875-7.1562c-1.2266-1.2266-1.2266-3.2109 0-4.4375s3.2109-1.2266 4.4375 0l12.5 12.5c0.58984 0.58594 0.92578 1.3867 0.92578 2.2188s-0.33594 1.6328-0.92578 2.2188zm-77.219-70.969h31.25v59.375c0 1.7266 1.3984 3.125 3.125 3.125s3.125-1.3984 3.125-3.125v-59.375h31.25c1.7266 0 3.125-1.3984 3.125-3.125s-1.3984-3.125-3.125-3.125h-68.75c-1.7266 0-3.125 1.3984-3.125 3.125s1.3984 3.125 3.125 3.125z\"/>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.textSpacing.title' | translate | async\">{{'accessFlow.tools.textSpacing.title' | translate | async}}</div>\n\n            @if(enabledTools.textSpacing != '')\n            {\n              <div class=\"bars\">\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.textSpacing == '1'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.textSpacing == '2'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.textSpacing == '3'}\"></div>\n              </div>\n            }\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.imagesRemove.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.imagesRemove}\" (click)=\"enableTool('imagesRemove')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path d=\"m6 16c-1.7852 0-2.9883 1.5625-3 3v56c0 1.5703 1.4297 3 3 3h61.094c3.125 3.6641 7.7422 6 12.906 6 9.3516 0 17-7.6484 17-17 0-6.8594-4.1211-12.785-10-15.469v-32.531c0-1.5703-1.4297-3-3-3zm3 6h72v28.062c-0.33594-0.019531-0.66016-0.0625-1-0.0625-2.8984 0-5.6367 0.73828-8.0312 2.0312l-6.8125-7.125c-0.63281-0.65625-1.5312-0.99219-2.4375-0.90625-0.625 0.058594-1.2148 0.30859-1.6875 0.71875l-13.469 11.781-17.312-19.5c-0.60938-0.68359-1.4922-1.0508-2.4062-1-0.75781 0.039062-1.4727 0.36328-2 0.90625l-16.844 17.594zm39 2c-4.9336 0-9 4.0664-9 9s4.0664 9 9 9 9-4.0664 9-9-4.0664-9-9-9zm0 6c1.6914 0 3 1.3086 3 3s-1.3086 3-3 3-3-1.3086-3-3 1.3086-3 3-3zm-20.094 13.406l25.438 28.594h-44.344v-8.8125zm34.906 7.7188l4.4688 4.6562c-2.6484 3-4.2812 6.9258-4.2812 11.219 0 1.7422 0.28906 3.4141 0.78125 5h-2.4062l-9.8125-11.031zm17.188 4.875c6.1094 0 11 4.8906 11 11s-4.8906 11-11 11-11-4.8906-11-11 4.8906-11 11-11zm-5 3c-0.77344 0-1.5352 0.31641-2.125 0.90625-1.1797 1.1797-1.1797 3.0703 0 4.25l2.8438 2.8438-2.8438 2.8438c-1.1797 1.1797-1.1797 3.1016 0 4.2812s3.1016 1.1797 4.2812 0l2.8438-2.8438 2.8438 2.8438c1.1797 1.1797 3.0703 1.1797 4.25 0s1.1797-3.1016 0-4.2812l-2.8438-2.8438 2.8438-2.8438c1.2109-1.2031 1.1797-3.0703 0-4.25s-3.0703-1.1797-4.25 0l-2.8438 2.8438-2.8438-2.8438c-0.58984-0.58984-1.3828-0.90625-2.1562-0.90625z\"/>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.imagesRemove.title' | translate | async\">{{'accessFlow.tools.imagesRemove.title' | translate | async}}</div>\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.lineHeight.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.lineHeight}\" (click)=\"enableTool('lineHeight')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <g>\n              <path d=\"m91.309 54.441h-49.777c-1.1992 0.035156-2.1406 1.0312-2.1094 2.2305v8.8906-0.003906c-0.03125 1.1953 0.91406 2.1875 2.1094 2.2227h49.777c1.1953-0.035156 2.1406-1.0273 2.1133-2.2227v-8.8867c0.015625-0.57812-0.19922-1.1367-0.59375-1.5547-0.39844-0.41797-0.94141-0.66016-1.5195-0.67578z\"/>\n              <path d=\"m69.09 76.672h-27.641c-1.1602 0.066406-2.0508 1.0547-2 2.2188v8.8906c-0.050781 1.1602 0.83984 2.1484 2 2.2188h27.641c1.1602-0.070312 2.0508-1.0586 2-2.2188v-8.8906c0.050781-1.1641-0.83984-2.1523-2-2.2188z\"/>\n              <path d=\"m91.309 32.219h-49.777c-1.1953 0.035156-2.1406 1.0273-2.1094 2.2227v8.8906-0.003906c-0.03125 1.1992 0.91016 2.1953 2.1094 2.2305h49.777c0.57812-0.015625 1.1211-0.25781 1.5195-0.67578 0.39453-0.41797 0.60938-0.97656 0.59375-1.5547v-8.8867c0.027344-1.1953-0.91797-2.1875-2.1133-2.2227z\"/>\n              <path d=\"m91.309 10h-49.777c-1.1953 0.03125-2.1406 1.0234-2.1094 2.2188v8.8906c-0.03125 1.1953 0.91406 2.1875 2.1094 2.2188h49.777c0.57422-0.011719 1.1211-0.25391 1.5195-0.66797 0.39453-0.41797 0.60938-0.97656 0.59375-1.5508v-8.8906c0.015625-0.57422-0.19922-1.1289-0.59375-1.5469-0.39844-0.41797-0.94531-0.66016-1.5195-0.67188z\"/>\n              <path d=\"m25.738 26.109v-4h4.5234c0.76562 0 1.4688-0.44141 1.8008-1.1328 0.33203-0.69531 0.23828-1.5156-0.24219-2.1172l-10.82-13.809c-0.37891-0.47266-0.95312-0.75-1.5586-0.75-0.60938 0-1.1836 0.27734-1.5625 0.75l-10.879 13.801c-0.48438 0.60156-0.57422 1.4297-0.23828 2.1211 0.33984 0.69531 1.0469 1.1328 1.8164 1.1289h4.5234v55.797h-4.5234c-0.76953-0.003907-1.4766 0.43359-1.8164 1.1289-0.33594 0.69141-0.24609 1.5195 0.23828 2.1211l10.859 13.852c0.37891 0.48047 0.95703 0.76172 1.5703 0.76172 0.61328 0 1.1914-0.28125 1.5703-0.76172l10.84-13.801c0.48047-0.59766 0.57422-1.4219 0.24219-2.1133-0.33203-0.69531-1.0352-1.1367-1.8008-1.1367h-4.543z\"/>\n             </g>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.lineHeight.title' | translate | async\">{{'accessFlow.tools.lineHeight.title' | translate | async}}</div>\n\n            @if(enabledTools.lineHeight != '')\n            {\n              <div class=\"bars\">\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.lineHeight == '1'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.lineHeight == '2'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.lineHeight == '3'}\"></div>\n              </div>\n            }\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.saturation.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.saturation}\" (click)=\"enableTool('saturation')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <g>\n              <path d=\"m50 91.668c-20.246 0-33.332-11.449-33.332-29.168 0-18.066 27.121-49.262 30.211-52.758 0.8125-0.85938 1.9414-1.3477 3.125-1.3477s2.3125 0.48828 3.125 1.3477c3.082 3.4961 30.203 34.691 30.203 52.758 0 17.715-13.086 29.168-33.332 29.168zm0-72.754c-9.0742 10.91-25 32.387-25 43.586 0 19.332 19.137 20.832 25 20.832s25-1.5 25-20.832c0-11.199-15.926-32.676-25-43.586z\"/>\n              <path d=\"m50 79.168c-18.129 0-20.832-10.441-20.832-16.668 0-2.3008 1.8633-4.168 4.1641-4.168s4.168 1.8672 4.168 4.168c0 2.7031 0 8.332 12.5 8.332 2.3008 0 4.168 1.8672 4.168 4.168s-1.8672 4.168-4.168 4.168z\"/>\n             </g>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.saturation.title' | translate | async\">{{'accessFlow.tools.saturation.title' | translate | async}}</div>\n\n            @if(enabledTools.saturation != '')\n            {\n              <div class=\"bars\">\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.saturation == '1'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.saturation == '2'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.saturation == '3'}\"></div>\n              </div>\n            }\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.mouseCursor.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.mouseCursor}\" (click)=\"enableTool('mouseCursor')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path d=\"m27.098 13.562c-0.83594 0.007812-1.6328 0.36328-2.1953 0.97656-0.5625 0.61719-0.84375 1.4414-0.77344 2.2734l4.2188 55.281c0.089844 1.1797 0.86719 2.1953 1.9805 2.5938s2.3555 0.10547 3.1758-0.75l8.0312-8.4062 11.188 19.406c0.82812 1.4336 2.6602 1.9219 4.0938 1.0938l15.594-9c1.4297-0.82812 1.918-2.6602 1.0938-4.0938l-11.188-19.375 11.281-2.7812c1.1445-0.28125 2.0195-1.2031 2.2344-2.3633 0.21484-1.1602-0.26953-2.3359-1.2344-3.0117l-45.781-31.312c-0.50391-0.34766-1.1055-0.53125-1.7188-0.53125zm3.4688 9.0312l35.094 23.969-8.6562 2.0938c-0.92188 0.22656-1.6836 0.875-2.0547 1.75-0.36719 0.875-0.30078 1.8711 0.17969 2.6875l11.688 20.219-10.406 6-11.688-20.219c-0.46875-0.8125-1.293-1.3594-2.2266-1.4766-0.93359-0.11719-1.8672 0.21094-2.5234 0.88281l-6.1562 6.4375z\"/>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.mouseCursor.title' | translate | async\">{{'accessFlow.tools.mouseCursor.title' | translate | async}}</div>\n          </li>\n          <!--<li [attr.aria-label]=\"'accessFlow.tools.siteStructure.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.siteStructure}\" (click)=\"enableTool('siteStructure')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path d=\"m37.5 8.332c-2.3008 0-4.168 1.8672-4.168 4.168v16.668-0.003907c0 2.3008 1.8672 4.168 4.168 4.168h25c2.3008 0 4.168-1.8672 4.168-4.168v-16.668 0.003906c0-2.3008-1.8672-4.168-4.168-4.168zm4.168 8.332h16.668v8.332h-16.668zm8.2695 20.777h-0.003906c-2.2969 0.035156-4.1328 1.9258-4.1016 4.2266v4.168h-25v-0.003907c-2.3008 0-4.1641 1.8672-4.1641 4.168v8.332c-0.015625 1.1172 0.41406 2.1914 1.1992 2.9844 0.78125 0.79688 1.8516 1.2422 2.9648 1.2422 1.1172 0 2.1836-0.44531 2.9688-1.2422 0.78125-0.79297 1.2148-1.8672 1.1992-2.9844v-4.168h20.832v4.168c-0.015625 1.1172 0.41797 2.1914 1.1992 2.9844 0.78516 0.79688 1.8516 1.2422 2.9688 1.2422s2.1836-0.44531 2.9688-1.2422c0.78125-0.79297 1.2148-1.8672 1.1992-2.9844v-4.168h20.832v4.168c-0.015625 1.1172 0.41797 2.1914 1.1992 2.9844 0.78516 0.79688 1.8516 1.2422 2.9688 1.2422 1.1133 0 2.1836-0.44531 2.9648-1.2422 0.78516-0.79297 1.2148-1.8672 1.1992-2.9844v-8.332c0-2.3008-1.8633-4.168-4.1641-4.168h-25v-4.168 0.003907c0.015625-1.1289-0.42578-2.2109-1.2227-3.0078-0.79687-0.79688-1.8828-1.2344-3.0117-1.2188zm-37.434 29.223h-0.003906c-2.3008 0-4.168 1.8672-4.168 4.168v16.668c0 2.3008 1.8672 4.1641 4.168 4.1641h16.668c2.3008 0 4.1641-1.8633 4.1641-4.1641v-16.668c0-2.3008-1.8633-4.168-4.1641-4.168h-16.668zm29.168 0h-0.003906c-2.3008 0-4.168 1.8672-4.168 4.168v16.668c0 2.3008 1.8672 4.1641 4.168 4.1641h16.668-0.003907c2.3008 0 4.168-1.8633 4.168-4.1641v-16.668c0-2.3008-1.8672-4.168-4.168-4.168h-16.668zm29.168 0h-0.007813c-2.3008 0-4.1641 1.8672-4.1641 4.168v16.668c0 2.3008 1.8633 4.1641 4.1641 4.1641h16.668c2.3008 0 4.168-1.8633 4.168-4.1641v-16.668c0-2.3008-1.8672-4.168-4.168-4.168h-16.668zm-54.168 8.332h8.332v8.332h-8.332zm29.168 0h8.332v8.332h-8.332zm29.168 0h8.332v8.332h-8.332z\"/>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.siteStructure.title' | translate | async\">{{'accessFlow.tools.siteStructure.title' | translate | async}}</div>\n          </li>-->\n          <li [attr.aria-label]=\"'accessFlow.tools.tooltips.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.tooltips}\" (click)=\"enableTool('tooltips')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <g>\n              <path d=\"m87.5 17.5h-75c-4.1016 0-7.5 3.3984-7.5 7.5v50c0 4.1016 3.3984 7.5 7.5 7.5h27.5l10 12.5 10-12.5h27.5c4.1016 0 7.5-3.3984 7.5-7.5v-50c0-4.1016-3.3984-7.5-7.5-7.5zm0 57.5h-75v-50h75z\"/>\n              <path d=\"m25 35h50v5h-50z\"/>\n              <path d=\"m25 47.5h50v5h-50z\"/>\n              <path d=\"m25 60h35v5h-35z\"/>\n             </g>\n            </svg>\n\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.tooltips.title' | translate | async\">{{'accessFlow.tools.tooltips.title' | translate | async}}</div>\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.readableText.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.readableText}\" (click)=\"enableTool('readableText')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path d=\"m50 2c-26.469 0-48 21.531-48 48 0 19.727 12.367 37.734 30.773 44.812 1.0312 0.40234 2.1875-0.11719 2.5859-1.1484 0.39453-1.0312-0.11719-2.1875-1.1484-2.5859-16.875-6.4844-28.211-22.996-28.211-41.078 0-24.262 19.738-44 44-44s44 19.738 44 44c0 21.844-16 40.016-36.898 43.422l0.046876-4.3945c0.011718-0.078125 0.023437-0.15625 0.023437-0.23828v-50.277h14.781v0.070312c0 2.8125 2.2891 5.1055 5.1055 5.1055h2.1133c2.8125 0 5.1055-2.2891 5.1055-5.1055v-9.3125c0-2.8125-2.2891-5.1055-5.1055-5.1055h-56.172-0.0625-2.1133c-2.8125 0-5.1055 2.2891-5.1055 5.1055v9.3125c0 2.8125 2.2891 5.1055 5.1055 5.1055h2.1133c2.8125 0 5.1055-2.2891 5.1055-5.1055v-0.066406h14.781l0.003906 54.273c0 2.7969 2.2578 5.0742 5.0469 5.1055l2.0234 0.10156c0.035156 0.003906 0.066406 0.003906 0.10156 0.003906 26.469 0 48-21.531 48-48s-21.531-48-48-48z\"/>\n            </svg>\n\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.readableText.title' | translate | async\">{{'accessFlow.tools.readableText.title' | translate | async}}</div>\n\n            @if(enabledTools.readableText != '')\n            {\n              <div class=\"bars\">\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.readableText == '1'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.readableText == '2'}\"></div>\n              </div>\n            }\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.stopAnimation.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.stopAnimation}\" (click)=\"enableTool('stopAnimation')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path d=\"m83.121 18.883h-66.242c-1.082 0-1.9648 0.88281-1.9648 1.9648v30.723c0 1.082 0.88281 1.9648 1.9648 1.9648h66.246c1.082 0 1.9648-0.88281 1.9648-1.9648v-30.723c0-1.082-0.88281-1.9648-1.9688-1.9648zm-42.184 5.5664h7.8672c0.86719 0 1.5742 0.70312 1.5742 1.5742 0 0.86719-0.70312 1.5742-1.5742 1.5742h-7.8672c-0.86719 0-1.5742-0.70312-1.5742-1.5742 0-0.87109 0.70312-1.5742 1.5742-1.5742zm1.5742 11.758c0 0.86719-0.70312 1.5742-1.5742 1.5742h-7.8672c-0.86719 0-1.5742-0.70312-1.5742-1.5742 0-0.86719 0.70312-1.5742 1.5742-1.5742h7.8672c0.86719 0.003907 1.5742 0.70703 1.5742 1.5742zm-15.344-11.758h7.8672c0.86719 0 1.5742 0.70312 1.5742 1.5742 0 0.86719-0.70312 1.5742-1.5742 1.5742h-7.8672c-0.86719 0-1.5742-0.70312-1.5742-1.5742 0-0.87109 0.70703-1.5742 1.5742-1.5742zm7.8672 23.52h-7.8672c-0.86719 0-1.5742-0.70312-1.5742-1.5742 0-0.86719 0.70312-1.5742 1.5742-1.5742h7.8672c0.86719 0 1.5742 0.70313 1.5742 1.5742 0 0.86719-0.70703 1.5742-1.5742 1.5742zm13.77 0h-7.8672c-0.86719 0-1.5742-0.70312-1.5742-1.5742 0-0.86719 0.70312-1.5742 1.5742-1.5742h7.8672c0.86719 0 1.5742 0.70313 1.5742 1.5742 0 0.86719-0.70703 1.5742-1.5742 1.5742zm23.324-10.543-15.203 8.7734c-0.9375 0.54297-2.1055-0.13281-2.1055-1.2148v-7.2031h-7.9844c-0.86719 0-1.5742-0.70312-1.5742-1.5742 0-0.86719 0.70312-1.5742 1.5742-1.5742h7.9844v-7.2031c0-1.082 1.168-1.7578 2.1055-1.2148l15.203 8.7773c0.93359 0.53906 0.93359 1.8945 0 2.4336zm17.824-30.367h-79.906c-3.9922 0-7.2578 3.2656-7.2578 7.2578v49.938c0 3.9922 3.2656 7.2578 7.2578 7.2578h25.117v11.535l-11.051 0.003906c-3.4062 0-6.1914 2.2266-6.1914 4.9453v4.9453h64.156v-4.9453c0-2.7227-2.7852-4.9453-6.1914-4.9453h-11.047v-11.535h25.117c3.9922 0 7.2578-3.2656 7.2578-7.2578v-49.938c-0.003906-3.9961-3.2695-7.2617-7.2617-7.2617zm1.1875 52.23h-82.281v-45.152c0-0.55469 0.45312-1.0078 1.0078-1.0078h80.27c0.55469 0 1.0078 0.45312 1.0078 1.0078z\" fill-rule=\"evenodd\"/>\n            </svg>\n\n            <div class=\"text\">{{'accessFlow.tools.stopAnimation.title' | translate | async}}</div>\n          </li>\n        </ul>\n      </div>\n\n      <div #adjustments class=\"footer\">\n        <div class=\"info\">\n          <div class=\"linkToWebsite\" (click)=\"openGithub()\">{{'accessFlow.overAccessFlow.label' | translate | async}}</div>\n          <button class=\"sendError\" (click)=\"openGithubIssues()\" [attr.aria-label]=\"'accessFlow.reportError.label' | translate | async\">{{'accessFlow.reportError.button' | translate | async}}</button>\n        </div>\n        <svg class=\"logo\" aria-label=\"AccessFlow Logo\" viewBox=\"0 0 567 567\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;\"><g><path d=\"M281.567,286.242l-147.196,179.234c-21.604,26.306 -60.501,30.124 -86.807,8.52l-0.148,-0.122c-26.306,-21.604 -30.124,-60.501 -8.52,-86.807l147.196,-179.234c21.604,-26.306 60.501,-30.124 86.807,-8.52l0.149,0.122c26.306,21.604 30.123,60.501 8.519,86.807Z\" style=\"fill:#ff9e00;\"/><path d=\"M526.513,182.125l-147.196,179.234c-21.604,26.306 -60.501,30.123 -86.807,8.519l-0.149,-0.121c-26.306,-21.604 -30.123,-60.501 -8.519,-86.807l147.196,-179.234c21.604,-26.306 60.501,-30.124 86.807,-8.52l0.148,0.122c26.306,21.604 30.124,60.501 8.52,86.807Z\" style=\"fill:#00cbef;\"/><g><path d=\"M215.171,367.435c-53.088,-43.84 -60.797,-122.511 -17.134,-175.829c43.662,-53.317 122.31,-61.271 175.755,-17.868l-158.621,193.697Z\" style=\"fill:#ff1e43;\"/><path d=\"M215.112,367.576c53.446,43.403 132.093,35.45 175.756,-17.868c43.662,-53.318 35.954,-131.989 -17.135,-175.828l-158.621,193.696Z\" style=\"fill:#008cee;\"/></g></g></svg>\n      </div>\n    </div>\n  </div>\n}\n", styles: [".icon{position:fixed;transition:all ease .3s;cursor:pointer}.icon:hover{transform:scale(1.1)}.icon:hover.centerBottom,.icon:hover.centerTop{transform:scale(1.1) translate(-45%)}.icon.leftBottom{left:1rem;bottom:1rem}.icon.rightBottom{right:1rem;bottom:1rem}.icon.leftTop{left:1rem;top:1rem}.icon.rightTop{right:1rem;top:1rem}.icon.centerBottom{left:50%;transform:translate(-50%);bottom:1rem}.icon.centerTop{left:50%;transform:translate(-50%);top:1rem}.accessibility{position:fixed;top:0;right:0;bottom:0;width:380px;background-color:#eee;box-shadow:0 0 10px #00000080;-webkit-user-select:none;user-select:none}.accessibility *{font-family:Arial,sans-serif}.accessibility.rtl{direction:rtl}.accessibility.rtl .languages .headerLanguage .arrowRight{left:inherit;right:25px;transform:scaleX(-1)}.accessibility.rtl .languages .languageContent .availableLanguages{margin-left:inherit;margin-right:5px}.accessibility.rtl .languages .languageContent .availableLanguages li .box{right:5px!important;left:inherit!important}.accessibility.rtl .languages .languageContent .availableLanguages li .name{margin-left:0;margin-right:10px;text-align:right}.accessibility.rtl .languages .languageContent .availableLanguages li:after{right:inherit!important;left:15px!important}.accessibility .af-container{width:100%;height:100%}.accessibility .header{width:calc(100% - 20px);padding:10px;height:50px;position:relative;background-color:#fff;border-bottom:2px solid #dedede;direction:ltr!important}.accessibility .header .logo{width:150px}.accessibility .header .closeIcon{position:absolute;right:15px;top:25px;cursor:pointer;width:25px;transition:all ease .3s}.accessibility .header .closeIcon:hover{transform:scale(1.1)}.accessibility .languages{width:100%;position:relative;background-color:#fff;border-bottom:2px solid #dedede;box-sizing:border-box}.accessibility .languages .languageContent{padding:5px 10px;position:relative;max-height:225px;box-sizing:border-box}.accessibility .languages .languageContent .searchbar{width:100%;padding-left:15px;padding-right:5px;box-sizing:border-box}.accessibility .languages .languageContent .searchbar input{outline:none;width:calc(100% - 20px);line-height:28px;border:2px solid #eee;font-size:14px;padding:2px 5px;border-radius:5px 5px 0 0}.accessibility .languages .languageContent .availableLanguages{width:calc(100% - 26px);height:150px;box-sizing:border-box;margin-left:15px;overflow-y:auto;background-color:#eee;border-radius:0 0 10px 10px;border:1px solid #dedede;border-top:0;margin-bottom:15px}.accessibility .languages .languageContent .availableLanguages ul{list-style-type:none;margin:0;padding:0}.accessibility .languages .languageContent .availableLanguages ul li{padding:8px 10px;position:relative;display:none}.accessibility .languages .languageContent .availableLanguages ul li.visible{display:block}.accessibility .languages .languageContent .availableLanguages ul li .box{display:inline-block;width:25px;height:25px;text-transform:uppercase;background-color:#fff;font-weight:700;border-radius:50%;text-align:center;line-height:25px;opacity:.9;font-size:11px;box-shadow:0 0 3px #00000080,0 0 1px #00000040}.accessibility .languages .languageContent .availableLanguages ul li:hover{background-color:#ddd;cursor:pointer}.accessibility .languages .languageContent .availableLanguages ul li.selected{background-color:#008cee;color:#fff;font-weight:700;box-shadow:inset 0 0 3px #00000080,inset 0 0 1px #00000040}.accessibility .languages .languageContent .availableLanguages ul li.selected .box{color:#000}.accessibility .languages .languageContent .availableLanguages ul li.selected:after{position:absolute;right:15px;top:10px;content:\"\";display:block;width:20px;height:20px;background-image:url('data:image/svg+xml,<svg width=\"20px\" height=\"20px\" fill=\"%23ffffff\" version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m50 95.832c12.156 0 23.812-4.8281 32.41-13.422 8.5938-8.5977 13.422-20.254 13.422-32.41s-4.8281-23.812-13.422-32.41c-8.5977-8.5938-20.254-13.422-32.41-13.422s-23.812 4.8281-32.41 13.422c-8.5938 8.5977-13.422 20.254-13.422 32.41s4.8281 23.812 13.422 32.41c8.5977 8.5938 20.254 13.422 32.41 13.422zm-23.793-44.625c1.625-1.6133 4.25-1.6133 5.875 0l9.5859 9.5859 24.125-24.125c1.6523-1.418 4.1172-1.3203 5.6562 0.21875 1.5391 1.5391 1.6328 4 0.21875 5.6562l-27.082 27.082h-0.003907c-1.625 1.6172-4.25 1.6172-5.875 0l-12.5-12.5c-0.78906-0.78125-1.2305-1.8477-1.2305-2.957 0-1.1133 0.44141-2.1758 1.2305-2.9609z\"/></svg>')}.accessibility .languages .languageContent .availableLanguages ul li .name{display:inline-block;margin-left:10px;font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;position:relative;top:3px;width:calc(100% - 70px)}.accessibility .languages .languageContent .availableLanguages ul li .name .inEnglish{opacity:.75;font-size:12px}.accessibility .languages .headerLanguage{padding:5px 10px 5px 25px;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer}.accessibility .languages .headerLanguage .strong{font-weight:700;display:inline-block}.accessibility .languages .headerLanguage .arrowRight{position:relative;width:12px;left:25px;top:1px}.accessibility .toolsContainer{width:100%;overflow-y:auto}.accessibility .toolsContainer .tools{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start;width:calc(100% - 20px);list-style-type:none;margin:0;padding:10px}.accessibility .toolsContainer .tools li{flex:0 0 calc(50% - 20px);background-color:#fff;max-width:calc(50% - 20px);border-radius:5px;padding:10px;text-align:center;margin:10px;box-sizing:border-box;border:3px solid transparent;transition:all ease .3s;cursor:pointer;height:100px}.accessibility .toolsContainer .tools li .bars{width:calc(100% - 20px);margin:10px;display:flex;position:absolute;left:0}.accessibility .toolsContainer .tools li .bars .bar{display:inline-block;height:4px;background-color:#eee;width:100%;margin:0 5px}.accessibility .toolsContainer .tools li .bars .bar.active{background-color:#008cee}.accessibility .toolsContainer .tools li:hover,.accessibility .toolsContainer .tools li.enabled{border-color:#008cee}.accessibility .toolsContainer .tools li.enabled{position:relative;box-shadow:0 0 3px #008cee80,0 0 10px #008cee40}.accessibility .toolsContainer .tools li.enabled:after{position:absolute;right:5px;top:5px;content:\"\";display:block;width:20px;height:20px;background-image:url('data:image/svg+xml,<svg width=\"20px\" height=\"20px\" fill=\"%23008cee\" version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m50 95.832c12.156 0 23.812-4.8281 32.41-13.422 8.5938-8.5977 13.422-20.254 13.422-32.41s-4.8281-23.812-13.422-32.41c-8.5977-8.5938-20.254-13.422-32.41-13.422s-23.812 4.8281-32.41 13.422c-8.5938 8.5977-13.422 20.254-13.422 32.41s4.8281 23.812 13.422 32.41c8.5977 8.5938 20.254 13.422 32.41 13.422zm-23.793-44.625c1.625-1.6133 4.25-1.6133 5.875 0l9.5859 9.5859 24.125-24.125c1.6523-1.418 4.1172-1.3203 5.6562 0.21875 1.5391 1.5391 1.6328 4 0.21875 5.6562l-27.082 27.082h-0.003907c-1.625 1.6172-4.25 1.6172-5.875 0l-12.5-12.5c-0.78906-0.78125-1.2305-1.8477-1.2305-2.957 0-1.1133 0.44141-2.1758 1.2305-2.9609z\"/></svg>')}.accessibility .toolsContainer .tools li svg{width:35px;margin-bottom:10px}.accessibility .toolsContainer .tools li .text{font-size:12px;opacity:.75;font-weight:700;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.accessibility .footer{position:relative;bottom:0;width:100%;padding:10px;background-color:#fff;height:70px;border-top:2px solid #dedede;box-sizing:border-box;direction:ltr!important}.accessibility .footer .logo{position:absolute;right:25px;top:10px;width:60px}.accessibility .footer .info{position:relative}.accessibility .footer .info .linkToWebsite{font-size:12px;margin-bottom:10px;color:#008cee;cursor:pointer;opacity:.5}.accessibility .footer .info .linkToWebsite:hover{text-decoration:underline}.accessibility .footer .info .sendError{background-color:#008cee;color:#fff;border-radius:5px;font-weight:700;border:0;padding:5px;font-size:11px;text-transform:uppercase;cursor:pointer;transition:all ease .3s}.accessibility .footer .info .sendError:hover{background-color:#13629a}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.8", ngImport: i0, type: AccessFlowComponent, decorators: [{
            type: Component,
            args: [{ selector: 'access-flow', template: "@if(!showAccessibility)\n{\n  <svg (click)=\"openAccessibility()\" [attr.aria-label]=\"'accessFlow.openSymbol.label' | translate | async\" class=\"icon {{position}}\" [ngStyle]=\"{'width': size+'px', 'height': size+'px'}\" viewBox=\"0 0 567 567\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;\"><g><path d=\"M281.567,286.242l-147.196,179.234c-21.604,26.306 -60.501,30.124 -86.807,8.52l-0.148,-0.122c-26.306,-21.604 -30.124,-60.501 -8.52,-86.807l147.196,-179.234c21.604,-26.306 60.501,-30.124 86.807,-8.52l0.149,0.122c26.306,21.604 30.123,60.501 8.519,86.807Z\" style=\"fill:#ff9e00;\"/><path d=\"M526.513,182.125l-147.196,179.234c-21.604,26.306 -60.501,30.123 -86.807,8.519l-0.149,-0.121c-26.306,-21.604 -30.123,-60.501 -8.519,-86.807l147.196,-179.234c21.604,-26.306 60.501,-30.124 86.807,-8.52l0.148,0.122c26.306,21.604 30.124,60.501 8.52,86.807Z\" style=\"fill:#00cbef;\"/><g><path d=\"M215.171,367.435c-53.088,-43.84 -60.797,-122.511 -17.134,-175.829c43.662,-53.317 122.31,-61.271 175.755,-17.868l-158.621,193.697Z\" style=\"fill:#ff1e43;\"/><path d=\"M215.112,367.576c53.446,43.403 132.093,35.45 175.756,-17.868c43.662,-53.318 35.954,-131.989 -17.135,-175.828l-158.621,193.696Z\" style=\"fill:#008cee;\"/></g></g></svg>\n}\n\n@if(showAccessibility)\n{\n  <div class=\"accessibility\" [ngClass]=\"{'rtl': selectedLanguage.rtl}\">\n    <div class=\"af-container\">\n      <div #header class=\"header\">\n        <svg class=\"logo\" aria-label=\"AccessFlow Logo\" viewBox=\"0 0 1134 426\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;\"><g transform=\"matrix(97.879,0,0,97.879,991.793,364.743)\"></g><text x=\"169.217px\" y=\"364.743px\" style=\"font-family:'GetVoIPGrotesque', 'GetVoIP Grotesque', sans-serif;font-weight:700;font-size:97.879px;\">A<tspan x=\"250.849px 328.467px 406.085px 485.073px 565.53px 645.986px 723.996px 801.418px 891.858px \" y=\"364.743px 364.743px 364.743px 364.743px 364.743px 364.743px 364.743px 364.743px 364.743px \">CCESSFLOW</tspan></text><g><path d=\"M250.587,195.088l-129.957,158.242c-19.074,23.226 -53.416,26.596 -76.641,7.522l-0.131,-0.107c-23.225,-19.074 -26.596,-53.416 -7.522,-76.641l129.957,-158.243c19.074,-23.225 53.416,-26.596 76.641,-7.522l0.131,0.108c23.225,19.074 26.596,53.415 7.522,76.641Z\" style=\"fill:#ff9e00;\"/><path d=\"M466.846,103.164l-129.958,158.243c-19.073,23.225 -53.415,26.596 -76.64,7.522l-0.131,-0.108c-23.226,-19.073 -26.596,-53.415 -7.522,-76.64l129.957,-158.243c19.074,-23.226 53.415,-26.596 76.641,-7.522l0.131,0.107c23.225,19.074 26.595,53.416 7.522,76.641Z\" style=\"fill:#00cbef;\"/><g><path d=\"M191.966,266.771c-46.87,-38.705 -53.676,-108.163 -15.127,-155.236c38.549,-47.073 107.985,-54.095 155.172,-15.775l-140.045,171.011Z\" style=\"fill:#ff1e43;\"/><path d=\"M191.915,266.896c47.186,38.32 116.622,31.298 155.171,-15.775c38.55,-47.074 31.744,-116.532 -15.127,-155.237l-140.044,171.012Z\" style=\"fill:#008cee;\"/></g></g></svg>\n\n        <svg [attr.aria-label]=\"'accessFlow.header.closeIcon.label' | translate | async\" (click)=\"showAccessibility = false\" class=\"closeIcon\" version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n         <path d=\"m75.758 33.594l-9.3516-9.3477-16.406 16.402-16.406-16.402-9.3516 9.3477 16.406 16.406-16.406 16.402 9.3516 9.3516 16.406-16.402 16.406 16.406 9.3516-9.3516-16.406-16.41zm-25.758 66.406c-27.613 0-50-22.387-50-50.004 0-27.609 22.387-49.996 50-49.996s49.996 22.387 49.996 49.996c0.003906 27.617-22.379 50.004-49.996 50.004z\"/>\n        </svg>\n\n      </div>\n\n      <div #languages class=\"languages\">\n        <div class=\"headerLanguage\" (click)=\"changeOpenLanguage()\" [attr.aria-label]=\"'accessFlow.languages.label' | translate | async\">\n          <p class=\"strong\">{{'accessFlow.languages.title' | translate: {language: selectedLanguage.name} | async }}</p>\n          <svg class=\"arrowRight\" version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n           <path d=\"m32.812 0l-15.625 15.625 34.375 34.375-34.375 34.375 15.625 15.625 50-50z\"/>\n          </svg>\n        </div>\n\n        @if(openLanguage)\n        {\n          <div class=\"languageContent\">\n            <div class=\"searchbar\">\n              <input type=\"text\" [attr.aria-label]=\"'accessFlow.languages.input.label' | translate | async\" #searchbarLanguage [(ngModel)]=\"languageSearch\">\n            </div>\n            <div class=\"availableLanguages\">\n              <ul>\n                @for(language of availableLanguages; track language.code)\n                {\n                  <li [ngClass]=\"{'selected': language.code == selectedLanguage.code, 'visible': (isLanguageInSearch(language))}\" (click)=\"changeLanguage(language.code)\" [attr.aria-label]=\"'accessFlow.languages.availableLanguages.label' | translate: {language: language.name} | async\">\n                    <div class=\"box\">{{language.code}}</div>\n                    <div class=\"name\">{{language.name}} <span class=\"inEnglish\">({{language.inEnglish}})</span></div>\n                  </li>\n                }\n              </ul>\n            </div>\n          </div>\n        }\n      </div>\n\n      <div #toolsContainer class=\"toolsContainer\">\n        <ul class=\"tools\">\n          <li [attr.aria-label]=\"'accessFlow.tools.contrast.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.contrast}\" (click)=\"enableTool('contrast')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path d=\"m50 6.25c-12.156 0-23.812 4.8281-32.41 13.426-8.5938 8.5938-13.422 20.25-13.422 32.406s4.8281 23.816 13.422 32.41c8.5977 8.5938 20.254 13.426 32.41 13.426s23.812-4.832 32.41-13.426c8.5938-8.5938 13.422-20.254 13.422-32.41s-4.8281-23.812-13.422-32.406c-8.5977-8.5977-20.254-13.426-32.41-13.426zm-2.082 67.895-15.645 15.625h-0.003907c-2.3711-1.1172-4.6289-2.4531-6.75-4l22.398-22.414zm0 5.875v13.73c-3.8984-0.19922-7.75-0.94922-11.438-2.2305zm0-39.207-33.332 33.332h-0.003907c-1.4062-2.3008-2.5781-4.7344-3.5-7.2695l36.836-36.855zm0-16.668-38.25 38.23c-0.80859-3.0977-1.2539-6.2773-1.3359-9.4805l39.582-39.582zm-3.3359-13.352-35.852 35.875c1.1953-9.0938 5.3555-17.535 11.84-24.023 6.4805-6.4844 14.922-10.652 24.012-11.852zm-27.52 66.668 30.855-30.773v10.793l-25.648 25.645c-1.8984-1.7031-3.6406-3.5703-5.207-5.582z\"/>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.contrast.title' | translate | async\">{{'accessFlow.tools.contrast.title' | translate | async}}</div>\n\n            @if(enabledTools.contrast != '')\n            {\n              <div class=\"bars\">\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.contrast == '1'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.contrast == '2'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.contrast == '3'}\"></div>\n              </div>\n            }\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.links.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.links}\" (click)=\"enableTool('links')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path d=\"m88.125 60.312-48.438-48.438c-3.75-3.75-8.75-5.625-14.062-5.625-5 0-10 1.875-13.75 5.625-7.5 7.5-7.5 20 0 27.812l48.438 48.438c3.75 3.75 8.75 5.625 13.75 5.625 5.3125 0 10.312-2.1875 13.75-5.625 3.75-3.75 5.625-8.75 5.625-13.75 0.3125-5.3125-1.5625-10.312-5.3125-14.062zm-21.875 5.9375c0.625-0.625 0.9375-1.25 1.5625-1.875l6.875 6.875c0.3125 0.3125 0.625 0.9375 0.625 1.5625s-0.3125 1.25-0.625 1.5625c-0.9375 0.9375-2.5 0.9375-3.4375 0l-6.875-6.875c0.625-0.3125 1.25-0.625 1.875-1.25zm-50-50c2.5-2.5 5.9375-3.75 9.375-3.75s6.875 1.25 9.375 3.75l26.562 26.562c4.0625 4.0625 5 10 2.5 15.312-0.625 1.25-1.5625 2.5-2.5 3.75-0.625 0.625-1.25 0.9375-1.875 1.5625l-4.6875-4.6875c0.625-0.3125 1.25-0.9375 1.875-1.25 1.5625-1.5625 2.5-3.75 2.5-5.9375s-0.9375-4.375-2.5-6.25l-24.375-24.375c-3.4375-3.125-9.0625-3.125-12.188 0-1.25 1.5625-2.1875 3.75-2.1875 5.9375s0.9375 4.375 2.5 6.25l8.4375 8.4375c-0.625 1.5625-0.9375 3.4375-0.9375 5.3125l-11.875-11.875c-5.3125-5-5.3125-13.438 0-18.75zm30 32.5c0-0.625 0.3125-1.25 0.625-1.5625 0.9375-0.9375 2.5-0.9375 3.4375 0l2.5 2.5c0.3125 0.3125 0.625 0.9375 0.625 1.5625s-0.3125 1.25-0.625 1.5625c-0.9375 0.9375-2.5 0.9375-3.4375 0l-2.5-2.5c-0.3125-0.3125-0.625-0.9375-0.625-1.5625zm-12.5-15c-0.625 0.625-0.9375 1.25-1.5625 1.875l-6.875-7.1875c-0.625-0.3125-0.9375-0.9375-0.9375-1.5625s0.3125-1.25 0.625-1.5625c0.9375-0.9375 2.5-0.9375 3.4375 0l6.875 6.875c-0.3125 0.625-0.9375 0.9375-1.5625 1.5625zm50 50c-2.5 2.5-5.9375 3.75-9.375 3.75-3.75 0-6.875-1.25-9.375-3.75l-26.562-26.562c-4.0625-4.0625-5-10-2.5-15.312 0.625-1.25 1.5625-2.5 2.5-3.75 0.625-0.625 1.25-0.9375 1.875-1.5625l4.6875 4.6875c-0.625 0.3125-1.25 0.9375-1.875 1.25-1.5625 1.5625-2.5 3.75-2.5 5.9375s0.9375 4.375 2.5 6.25l24.375 24.375c1.5625 1.5625 3.75 2.5 5.9375 2.5s4.375-0.9375 5.9375-2.5 2.5-3.75 2.5-5.9375-0.9375-4.375-2.5-6.25l-8.4375-8.4375c0.625-1.875 0.9375-3.75 0.9375-5.625l11.875 11.875c2.5 2.5 4.0625 5.9375 4.0625 9.375-0.3125 3.75-1.5625 7.1875-4.0625 9.6875z\"/>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.links.title' | translate | async\">{{'accessFlow.tools.links.title' | translate | async}}</div>\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.biggerText.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.biggerText}\" (click)=\"enableTool('biggerText')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <g>\n              <path d=\"m26 29h14v42h-8v6h22v-6h-8v-42h14v6h6v-9c0-1.6562-1.3438-3-3-3h-40c-1.6562 0-3 1.3438-3 3v9h6z\"/>\n              <path d=\"m65 44v8h-8v6h8v10c0 4.9688 4.0312 9 9 9h6v-6h-6c-1.6562 0-3-1.3438-3-3v-10h8v-6h-8v-8z\"/>\n             </g>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.biggerText.title' | translate | async\">{{'accessFlow.tools.biggerText.title' | translate | async}}</div>\n\n            @if(enabledTools.biggerText != '')\n            {\n              <div class=\"bars\">\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.biggerText == '1'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.biggerText == '2'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.biggerText == '3'}\"></div>\n              </div>\n            }\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.textSpacing.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.textSpacing}\" (click)=\"enableTool('textSpacing')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path d=\"m92.844 83.469-12.5 12.5c-0.58594 0.58984-1.3867 0.92578-2.2188 0.92578s-1.6328-0.33594-2.2188-0.92578c-0.58984-0.58594-0.92578-1.3867-0.92578-2.2188s0.33594-1.6328 0.92578-2.2188l7.1875-7.1562h-66.188l7.1875 7.1562c0.58984 0.58594 0.92578 1.3867 0.92578 2.2188s-0.33594 1.6328-0.92578 2.2188c-0.58594 0.58984-1.3867 0.92578-2.2188 0.92578s-1.6328-0.33594-2.2188-0.92578l-12.5-12.5c-0.58984-0.58594-0.92578-1.3867-0.92578-2.2188s0.33594-1.6328 0.92578-2.2188l12.5-12.5c1.2266-1.2266 3.2109-1.2266 4.4375 0s1.2266 3.2109 0 4.4375l-7.1875 7.1562h66.188l-7.1875-7.1562c-1.2266-1.2266-1.2266-3.2109 0-4.4375s3.2109-1.2266 4.4375 0l12.5 12.5c0.58984 0.58594 0.92578 1.3867 0.92578 2.2188s-0.33594 1.6328-0.92578 2.2188zm-77.219-70.969h31.25v59.375c0 1.7266 1.3984 3.125 3.125 3.125s3.125-1.3984 3.125-3.125v-59.375h31.25c1.7266 0 3.125-1.3984 3.125-3.125s-1.3984-3.125-3.125-3.125h-68.75c-1.7266 0-3.125 1.3984-3.125 3.125s1.3984 3.125 3.125 3.125z\"/>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.textSpacing.title' | translate | async\">{{'accessFlow.tools.textSpacing.title' | translate | async}}</div>\n\n            @if(enabledTools.textSpacing != '')\n            {\n              <div class=\"bars\">\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.textSpacing == '1'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.textSpacing == '2'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.textSpacing == '3'}\"></div>\n              </div>\n            }\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.imagesRemove.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.imagesRemove}\" (click)=\"enableTool('imagesRemove')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path d=\"m6 16c-1.7852 0-2.9883 1.5625-3 3v56c0 1.5703 1.4297 3 3 3h61.094c3.125 3.6641 7.7422 6 12.906 6 9.3516 0 17-7.6484 17-17 0-6.8594-4.1211-12.785-10-15.469v-32.531c0-1.5703-1.4297-3-3-3zm3 6h72v28.062c-0.33594-0.019531-0.66016-0.0625-1-0.0625-2.8984 0-5.6367 0.73828-8.0312 2.0312l-6.8125-7.125c-0.63281-0.65625-1.5312-0.99219-2.4375-0.90625-0.625 0.058594-1.2148 0.30859-1.6875 0.71875l-13.469 11.781-17.312-19.5c-0.60938-0.68359-1.4922-1.0508-2.4062-1-0.75781 0.039062-1.4727 0.36328-2 0.90625l-16.844 17.594zm39 2c-4.9336 0-9 4.0664-9 9s4.0664 9 9 9 9-4.0664 9-9-4.0664-9-9-9zm0 6c1.6914 0 3 1.3086 3 3s-1.3086 3-3 3-3-1.3086-3-3 1.3086-3 3-3zm-20.094 13.406l25.438 28.594h-44.344v-8.8125zm34.906 7.7188l4.4688 4.6562c-2.6484 3-4.2812 6.9258-4.2812 11.219 0 1.7422 0.28906 3.4141 0.78125 5h-2.4062l-9.8125-11.031zm17.188 4.875c6.1094 0 11 4.8906 11 11s-4.8906 11-11 11-11-4.8906-11-11 4.8906-11 11-11zm-5 3c-0.77344 0-1.5352 0.31641-2.125 0.90625-1.1797 1.1797-1.1797 3.0703 0 4.25l2.8438 2.8438-2.8438 2.8438c-1.1797 1.1797-1.1797 3.1016 0 4.2812s3.1016 1.1797 4.2812 0l2.8438-2.8438 2.8438 2.8438c1.1797 1.1797 3.0703 1.1797 4.25 0s1.1797-3.1016 0-4.2812l-2.8438-2.8438 2.8438-2.8438c1.2109-1.2031 1.1797-3.0703 0-4.25s-3.0703-1.1797-4.25 0l-2.8438 2.8438-2.8438-2.8438c-0.58984-0.58984-1.3828-0.90625-2.1562-0.90625z\"/>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.imagesRemove.title' | translate | async\">{{'accessFlow.tools.imagesRemove.title' | translate | async}}</div>\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.lineHeight.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.lineHeight}\" (click)=\"enableTool('lineHeight')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <g>\n              <path d=\"m91.309 54.441h-49.777c-1.1992 0.035156-2.1406 1.0312-2.1094 2.2305v8.8906-0.003906c-0.03125 1.1953 0.91406 2.1875 2.1094 2.2227h49.777c1.1953-0.035156 2.1406-1.0273 2.1133-2.2227v-8.8867c0.015625-0.57812-0.19922-1.1367-0.59375-1.5547-0.39844-0.41797-0.94141-0.66016-1.5195-0.67578z\"/>\n              <path d=\"m69.09 76.672h-27.641c-1.1602 0.066406-2.0508 1.0547-2 2.2188v8.8906c-0.050781 1.1602 0.83984 2.1484 2 2.2188h27.641c1.1602-0.070312 2.0508-1.0586 2-2.2188v-8.8906c0.050781-1.1641-0.83984-2.1523-2-2.2188z\"/>\n              <path d=\"m91.309 32.219h-49.777c-1.1953 0.035156-2.1406 1.0273-2.1094 2.2227v8.8906-0.003906c-0.03125 1.1992 0.91016 2.1953 2.1094 2.2305h49.777c0.57812-0.015625 1.1211-0.25781 1.5195-0.67578 0.39453-0.41797 0.60938-0.97656 0.59375-1.5547v-8.8867c0.027344-1.1953-0.91797-2.1875-2.1133-2.2227z\"/>\n              <path d=\"m91.309 10h-49.777c-1.1953 0.03125-2.1406 1.0234-2.1094 2.2188v8.8906c-0.03125 1.1953 0.91406 2.1875 2.1094 2.2188h49.777c0.57422-0.011719 1.1211-0.25391 1.5195-0.66797 0.39453-0.41797 0.60938-0.97656 0.59375-1.5508v-8.8906c0.015625-0.57422-0.19922-1.1289-0.59375-1.5469-0.39844-0.41797-0.94531-0.66016-1.5195-0.67188z\"/>\n              <path d=\"m25.738 26.109v-4h4.5234c0.76562 0 1.4688-0.44141 1.8008-1.1328 0.33203-0.69531 0.23828-1.5156-0.24219-2.1172l-10.82-13.809c-0.37891-0.47266-0.95312-0.75-1.5586-0.75-0.60938 0-1.1836 0.27734-1.5625 0.75l-10.879 13.801c-0.48438 0.60156-0.57422 1.4297-0.23828 2.1211 0.33984 0.69531 1.0469 1.1328 1.8164 1.1289h4.5234v55.797h-4.5234c-0.76953-0.003907-1.4766 0.43359-1.8164 1.1289-0.33594 0.69141-0.24609 1.5195 0.23828 2.1211l10.859 13.852c0.37891 0.48047 0.95703 0.76172 1.5703 0.76172 0.61328 0 1.1914-0.28125 1.5703-0.76172l10.84-13.801c0.48047-0.59766 0.57422-1.4219 0.24219-2.1133-0.33203-0.69531-1.0352-1.1367-1.8008-1.1367h-4.543z\"/>\n             </g>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.lineHeight.title' | translate | async\">{{'accessFlow.tools.lineHeight.title' | translate | async}}</div>\n\n            @if(enabledTools.lineHeight != '')\n            {\n              <div class=\"bars\">\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.lineHeight == '1'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.lineHeight == '2'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.lineHeight == '3'}\"></div>\n              </div>\n            }\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.saturation.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.saturation}\" (click)=\"enableTool('saturation')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <g>\n              <path d=\"m50 91.668c-20.246 0-33.332-11.449-33.332-29.168 0-18.066 27.121-49.262 30.211-52.758 0.8125-0.85938 1.9414-1.3477 3.125-1.3477s2.3125 0.48828 3.125 1.3477c3.082 3.4961 30.203 34.691 30.203 52.758 0 17.715-13.086 29.168-33.332 29.168zm0-72.754c-9.0742 10.91-25 32.387-25 43.586 0 19.332 19.137 20.832 25 20.832s25-1.5 25-20.832c0-11.199-15.926-32.676-25-43.586z\"/>\n              <path d=\"m50 79.168c-18.129 0-20.832-10.441-20.832-16.668 0-2.3008 1.8633-4.168 4.1641-4.168s4.168 1.8672 4.168 4.168c0 2.7031 0 8.332 12.5 8.332 2.3008 0 4.168 1.8672 4.168 4.168s-1.8672 4.168-4.168 4.168z\"/>\n             </g>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.saturation.title' | translate | async\">{{'accessFlow.tools.saturation.title' | translate | async}}</div>\n\n            @if(enabledTools.saturation != '')\n            {\n              <div class=\"bars\">\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.saturation == '1'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.saturation == '2'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.saturation == '3'}\"></div>\n              </div>\n            }\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.mouseCursor.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.mouseCursor}\" (click)=\"enableTool('mouseCursor')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path d=\"m27.098 13.562c-0.83594 0.007812-1.6328 0.36328-2.1953 0.97656-0.5625 0.61719-0.84375 1.4414-0.77344 2.2734l4.2188 55.281c0.089844 1.1797 0.86719 2.1953 1.9805 2.5938s2.3555 0.10547 3.1758-0.75l8.0312-8.4062 11.188 19.406c0.82812 1.4336 2.6602 1.9219 4.0938 1.0938l15.594-9c1.4297-0.82812 1.918-2.6602 1.0938-4.0938l-11.188-19.375 11.281-2.7812c1.1445-0.28125 2.0195-1.2031 2.2344-2.3633 0.21484-1.1602-0.26953-2.3359-1.2344-3.0117l-45.781-31.312c-0.50391-0.34766-1.1055-0.53125-1.7188-0.53125zm3.4688 9.0312l35.094 23.969-8.6562 2.0938c-0.92188 0.22656-1.6836 0.875-2.0547 1.75-0.36719 0.875-0.30078 1.8711 0.17969 2.6875l11.688 20.219-10.406 6-11.688-20.219c-0.46875-0.8125-1.293-1.3594-2.2266-1.4766-0.93359-0.11719-1.8672 0.21094-2.5234 0.88281l-6.1562 6.4375z\"/>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.mouseCursor.title' | translate | async\">{{'accessFlow.tools.mouseCursor.title' | translate | async}}</div>\n          </li>\n          <!--<li [attr.aria-label]=\"'accessFlow.tools.siteStructure.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.siteStructure}\" (click)=\"enableTool('siteStructure')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path d=\"m37.5 8.332c-2.3008 0-4.168 1.8672-4.168 4.168v16.668-0.003907c0 2.3008 1.8672 4.168 4.168 4.168h25c2.3008 0 4.168-1.8672 4.168-4.168v-16.668 0.003906c0-2.3008-1.8672-4.168-4.168-4.168zm4.168 8.332h16.668v8.332h-16.668zm8.2695 20.777h-0.003906c-2.2969 0.035156-4.1328 1.9258-4.1016 4.2266v4.168h-25v-0.003907c-2.3008 0-4.1641 1.8672-4.1641 4.168v8.332c-0.015625 1.1172 0.41406 2.1914 1.1992 2.9844 0.78125 0.79688 1.8516 1.2422 2.9648 1.2422 1.1172 0 2.1836-0.44531 2.9688-1.2422 0.78125-0.79297 1.2148-1.8672 1.1992-2.9844v-4.168h20.832v4.168c-0.015625 1.1172 0.41797 2.1914 1.1992 2.9844 0.78516 0.79688 1.8516 1.2422 2.9688 1.2422s2.1836-0.44531 2.9688-1.2422c0.78125-0.79297 1.2148-1.8672 1.1992-2.9844v-4.168h20.832v4.168c-0.015625 1.1172 0.41797 2.1914 1.1992 2.9844 0.78516 0.79688 1.8516 1.2422 2.9688 1.2422 1.1133 0 2.1836-0.44531 2.9648-1.2422 0.78516-0.79297 1.2148-1.8672 1.1992-2.9844v-8.332c0-2.3008-1.8633-4.168-4.1641-4.168h-25v-4.168 0.003907c0.015625-1.1289-0.42578-2.2109-1.2227-3.0078-0.79687-0.79688-1.8828-1.2344-3.0117-1.2188zm-37.434 29.223h-0.003906c-2.3008 0-4.168 1.8672-4.168 4.168v16.668c0 2.3008 1.8672 4.1641 4.168 4.1641h16.668c2.3008 0 4.1641-1.8633 4.1641-4.1641v-16.668c0-2.3008-1.8633-4.168-4.1641-4.168h-16.668zm29.168 0h-0.003906c-2.3008 0-4.168 1.8672-4.168 4.168v16.668c0 2.3008 1.8672 4.1641 4.168 4.1641h16.668-0.003907c2.3008 0 4.168-1.8633 4.168-4.1641v-16.668c0-2.3008-1.8672-4.168-4.168-4.168h-16.668zm29.168 0h-0.007813c-2.3008 0-4.1641 1.8672-4.1641 4.168v16.668c0 2.3008 1.8633 4.1641 4.1641 4.1641h16.668c2.3008 0 4.168-1.8633 4.168-4.1641v-16.668c0-2.3008-1.8672-4.168-4.168-4.168h-16.668zm-54.168 8.332h8.332v8.332h-8.332zm29.168 0h8.332v8.332h-8.332zm29.168 0h8.332v8.332h-8.332z\"/>\n            </svg>\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.siteStructure.title' | translate | async\">{{'accessFlow.tools.siteStructure.title' | translate | async}}</div>\n          </li>-->\n          <li [attr.aria-label]=\"'accessFlow.tools.tooltips.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.tooltips}\" (click)=\"enableTool('tooltips')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <g>\n              <path d=\"m87.5 17.5h-75c-4.1016 0-7.5 3.3984-7.5 7.5v50c0 4.1016 3.3984 7.5 7.5 7.5h27.5l10 12.5 10-12.5h27.5c4.1016 0 7.5-3.3984 7.5-7.5v-50c0-4.1016-3.3984-7.5-7.5-7.5zm0 57.5h-75v-50h75z\"/>\n              <path d=\"m25 35h50v5h-50z\"/>\n              <path d=\"m25 47.5h50v5h-50z\"/>\n              <path d=\"m25 60h35v5h-35z\"/>\n             </g>\n            </svg>\n\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.tooltips.title' | translate | async\">{{'accessFlow.tools.tooltips.title' | translate | async}}</div>\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.readableText.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.readableText}\" (click)=\"enableTool('readableText')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path d=\"m50 2c-26.469 0-48 21.531-48 48 0 19.727 12.367 37.734 30.773 44.812 1.0312 0.40234 2.1875-0.11719 2.5859-1.1484 0.39453-1.0312-0.11719-2.1875-1.1484-2.5859-16.875-6.4844-28.211-22.996-28.211-41.078 0-24.262 19.738-44 44-44s44 19.738 44 44c0 21.844-16 40.016-36.898 43.422l0.046876-4.3945c0.011718-0.078125 0.023437-0.15625 0.023437-0.23828v-50.277h14.781v0.070312c0 2.8125 2.2891 5.1055 5.1055 5.1055h2.1133c2.8125 0 5.1055-2.2891 5.1055-5.1055v-9.3125c0-2.8125-2.2891-5.1055-5.1055-5.1055h-56.172-0.0625-2.1133c-2.8125 0-5.1055 2.2891-5.1055 5.1055v9.3125c0 2.8125 2.2891 5.1055 5.1055 5.1055h2.1133c2.8125 0 5.1055-2.2891 5.1055-5.1055v-0.066406h14.781l0.003906 54.273c0 2.7969 2.2578 5.0742 5.0469 5.1055l2.0234 0.10156c0.035156 0.003906 0.066406 0.003906 0.10156 0.003906 26.469 0 48-21.531 48-48s-21.531-48-48-48z\"/>\n            </svg>\n\n            <div class=\"text\" [attr.aria-label]=\"'accessFlow.tools.readableText.title' | translate | async\">{{'accessFlow.tools.readableText.title' | translate | async}}</div>\n\n            @if(enabledTools.readableText != '')\n            {\n              <div class=\"bars\">\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.readableText == '1'}\"></div>\n                <div class=\"bar\" [ngClass]=\"{'active': enabledTools.readableText == '2'}\"></div>\n              </div>\n            }\n          </li>\n          <li [attr.aria-label]=\"'accessFlow.tools.stopAnimation.label' | translate | async\" [ngClass]=\"{'enabled': enabledTools.stopAnimation}\" (click)=\"enableTool('stopAnimation')\">\n            <svg version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n             <path d=\"m83.121 18.883h-66.242c-1.082 0-1.9648 0.88281-1.9648 1.9648v30.723c0 1.082 0.88281 1.9648 1.9648 1.9648h66.246c1.082 0 1.9648-0.88281 1.9648-1.9648v-30.723c0-1.082-0.88281-1.9648-1.9688-1.9648zm-42.184 5.5664h7.8672c0.86719 0 1.5742 0.70312 1.5742 1.5742 0 0.86719-0.70312 1.5742-1.5742 1.5742h-7.8672c-0.86719 0-1.5742-0.70312-1.5742-1.5742 0-0.87109 0.70312-1.5742 1.5742-1.5742zm1.5742 11.758c0 0.86719-0.70312 1.5742-1.5742 1.5742h-7.8672c-0.86719 0-1.5742-0.70312-1.5742-1.5742 0-0.86719 0.70312-1.5742 1.5742-1.5742h7.8672c0.86719 0.003907 1.5742 0.70703 1.5742 1.5742zm-15.344-11.758h7.8672c0.86719 0 1.5742 0.70312 1.5742 1.5742 0 0.86719-0.70312 1.5742-1.5742 1.5742h-7.8672c-0.86719 0-1.5742-0.70312-1.5742-1.5742 0-0.87109 0.70703-1.5742 1.5742-1.5742zm7.8672 23.52h-7.8672c-0.86719 0-1.5742-0.70312-1.5742-1.5742 0-0.86719 0.70312-1.5742 1.5742-1.5742h7.8672c0.86719 0 1.5742 0.70313 1.5742 1.5742 0 0.86719-0.70703 1.5742-1.5742 1.5742zm13.77 0h-7.8672c-0.86719 0-1.5742-0.70312-1.5742-1.5742 0-0.86719 0.70312-1.5742 1.5742-1.5742h7.8672c0.86719 0 1.5742 0.70313 1.5742 1.5742 0 0.86719-0.70703 1.5742-1.5742 1.5742zm23.324-10.543-15.203 8.7734c-0.9375 0.54297-2.1055-0.13281-2.1055-1.2148v-7.2031h-7.9844c-0.86719 0-1.5742-0.70312-1.5742-1.5742 0-0.86719 0.70312-1.5742 1.5742-1.5742h7.9844v-7.2031c0-1.082 1.168-1.7578 2.1055-1.2148l15.203 8.7773c0.93359 0.53906 0.93359 1.8945 0 2.4336zm17.824-30.367h-79.906c-3.9922 0-7.2578 3.2656-7.2578 7.2578v49.938c0 3.9922 3.2656 7.2578 7.2578 7.2578h25.117v11.535l-11.051 0.003906c-3.4062 0-6.1914 2.2266-6.1914 4.9453v4.9453h64.156v-4.9453c0-2.7227-2.7852-4.9453-6.1914-4.9453h-11.047v-11.535h25.117c3.9922 0 7.2578-3.2656 7.2578-7.2578v-49.938c-0.003906-3.9961-3.2695-7.2617-7.2617-7.2617zm1.1875 52.23h-82.281v-45.152c0-0.55469 0.45312-1.0078 1.0078-1.0078h80.27c0.55469 0 1.0078 0.45312 1.0078 1.0078z\" fill-rule=\"evenodd\"/>\n            </svg>\n\n            <div class=\"text\">{{'accessFlow.tools.stopAnimation.title' | translate | async}}</div>\n          </li>\n        </ul>\n      </div>\n\n      <div #adjustments class=\"footer\">\n        <div class=\"info\">\n          <div class=\"linkToWebsite\" (click)=\"openGithub()\">{{'accessFlow.overAccessFlow.label' | translate | async}}</div>\n          <button class=\"sendError\" (click)=\"openGithubIssues()\" [attr.aria-label]=\"'accessFlow.reportError.label' | translate | async\">{{'accessFlow.reportError.button' | translate | async}}</button>\n        </div>\n        <svg class=\"logo\" aria-label=\"AccessFlow Logo\" viewBox=\"0 0 567 567\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;\"><g><path d=\"M281.567,286.242l-147.196,179.234c-21.604,26.306 -60.501,30.124 -86.807,8.52l-0.148,-0.122c-26.306,-21.604 -30.124,-60.501 -8.52,-86.807l147.196,-179.234c21.604,-26.306 60.501,-30.124 86.807,-8.52l0.149,0.122c26.306,21.604 30.123,60.501 8.519,86.807Z\" style=\"fill:#ff9e00;\"/><path d=\"M526.513,182.125l-147.196,179.234c-21.604,26.306 -60.501,30.123 -86.807,8.519l-0.149,-0.121c-26.306,-21.604 -30.123,-60.501 -8.519,-86.807l147.196,-179.234c21.604,-26.306 60.501,-30.124 86.807,-8.52l0.148,0.122c26.306,21.604 30.124,60.501 8.52,86.807Z\" style=\"fill:#00cbef;\"/><g><path d=\"M215.171,367.435c-53.088,-43.84 -60.797,-122.511 -17.134,-175.829c43.662,-53.317 122.31,-61.271 175.755,-17.868l-158.621,193.697Z\" style=\"fill:#ff1e43;\"/><path d=\"M215.112,367.576c53.446,43.403 132.093,35.45 175.756,-17.868c43.662,-53.318 35.954,-131.989 -17.135,-175.828l-158.621,193.696Z\" style=\"fill:#008cee;\"/></g></g></svg>\n      </div>\n    </div>\n  </div>\n}\n", styles: [".icon{position:fixed;transition:all ease .3s;cursor:pointer}.icon:hover{transform:scale(1.1)}.icon:hover.centerBottom,.icon:hover.centerTop{transform:scale(1.1) translate(-45%)}.icon.leftBottom{left:1rem;bottom:1rem}.icon.rightBottom{right:1rem;bottom:1rem}.icon.leftTop{left:1rem;top:1rem}.icon.rightTop{right:1rem;top:1rem}.icon.centerBottom{left:50%;transform:translate(-50%);bottom:1rem}.icon.centerTop{left:50%;transform:translate(-50%);top:1rem}.accessibility{position:fixed;top:0;right:0;bottom:0;width:380px;background-color:#eee;box-shadow:0 0 10px #00000080;-webkit-user-select:none;user-select:none}.accessibility *{font-family:Arial,sans-serif}.accessibility.rtl{direction:rtl}.accessibility.rtl .languages .headerLanguage .arrowRight{left:inherit;right:25px;transform:scaleX(-1)}.accessibility.rtl .languages .languageContent .availableLanguages{margin-left:inherit;margin-right:5px}.accessibility.rtl .languages .languageContent .availableLanguages li .box{right:5px!important;left:inherit!important}.accessibility.rtl .languages .languageContent .availableLanguages li .name{margin-left:0;margin-right:10px;text-align:right}.accessibility.rtl .languages .languageContent .availableLanguages li:after{right:inherit!important;left:15px!important}.accessibility .af-container{width:100%;height:100%}.accessibility .header{width:calc(100% - 20px);padding:10px;height:50px;position:relative;background-color:#fff;border-bottom:2px solid #dedede;direction:ltr!important}.accessibility .header .logo{width:150px}.accessibility .header .closeIcon{position:absolute;right:15px;top:25px;cursor:pointer;width:25px;transition:all ease .3s}.accessibility .header .closeIcon:hover{transform:scale(1.1)}.accessibility .languages{width:100%;position:relative;background-color:#fff;border-bottom:2px solid #dedede;box-sizing:border-box}.accessibility .languages .languageContent{padding:5px 10px;position:relative;max-height:225px;box-sizing:border-box}.accessibility .languages .languageContent .searchbar{width:100%;padding-left:15px;padding-right:5px;box-sizing:border-box}.accessibility .languages .languageContent .searchbar input{outline:none;width:calc(100% - 20px);line-height:28px;border:2px solid #eee;font-size:14px;padding:2px 5px;border-radius:5px 5px 0 0}.accessibility .languages .languageContent .availableLanguages{width:calc(100% - 26px);height:150px;box-sizing:border-box;margin-left:15px;overflow-y:auto;background-color:#eee;border-radius:0 0 10px 10px;border:1px solid #dedede;border-top:0;margin-bottom:15px}.accessibility .languages .languageContent .availableLanguages ul{list-style-type:none;margin:0;padding:0}.accessibility .languages .languageContent .availableLanguages ul li{padding:8px 10px;position:relative;display:none}.accessibility .languages .languageContent .availableLanguages ul li.visible{display:block}.accessibility .languages .languageContent .availableLanguages ul li .box{display:inline-block;width:25px;height:25px;text-transform:uppercase;background-color:#fff;font-weight:700;border-radius:50%;text-align:center;line-height:25px;opacity:.9;font-size:11px;box-shadow:0 0 3px #00000080,0 0 1px #00000040}.accessibility .languages .languageContent .availableLanguages ul li:hover{background-color:#ddd;cursor:pointer}.accessibility .languages .languageContent .availableLanguages ul li.selected{background-color:#008cee;color:#fff;font-weight:700;box-shadow:inset 0 0 3px #00000080,inset 0 0 1px #00000040}.accessibility .languages .languageContent .availableLanguages ul li.selected .box{color:#000}.accessibility .languages .languageContent .availableLanguages ul li.selected:after{position:absolute;right:15px;top:10px;content:\"\";display:block;width:20px;height:20px;background-image:url('data:image/svg+xml,<svg width=\"20px\" height=\"20px\" fill=\"%23ffffff\" version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m50 95.832c12.156 0 23.812-4.8281 32.41-13.422 8.5938-8.5977 13.422-20.254 13.422-32.41s-4.8281-23.812-13.422-32.41c-8.5977-8.5938-20.254-13.422-32.41-13.422s-23.812 4.8281-32.41 13.422c-8.5938 8.5977-13.422 20.254-13.422 32.41s4.8281 23.812 13.422 32.41c8.5977 8.5938 20.254 13.422 32.41 13.422zm-23.793-44.625c1.625-1.6133 4.25-1.6133 5.875 0l9.5859 9.5859 24.125-24.125c1.6523-1.418 4.1172-1.3203 5.6562 0.21875 1.5391 1.5391 1.6328 4 0.21875 5.6562l-27.082 27.082h-0.003907c-1.625 1.6172-4.25 1.6172-5.875 0l-12.5-12.5c-0.78906-0.78125-1.2305-1.8477-1.2305-2.957 0-1.1133 0.44141-2.1758 1.2305-2.9609z\"/></svg>')}.accessibility .languages .languageContent .availableLanguages ul li .name{display:inline-block;margin-left:10px;font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;position:relative;top:3px;width:calc(100% - 70px)}.accessibility .languages .languageContent .availableLanguages ul li .name .inEnglish{opacity:.75;font-size:12px}.accessibility .languages .headerLanguage{padding:5px 10px 5px 25px;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer}.accessibility .languages .headerLanguage .strong{font-weight:700;display:inline-block}.accessibility .languages .headerLanguage .arrowRight{position:relative;width:12px;left:25px;top:1px}.accessibility .toolsContainer{width:100%;overflow-y:auto}.accessibility .toolsContainer .tools{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start;width:calc(100% - 20px);list-style-type:none;margin:0;padding:10px}.accessibility .toolsContainer .tools li{flex:0 0 calc(50% - 20px);background-color:#fff;max-width:calc(50% - 20px);border-radius:5px;padding:10px;text-align:center;margin:10px;box-sizing:border-box;border:3px solid transparent;transition:all ease .3s;cursor:pointer;height:100px}.accessibility .toolsContainer .tools li .bars{width:calc(100% - 20px);margin:10px;display:flex;position:absolute;left:0}.accessibility .toolsContainer .tools li .bars .bar{display:inline-block;height:4px;background-color:#eee;width:100%;margin:0 5px}.accessibility .toolsContainer .tools li .bars .bar.active{background-color:#008cee}.accessibility .toolsContainer .tools li:hover,.accessibility .toolsContainer .tools li.enabled{border-color:#008cee}.accessibility .toolsContainer .tools li.enabled{position:relative;box-shadow:0 0 3px #008cee80,0 0 10px #008cee40}.accessibility .toolsContainer .tools li.enabled:after{position:absolute;right:5px;top:5px;content:\"\";display:block;width:20px;height:20px;background-image:url('data:image/svg+xml,<svg width=\"20px\" height=\"20px\" fill=\"%23008cee\" version=\"1.1\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m50 95.832c12.156 0 23.812-4.8281 32.41-13.422 8.5938-8.5977 13.422-20.254 13.422-32.41s-4.8281-23.812-13.422-32.41c-8.5977-8.5938-20.254-13.422-32.41-13.422s-23.812 4.8281-32.41 13.422c-8.5938 8.5977-13.422 20.254-13.422 32.41s4.8281 23.812 13.422 32.41c8.5977 8.5938 20.254 13.422 32.41 13.422zm-23.793-44.625c1.625-1.6133 4.25-1.6133 5.875 0l9.5859 9.5859 24.125-24.125c1.6523-1.418 4.1172-1.3203 5.6562 0.21875 1.5391 1.5391 1.6328 4 0.21875 5.6562l-27.082 27.082h-0.003907c-1.625 1.6172-4.25 1.6172-5.875 0l-12.5-12.5c-0.78906-0.78125-1.2305-1.8477-1.2305-2.957 0-1.1133 0.44141-2.1758 1.2305-2.9609z\"/></svg>')}.accessibility .toolsContainer .tools li svg{width:35px;margin-bottom:10px}.accessibility .toolsContainer .tools li .text{font-size:12px;opacity:.75;font-weight:700;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.accessibility .footer{position:relative;bottom:0;width:100%;padding:10px;background-color:#fff;height:70px;border-top:2px solid #dedede;box-sizing:border-box;direction:ltr!important}.accessibility .footer .logo{position:absolute;right:25px;top:10px;width:60px}.accessibility .footer .info{position:relative}.accessibility .footer .info .linkToWebsite{font-size:12px;margin-bottom:10px;color:#008cee;cursor:pointer;opacity:.5}.accessibility .footer .info .linkToWebsite:hover{text-decoration:underline}.accessibility .footer .info .sendError{background-color:#008cee;color:#fff;border-radius:5px;font-weight:700;border:0;padding:5px;font-size:11px;text-transform:uppercase;cursor:pointer;transition:all ease .3s}.accessibility .footer .info .sendError:hover{background-color:#13629a}\n"] }]
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: TranslationService }], propDecorators: { footer: [{
                type: ViewChild,
                args: ['footer', { static: false }]
            }], languages: [{
                type: ViewChild,
                args: ['languages', { static: false }]
            }], header: [{
                type: ViewChild,
                args: ['header', { static: false }]
            }], toolsContainer: [{
                type: ViewChild,
                args: ['toolsContainer', { static: false }]
            }], searchbarLanguage: [{
                type: ViewChild,
                args: ['searchbarLanguage', { static: false }]
            }], size: [{
                type: Input
            }], position: [{
                type: Input
            }], showAccessibility: [{
                type: Input
            }], onResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }], onKeydownHandler: [{
                type: HostListener,
                args: ['document:keydown', ['$event']]
            }], onMousemoveHandler: [{
                type: HostListener,
                args: ['document:mousemove', ['$event']]
            }] } });

class AccessFlowModule {
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

/*
 * Public API Surface of access-flow
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccessFlowComponent, AccessFlowModule, TranslatePipe, TranslationService };
//# sourceMappingURL=access-flow.mjs.map
