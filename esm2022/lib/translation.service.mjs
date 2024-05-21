import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class TranslationService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FjY2Vzcy1mbG93L3NyYy9saWIvdHJhbnNsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3ZDLE1BQU0sT0FBTyxrQkFBa0I7SUFIL0I7UUFJVSxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQzVELHFCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFL0MsaUJBQVksR0FBOEM7WUFDaEUsSUFBSSxFQUFFO2dCQUNKLFlBQVksRUFBRTtvQkFDWixZQUFZLEVBQUU7d0JBQ1osT0FBTyxFQUFFLHdFQUF3RTtxQkFDbEY7b0JBRUQsUUFBUSxFQUFFO3dCQUNSLFdBQVcsRUFBRTs0QkFDWCxPQUFPLEVBQUUsbUJBQW1CO3lCQUM3QjtxQkFDRjtvQkFFRCxXQUFXLEVBQUU7d0JBQ1gsT0FBTyxFQUFFLHdCQUF3Qjt3QkFDakMsT0FBTyxFQUFFLDhFQUE4RTt3QkFDdkYsT0FBTyxFQUFFOzRCQUNQLE9BQU8sRUFBRSxzQ0FBc0M7eUJBQ2hEO3dCQUNELG9CQUFvQixFQUFFOzRCQUNwQixPQUFPLEVBQUUsb0RBQW9EO3lCQUM5RDtxQkFDRjtvQkFFRCxPQUFPLEVBQUU7d0JBQ1AsVUFBVSxFQUFFOzRCQUNWLE9BQU8sRUFBRSxVQUFVOzRCQUNuQixPQUFPLEVBQUUsMERBQTBEO3lCQUNwRTt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsT0FBTyxFQUFFLE9BQU87NEJBQ2hCLE9BQU8sRUFBRSxtREFBbUQ7eUJBQzdEO3dCQUNELFlBQVksRUFBRTs0QkFDWixPQUFPLEVBQUUsZUFBZTs0QkFDeEIsT0FB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Q0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDN0MsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7OEdBeDdFVSxrQkFBa0I7a0hBQWxCLGtCQUFrQixjQUZqQixNQUFNOzsyRkFFUCxrQkFBa0I7a0JBSDlCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgbGFuZ3VhZ2VTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCdkZScpO1xuICBjdXJyZW50TGFuZ3VhZ2UkID0gdGhpcy5sYW5ndWFnZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB9ID0ge1xuICAgIFwiZGVcIjoge1xuICAgICAgXCJhY2Nlc3NGbG93XCI6IHtcbiAgICAgICAgXCJvcGVuU3ltYm9sXCI6IHtcbiAgICAgICAgICBcImxhYmVsXCI6IFwiQWNjZXNzRmxvdy1CYXJyaWVyZWZyZWloZWl0c21lbsO8IMO2ZmZuZW4sIHVtIEVpbnN0ZWxsdW5nZW4gdm9yenVuZWhtZW4uXCJcbiAgICAgICAgfSxcblxuICAgICAgICBcImhlYWRlclwiOiB7XG4gICAgICAgICAgXCJjbG9zZUljb25cIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFuc2ljaHQgc2NobGllw59lblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwibGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiU3ByYWNoZSAoe3tsYW5ndWFnZX19KVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJFcm3DtmdsaWNodCBkYXMgw4RuZGVybiBkZXIgU3ByYWNoZSBkZXIgQWNjZXNzRmxvdy1PYmVyZmzDpGNoZSBtaXQgZWluZW0gS2xpY2suXCIsXG4gICAgICAgICAgXCJpbnB1dFwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTmFjaCBkZXIgZ2V3w7xuc2NodGVuIFNwcmFjaGUgc3VjaGVuLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF2YWlsYWJsZUxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiT2JlcmZsw6RjaGUgYXVmIGRpZSBTcHJhY2hlIHt7bGFuZ3VhZ2V9fSB1bXN0ZWxsZW4uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJ0b29sc1wiOiB7XG4gICAgICAgICAgXCJjb250cmFzdFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiS29udHJhc3RcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJTdGVsbHQgZGllIFdlYnNlaXRlIGluIHZlcnNjaGllZGVuZW4gS29udHJhc3RzdHVmZW4gZGFyLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmtzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJMaW5rc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkhlYnQgYWxsZSBMaW5rcyBhdWYgZGVyIFdlYnNlaXRlIGZhcmJsaWNoIGhlcnZvci5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJiaWdnZXJUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJHcsO2w59lcmVyIFRleHRcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWZXJncsO2w59lcnQgZGllIFNjaHJpZnRhcnQgcmVsYXRpdiB6dXIgYWt0dWVsbGVuIFNjaHJpZnRncsO2w59lLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRleHRTcGFjaW5nXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUZXh0YWJzdGFuZFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkVyaMO2aHQgZGVuIEFic3RhbmQgendpc2NoZW4gWmVpY2hlbiB1bmQgV8O2cnRlcm4uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW1hZ2VzUmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJCaWxkZXIgZW50ZmVybmVuXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQWxsZSBCaWxkZWxlbWVudGUgYXVmIGRlciBXZWJzZWl0ZSB3ZXJkZW4gYXVzZ2VibGVuZGV0LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmVIZWlnaHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlplaWxlbmjDtmhlXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiRGllIFplaWxlbmjDtmhlIHdpcmQgYmVpIGplZGVtIFRleHRlbGVtZW50IGF1ZiBkZXIgV2Vic2VpdGUgZXJow7ZodC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTw6R0dGlndW5nXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiRGllIFPDpHR0aWd1bmcgZGVyIFdlYnNlaXRlIHdpcmQgZXJow7ZodCBiencuIHZlcnJpbmdlcnQsIHVtIGVpbmUgYmVzc2VyZSBMZXNiYXJrZWl0IHp1IGdld8OkaHJsZWlzdGVuLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdXNlQ3Vyc29yXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJNYXVzemVpZ2VyXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiRGVyIE1hdXN6ZWlnZXIgd2lyZCB1bSBkZW4gRmFrdG9yIDMgdmVyZ3LDtsOfZXJ0LCB1bSBpaG4gYmVzc2VyIGltIEZva3VzIHp1IGhhYmVuLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNpdGVTdHJ1Y3R1cmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNlaXRlbnN0cnVrdHVyXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQWxsZSDDnGJlcnNjaHJpZnRlbiB1bmQgTGlua3Mgd2VyZGVuIG5hY2ggaWhyZXIgV2ljaHRpZ2tlaXQgc29ydGllcnQgdW50ZXJlaW5hbmRlciBhdWZnZWxpc3RldCwgd29kdXJjaCBlaW5lIGVpbmZhY2hlIE5hdmlnYXRpb24gZHVyY2ggZGllIFNlaXRlIGVybcO2Z2xpY2h0IHdpcmQuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidG9vbHRpcHNcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRvb2x0aXBzXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQWxsZSBFbGVtZW50ZSwgZGllIGVpbiBgdGl0bGVgLSBvZGVyIGBsYWJlbGAtQXR0cmlidXQgYmVzaXR6ZW4sIHplaWdlbiBiZWltIMOcYmVyZmFocmVuIG1pdCBkZXIgTWF1cyBlaW5lbiBzaWNodGJhcmVuIFRvb2x0aXAgYW4uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVhZGFibGVUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJMZXNiYXJlciBUZXh0XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVW0gZGVuIFRleHQgYmVzc2VyIGxlc2JhciB6dSBtYWNoZW4sIHdpcmQgZWluZSBuZXVlIFNjaHJpZnRhcnQgZ2VsYWRlbi4gRGFiZWkgd2lyZCBhdWNoIGVpbmUgc3BlemllbGwgZsO8ciBMZWdhc3RoZW5pa2VyIGdlZWlnbmV0ZSBTY2hyaWZ0YXJ0IHp1ciBBdXN3YWhsIGdlZ2ViZW4uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3RvcEFuaW1hdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQW5pbWF0aW9uZW4gc3RvcHBlblwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkjDpGx0IGFsbGUgVmlkZW9zIHVuZCBBbmltYXRpb25lbiBhdWYgZGVyIGdlc2FtdGVuIFdlYnNlaXRlIGFuLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlcG9ydEVycm9yXCI6IHtcbiAgICAgICAgICBcImJ1dHRvblwiOiBcIkZlaGxlciBtZWxkZW5cIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwiRWluZW4gRmVobGVyIGJlaSBBY2Nlc3NGbG93IG1lbGRlblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwib3ZlckFjY2Vzc0Zsb3dcIjp7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcIsOcYmVyIEFjY2Vzcy1GbG93XCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJlblwiOntcbiAgICAgIFwiYWNjZXNzRmxvd1wiOiB7XG4gICAgICAgIFwib3BlblN5bWJvbFwiOiB7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcIk9wZW4gdGhlIEFjY2Vzc0Zsb3cgYWNjZXNzaWJpbGl0eSBtZW51IHRvIG1ha2Ugc2V0dGluZ3MuXCJcbiAgICAgICAgfSxcblxuICAgICAgICBcImhlYWRlclwiOiB7XG4gICAgICAgICAgXCJjbG9zZUljb25cIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNsb3NlIHZpZXdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcImxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIkxhbmd1YWdlICh7e2xhbmd1YWdlfX0pXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIkFsbG93cyB5b3UgdG8gY2hhbmdlIHRoZSBsYW5ndWFnZSBvZiB0aGUgQWNjZXNzRmxvdyBpbnRlcmZhY2Ugd2l0aCBvbmUgY2xpY2suXCIsXG4gICAgICAgICAgXCJpbnB1dFwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiU2VhcmNoIGZvciB0aGUgZGVzaXJlZCBsYW5ndWFnZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJhdmFpbGFibGVMYW5ndWFnZXNcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlN3aXRjaCB0aGUgaW50ZXJmYWNlIHRvIHRoZSB7e2xhbmd1YWdlfX0gbGFuZ3VhZ2UuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJ0b29sc1wiOiB7XG4gICAgICAgICAgXCJjb250cmFzdFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQ29udHJhc3RcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJEaXNwbGF5cyB0aGUgd2Vic2l0ZSBpbiBkaWZmZXJlbnQgY29udHJhc3QgbGV2ZWxzLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmtzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJMaW5rc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkhpZ2hsaWdodHMgYWxsIGxpbmtzIG9uIHRoZSB3ZWJzaXRlIGluIGNvbG91ci5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJiaWdnZXJUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJMYXJnZXIgdGV4dFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkVubGFyZ2VzIHRoZSBmb250IHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IGZvbnQgc2l6ZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0ZXh0U3BhY2luZ1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGV4dCBzcGFjaW5nXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiSW5jcmVhc2VzIHRoZSBzcGFjZSBiZXR3ZWVuIGNoYXJhY3RlcnMgYW5kIHdvcmRzLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImltYWdlc1JlbW92ZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiUmVtb3ZlIGltYWdlc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFsbCBpbWFnZSBlbGVtZW50cyBvbiB0aGUgd2Vic2l0ZSBhcmUgaGlkZGVuLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmVIZWlnaHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxpbmUgaGVpZ2h0XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVGhlIGxpbmUgaGVpZ2h0IGlzIGluY3JlYXNlZCBmb3IgZWFjaCB0ZXh0IGVsZW1lbnQgb24gdGhlIHdlYiBwYWdlLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNhdHVyYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNhdHVyYXRpb25cIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJUaGUgc2F0dXJhdGlvbiBvZiB0aGUgd2Vic2l0ZSBpcyBpbmNyZWFzZWQgb3IgZGVjcmVhc2VkIHRvIGVuc3VyZSBiZXR0ZXIgcmVhZGFiaWxpdHkuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW91c2VDdXJzb3JcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk1vdXNlIHBvaW50ZXJcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJUaGUgbW91c2UgcG9pbnRlciBpcyBlbmxhcmdlZCBieSBhIGZhY3RvciBvZiAzIGluIG9yZGVyIHRvIGhhdmUgaXQgYmV0dGVyIGluIGZvY3VzLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNpdGVTdHJ1Y3R1cmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlBhZ2Ugc3RydWN0dXJlXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQWxsIGhlYWRpbmdzIGFuZCBsaW5rcyBhcmUgbGlzdGVkIG9uZSBiZWxvdyB0aGUgb3RoZXIgaW4gb3JkZXIgb2YgaW1wb3J0YW5jZSwgbWFraW5nIGl0IGVhc3kgdG8gbmF2aWdhdGUgdGhyb3VnaCB0aGUgcGFnZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0b29sdGlwc1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVG9vbHRpcHNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJBbGwgZWxlbWVudHMgdGhhdCBoYXZlIGEgYHRpdGxlYCBvciBgbGFiZWxgIGF0dHJpYnV0ZSBkaXNwbGF5IGEgdmlzaWJsZSB0b29sdGlwIHdoZW4gaG92ZXJpbmcgb3ZlciB0aGVtIHdpdGggdGhlIG1vdXNlLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlYWRhYmxlVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiUmVhZGFibGUgdGV4dFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkEgbmV3IGZvbnQgaXMgbG9hZGVkIHRvIG1ha2UgdGhlIHRleHQgZWFzaWVyIHRvIHJlYWQuIEEgZm9udCBlc3BlY2lhbGx5IHN1aXRhYmxlIGZvciBkeXNsZXhpY3MgaXMgYWxzbyBwcm92aWRlZCBmb3Igc2VsZWN0aW9uLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlN0b3AgYW5pbWF0aW9uc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBhdXNlcyBhbGwgdmlkZW9zIGFuZCBhbmltYXRpb25zIG9uIHRoZSBlbnRpcmUgd2Vic2l0ZS5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXBvcnRFcnJvclwiOiB7XG4gICAgICAgICAgXCJidXR0b25cIjogXCJSZXBvcnQgZXJyb3JcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwiUmVwb3J0IGFuIGVycm9yIHdpdGggQWNjZXNzRmxvd1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwib3ZlckFjY2Vzc0Zsb3dcIjp7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcIkFib3V0IEFjY2Vzcy1GbG93XCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJhclwiOiB7XG4gICAgICBcImFjY2Vzc0Zsb3dcIjoge1xuICAgICAgICBcIm9wZW5TeW1ib2xcIjoge1xuICAgICAgICAgIFwibGFiZWxcIjogXCLYp9mB2KrYrSDZgtin2KbZhdipINil2YXZg9in2YbZitipINin2YTZiNi12YjZhCDYpdmE2YkgQWNjZXNzRmxvdyDZhNi22KjYtyDYp9mE2KXYudiv2KfYr9in2KouXCJcbiAgICAgICAgfSxcblxuICAgICAgICBcImhlYWRlclwiOiB7XG4gICAgICAgICAgXCJjbG9zZUljb25cIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIti52LHYtiDZgtix2YrYqFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwibGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwi2KfZhNmE2LrYqSAoe3tsYW5ndWFnZX19KVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCLZitiq2YrYrSDZhNmDINiq2LrZitmK2LEg2YTYutipINmI2KfYrNmH2KkgQWNjZXNzRmxvdyDYqNmG2YLYsdipINmI2KfYrdiv2KkuXCIsXG4gICAgICAgICAgXCJpbnB1dFwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi2KfYqNit2Ksg2LnZhiDYp9mE2YTYutipINin2YTZhdi32YTZiNio2KkuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXZhaWxhYmxlTGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLZgtmFINio2KrYqNiv2YrZhCDYp9mE2YjYp9is2YfYqSDYpdmE2Ykg2YTYutipIHt7bGFuZ3VhZ2V9fS5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcInRvb2xzXCI6IHtcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLYp9mE2KrYqNin2YrZhlwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItmK2LnYsdi2INin2YTZhdmI2YLYuSDYp9mE2KXZhNmD2KrYsdmI2YbZiiDYqNmF2LPYqtmI2YrYp9iqINiq2KjYp9mK2YYg2YXYrtiq2YTZgdipLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmtzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLYp9mE2LHZiNin2KjYt1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItil2KjYsdin2LIg2KzZhdmK2Lkg2KfZhNix2YjYp9io2Lcg2LnZhNmJINin2YTZhdmI2YLYuSDYp9mE2KXZhNmD2KrYsdmI2YbZiiDYqNin2YTYo9mE2YjYp9mGLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJpZ2dlclRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItmG2LUg2KPZg9io2LFcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLYqtmD2KjZitixINin2YTYrti3INio2KfZhNmG2LPYqNipINmE2K3YrNmFINin2YTYrti3INin2YTYrdin2YTZii5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0ZXh0U3BhY2luZ1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi2KrYqNin2LnYryDYp9mE2YbYtVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItmK2LLZitivINin2YTZhdiz2KfZgdipINio2YrZhiDYp9mE2KPYrdix2YEg2YjYp9mE2YPZhNmF2KfYqi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbWFnZXNSZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItil2LLYp9mE2Kkg2KfZhNi12YjYsVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItis2YXZiti5INi52YbYp9i12LEg2KfZhNi12YjYsSDYudmE2Ykg2KfZhNmF2YjZgti5INin2YTYpdmE2YPYqtix2YjZhtmKINmF2K7ZgdmK2KkuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGluZUhlaWdodFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi2KfYsdiq2YHYp9i5INin2YTYrti3XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi2YrYqtmFINiy2YrYp9iv2Kkg2KfYsdiq2YHYp9i5INin2YTYs9i32LEg2YTZg9mEINi52YbYtdixINmG2LXZiiDYudmE2Ykg2LXZgdit2Kkg2KfZhNmI2YrYqC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLYp9mE2KrYtNio2LlcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLZitiq2YUg2LLZitin2K/YqSDYo9mIINiq2YLZhNmK2YQg2KrYtNio2Lkg2KfZhNmF2YjZgti5INin2YTYpdmE2YPYqtix2YjZhtmKINmE2LbZhdin2YYg2LPZh9mI2YTYqSDYp9mE2YLYsdin2KHYqSDYqNi02YPZhCDYo9mB2LbZhC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3VzZUN1cnNvclwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi2YXYpNi02LEg2KfZhNmF2KfZiNizXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi2YrYqtmFINiq2YPYqNmK2LEg2YXYpNi02LEg2KfZhNmB2KPYsdipINio2YXYudin2YXZhCAzINmF2YYg2KPYrNmEINin2YTYrdi12YjZhCDYudmE2Ykg2KrYsdmD2YrYsiDYo9mB2LbZhC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaXRlU3RydWN0dXJlXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLZh9mK2YPZhCDYp9mE2LXZgdit2KlcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLYrNmF2YrYuSDYp9mE2LnZhtin2YjZitmGINmI2KfZhNix2YjYp9io2Lcg2YXYr9ix2KzYqSDZiNin2K3Yr9ipINij2LPZgdmEINin2YTYo9iu2LHZiSDYqNin2YTYqtix2KrZitioINit2LPYqCDYp9mE2KPZh9mF2YrYqdiMINmF2YXYpyDZitiz2YfZhCDYp9mE2KrZhtmC2YQg2LnYqNixINin2YTYtdmB2K3YqS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0b29sdGlwc1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi2KrZhNmF2YrYrdin2Kog2KfZhNij2K/ZiNin2KpcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLYqti52LHYtiDYrNmF2YrYuSDYp9mE2LnZhtin2LXYsSDYp9mE2KrZiiDYqtit2KrZiNmKINi52YTZiSDYs9mF2KkgXFxcItin2YTYudmG2YjYp9mGXFxcIiDYo9mIIFxcXCLYp9mE2KrYs9mF2YrYqVxcXCIg2KrZhNmF2YrYrSDYo9iv2KfYqSDZhdix2KbZiiDYudmG2K8g2KfZhNiq2YXYsdmK2LEg2YHZiNmC2YfYpyDYqNin2YTZhdin2YjYsy5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWFkYWJsZVRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItmG2LUg2YLYp9io2YQg2YTZhNmC2LHYp9ih2KlcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLZitiq2YUg2KrYrdmF2YrZhCDYrti3INis2K/ZitivINmE2KrYs9mH2YrZhCDZgtix2KfYodipINin2YTZhti1LiDZg9mF2Kcg2YrYqtmFINiq2YjZgdmK2LEg2K7YtyDZhdmG2KfYs9ioINiu2LXZiti12KfZiyDZhNmF2LXYp9io2Yog2LnYs9ixINin2YTZgtix2KfYodipINmE2YTYp9iu2KrZitin2LEuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3RvcEFuaW1hdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi2KXZitmC2KfZgSDYp9mE2LHYs9mI2YUg2KfZhNmF2KrYrdix2YPYqVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItil2YrZgtin2YEg2KzZhdmK2Lkg2YXZgtin2LfYuSDYp9mE2YHZitiv2YrZiCDZiNin2YTYsdiz2YjZhSDYp9mE2YXYqtit2LHZg9ipINmF2KTZgtiq2KfZiyDYudmE2Ykg2KfZhNmF2YjZgti5INin2YTYpdmE2YPYqtix2YjZhtmKINio2KfZhNmD2KfZhdmELlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlcG9ydEVycm9yXCI6IHtcbiAgICAgICAgICBcImJ1dHRvblwiOiBcItin2YTYpdio2YTYp9i6INi52YYg2K7Yt9ijXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcItin2YTYpdio2YTYp9i6INi52YYg2K7Yt9ijINmB2YogQWNjZXNzRmxvd1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwib3ZlckFjY2Vzc0Zsb3dcIjp7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcItit2YjZhCBBY2Nlc3MtRmxvd1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiYmdcIjoge1xuICAgICAgXCJhY2Nlc3NGbG93XCI6IHtcbiAgICAgICAgXCJvcGVuU3ltYm9sXCI6IHtcbiAgICAgICAgICBcImxhYmVsXCI6IFwi0J7RgtCy0L7RgNC10YLQtSDQvNC10L3RjtGC0L4g0LfQsCDQtNC+0YHRgtGK0L/QvdC+0YHRgiDQvdCwIEFjY2Vzc0Zsb3csINC30LAg0LTQsCDQvdCw0L/RgNCw0LLQuNGC0LUg0L3QsNGB0YLRgNC+0LnQutC4LlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJoZWFkZXJcIjoge1xuICAgICAgICAgIFwiY2xvc2VJY29uXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQmNC30LPQu9C10LQg0L7RgtCx0LvQuNC30L5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcImxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcItCV0LfQuNC6ICh7e2xhbmd1YWdlfX0pXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcItCf0L7Qt9Cy0L7Qu9GP0LLQsCDQstC4INC00LAg0L/RgNC+0LzQtdC90LjRgtC1INC10LfQuNC60LAg0L3QsCDQuNC90YLQtdGA0YTQtdC50YHQsCDQvdCwIEFjY2Vzc0Zsb3cg0YEg0LXQtNC90L4g0LrQu9C40LrQstCw0L3QtS5cIixcbiAgICAgICAgICBcImlucHV0XCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQn9C+0YLRitGA0YHQtdGC0LUg0LbQtdC70LDQvdC40Y8g0LXQt9C40LouXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXZhaWxhYmxlTGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQn9GA0LXQstC60LvRjtGH0LLQsNC90LUg0L3QsCDQuNC90YLQtdGA0YTQtdC50YHQsCDQvdCwINC10LfQuNC60LAge3tsYW5ndWFnZX19LlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwidG9vbHNcIjoge1xuICAgICAgICAgIFwiY29udHJhc3RcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCa0L7QvdGC0YDQsNGB0YJcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQn9C+0LrQsNC30LLQsCDRg9C10LHRgdCw0LnRgtCwINCyINGA0LDQt9C70LjRh9C90Lgg0L3QuNCy0LAg0L3QsCDQutC+0L3RgtGA0LDRgdGCLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmtzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLQktGA0YrQt9C60LhcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQn9C+0LTRh9C10YDRgtCw0LLQsCDQstGB0LjRh9C60Lgg0LLRgNGK0LfQutC4INCyINGD0LXQsdGB0LDQudGC0LAg0LIg0YbQstGP0YIuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYmlnZ2VyVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi0J/Qvi3Qs9C+0LvRj9C8INGC0LXQutGB0YJcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQo9Cy0LXQu9C40YfQsNCy0LAg0YjRgNC40YTRgtCwINGB0L/RgNGP0LzQviDRgtC10LrRg9GJ0LjRjyDRgNCw0LfQvNC10YAg0L3QsCDRiNGA0LjRhNGC0LAuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidGV4dFNwYWNpbmdcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCg0LDQt9GB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0YLQtdC60YHRgtC+0LLQtdGC0LVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQo9Cy0LXQu9C40YfQsNCy0LAg0YDQsNC30YHRgtC+0Y/QvdC40LXRgtC+INC80LXQttC00YMg0YHQuNC80LLQvtC70LjRgtC1INC4INC00YPQvNC40YLQtS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbWFnZXNSZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCf0YDQtdC80LDRhdCy0LDQvdC1INC90LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRj1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItCS0YHQuNGH0LrQuCDQtdC70LXQvNC10L3RgtC4INC90LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRj9GC0LAg0LIg0YPQtdCx0YHQsNC50YLQsCDRgdCwINGB0LrRgNC40YLQuC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLQktC40YHQvtGH0LjQvdCwINC90LAg0LvQuNC90LjRj9GC0LBcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQktC40YHQvtGH0LjQvdCw0YLQsCDQvdCwINGA0LXQtNCwINGB0LUg0YPQstC10LvQuNGH0LDQstCwINC30LAg0LLRgdC10LrQuCDRgtC10LrRgdGC0L7QsiDQtdC70LXQvNC10L3RgiDQsiDRg9C10LEg0YHRgtGA0LDQvdC40YbQsNGC0LAuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2F0dXJhdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi0J3QsNGB0LjRidCw0L3QtVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItCd0LDRgdC40YLQtdC90L7RgdGC0YLQsCDQvdCwINGD0LXQsdGB0LDQudGC0LAg0YHQtSDRg9Cy0LXQu9C40YfQsNCy0LAg0LjQu9C4INC90LDQvNCw0LvRj9Cy0LAsINC30LAg0LTQsCDRgdC1INC+0YHQuNCz0YPRgNC4INC/0L4t0LTQvtCx0YDQsCDRh9C10YLQu9C40LLQvtGB0YIuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW91c2VDdXJzb3JcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCf0L7QutCw0LfQsNC70LXRhiDQvdCwINC80LjRiNC60LDRgtCwXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi0J/QvtC60LDQt9Cw0LvQtdGG0YrRgiDQvdCwINC80LjRiNC60LDRgtCwINC1INGD0LLQtdC70LjRh9C10L0gMyDQv9GK0YLQuCwg0LfQsCDQtNCwINGB0LUg0YTQvtC60YPRgdC40YDQsCDQv9C+LdC00L7QsdGA0LUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2l0ZVN0cnVjdHVyZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi0KHRgtGA0YPQutGC0YPRgNCwINC90LAg0YHRgtGA0LDQvdC40YbQsNGC0LBcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQktGB0LjRh9C60Lgg0LfQsNCz0LvQsNCy0LjRjyDQuCDQstGA0YrQt9C60Lgg0YHQsCDQv9C+0LTRgNC10LTQtdC90Lgg0LXQtNC90L4g0L/QvtC0INC00YDRg9Cz0L4g0L/QviDQstCw0LbQvdC+0YHRgiwg0LrQvtC10YLQviDRg9C70LXRgdC90Y/QstCwINC90LDQstC40LPQsNGG0LjRj9GC0LAg0LIg0YHRgtGA0LDQvdC40YbQsNGC0LAuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidG9vbHRpcHNcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCh0YrQstC10YLQuCDQt9CwINC40L3RgdGC0YDRg9C80LXQvdGC0LhcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQktGB0LjRh9C60Lgg0LXQu9C10LzQtdC90YLQuCwg0LrQvtC40YLQviDQuNC80LDRgiDQsNGC0YDQuNCx0YPRgiBgdGl0bGVgINC40LvQuCBgbGFiZWxgLCDQv9C+0LrQsNC30LLQsNGCINCy0LjQtNC40LzQsCDQv9C+0LTRgdC60LDQt9C60LAsINC60L7Qs9Cw0YLQviDQvNC40L3QtdGC0LUg0L3QsNC0INGC0Y/RhSDRgSDQvNC40YjQutCw0YLQsC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWFkYWJsZVRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCn0LXRgtC40Lwg0YLQtdC60YHRglwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItCX0LDRgNC10LbQtNCwINGB0LUg0L3QvtCyINGI0YDQuNGE0YIsINC30LAg0LTQsCDRgdC1INGH0LXRgtC1INC/0L4t0LvQtdGB0L3QviDRgtC10LrRgdGC0YrRgi4g0J/RgNC10LTQvtGB0YLQsNCy0LXQvSDQtSDQt9CwINC40LfQsdC+0YAg0Lgg0YjRgNC40YTRgiwg0L7RgdC+0LHQtdC90L4g0L/QvtC00YXQvtC00Y/RiSDQt9CwINC00LjRgdC70LXQutGB0LjRhtC4LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCh0L/QuNGA0LDQvdC1INC90LAg0LDQvdC40LzQsNGG0LjQuNGC0LVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQodC/0LjRgNCwINC90LAg0L/QsNGD0LfQsCDQstGB0LjRh9C60Lgg0LLQuNC00LXQvtC60LvQuNC/0L7QstC1INC4INCw0L3QuNC80LDRhtC40Lgg0LIg0YbQtdC70LjRjyDRg9C10LHRgdCw0LnRgi5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXBvcnRFcnJvclwiOiB7XG4gICAgICAgICAgXCJidXR0b25cIjogXCLQlNC+0LrQu9Cw0LTQstCw0L3QtSDQvdCwINCz0YDQtdGI0LrQsFwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCLQlNC+0LrQu9Cw0LTQstCw0L3QtSDQvdCwINCz0YDQtdGI0LrQsCDRgSBBY2Nlc3NGbG93XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvdmVyQWNjZXNzRmxvd1wiOntcbiAgICAgICAgICBcImxhYmVsXCI6IFwi0JfQsCBBY2Nlc3MtRmxvd1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiemhcIjoge1xuICAgICAgXCJhY2Nlc3NGbG93XCI6IHtcbiAgICAgICAgXCJvcGVuU3ltYm9sXCI6IHtcbiAgICAgICAgICBcImxhYmVsXCI6IFwi5omT5byAIEFjY2Vzc0Zsb3cg5Y+v6K6/6Zeu5oCn6I+c5Y2V6L+b6KGM6K6+572u44CCXCJcbiAgICAgICAgfSxcblxuICAgICAgICBcImhlYWRlclwiOiB7XG4gICAgICAgICAgXCJjbG9zZUljb25cIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIui/keinglwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwibGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwi6K+t6KiAICh7e2xhbmd1YWdlfX0pXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIuWFgeiuuOaCqOWNleWHu+abtOaUuSBBY2Nlc3NGbG93IOeVjOmdoueahOivreiogOOAglwiLFxuICAgICAgICAgIFwiaW5wdXRcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuaQnOe0ouaJgOmcgOeahOivreiogOOAglwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF2YWlsYWJsZUxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi5bCG55WM6Z2i5YiH5o2i5Li6IHt7bGFuZ3VhZ2V9fSDor63oqIDjgIJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcInRvb2xzXCI6IHtcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLlr7nmr5RcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLku6XkuI3lkIznmoTlr7nmr5TluqbmmL7npLrnvZHnq5njgIJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsaW5rc1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi6ZO+5o6lXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi55So5b2p6Imy56qB5Ye65pi+56S6572R56uZ5LiK55qE5omA5pyJ6ZO+5o6l44CCXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYmlnZ2VyVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi5pS+5aSn5paH5pysXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi55u45a+55LqO5b2T5YmN5a2X5L2T5aSn5bCP5pS+5aSn5a2X5L2T44CCXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidGV4dFNwYWNpbmdcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuaWh+acrOmXtOi3nVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuWinuWKoOWtl+espuWSjOWNleivjeS5i+mXtOeahOepuuagvOOAglwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImltYWdlc1JlbW92ZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi5Yig6Zmk5Zu+5YOPXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi572R56uZ5LiK55qE5omA5pyJ5Zu+5YOP5YWD57Sg6YO95piv6ZqQ6JeP55qE44CCXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGluZUhlaWdodFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi57q/5p2h6auY5bqmXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi572R6aG15LiK5q+P5Liq5paH5pys5YWD57Sg55qE6KGM6auY6YO95Lya5aKe5Yqg44CCXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2F0dXJhdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi6aWx5ZKM5bqmXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi5o+Q6auY5oiW6ZmN5L2O572R56uZ55qE6aWx5ZKM5bqm77yM5Lul56Gu5L+d5pu05aW955qE5Y+v6K+75oCn44CCXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW91c2VDdXJzb3JcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIum8oOagh+aMh+mSiFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIum8oOagh+aMh+mSiOaUvuWkp+S6hiAzIOWAje+8jOS7peS+v+abtOWlveWcsOWvueeEpuOAglwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNpdGVTdHJ1Y3R1cmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIumhtemdoue7k+aehFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuaJgOacieagh+mimOWSjOmTvuaOpemDveaMiemHjeimgeeoi+W6puS4gOS4gOWvueW6lOaOkuWIl++8jOS+v+S6jua1j+iniOmhtemdouOAglwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRvb2x0aXBzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLlt6Xlhbfmj5DnpLpcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLlvZPpvKDmoIfmgqzlgZzlnKjmiYDmnInlhbfmnIkgXFxcIuagh+mimCBcXFwi5oiWIFxcXCLmoIfnrb4gXFxcIuWxnuaAp+eahOWFg+e0oOS4iuaXtu+8jOWug+S7rOmDveS8muaYvuekuuWPr+ingeeahOW3peWFt+aPkOekuuOAglwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlYWRhYmxlVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi5Y+v6K+75paH5pysXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi5Yqg6L295LqG5LiA56eN5paw5a2X5L2T77yM5L2/5paH5pys5pu05piT5LqO6ZiF6K+744CC6L+Y5o+Q5L6b5LqG5LiA56eN54m55Yir6YCC5ZCI6ZiF6K+76Zqc56KN5oKj6ICF55qE5a2X5L2T5L6b6YCJ5oup44CCXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3RvcEFuaW1hdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi5YGc5q2i5Yqo55S7XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi5pqC5YGc5pW05Liq572R56uZ5LiK55qE5omA5pyJ6KeG6aKR5ZKM5Yqo55S744CCXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVwb3J0RXJyb3JcIjoge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IFwi5oql5ZGK6ZSZ6K+vXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIuaKpeWRiiBBY2Nlc3NGbG93IOS4reeahOmUmeivr1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwib3ZlckFjY2Vzc0Zsb3dcIjp7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcIuWFs+S6jiBBY2Nlc3MtRmxvd1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiZGFcIjoge1xuICAgICAgXCJhY2Nlc3NGbG93XCI6IHtcbiAgICAgICAgXCJvcGVuU3ltYm9sXCI6IHtcbiAgICAgICAgICBcImxhYmVsXCI6IFwiw4VibiBBY2Nlc3NGbG93LXRpbGfDpm5nZWxpZ2hlZHNtZW51ZW4gZm9yIGF0IGZvcmV0YWdlIGluZHN0aWxsaW5nZXIuXCJcbiAgICAgICAgfSxcblxuICAgICAgICBcImhlYWRlclwiOiB7XG4gICAgICAgICAgXCJjbG9zZUljb25cIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk7DpnJiaWxsZWRlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJsYW5ndWFnZXNcIjoge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJTcHJvZyAoe3tsYW5ndWFnZX19KVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJHaXZlciBkaWcgbXVsaWdoZWQgZm9yIGF0IMOmbmRyZSBzcHJvZ2V0IGkgQWNjZXNzRmxvdy1ncsOmbnNlZmxhZGVuIG1lZCBldCBlbmtlbHQga2xpay5cIixcbiAgICAgICAgICBcImlucHV0XCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJTw7hnIGVmdGVyIGRldCDDuG5za2VkZSBzcHJvZy5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJhdmFpbGFibGVMYW5ndWFnZXNcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlNraWZ0IGdyw6Zuc2VmbGFkZSB0aWwgc3Byb2dldCB7e2xhbmd1YWdlfX0uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJ0b29sc1wiOiB7XG4gICAgICAgICAgXCJjb250cmFzdFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiS29udHJhc3RlclwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlZpc2VyIGhqZW1tZXNpZGVuIGkgZm9yc2tlbGxpZ2Uga29udHJhc3RuaXZlYXVlci5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsaW5rc1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTGlua3NcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJGcmVtaMOmdmVyIGFsbGUgbGlua3MgcMOlIGhqZW1tZXNpZGVuIGkgZmFydmVyLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJpZ2dlclRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlN0w7hycmUgdGVrc3RcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJGb3JzdMO4cnJlciBza3JpZnR0eXBlbiBpIGZvcmhvbGQgdGlsIGRlbiBha3R1ZWxsZSBza3JpZnRzdMO4cnJlbHNlLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRleHRTcGFjaW5nXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJBZnN0YW5kIG1lbGxlbSB0ZWtzdGVyXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiw5hnZXIgYWZzdGFuZGVuIG1lbGxlbSB0ZWduIG9nIG9yZC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbWFnZXNSZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkZqZXJuIGJpbGxlZGVyXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQWxsZSBiaWxsZWRlbGVtZW50ZXIgcMOlIGhqZW1tZXNpZGVuIGVyIHNranVsdGUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGluZUhlaWdodFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTGluamVow7hqZGVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJMaW5qZWjDuGpkZW4gw7hnZXMgZm9yIGh2ZXJ0IHRla3N0ZWxlbWVudCBww6Ugd2Vic2lkZW4uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2F0dXJhdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTcOmdG5pbmdcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJNw6Z0bmluZ2VuIHDDpSBoamVtbWVzaWRlbiDDuGdlcyBlbGxlciBtaW5kc2tlcyBmb3IgYXQgc2lrcmUgYmVkcmUgbMOmc2JhcmhlZC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3VzZUN1cnNvclwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTXVzZW1hcmvDuHJcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJNdXNlbWFya8O4cmVuIGVyIGZvcnN0w7hycmV0IG1lZCBlbiBmYWt0b3IgMyBmb3IgYXQgZsOlIGRlbiBiZWRyZSBpIGZva3VzLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNpdGVTdHJ1Y3R1cmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNpZGVucyBzdHJ1a3R1clwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFsbGUgb3ZlcnNrcmlmdGVyIG9nIGxpbmtzIGVyIGxpc3RldCB1bmRlciBoaW5hbmRlbiBpIHByaW9yaXRlcmV0IHLDpmtrZWbDuGxnZSwgc8OlIGRldCBlciBuZW10IGF0IG5hdmlnZXJlIHJ1bmR0IHDDpSBzaWRlbi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0b29sdGlwc1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVsOmcmt0w7hqc3RpcFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFsbGUgZWxlbWVudGVyLCBkZXIgaGFyIGVuIGB0aXRsZWAtIGVsbGVyIGBsYWJlbGAtYXR0cmlidXQsIHZpc2VyIGV0IHN5bmxpZ3QgdsOmcmt0w7hqc3RpcCwgbsOlciBtYW4gaG9sZGVyIG11c2VuIG92ZXIgZGVtLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlYWRhYmxlVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTMOmc2JhciB0ZWtzdFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkVuIG55IHNrcmlmdHR5cGUgZXIgaW5kbMOmc3QgZm9yIGF0IGfDuHJlIHRla3N0ZW4gbGV0dGVyZSBhdCBsw6ZzZS4gRGVyIGthbiBvZ3PDpSB2w6ZsZ2VzIGVuIHNrcmlmdHR5cGUsIGRlciBlciBzw6ZybGlndCB2ZWxlZ25ldCB0aWwgb3JkYmxpbmRlLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlN0b3AgYW5pbWF0aW9uZXJcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJTw6Z0dGVyIGFsbGUgdmlkZW9lciBvZyBhbmltYXRpb25lciBww6UgcGF1c2UgcMOlIGhlbGUgd2Vic2l0ZXQuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVwb3J0RXJyb3JcIjoge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IFwiUmFwcG9ydGVyIGZlamxcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwiUmFwcG9ydGVyIGVuIGZlamwgbWVkIEFjY2Vzc0Zsb3dcIlxuICAgICAgICB9LFxuICAgICAgICBcIm92ZXJBY2Nlc3NGbG93XCI6e1xuICAgICAgICAgIFwibGFiZWxcIjogXCJPbSBBY2Nlc3MtRmxvd1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiZXRcIjoge1xuICAgICAgXCJhY2Nlc3NGbG93XCI6IHtcbiAgICAgICAgXCJvcGVuU3ltYm9sXCI6IHtcbiAgICAgICAgICBcImxhYmVsXCI6IFwiU2VhZGV0ZSB0ZWdlbWlzZWtzIGF2YWdlIEFjY2Vzc0Zsb3cgbGlnaXDDpMOkc2V0YXZ1c2UgbWVuw7zDvC5cIlxuICAgICAgICB9LFxuXG4gICAgICAgIFwiaGVhZGVyXCI6IHtcbiAgICAgICAgICBcImNsb3NlSWNvblwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTMOkaGl2YWFkZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwibGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiS2VlbCAoe3tsYW5ndWFnZX19KVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJWw7VpbWFsZGFiIEFjY2Vzc0Zsb3cga2FzdXRhamFsaWlkZXNlIGtlZWx0IMO8aGUga2zDtXBzdWdhIG11dXRhLlwiLFxuICAgICAgICAgIFwiaW5wdXRcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk90c2lnZSBzb292aXR1ZCBrZWVsLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF2YWlsYWJsZUxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVmFoZXRhZ2Uga2FzdXRhamFsaWlkZXMge3tsYW5ndWFnZX19IGtlZWxlbGUuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJ0b29sc1wiOiB7XG4gICAgICAgICAgXCJjb250cmFzdFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiS29udHJhc3RcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJLdXZhYiB2ZWViaXNhaWRpIGVyaSBrb250cmFzdGl0YXNlbWV0ZWwuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGlua3NcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxpbmdpZFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlLDtWh1dGFiIGvDtWlraSB2ZWViaWxlaGVsIG9sZXZhaWQgbGlua2UgdsOkcnZpbGlzZWx0LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJpZ2dlclRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlN1dXJlbSB0ZWtzdFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlN1dXJlbmRhYiBraXJqYXN0aWlsaSBwcmFlZ3VzZSBraXJqYXN1dXJ1c2Ugc3VodGVzLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRleHRTcGFjaW5nXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUZWtzdGkgdmFoZWthdWd1c1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlN1dXJlbmRhYiB0w6RoZW3DpHJraWRlIGphIHPDtW5hZGUgdmFoZWxpc3QgcnV1bWkuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW1hZ2VzUmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJQaWx0aWRlIGVlbWFsZGFtaW5lXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiS8O1aWsgdmVlYmlsZWhlIHBpbGRpZWxlbWVuZGlkIG9uIHBlaWRldHVkLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmVIZWlnaHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkpvb25lIGvDtXJndXNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJSaWRhZGUga8O1cmd1c3Qgc3V1cmVuZGF0YWtzZSBpZ2EgdmVlYmlsZWhlIHRla3N0aWVsZW1lbmRpIHB1aHVsLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNhdHVyYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkvDvGxsYXN0dW1pbmVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQYXJlbWEgbG9ldGF2dXNlIHRhZ2FtaXNla3Mgc3V1cmVuZGF0YWtzZSB2w7VpIHbDpGhlbmRhdGFrc2UgdmVlYmlsZWhlIGvDvGxsYXN0dXN0LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdXNlQ3Vyc29yXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJIaWlyZSBvc3V0aVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkhpaXJla3Vyc29yaXQgc3V1cmVuZGF0YWtzZSAzIGtvcmRhLCBldCBzZWUgb2xla3MgcGFyZW1pbmkgZm9va3VzZXMuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2l0ZVN0cnVjdHVyZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTGVoZWvDvGxqZSBzdHJ1a3R1dXJcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJLw7VpayBydWJyaWlnaWQgamEgbGluZ2lkIG9uIGxvZXRsZXR1ZCDDvGtzdGVpc2UgYWxsIHTDpGh0c3VzZSBqw6RyamVrb3JyYXMsIG1pcyBow7VsYnVzdGFiIGxlaGVsIG5hdmlnZWVyaW1pc3QuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidG9vbHRpcHNcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlTDtsO2cmlpc3RhZFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkvDtWlrIGVsZW1lbmRpZCwgbWlsbGVsIG9uIGF0cmlidXV0IFxcXCJwZWFsa2lyaVxcXCIgdsO1aSBcXFwic2lsdFxcXCIsIGt1dmF2YWQgaGlpcmVnYSBuZW5kZSBrb2hhbCBow7VsanVkZXMgbsOkaHRhdmEgdmloamUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVhZGFibGVUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJMb2V0YXYgdGVrc3RcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJUZWtzdGkgcGFyZW1ha3MgbG9ldGF2dXNla3MgbGFhZGl0YWtzZSB1dXMgZm9udC4gVmFsaW1pc2VrcyBvbiBldHRlIG7DpGh0dWQga2Egc3BldHNpYWFsc2VsdCBkw7xzbGVrc2lrbGFzdGVsZSBzb2JpdiBraXJqYXTDvMO8cC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzdG9wQW5pbWF0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdG9wcC1hbmltYXRzaW9vbmlkXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUGVhdGFiIGvDtWlrIHZpZGVvZCBqYSBhbmltYXRzaW9vbmlkIGtvZ3UgdmVlYmlzYWlkaWwuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVwb3J0RXJyb3JcIjoge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IFwiVmVhIHRlYXRhbWluZVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJUZWF0YWdlIHZlYXN0IEFjY2Vzc0Zsb3cnZ2FcIlxuICAgICAgICB9LFxuICAgICAgICBcIm92ZXJBY2Nlc3NGbG93XCI6e1xuICAgICAgICAgIFwibGFiZWxcIjogXCJBY2Nlc3MtRmxvdydzdFwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiZmlcIjoge1xuICAgICAgIFwiYWNjZXNzRmxvd1wiOiB7XG4gICAgICAgIFwib3BlblN5bWJvbFwiOiB7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcIkF2YWEgQWNjZXNzRmxvdy15aHRlZW5zb3BpdnV1c3ZhbGlra28gYXNldHVzdGVuIHRla2VtaXN0w6QgdmFydGVuLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJoZWFkZXJcIjoge1xuICAgICAgICAgIFwiY2xvc2VJY29uXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJMw6RoaWt1dmFcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcImxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIktpZWxpICh7e2xhbmd1YWdlfX0pXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIlZvaXQgdmFpaHRhYSBBY2Nlc3NGbG93LWvDpHl0dMO2bGlpdHR5bcOkbiBraWVsZW4geWhkZWxsw6QgbmFwc2F1dHVrc2VsbGEuXCIsXG4gICAgICAgICAgXCJpbnB1dFwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiRXRzaSBoYWx1YW1hc2kga2llbGkuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXZhaWxhYmxlTGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWYWloZGEga8OkeXR0w7ZsaWl0dHltw6Qge3tsYW5ndWFnZX19LWtpZWxlbGxlLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwidG9vbHNcIjoge1xuICAgICAgICAgIFwiY29udHJhc3RcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIktvbnRyYXN0aVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk7DpHl0dMOkw6QgdmVya2tvc2l2dXN0b24gZXJpIGtvbnRyYXN0aXRhc29pbGxhLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmtzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJMaW5raXRcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJLb3Jvc3RhYSBrYWlra2kgdmVya2tvc2l2dXN0b24gbGlua2l0IHbDpHJpbGxpc2luw6QuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYmlnZ2VyVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU3V1cmVtcGkgdGVrc3RpXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiU3V1cmVudGFhIGZvbnR0aWEgc3VodGVlc3NhIG55a3lpc2VlbiBmb250dGlrb2tvb24uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidGV4dFNwYWNpbmdcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRla3N0aXbDpGxpXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTGlzw6TDpCBtZXJra2llbiBqYSBzYW5vamVuIHbDpGxpc3TDpCB0aWxhYS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbWFnZXNSZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlBvaXN0YSBrdXZhdFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkthaWtraSB2ZXJra29zaXZ1c3RvbiBrdXZhZWxlbWVudGl0IG9uIHBpaWxvdGV0dHUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGluZUhlaWdodFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVmlpdmFuIGtvcmtldXNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJSaXZpa29ya2V1dHRhIGthc3ZhdGV0YWFuIGpva2Fpc2VsbGUgdmVya2tvc2l2dW4gdGVrc3RpZWxlbWVudGlsbGUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2F0dXJhdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU2F0dXJhYXRpb1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlNpdnVzdG9uIHbDpHJpa3lsbMOkaXN5eXR0w6QgbGlzw6R0w6TDpG4gdGFpIHbDpGhlbm5ldMOkw6RuIHBhcmVtbWFuIGx1ZXR0YXZ1dWRlbiB2YXJtaXN0YW1pc2Vrc2kuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW91c2VDdXJzb3JcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkhpaXJlbiBvc29pdGluXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiSGlpcmVuIG9zb2l0aW4gb24gc3V1cmVubmV0dHUgMy1rZXJ0YWlzZWtzaSwgam90dGEgc2Ugb2xpc2kgcGFyZW1taW4gdGFya2VubmV0dHUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2l0ZVN0cnVjdHVyZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU2l2dW4gcmFrZW5uZVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkthaWtraSBvdHNpa290IGphIGxpbmtpdCBvbiBsdWV0ZWx0dSB0w6Rya2V5c2rDpHJqZXN0eWtzZXNzw6QgdG9pc3RlbnNhIGFsYXB1b2xlbGxhLCBqb3RlbiBzaXZ1bGxhIG9uIGhlbHBwbyBuYXZpZ29pZGEuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidG9vbHRpcHNcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlR5w7ZrYWx1dmloamVldFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkthaWtraSBlbGVtZW50aXQsIGpvaWxsYSBvbiBgdGl0bGVgLSB0YWkgYGxhYmVsYC1hdHRyaWJ1dXR0aSwgbsOkeXR0w6R2w6R0IG7DpGt5dsOkbiB0ecO2a2FsdXZpaGplZW4sIGt1biB2aWV0IGhpaXJlbiBoaWlyZW4gbmlpZGVuIHDDpMOkbGxlLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlYWRhYmxlVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTHVldHRhdmEgdGVrc3RpXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVXVzaSBmb250dGkgbGFkYXRhYW4sIGpvdHRhIHRla3N0aSBvbGlzaSBoZWxwb21taW4gbHVldHRhdmlzc2EuIFZhbGl0dGF2YW5hIG9uIG15w7ZzIGVyaXR5aXNlc3RpIGx1a2low6RpcmnDtmlzaWxsZSBzb3BpdmEgZm9udHRpLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlB5c8OkeXTDpCBhbmltYWF0aW90XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUHlzw6R5dHTDpMOkIGthaWtraSB2aWRlb3QgamEgYW5pbWFhdGlvdCBrb2tvIHZlcmtrb3NpdnVzdG9sbGEuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVwb3J0RXJyb3JcIjoge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IFwiSWxtb2l0YSB2aXJoZVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJJbG1vaXRhIHZpcmhlIEFjY2Vzc0Zsb3cnbiBrYW5zc2FcIlxuICAgICAgICB9LFxuICAgICAgICBcIm92ZXJBY2Nlc3NGbG93XCI6e1xuICAgICAgICAgIFwibGFiZWxcIjogXCJUaWV0b2phIEFjY2Vzcy1GbG93J3N0YVwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiZnJcIjoge1xuICAgICAgXCJhY2Nlc3NGbG93XCI6IHtcbiAgICAgICAgXCJvcGVuU3ltYm9sXCI6IHtcbiAgICAgICAgICBcImxhYmVsXCI6IFwiT3V2cmlyIGxlIG1lbnUgZCdhY2Nlc3NpYmlsaXTDqSBkJ0FjY2Vzc0Zsb3cgcG91ciBlZmZlY3R1ZXIgZGVzIHLDqWdsYWdlcy5cIlxuICAgICAgICB9LFxuXG4gICAgICAgIFwiaGVhZGVyXCI6IHtcbiAgICAgICAgICBcImNsb3NlSWNvblwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiRmVybWVyIGxhIHZ1ZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwibGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiTGFuZ3VlICh7e2xhbmd1YWdlfX0pXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIlBlcm1ldCBkZSBjaGFuZ2VyIGxhIGxhbmd1ZSBkZSBsJ2ludGVyZmFjZSBBY2Nlc3NGbG93IGVuIHVuIGNsaWMuXCIsXG4gICAgICAgICAgXCJpbnB1dFwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUmVjaGVyY2hlciBsYSBsYW5ndWUgc291aGFpdMOpZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJhdmFpbGFibGVMYW5ndWFnZXNcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNoYW5nZXIgbGEgbGFuZ3VlIGRlIGwnaW50ZXJmYWNlIHt7bGFuZ3VhZ2V9fS5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcInRvb2xzXCI6IHtcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJDb250cmFzdGVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQcsOpc2VudGUgbGEgcGFnZSB3ZWIgYXZlYyBkaWZmw6lyZW50cyBuaXZlYXV4IGRlIGNvbnRyYXN0ZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsaW5rc1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTGllbnNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJGYWl0IHJlc3NvcnRpciB0b3VzIGxlcyBsaWVucyBkZSBsYSBwYWdlIHdlYiBlbiBjb3VsZXVyLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJpZ2dlclRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRleHRlIHBsdXMgZ3JhbmRcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJBdWdtZW50ZSBsYSB0YWlsbGUgZGUgbGEgcG9saWNlIHBhciByYXBwb3J0IMOgIGxhIHRhaWxsZSBhY3R1ZWxsZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0ZXh0U3BhY2luZ1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRXNwYWNlbWVudCBkdSB0ZXh0ZVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkF1Z21lbnRlIGwnZXNwYWNlbWVudCBlbnRyZSBsZXMgY2FyYWN0w6hyZXMgZXQgbGVzIG1vdHMuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW1hZ2VzUmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdXBwcmltZXIgbGVzIGltYWdlc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlRvdXMgbGVzIMOpbMOpbWVudHMgZCdpbWFnZSBkZSBsYSBwYWdlIHdlYiBzb250IG1hc3F1w6lzLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmVIZWlnaHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkhhdXRldXIgZGUgbGEgbGlnbmVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJMYSBoYXV0ZXVyIGRlIGxhIGxpZ25lIGVzdCBhdWdtZW50w6llIHBvdXIgY2hhcXVlIMOpbMOpbWVudCBkZSB0ZXh0ZSBzdXIgbGEgcGFnZSB3ZWIuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2F0dXJhdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU2F0dXJhdGlvblwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkxhIHNhdHVyYXRpb24gZGUgbGEgcGFnZSB3ZWIgZXN0IGF1Z21lbnTDqWUgb3UgZGltaW51w6llIGFmaW4gZGUgZ2FyYW50aXIgdW5lIG1laWxsZXVyZSBsaXNpYmlsaXTDqS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3VzZUN1cnNvclwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiUG9pbnRldXIgZGUgbGEgc291cmlzXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTGUgcG9pbnRldXIgZGUgbGEgc291cmlzIGVzdCBhZ3JhbmRpIGQndW4gZmFjdGV1ciAzIGFmaW4gZGUgbWlldXggbGUgbWV0dHJlIGVuIMOpdmlkZW5jZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaXRlU3RydWN0dXJlXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdHJ1Y3R1cmUgZGVzIHBhZ2VzXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVG91cyBsZXMgdGl0cmVzIGV0IGxpZW5zIHNvbnQgY2xhc3PDqXMgcGFyIG9yZHJlIGQnaW1wb3J0YW5jZSwgY2UgcXVpIGZhY2lsaXRlIGxhIG5hdmlnYXRpb24gZGFucyBsZSBzaXRlLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRvb2x0aXBzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJJbmZvYnVsbGVzXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVG91cyBsZXMgw6lsw6ltZW50cyBxdWkgcG9zc8OoZGVudCB1biBhdHRyaWJ1dCBgdGl0bGVgIG91IGBsYWJlbGAgYWZmaWNoZW50IHVuZSBpbmZvLWJ1bGxlIHZpc2libGUgYXUgcGFzc2FnZSBkZSBsYSBzb3VyaXMuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVhZGFibGVUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUZXh0ZSBsaXNpYmxlXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUG91ciByZW5kcmUgbGUgdGV4dGUgcGx1cyBsaXNpYmxlLCB1bmUgbm91dmVsbGUgcG9saWNlIGRlIGNhcmFjdMOocmVzIGVzdCBjaGFyZ8OpZS4gVW5lIHBvbGljZSBzcMOpY2lhbGVtZW50IGFkYXB0w6llIGF1eCBkeXNsZXhpcXVlcyBlc3Qgw6lnYWxlbWVudCBwcm9wb3PDqWUgYXUgY2hvaXguXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3RvcEFuaW1hdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQXJyw6p0ZXIgbGVzIGFuaW1hdGlvbnNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJNZXQgZW4gcGF1c2UgdG91dGVzIGxlcyB2aWTDqW9zIGV0IGFuaW1hdGlvbnMgc3VyIGwnZW5zZW1ibGUgZHUgc2l0ZS5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXBvcnRFcnJvclwiOiB7XG4gICAgICAgICAgXCJidXR0b25cIjogXCJTaWduYWxlciB1bmUgZXJyZXVyXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIlNpZ25hbGVyIHVuZSBlcnJldXIgw6AgQWNjZXNzRmxvd1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwib3ZlckFjY2Vzc0Zsb3dcIjp7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcIsOAIHByb3BvcyBkJ0FjY2Vzcy1GbG93XCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJlbFwiOiB7XG4gICAgICBcImFjY2Vzc0Zsb3dcIjoge1xuICAgICAgICBcIm9wZW5TeW1ib2xcIjoge1xuICAgICAgICAgIFwibGFiZWxcIjogXCLOkc69zr/Or86+z4TOtSDPhM6/IM68zrXOvc6/z40gz4DPgc6/z4POss6xz4POuc68z4zPhM63z4TOsc+CIEFjY2Vzc0Zsb3cgzrPOuc6xIM69zrEgz4DPgc6/zrLOtc6vz4TOtSDPg861IM+Bz4XOuM68zq/Pg861zrnPgi5cIlxuICAgICAgICB9LFxuXG4gICAgICAgIFwiaGVhZGVyXCI6IHtcbiAgICAgICAgICBcImNsb3NlSWNvblwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwizprOv869z4TOuc69zq4gzqzPgM6/z4jOt1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwibGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwizpPOu8+Oz4PPg86xICh7e2xhbmd1YWdlfX0pXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIs6jzrHPgiDOtc+AzrnPhM+Bzq3PgM61zrkgzr3OsSDOsc67zrvOrM6+zrXPhM61IM+EzrcgzrPOu8+Oz4PPg86xIM+EzrfPgiDOtM65zrXPgM6xz4bOrs+CIEFjY2Vzc0Zsb3cgzrzOtSDOrc69zrEgzrrOu865zrouXCIsXG4gICAgICAgICAgXCJpbnB1dFwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwizpHOvc6xzrbOt8+Ezq7Pg8+EzrUgz4TOt869IM61z4DOuc64z4XOvM63z4TOriDOs867z47Pg8+DzrEuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXZhaWxhYmxlTGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLOlc69zrHOu867zrHOs86uIM+EzrfPgiDOtM65zrXPgM6xz4bOrs+CIM+Dz4TOtyDOs867z47Pg8+DzrEge3tsYW5ndWFnZX19LlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwidG9vbHNcIjoge1xuICAgICAgICAgIFwiY29udHJhc3RcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIs6Rzr3PhM6vzrjOtc+DzrdcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLOlc68z4bOsc69zq/Ots61zrkgz4TOv869IM65z4PPhM+Mz4TOv8+Azr8gz4POtSDOtM65zrHPhs6/z4HOtc+EzrnOus6sIM61z4DOr8+AzrXOtM6xIM6xzr3PhM6vzrjOtc+DzrfPgi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsaW5rc1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwizqPPjc69zrTOtc+DzrzOv865XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwizpXPgM65z4POt868zrHOr869zrXOuSDPjM67zr/Phc+CIM+Ezr/Phc+CIM+Dz4XOvc60zq3Pg868zr/Phc+CIM+Dz4TOv869IM65z4PPhM+Mz4TOv8+Azr8gzrzOtSDPh8+Bz47OvM6xLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJpZ2dlclRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIs6czrXOs86xzrvPjc+EzrXPgc6/IM66zrXOr868zrXOvc6/XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwizpzOtc6zzrHOu8+Ozr3Otc65IM+EzrcgzrPPgc6xzrzOvM6xz4TOv8+DzrXOuc+Bzqwgz4POtSDPg8+Hzq3Pg863IM68zrUgz4TOvyDPhM+Bzq3Ph86/zr0gzrzOrc6zzrXOuM6/z4IgzrPPgc6xzrzOvM6xz4TOv8+DzrXOuc+BzqzPgi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0ZXh0U3BhY2luZ1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwizpHPgM+Mz4PPhM6xz4POtyDOus61zrnOvM6tzr3Ov8+FXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwizpHPhc6+zqzOvc61zrkgz4TOvyDOtM65zqzPg8+EzrfOvM6xIM68zrXPhM6xzr7PjSDPh86xz4HOsc66z4TOrs+Bz4nOvSDOus6xzrkgzrvOrc6+zrXPic69LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImltYWdlc1JlbW92ZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwizpHPhs6xzq/Pgc61z4POtyDOtc65zrrPjM69z4nOvVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIs6MzrvOsSDPhM6xIM+Dz4TOv865z4fOtc6vzrEgzrXOuc66z4zOvc6xz4Igz4PPhM6/zr0gzrnPg8+Ez4zPhM6/z4DOvyDOtc6vzr3Osc65IM66z4HPhc68zrzOrc69zrEuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGluZUhlaWdodFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwizo7PiM6/z4IgzrPPgc6xzrzOvM6uz4JcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLOpM6/IM+Nz4jOv8+CIM6zz4HOsc68zrzOrs+CIM6xz4XOvs6szr3Otc+EzrHOuSDOs865zrEgzrrOrM64zrUgz4PPhM6/zrnPh861zq/OvyDOus61zrnOvM6tzr3Ov8+FIM+Dz4TOt869IM65z4PPhM6/z4POtc67zq/OtM6xLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNhdHVyYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIs6azr/Pgc61z4POvM+Mz4JcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLOnyDOus6/z4HOtc+DzrzPjM+CIM+Ezr/PhSDOuc+Dz4TPjM+Ezr/PgM6/z4UgzrHPhc6+zqzOvc61z4TOsc65IM6uIM68zrXOuc+Ozr3Otc+EzrHOuSDOs865zrEgzr3OsSDOtc6+zrHPg8+GzrHOu865z4PPhM61zq8gzrrOsc67z43PhM61z4HOtyDOsc69zrHOs869z4nPg865zrzPjM+EzrfPhM6xLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdXNlQ3Vyc29yXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLOlM61zq/Ous+EzrfPgiDPgM6/zr3PhM65zrrOuc6/z41cIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLOnyDOtM61zq/Ous+EzrfPgiDPhM6/z4Ugz4DOv869z4TOuc66zrnOv8+NIM68zrXOs861zrjPjc69zrXPhM6xzrkgzrrOsc+EzqwgMyDPhs6/z4HOrc+CIM6zzrnOsSDOvc6xIM61zq/Ovc6xzrkgzrrOsc67z43PhM61z4HOsSDOtc+Dz4TOuc6xz4POvM6tzr3Ov8+CLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNpdGVTdHJ1Y3R1cmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIs6Uzr/OvM6uIM+DzrXOu86vzrTOsc+CXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwizozOu861z4Igzr/OuSDOtc+AzrnOus61z4bOsc67zq/OtM61z4IgzrrOsc65IM6/zrkgz4PPjc69zrTOtc+DzrzOv865IM+AzrHPgc6xz4TOr864zrXOvc+EzrHOuSDOvyDOrc69zrHPgiDOus6sz4TPiSDOsc+Az4wgz4TOv869IM6szrvOu86/IM68zrUgz4POtc65z4HOrCDPg8+Azr/Phc60zrHOuc+Mz4TOt8+EzrHPgiwgzrTOuc61z4XOus6/zrvPjc69zr/Ovc+EzrHPgiDPhM63zr0gz4DOu86/zq7Os863z4POtyDPg8+Ezrcgz4POtc67zq/OtM6xLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRvb2x0aXBzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLOo8+FzrzOss6/z4XOu86tz4IgzrXPgc6zzrHOu861zq/Pic69XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwizozOu86xIM+EzrEgz4PPhM6/zrnPh861zq/OsSDPgM6/z4Ugzq3Ph86/z4XOvSDOrc69zrEgz4fOsc+BzrHOus+EzrfPgc65z4PPhM65zrrPjCBcXFwiz4TOr8+EzrvOv8+CXFxcIiDOriBcXFwizrXPhM65zrrOrc+EzrFcXFwiIM61zrzPhs6xzr3Or862zr/Phc69IM68zrnOsSDOv8+BzrHPhM6uIM+Dz4XOvM6yzr/Phc67zq4gzrXPgc6zzrHOu861zq/Pic69IM+Mz4TOsc69IM+AzrXPgc69zqzPhM61IM6xz4DPjCDPgM6szr3PiSDPhM6/z4XPgiDOvM61IM+Ezr8gz4DOv869z4TOr866zrkuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVhZGFibGVUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLOkc69zrHOs869z47Pg865zrzOvyDOus61zq/OvM61zr3Ov1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIs6czrnOsSDOvc6tzrEgzrPPgc6xzrzOvM6xz4TOv8+DzrXOuc+Bzqwgz4bOv8+Bz4TPjs69zrXPhM6xzrkgzrPOuc6xIM69zrEgzrrOrM69zrXOuSDPhM6/IM66zrXOr868zrXOvc6/IM+AzrnOvyDOtc+FzrHOvc6szrPOvc+Jz4PPhM6/LiDOoM6xz4HOrc+HzrXPhM6xzrkgzrXPgM6vz4POt8+CIM+Az4HOv8+CIM61z4DOuc67zr/Os86uIM68zrnOsSDOs8+BzrHOvM68zrHPhM6/z4POtc65z4HOrCDOtc65zrTOuc66zqwgzrrOsc+EzqzOu867zrfOu863IM6zzrnOsSDOtM+Fz4POu861zrrPhM65zrrOv8+Nz4IuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3RvcEFuaW1hdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwizpTOuc6xzrrOv8+Azq4gzrrOuc69zr/Pjc68zrXOvc+Jzr0gz4PPh861zrTOr8+Jzr1cIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLOlM65zrHOus+Mz4DPhM61zrkgz4zOu86xIM+EzrEgzrLOr869z4TOtc6/IM66zrHOuSDPhM6xIM66zrnOvc6/z43OvM61zr3OsSDPg8+Hzq3OtM65zrEgz4POtSDOv867z4zOus67zrfPgc6/IM+Ezr/OvSDOuc+Dz4TPjM+Ezr/PgM6/LlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlcG9ydEVycm9yXCI6IHtcbiAgICAgICAgICBcImJ1dHRvblwiOiBcIs6Rzr3Osc+Gzr/Pgc6sIM+Dz4bOrM67zrzOsc+Ezr/PglwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCLOkc69zrHPhs6/z4HOrCDPg8+GzqzOu868zrHPhM6/z4IgzrzOtSDPhM6/IEFjY2Vzc0Zsb3dcIlxuICAgICAgICB9LFxuICAgICAgICBcIm92ZXJBY2Nlc3NGbG93XCI6e1xuICAgICAgICAgIFwibGFiZWxcIjogXCLOo8+HzrXPhM65zrrOrCDOvM61IM+EzrfOvSBBY2Nlc3MtRmxvd1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiaWRcIjoge1xuICAgICAgXCJhY2Nlc3NGbG93XCI6IHtcbiAgICAgICAgXCJvcGVuU3ltYm9sXCI6IHtcbiAgICAgICAgICBcImxhYmVsXCI6IFwiQnVrYSBtZW51IGFrc2VzaWJpbGl0YXMgQWNjZXNzRmxvdyB1bnR1ayBtZW1idWF0IHBlbmdhdHVyYW4uXCJcbiAgICAgICAgfSxcblxuICAgICAgICBcImhlYWRlclwiOiB7XG4gICAgICAgICAgXCJjbG9zZUljb25cIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlRhbXBpbGFuIGRla2F0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJsYW5ndWFnZXNcIjoge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJCYWhhc2EgKHt7bGFuZ3VhZ2V9fSlcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwiTWVtdW5na2lua2FuIEFuZGEgbWVuZ3ViYWggYmFoYXNhIGFudGFybXVrYSBBY2Nlc3NGbG93IGRlbmdhbiBzYXR1IGtsaWsuXCIsXG4gICAgICAgICAgXCJpbnB1dFwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQ2FyaSBiYWhhc2EgeWFuZyBkaWluZ2lua2FuLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF2YWlsYWJsZUxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTWVuZ2FsaWhrYW4gYW50YXJtdWthIGtlIGJhaGFzYSB7e2xhbmd1YWdlfX0uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJ0b29sc1wiOiB7XG4gICAgICAgICAgXCJjb250cmFzdFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiS29udHJhc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk1lbmFtcGlsa2FuIHNpdHVzIHdlYiBkYWxhbSB0aW5na2F0IGtvbnRyYXMgeWFuZyBiZXJiZWRhLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmtzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUYXV0YW5cIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJNZW55b3JvdCBzZW11YSB0YXV0YW4gZGkgc2l0dXMgd2ViIGRhbGFtIHdhcm5hLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJpZ2dlclRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRla3MgeWFuZyBsZWJpaCBiZXNhclwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk1lbXBlcmJlc2FyIGZvbnQgcmVsYXRpZiB0ZXJoYWRhcCB1a3VyYW4gZm9udCBzYWF0IGluaS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0ZXh0U3BhY2luZ1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU3Bhc2kgdGVrc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk1lbmFtYmFoIHNwYXNpIGRpIGFudGFyYSBrYXJha3RlciBkYW4ga2F0YS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbWFnZXNSZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk1lbmdoYXB1cyBnYW1iYXJcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJTZW11YSBlbGVtZW4gZ2FtYmFyIHBhZGEgc2l0dXMgd2ViIGRpc2VtYnVueWlrYW4uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGluZUhlaWdodFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGluZ2dpIGdhcmlzXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVGluZ2dpIGJhcmlzIGRpdGluZ2thdGthbiB1bnR1ayBzZXRpYXAgZWxlbWVuIHRla3MgcGFkYSBoYWxhbWFuIHdlYi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJLZWplbnVoYW5cIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJUaW5na2F0IGtlamVudWhhbiBzaXR1cyB3ZWIgZGl0aW5na2F0a2FuIGF0YXUgZGlrdXJhbmdpIHVudHVrIG1lbWFzdGlrYW4ga2V0ZXJiYWNhYW4geWFuZyBsZWJpaCBiYWlrLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdXNlQ3Vyc29yXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJQZW51bmp1ayBtb3VzZVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBlbnVuanVrIG1vdXNlIGRpcGVyYmVzYXIgZGVuZ2FuIGZha3RvciAzIGFnYXIgbGViaWggYmFpayBkYWxhbSBmb2t1cy5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaXRlU3RydWN0dXJlXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdHJ1a3R1ciBoYWxhbWFuXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiU2VtdWEganVkdWwgZGFuIHRhdXRhbiBkaWNhbnR1bWthbiBzYXR1IGRpIGJhd2FoIHlhbmcgbGFpbiBiZXJkYXNhcmthbiB1cnV0YW4ga2VwZW50aW5nYW5ueWEsIHNlaGluZ2dhIG1lbXVkYWhrYW4gdW50dWsgbWVuYXZpZ2FzaSBoYWxhbWFuLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRvb2x0aXBzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJLZXRlcmFuZ2FuIGFsYXRcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJTZW11YSBlbGVtZW4geWFuZyBtZW1pbGlraSBhdHJpYnV0IGB0aXRsZWAgYXRhdSBgbGFiZWxgIGFrYW4gbWVuYW1waWxrYW4ga2V0ZXJhbmdhbiBhbGF0IHlhbmcgZGFwYXQgZGlsaWhhdCBzYWF0IEFuZGEgbWVuZ2FyYWhrYW4gbW91c2Uga2UgZWxlbWVuIHRlcnNlYnV0LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlYWRhYmxlVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGVrcyB5YW5nIGRhcGF0IGRpYmFjYVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkZvbnQgYmFydSBkaW11YXQgdW50dWsgbWVtYnVhdCB0ZWtzIGxlYmloIG11ZGFoIGRpYmFjYS4gRm9udCB5YW5nIHNlY2FyYSBraHVzdXMgY29jb2sgdW50dWsgcGVuZGVyaXRhIGRpc2xla3NpYSBqdWdhIGRpc2VkaWFrYW4gdW50dWsgZGlwaWxpaC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzdG9wQW5pbWF0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJNZW5naGVudGlrYW4gYW5pbWFzaVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk1lbmplZGEgc2VtdWEgdmlkZW8gZGFuIGFuaW1hc2kgZGkgc2VsdXJ1aCBzaXR1cyB3ZWIuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVwb3J0RXJyb3JcIjoge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IFwiTGFwb3JrYW4ga2VzYWxhaGFuXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIk1lbGFwb3JrYW4ga2VzYWxhaGFuIGRlbmdhbiBBY2Nlc3NGbG93XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvdmVyQWNjZXNzRmxvd1wiOntcbiAgICAgICAgICBcImxhYmVsXCI6IFwiVGVudGFuZyBBbGlyYW4gQWtzZXNcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcIml0XCI6IHtcbiAgICAgIFwiYWNjZXNzRmxvd1wiOiB7XG4gICAgICAgIFwib3BlblN5bWJvbFwiOiB7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcIkFwcmlyZSBpbCBtZW51IEFjY2Vzc0Zsb3cgcGVyIGVmZmV0dHVhcmUgbGUgaW1wb3N0YXppb25pLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJoZWFkZXJcIjoge1xuICAgICAgICAgIFwiY2xvc2VJY29uXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWaXN0YSBkYSB2aWNpbm9cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcImxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIkxpbmd1YSAoe3tsYW5ndWFnZX19KVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJQZXJtZXR0ZSBkaSBjYW1iaWFyZSBsYSBsaW5ndWEgZGVsbCdpbnRlcmZhY2NpYSBkaSBBY2Nlc3NGbG93IGNvbiB1biBzb2xvIGNsaWMuXCIsXG4gICAgICAgICAgXCJpbnB1dFwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQ2VyY2FyZSBsYSBsaW5ndWEgZGVzaWRlcmF0YS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJhdmFpbGFibGVMYW5ndWFnZXNcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBhc3NhIGwnaW50ZXJmYWNjaWEgYWxsYSBsaW5ndWEge3tsYW5ndWFnZX19LlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwidG9vbHNcIjoge1xuICAgICAgICAgIFwiY29udHJhc3RcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbnRyYXN0b1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlZpc3VhbGl6emEgaWwgc2l0byB3ZWIgY29uIGRpdmVyc2kgbGl2ZWxsaSBkaSBjb250cmFzdG8uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGlua3NcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbGxlZ2FtZW50aVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkV2aWRlbnppYSBhIGNvbG9yaSB0dXR0aSBpIGxpbmsgZGVsIHNpdG8gd2ViLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJpZ2dlclRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRlc3RvIHBpw7kgZ3JhbmRlXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiSW5ncmFuZGlzY2UgaWwgY2FyYXR0ZXJlIHJpc3BldHRvIGFsbGEgZGltZW5zaW9uZSBjb3JyZW50ZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0ZXh0U3BhY2luZ1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU3BhemlhdHVyYSBkZWwgdGVzdG9cIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJBdW1lbnRhIGxvIHNwYXppbyB0cmEgaSBjYXJhdHRlcmkgZSBsZSBwYXJvbGUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW1hZ2VzUmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJSaW11b3ZlcmUgbGUgaW1tYWdpbmlcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJUdXR0aSBnbGkgZWxlbWVudGkgZGkgaW1tYWdpbmUgZGVsIHNpdG8gd2ViIHNvbm8gbmFzY29zdGkuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGluZUhlaWdodFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQWx0ZXp6YSBkZWxsYSBsaW5lYVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkwnYWx0ZXp6YSBkZWxsYSBsaW5lYSB2aWVuZSBhdW1lbnRhdGEgcGVyIG9nbmkgZWxlbWVudG8gZGkgdGVzdG8gZGVsbGEgcGFnaW5hIHdlYi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTYXR1cmF6aW9uZVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkxhIHNhdHVyYXppb25lIGRlbCBzaXRvIHdlYiB2aWVuZSBhdW1lbnRhdGEgbyBkaW1pbnVpdGEgcGVyIGdhcmFudGlyZSB1bmEgbWlnbGlvcmUgbGVnZ2liaWxpdMOgLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdXNlQ3Vyc29yXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJQdW50YXRvcmUgZGVsIG1vdXNlXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiSWwgcHVudGF0b3JlIGRlbCBtb3VzZSB2aWVuZSBpbmdyYW5kaXRvIGRpIHVuIGZhdHRvcmUgMyBwZXIgcG90ZXJsbyBtZXR0ZXJlIG1lZ2xpbyBhIGZ1b2NvLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNpdGVTdHJ1Y3R1cmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlN0cnV0dHVyYSBkZWxsYSBwYWdpbmFcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJUdXR0aSBpIHRpdG9saSBlIGkgbGluayBzb25vIGVsZW5jYXRpIHVubyBzb3R0byBsJ2FsdHJvIGluIG9yZGluZSBkaSBpbXBvcnRhbnphLCBwZXIgZmFjaWxpdGFyZSBsYSBuYXZpZ2F6aW9uZSBuZWxsYSBwYWdpbmEuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidG9vbHRpcHNcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlN1Z2dlcmltZW50aVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlR1dHRpIGdsaSBlbGVtZW50aSBjaGUgaGFubm8gdW4gYXR0cmlidXRvIGB0aXRsZWAgbyBgbGFiZWxgIHZpc3VhbGl6emFubyB1biB0b29sdGlwIHZpc2liaWxlIHF1YW5kbyBjaSBzaSBwYXNzYSBzb3ByYSBjb24gaWwgbW91c2UuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVhZGFibGVUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUZXN0byBsZWdnaWJpbGVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWaWVuZSBjYXJpY2F0byB1biBudW92byBmb250IHBlciBmYWNpbGl0YXJlIGxhIGxldHR1cmEgZGVsIHRlc3RvLiDDiCBwb3NzaWJpbGUgc2VsZXppb25hcmUgYW5jaGUgdW4gZm9udCBwYXJ0aWNvbGFybWVudGUgYWRhdHRvIGFpIGRpc2xlc3NpY2kuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3RvcEFuaW1hdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiSW50ZXJyb21wZXJlIGxlIGFuaW1hemlvbmlcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJNZXR0ZSBpbiBwYXVzYSB0dXR0aSBpIHZpZGVvIGUgbGUgYW5pbWF6aW9uaSBkZWxsJ2ludGVybyBzaXRvIHdlYi5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXBvcnRFcnJvclwiOiB7XG4gICAgICAgICAgXCJidXR0b25cIjogXCJTZWduYWxhIHVuIGVycm9yZVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJTZWduYWxhcmUgdW4gZXJyb3JlIGNvbiBBY2Nlc3NGbG93XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvdmVyQWNjZXNzRmxvd1wiOntcbiAgICAgICAgICBcImxhYmVsXCI6IFwiSW5mb3JtYXppb25pIHN1IEFjY2Vzcy1GbG93XCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJqYVwiOiB7XG4gICAgICBcImFjY2Vzc0Zsb3dcIjoge1xuICAgICAgICBcIm9wZW5TeW1ib2xcIjoge1xuICAgICAgICAgIFwibGFiZWxcIjogXCJBY2Nlc3NGbG9344Ki44Kv44K744K344OT44Oq44OG44Kj44Oh44OL44Ol44O844KS6ZaL44GN44CB6Kit5a6a44KS6KGM44GE44G+44GZ44CCXCJcbiAgICAgICAgfSxcblxuICAgICAgICBcImhlYWRlclwiOiB7XG4gICAgICAgICAgXCJjbG9zZUljb25cIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuOCr+ODreODvOOCuuODk+ODpeODvFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwibGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwi6KiA6KqeICh7e2xhbmd1YWdlfX0pXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIkFjY2Vzc0Zsb3fjgqTjg7Pjgr/jg7zjg5Xjgqfjg7zjgrnjga7oqIDoqp7jgpLjg6/jg7Pjgq/jg6rjg4Pjgq/jgaflpInmm7TjgafjgY3jgb7jgZnjgIJcIixcbiAgICAgICAgICBcImlucHV0XCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLluIzmnJvjga7oqIDoqp7jgpLmpJzntKLjgZfjgb7jgZnjgIJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJhdmFpbGFibGVMYW5ndWFnZXNcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuOCpOODs+OCv+ODvOODleOCp+OCpOOCueOCkiB7e2xhbmd1YWdlfX0g6KiA6Kqe44Gr5YiH44KK5pu/44GI44KL44CCXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJ0b29sc1wiOiB7XG4gICAgICAgICAgXCJjb250cmFzdFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi44Kz44Oz44OI44Op44K544OIXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi55Ww44Gq44KL44Kz44Oz44OI44Op44K544OI44Os44OZ44Or44Gn44Km44Kn44OW44K144Kk44OI44KS6KGo56S644GX44G+44GZ44CCXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGlua3NcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuODquODs+OCr1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuOCpuOCp+ODluOCteOCpOODiOS4iuOBruOBmeOBueOBpuOBruODquODs+OCr+OCkuOCq+ODqeODvOOBp+ODj+OCpOODqeOCpOODiOOAglwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJpZ2dlclRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuaLoeWkp+ODhuOCreOCueODiFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuePvuWcqOOBruODleOCqeODs+ODiOOCteOCpOOCuuOBq+WvvuOBl+OBpuebuOWvvueahOOBq+ODleOCqeODs+ODiOOCkuaLoeWkp+OBmeOCi+OAglwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRleHRTcGFjaW5nXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLjg4bjgq3jgrnjg4jplpPpmpRcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLmloflrZfjgajljZjoqp7jga7plpPpmpTjgpLluoPjgZLjgb7jgZnjgIJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbWFnZXNSZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIueUu+WDj+OCkuWJiumZpFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuOCpuOCp+ODluOCteOCpOODiOS4iuOBruOBmeOBueOBpuOBrueUu+WDj+imgee0oOOBjOmdnuihqOekuuOBq+OBquOCiuOBvuOBmeOAglwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmVIZWlnaHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuihjOOBrumrmOOBlVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuOCpuOCp+ODluOCteOCpOODiOOBruOBmeOBueOBpuOBruODhuOCreOCueODiOimgee0oOOBruihjOOBrumrmOOBleOBjOWil+WKoOOBl+OBvuOBmeOAglwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNhdHVyYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuW9qeW6plwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuOCpuOCp+ODluOCteOCpOODiOOBruW9qeW6puOCkuWil+a4m+OBl+OBpuOAgeOCiOOCiuiqreOBv+OChOOBmeOBj+OBl+OBvuOBmeOAglwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdXNlQ3Vyc29yXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLjg57jgqbjgrnjgqvjg7zjgr3jg6tcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLjg57jgqbjgrnjgqvjg7zjgr3jg6vjgpIz5YCN44Gr5ouh5aSn44GX44Gm44CB44KI44KK54Sm54K544KS5ZCI44KP44Gb44KE44GZ44GP44GX44G+44GZ44CCXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2l0ZVN0cnVjdHVyZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi44K144Kk44OI5qeL6YCgXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi44GZ44G544Gm44Gu6KaL5Ye644GX44Go44Oq44Oz44Kv44GM6YeN6KaB5bqm44Gu6aCG44Gr5Lim44G544KJ44KM44Gm44GE44KL44Gf44KB44CB44K144Kk44OI5YaF44KS57Ch5Y2Y44Gr56e75YuV44Gn44GN44G+44GZ44CCXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidG9vbHRpcHNcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuODhOODvOODq+ODgeODg+ODl1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuOAjHRpdGxl44CN44G+44Gf44Gv44CMbGFiZWzjgI3lsZ7mgKfjgpLmjIHjgaTjgZnjgbnjgabjga7opoHntKDjgavjga/jgIHjg57jgqbjgrnjgpLph43jga3jgovjgajooajnpLrjgZXjgozjgovjg4Tjg7zjg6vjg4Hjg4Pjg5fjgYzooajnpLrjgZXjgozjgb7jgZnjgIJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWFkYWJsZVRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuiqreOBv+OChOOBmeOBhOODhuOCreOCueODiFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuODhuOCreOCueODiOOCkuiqreOBv+OChOOBmeOBj+OBmeOCi+OBn+OCgeOBq+aWsOOBl+OBhOODleOCqeODs+ODiOOBjOiqreOBv+i+vOOBvuOCjOOBvuOBmeOAguOBvuOBn+OAgeeJueOBq+iqreWtl+manOWus+iAheWQkeOBkeOBruODleOCqeODs+ODiOOCgumBuOaKnuOBp+OBjeOBvuOBmeOAglwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuOCouODi+ODoeODvOOCt+ODp+ODs+OCkuWBnOatolwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuOCteOCpOODiOWFqOS9k+OBruOBmeOBueOBpuOBruODk+ODh+OCquOBqOOCouODi+ODoeODvOOCt+ODp+ODs+OCkuS4gOaZguWBnOatouOBl+OBvuOBmeOAglwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlcG9ydEVycm9yXCI6IHtcbiAgICAgICAgICBcImJ1dHRvblwiOiBcIuOCqOODqeODvOOCkuWgseWRilwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJBY2Nlc3NGbG9344Gn44Ko44Op44O844KS5aCx5ZGKXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvdmVyQWNjZXNzRmxvd1wiOntcbiAgICAgICAgICBcImxhYmVsXCI6IFwiQWNjZXNzLUZsb3fjgavjgaTjgYTjgaZcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcImtvXCI6IHtcbiAgICAgIFwiYWNjZXNzRmxvd1wiOiB7XG4gICAgICAgIFwib3BlblN5bWJvbFwiOiB7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcIkFjY2Vzc0Zsb3cg7KCR6re87ISxIOuplOuJtOulvCDsl7TslrQg7ISk7KCV7ZWp64uI64ukLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJoZWFkZXJcIjoge1xuICAgICAgICAgIFwiY2xvc2VJY29uXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLqt7zsoJEg67O06riwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJsYW5ndWFnZXNcIjoge1xuICAgICAgICAgIFwidGl0bGVcIjogXCLslrjslrQgKHt7bGFuZ3VhZ2V9fSlcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwi7ZWcIOuyiOydmCDtgbTrpq3snLzroZwgQWNjZXNzRmxvdyDsnbjthLDtjpjsnbTsiqQg7Ja47Ja066W8IOuzgOqyve2VoCDsiJgg7J6I7Iq164uI64ukLlwiLFxuICAgICAgICAgIFwiaW5wdXRcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuybkO2VmOuKlCDslrjslrTrpbwg6rKA7IOJ7ZWp64uI64ukLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF2YWlsYWJsZUxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi7J247YSw7Y6Y7J207Iqk66W8IHt7bGFuZ3VhZ2V9fSDslrjslrTroZwg67OA6rK97ZWp64uI64ukLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwidG9vbHNcIjoge1xuICAgICAgICAgIFwiY29udHJhc3RcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuuMgOu5hFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuuLpOyWke2VnCDrjIDruYQg7IiY7KSA7Jy866GcIOybuSDsgqzsnbTtirjrpbwg7ZGc7Iuc7ZWp64uI64ukLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmtzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLrp4HtgaxcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLsm7kg7IKs7J207Yq47J2YIOuqqOuToCDrp4Htgazrpbwg7IOJ7IOB7Jy866GcIOqwleyhsO2VqeuLiOuLpC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJiaWdnZXJUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLtgazqsowg67O06riwXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi7ZiE7J6sIOq4gOq8tCDtgazquLDsl5Ag67mE7ZW0IOq4gOq8tOydhCDtmZXrjIDtlanri4jri6QuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidGV4dFNwYWNpbmdcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIu2FjeyKpO2KuCDqsITqsqlcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLrrLjsnpDsmYAg64uo7Ja0IOyCrOydtOydmCDqsITqsqnsnYQg64ST7Z6Z64uI64ukLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImltYWdlc1JlbW92ZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi7J2066+47KeAIOygnOqxsFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuybuSDsgqzsnbTtirjsnZgg66qo65OgIOydtOuvuOyngCDsmpTshozqsIAg7Iio6rKo7KeR64uI64ukLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmVIZWlnaHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuykhCDrhpLsnbRcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLsm7kg7IKs7J207Yq47J2YIOuqqOuToCDthY3siqTtirgg7JqU7IaM7JeQIOuMgO2VtCDspIQg64aS7J206rCAIOymneqwgO2VqeuLiOuLpC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLssYTrj4RcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLsm7kg7IKs7J207Yq47J2YIOyxhOuPhOulvCDrhpLsnbTqsbDrgpgg64Ku7LaU7Ja0IOuNlCDrgpjsnYAg6rCA64+F7ISx7J2EIOuztOyepe2VqeuLiOuLpC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3VzZUN1cnNvclwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi66eI7Jqw7IqkIOy7pOyEnFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuuniOyasOyKpCDsu6TshJzrpbwgM+uwsOuhnCDtmZXrjIDtlZjsl6wg642UIOyemCDstIjsoJDsnYQg66ee7LacIOyImCDsnojsirXri4jri6QuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2l0ZVN0cnVjdHVyZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi7IKs7J207Yq4IOq1rOyhsFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIuuqqOuToCDsoJzrqqnqs7wg66eB7YGs6rCAIOykkeyalOuPhCDsiJzsnLzroZwg64KY7Je065CY7Ja0IOyeiOyWtCDsgqzsnbTtirgg64K07JeQ7IScIOyJveqyjCDtg5Dsg4ntlaAg7IiYIOyeiOyKteuLiOuLpC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0b29sdGlwc1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi7Yi07YyBXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiYHRpdGxlYCDrmJDripQgYGxhYmVsYCDsho3shLHsnbQg7J6I64qUIOuqqOuToCDsmpTshozripQg66eI7Jqw7Iqk66W8IOyYrOumrOuptCDtiLTtjIHsnbQg7ZGc7Iuc65Cp64uI64ukLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlYWRhYmxlVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi6rCA64+F7ISxIOyeiOuKlCDthY3siqTtirhcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLthY3siqTtirjrpbwg642UIOyJveqyjCDsnb3snYQg7IiYIOyeiOuPhOuhnSDsg4jroZzsmrQg6riA6ry07J20IOuhnOuTnOuQqeuLiOuLpC4g65SU7Iqk66CJ7Iuc7JWEIO2ZmOyekOyXkOqyjCDsoIHtlantlZwg6riA6ry064+EIOyEoO2Dne2VoCDsiJgg7J6I7Iq164uI64ukLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIuyVoOuLiOuplOydtOyFmCDspJHsp4BcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLsgqzsnbTtirgg7KCE7LK07J2YIOuqqOuToCDruYTrlJTsmKTsmYAg7JWg64uI66mU7J207IWY7J2EIOydvOyLnCDspJHsp4Dtlanri4jri6QuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVwb3J0RXJyb3JcIjoge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IFwi7Jik66WYIOyLoOqzoFwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJBY2Nlc3NGbG937JmAIOyYpOulmCDsi6Dqs6BcIlxuICAgICAgICB9LFxuICAgICAgICBcIm92ZXJBY2Nlc3NGbG93XCI6e1xuICAgICAgICAgIFwibGFiZWxcIjogXCJBY2Nlc3MtRmxvdyDsoJXrs7RcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcImx2XCI6IHtcbiAgICAgIFwiYWNjZXNzRmxvd1wiOiB7XG4gICAgICAgIFwib3BlblN5bWJvbFwiOiB7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcIkF0dmVyaWV0IEFjY2Vzc0Zsb3cgcGllZWphbcSrYmFzIGl6dsSTbG5pLCBsYWkgdmVpa3R1IGllc3RhdMSranVtdXMuXCJcbiAgICAgICAgfSxcblxuICAgICAgICBcImhlYWRlclwiOiB7XG4gICAgICAgICAgXCJjbG9zZUljb25cIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlR1dmEgc2thdHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcImxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIlZhbG9kYSAoe3tsYW5ndWFnZX19KVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCLEu2F1aiB2aWVuxIEga2xpa8WhxLfEqyBtYWluxKt0IEFjY2Vzc0Zsb3cgc2Fza2FybmVzIHZhbG9kdS5cIixcbiAgICAgICAgICBcImlucHV0XCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJNZWtsxJN0IHbEk2xhbW8gdmFsb2R1LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF2YWlsYWJsZUxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUMSBcnNsxJNkemlldCBzYXNrYXJuaSB1eiB7e2xhbmd1YWdlfX0gdmFsb2R1LlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwidG9vbHNcIjoge1xuICAgICAgICAgIFwiY29udHJhc3RcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIktvbnRyYXN0c1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBhcsSBZGEgdMSrbWVrxLxhIHZpZXRuaSBhciBkYcW+xIFkaWVtIGtvbnRyYXN0YSBsxKttZcWGaWVtLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmtzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTYWl0ZXNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJJemNlxLwgdmlzYXMgdMSrbWVrxLxhIHZpZXRuZXMgc2FpdGVzIGFyIGtyxIFzdS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJiaWdnZXJUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJMaWVsxIFrcyB0ZWtzdHNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQYWxpZWxpbmEgZm9udHUgYXR0aWVjxKtixIEgcHJldCBwYcWhcmVpesSTam8gZm9udGEgbGllbHVtdS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0ZXh0U3BhY2luZ1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGVrc3RhIGF0c3RhcnBlXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUGFsaWVsaW5hIGF0c3RhcnBpIHN0YXJwIHJha3N0esSrbcSTbSB1biB2xIFyZGllbS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbWFnZXNSZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk5vxYZlbXQgYXR0xJNsdXNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWaXNpIHTEq21la8S8YSB2aWV0bmVzIGF0dMSTbGkgaXIgcGFzbMSTcHRpLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmVIZWlnaHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlJpbmRhcyBhdWdzdHVtc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlJpbmRhcyBhdWdzdHVtcyB0aWVrIHBhbGllbGluxIF0cyBrYXRyYW0gdMSrbWVrxLxhIHZpZXRuZXMgdGVrc3RhIGVsZW1lbnRhbS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJQaWVzxIF0aW7EgWp1bXNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJUxKttZWvEvGEgdmlldG5lcyBwaWVzxIF0aW7EgWp1bXMgdGllayBwYWxpZWxpbsSBdHMgdmFpIHNhbWF6aW7EgXRzLCBsYWkgbm9kcm/FoWluxIF0dSBsYWLEgWt1IGxhc8SBbcSrYnUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW91c2VDdXJzb3JcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlBlbGVzIGt1cnNvcnNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQZWxlcyBrdXJzb3JzIHRpZWsgcGFsaWVsaW7EgXRzIDMgcmVpemVzLCBsYWkgdG8gYsWrdHUgdmllZ2zEgWsgaXpjZWx0LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNpdGVTdHJ1Y3R1cmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlZpZXRuZXMgc3RydWt0xatyYVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlZpc2kgdmlyc3Jha3N0aSB1biBzYWl0ZXMgaXIgdXpza2FpdMSrdGkgdmllbnMgemVtIG90cmEgc3ZhcsSrZ3VtYSBzZWPEq2LEgSwgdMSBZMSTasSBZGkgdmllZ2xpIG5hdmlnxJNqb3QgdmlldG7Eky5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0b29sdGlwc1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiUsSra2EgcGFkb21pXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVmlzaSBlbGVtZW50aSwga2FtIGlyIGB0aXRsZWAgdmFpIGBsYWJlbGAgYXRyaWLFq3RzLCBwYXLEgWRhIHJlZHphbXUgcsSra2EgcGFkb21pLCBrYWQgdmlyesSBdGllcyBhciBwZWxlcyBrdXJzb3J1IHV6IHRpZW0uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVhZGFibGVUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJMYXPEgW1zIHRla3N0c1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlRpZWsgaWVsxIFkxJN0cyBqYXVucyBmb250cywgbGFpIHRla3N0cyBixat0dSB2aWVnbMSBayBsYXPEgW1zLiBJenbEk2zEk3RpZXMgdmFyIGFyxKsgZm9udHUsIGthcyDEq3BhxaFpIHBpZW3Ek3JvdHMgZGlzbGVrc2lqYXMgcGFjaWVudGllbS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzdG9wQW5pbWF0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJQxIFydHJhdWt0IGFuaW3EgWNpamFzXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUGF1esSTIHZpc3VzIHZpZGVvIHVuIGFuaW3EgWNpamFzIHZpc8SBIHTEq21la8S8YSB2aWV0bsSTLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlcG9ydEVycm9yXCI6IHtcbiAgICAgICAgICBcImJ1dHRvblwiOiBcIlppxYZvdCBwYXIga8S8xatkdVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJaacWGb3QgcGFyIGvEvMWrZHUgYXIgQWNjZXNzRmxvd1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwib3ZlckFjY2Vzc0Zsb3dcIjp7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcIlBhciBBY2Nlc3MtRmxvd1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwibHRcIjoge1xuICAgICAgXCJhY2Nlc3NGbG93XCI6IHtcbiAgICAgICAgXCJvcGVuU3ltYm9sXCI6IHtcbiAgICAgICAgICBcImxhYmVsXCI6IFwiQXRpZGFyeWtpdGUgXFxcIkFjY2Vzc0Zsb3dcXFwiIHByaWVpbmFtdW1vIG1lbml1IGlyIGF0bGlraXRlIG51c3RhdHltdXMuXCJcbiAgICAgICAgfSxcblxuICAgICAgICBcImhlYWRlclwiOiB7XG4gICAgICAgICAgXCJjbG9zZUljb25cIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlZhaXpkYXMgacWhIGFydGlcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcImxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIkthbGJhICh7e2xhbmd1YWdlfX0pXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIkxlaWTFvmlhIHZpZW51IHBhc3BhdWRpbXUgcGFrZWlzdGkgXFxcIkFjY2Vzc0Zsb3dcXFwiIHPEhXNham9zIGthbGLEhS5cIixcbiAgICAgICAgICBcImlucHV0XCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJJZcWha29raXRlIG5vcmltb3Mga2FsYm9zLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF2YWlsYWJsZUxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUGVyanVua2l0ZSBzxIVzYWrEhSDEryB7e2xhbmd1YWdlfX0ga2FsYsSFLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwidG9vbHNcIjoge1xuICAgICAgICAgIFwiY29udHJhc3RcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIktvbnRyYXN0YXNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJSb2R5dGkgc3ZldGFpbsSZIHN1IHNraXJ0aW5nYWlzIGtvbnRyYXN0byBseWdpYWlzLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmtzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJOdW9yb2Rvc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBhcnnFoWtpbnRpIHZpc3VzIHN2ZXRhaW7El3MgbnVvcm9kYXMgc3BhbHZhLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJpZ2dlclRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRpZGVzbmlzIHRla3N0YXNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQYWRpZGludGkgxaFyaWZ0xIUgbHlnaW5hbnQgc3UgZGFiYXJ0aW5pdSDFoXJpZnRvIGR5ZMW+aXUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidGV4dFNwYWNpbmdcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRla3N0byB0YXJwYXNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQYWRpZGludGkgdGFycMSFIHRhcnAgc2ltYm9sacWzIGlyIMW+b2TFvmnFsy5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbWFnZXNSZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlBhxaFhbGludGkgdmFpemR1c1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlZpc2kgc3ZldGFpbsSXcyB2YWl6ZGFpIHlyYSBwYXNsxJdwdGkuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGluZUhlaWdodFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRWlsdXTEl3MgYXVrxaF0aXNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJLaWVrdmllbmFtIHRla3N0byBlbGVtZW50dWkgc3ZldGFpbsSXamUgcGFkaWRpbmFtYXMgZWlsdXTEl3MgYXVrxaF0aXMuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2F0dXJhdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU290aXNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJTdmV0YWluxJdzIHNvdGlzIHBhZGlkaW5hbWEgYXJiYSBzdW1hxb5pbmFtYSwga2FkIGLFq3TFsyB1xb50aWtyaW50YXMgZ2VyZXNuaXMgc2thaXR5bWFzLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdXNlQ3Vyc29yXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJQZWzEl3Mgcm9keWtsxJdcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQZWzEl3Mgcm9keWtsxJcgcGFkaWRpbmFtYSAzIGthcnR1cywga2FkIGLFq3TFsyBnZXJpYXUgcGFicsSXxb50YS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaXRlU3RydWN0dXJlXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdmV0YWluxJdzIHN0cnVrdMWrcmFcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWaXNpIGFudHJhxaHEjWlhaSBpciBudW9yb2RvcyBwYXRlaWtpYW1pIHZpZW5hcyBwbyBraXRvIHBhZ2FsIHN2YXJixIUsIHBhbGVuZ3ZpbmFudCBuYXLFoXltxIUgc3ZldGFpbsSXamUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidG9vbHRpcHNcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIsSucmFua2nFsyBwYXRhcmltYWlcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWaXNpIGVsZW1lbnRhaSwgdHVyaW50eXMgYXRyaWJ1dMSFIGB0aXRsZWAgYXJiYSBgbGFiZWxgLCByb2RvIG1hdG9txIUgxK9yYW5racWzIHBhdGFyaW3EhSwga2FpIHBlbGUgdcW+dmVkYW1hIGFudCBqxbMuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVhZGFibGVUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTa2FpdHltYXMgdGVrc3Rhc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk5hdWphcyDFoXJpZnRhcyDEr2tlbGlhbWFzLCBrYWQgdGVrc3RhcyBixat0xbMgbGVuZ3ZpYXUgc2thaXRvbWFzLiBUYWlwIHBhdCBnYWxpbWEgcGFzaXJpbmt0aSDFoXJpZnTEhSwgc3BlY2lhbGlhaSBwcml0YWlreXTEhSBkaXNsZWtzaWpvcyBwYWNpZW50YW1zLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlN1c3RhYmR5dGkgYW5pbWFjaWphc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBhdXrElyB2aXNpZW1zIHZhaXpkbyDEr3JhxaFhbXMgaXIgYW5pbWFjaWpvbXMgdmlzb2plIHN2ZXRhaW7El2plLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlcG9ydEVycm9yXCI6IHtcbiAgICAgICAgICBcImJ1dHRvblwiOiBcIlByYW5lxaF0aSBhcGllIGtsYWlkxIVcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwiUHJhbmXFoXRpIGFwaWUga2xhaWTEhSBzdSBBY2Nlc3NGbG93XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvdmVyQWNjZXNzRmxvd1wiOntcbiAgICAgICAgICBcImxhYmVsXCI6IFwiQXBpZSBBY2Nlc3MtRmxvd1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwibmxcIjoge1xuICAgICAgXCJhY2Nlc3NGbG93XCI6IHtcbiAgICAgICAgXCJvcGVuU3ltYm9sXCI6IHtcbiAgICAgICAgICBcImxhYmVsXCI6IFwiT3BlbiBoZXQgQWNjZXNzRmxvdy10b2VnYW5rZWxpamtoZWlkc21lbnUgb20gaW5zdGVsbGluZ2VuIHRlIG1ha2VuLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJoZWFkZXJcIjoge1xuICAgICAgICAgIFwiY2xvc2VJY29uXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJDbG9zZS11cCB3ZWVyZ2F2ZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwibGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiVGFhbCAoe3tsYW5ndWFnZX19KVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJIaWVybWVlIGt1bnQgdSBtZXQgw6nDqW4ga2xpayBkZSB0YWFsIHZhbiBkZSBBY2Nlc3NGbG93LWludGVyZmFjZSB3aWp6aWdlbi5cIixcbiAgICAgICAgICBcImlucHV0XCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJab2VrIGRlIGdld2Vuc3RlIHRhYWwuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXZhaWxhYmxlTGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJTY2hha2VsIGRlIGludGVyZmFjZSBvdmVyIG5hYXIgZGUgdGFhbCB7e2xhbmd1YWdlfX0uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJ0b29sc1wiOiB7XG4gICAgICAgICAgXCJjb250cmFzdFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQ29udHJhc3RcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJUb29udCBkZSB3ZWJzaXRlIGluIHZlcnNjaGlsbGVuZGUgY29udHJhc3RuaXZlYXVzLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmtzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJMaW5rc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk1hcmtlZXJ0IGFsbGUgbGlua3Mgb3AgZGUgd2Vic2l0ZSBtZXQga2xldXIuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYmlnZ2VyVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiR3JvdGVyZSB0ZWtzdFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlZlcmdyb290IGhldCBsZXR0ZXJ0eXBlIHRlbiBvcHppY2h0ZSB2YW4gZGUgaHVpZGlnZSBsZXR0ZXJncm9vdHRlLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRleHRTcGFjaW5nXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUZWtzdGFmc3RhbmRcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWZXJncm9vdCBkZSBhZnN0YW5kIHR1c3NlbiB0ZWtlbnMgZW4gd29vcmRlbi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbWFnZXNSZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkFmYmVlbGRpbmdlbiB2ZXJ3aWpkZXJlblwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFsbGUgYWZiZWVsZGluZ3NlbGVtZW50ZW4gb3AgZGUgd2Vic2l0ZSB6aWpuIHZlcmJvcmdlbi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJSZWdlbGhvb2d0ZVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkRlIHJlZ2VsaG9vZ3RlIHdvcmR0IHZlcmhvb2dkIHZvb3IgZWxrIHRla3N0ZWxlbWVudCBvcCBkZSB3ZWJwYWdpbmEuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2F0dXJhdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVmVyemFkaWdpbmdcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJEZSB2ZXJ6YWRpZ2luZyB2YW4gZGUgd2Vic2l0ZSB3b3JkdCB2ZXJob29nZCBvZiB2ZXJsYWFnZCBvbSBlZW4gYmV0ZXJlIGxlZXNiYWFyaGVpZCB0ZSBnYXJhbmRlcmVuLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdXNlQ3Vyc29yXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJNdWlzYWFud2lqemVyXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiRGUgbXVpc2FhbndpanplciB3b3JkdCAzIGtlZXIgdmVyZ3Jvb3Qgb20gYmV0ZXIgdGUga3VubmVuIGZvY3Vzc2VuLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNpdGVTdHJ1Y3R1cmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNpdGVzdHJ1Y3R1dXJcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJBbGxlIGtvcHBlbiBlbiBsaW5rcyB3b3JkZW4gb25kZXIgZWxrYWFyIHZlcm1lbGQgb3AgYmFzaXMgdmFuIGh1biBiZWxhbmdyaWpraGVpZCwgd2FhcmRvb3IgaGV0IGdlbWFra2VsaWprZXIgd29yZHQgb20gZG9vciBkZSBwYWdpbmEgdGUgbmF2aWdlcmVuLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRvb2x0aXBzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUb29sdGlwc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFsbGUgZWxlbWVudGVuIGRpZSBlZW4gYHRpdGxlYCBvZiBgbGFiZWxgIGF0dHJpYnV1dCBoZWJiZW4sIHRvbmVuIGVlbiB6aWNodGJhcmUgdG9vbHRpcCB3YW5uZWVyIHUgZXIgbWV0IGRlIG11aXMgb3ZlcmhlZW4gZ2FhdC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWFkYWJsZVRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxlZXNiYXJlIHRla3N0XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiRXIgd29yZHQgZWVuIG5pZXV3IGxldHRlcnR5cGUgZ2VsYWRlbiBvbSBkZSB0ZWtzdCBsZWVzYmFhcmRlciB0ZSBtYWtlbi4gRXIgaXMgb29rIGVlbiBsZXR0ZXJ0eXBlIGJlc2NoaWtiYWFyIGRhdCBzcGVjaWFhbCBnZXNjaGlrdCBpcyB2b29yIGR5c2xlY3RpY2kuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3RvcEFuaW1hdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQW5pbWF0aWUgc3RvcHBlblwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBhdXplZXJ0IGFsbGUgdmlkZW8ncyBlbiBhbmltYXRpZXMgb3AgZGUgaGVsZSB3ZWJzaXRlLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlcG9ydEVycm9yXCI6IHtcbiAgICAgICAgICBcImJ1dHRvblwiOiBcIkZvdXQgbWVsZGVuXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIk1lbGQgZWVuIGZvdXQgbWV0IEFjY2Vzc0Zsb3dcIlxuICAgICAgICB9LFxuICAgICAgICBcIm92ZXJBY2Nlc3NGbG93XCI6e1xuICAgICAgICAgIFwibGFiZWxcIjogXCJPdmVyIEFjY2Vzcy1GbG93XCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJub1wiOiB7XG4gICAgICBcImFjY2Vzc0Zsb3dcIjoge1xuICAgICAgICBcIm9wZW5TeW1ib2xcIjoge1xuICAgICAgICAgIFwibGFiZWxcIjogXCLDhXBuZSBBY2Nlc3NGbG93LXRpbGdqZW5nZWxpZ2hldHNtZW55ZW4gZm9yIMOlIGdqw7hyZSBpbm5zdGlsbGluZ2VyLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJoZWFkZXJcIjoge1xuICAgICAgICAgIFwiY2xvc2VJY29uXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJOw6ZydmlzbmluZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwibGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiU3Byw6VrICh7e2xhbmd1YWdlfX0pXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIkxhciBkZWcgZW5kcmUgQWNjZXNzRmxvdy1ncmVuc2Vzbml0dGV0cyBzcHLDpWsgbWVkIGV0dCBrbGlray5cIixcbiAgICAgICAgICBcImlucHV0XCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJTw7hrIGV0dGVyIMO4bnNrZXQgc3Byw6VrLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF2YWlsYWJsZUxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQnl0dCBncmVuc2Vzbml0dCB0aWwge3tsYW5ndWFnZX19IHNwcsOlay5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcInRvb2xzXCI6IHtcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJLb250cmFzdFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlZpc2VyIG5ldHRzaWRlbiBpIGZvcnNramVsbGlnZSBrb250cmFzdG5pdsOlZXIuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGlua3NcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxlbmtlclwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk1hcmtlcmVyIGFsbGUgbGVua2VyIHDDpSBuZXR0c2lkZW4gbWVkIGZhcmdlLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJpZ2dlclRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlN0w7hycmUgdGVrc3RcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJGb3JzdMO4cnJlciBza3JpZnR0eXBlbiBpIGZvcmhvbGQgdGlsIGdqZWxkZW5kZSBza3JpZnRzdMO4cnJlbHNlLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRleHRTcGFjaW5nXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUZWtzdGF2c3RhbmRcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLDmGtlciBhdnN0YW5kZW4gbWVsbG9tIHRlZ24gb2cgb3JkLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImltYWdlc1JlbW92ZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRmplcm4gYmlsZGVyXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQWxsZSBiaWxkZWxlbWVudGVyIHDDpSBuZXR0c2lkZW4gZXIgc2tqdWx0LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmVIZWlnaHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxpbmplaMO4eWRlXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTGluamVow7h5ZGVuIMO4a2VzIGZvciBodmVydCB0ZWtzdGVsZW1lbnQgcMOlIG5ldHRzaWRlbi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJNZXRuaW5nXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTmV0dHN0ZWRldHMgbWV0bmluZyDDuGtlcyBlbGxlciByZWR1c2VyZXMgZm9yIMOlIHNpa3JlIGJlZHJlIGxlc2JhcmhldC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3VzZUN1cnNvclwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTXVzZXBla2VyXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTXVzZXBla2VyZW4gZm9yc3TDuHJyZXMgMyBnYW5nZXIgZm9yIGJlZHJlIGZva3VzLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNpdGVTdHJ1Y3R1cmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk5ldHRzdGVkc3N0cnVrdHVyXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQWxsZSBvdmVyc2tyaWZ0ZXIgb2cgbGVua2VyIGVyIG9wcGbDuHJ0IHVuZGVyIGh2ZXJhbmRyZSBpIHJla2tlZsO4bGdlIGF2IHZpa3RpZ2hldCwgbm9lIHNvbSBnasO4ciBkZXQgZW5rbGVyZSDDpSBuYXZpZ2VyZSBww6Ugc2lkZW4uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidG9vbHRpcHNcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlZlcmt0w7h5dGlwc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFsbGUgZWxlbWVudGVyIHNvbSBoYXIgZW4gYHRpdGxlYCBlbGxlciBgbGFiZWxgIGF0dHJpYnV0dCwgdmlzZXIgZXQgc3lubGlnIHZlcmt0w7h5dGlwcyBuw6VyIGR1IHN2ZXZlciBvdmVyIGRlbSBtZWQgbXVzZW4uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVhZGFibGVUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJMZXNiYXIgdGVrc3RcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJFdCBueXR0IHNrcmlmdHR5cGUgbGFzdGVzIGlubiBmb3Igw6UgZ2rDuHJlIHRla3N0ZW4gbWVyIGxlc2Jhci4gRGV0IGVyIG9nc8OlIHRpbGdqZW5nZWxpZyBlbiBza3JpZnR0eXBlIHNwZXNpZWx0IGVnbmV0IGZvciBkeXNsZWt0aWtlcmUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3RvcEFuaW1hdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU3RvcHAgYW5pbWFzam9uXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiU2V0dGVyIGFsbGUgdmlkZW9lciBvZyBhbmltYXNqb25lciBww6UgaGVsZSBuZXR0c3RlZGV0IHDDpSBwYXVzZS5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXBvcnRFcnJvclwiOiB7XG4gICAgICAgICAgXCJidXR0b25cIjogXCJSYXBwb3J0ZXIgZmVpbFwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJSYXBwb3J0ZXIgZW4gZmVpbCBtZWQgQWNjZXNzRmxvd1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwib3ZlckFjY2Vzc0Zsb3dcIjp7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcIk9tIEFjY2Vzcy1GbG93XCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJwbFwiOiB7XG4gICAgICBcImFjY2Vzc0Zsb3dcIjoge1xuICAgICAgICBcIm9wZW5TeW1ib2xcIjoge1xuICAgICAgICAgIFwibGFiZWxcIjogXCJPdHfDs3J6IG1lbnUgZG9zdMSZcG5vxZtjaSBBY2Nlc3NGbG93LCBhYnkgZG9rb25hxIcgdXN0YXdpZcWELlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJoZWFkZXJcIjoge1xuICAgICAgICAgIFwiY2xvc2VJY29uXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQb3dpxJlrc3pvbnkgd2lkb2tcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcImxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIkrEmXp5ayAoe3tsYW5ndWFnZX19KVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJQb3p3YWxhIHptaWVuacSHIGrEmXp5ayBpbnRlcmZlanN1IEFjY2Vzc0Zsb3cgamVkbnltIGtsaWtuacSZY2llbS5cIixcbiAgICAgICAgICBcImlucHV0XCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJXeXN6dWthaiBwb8W8xIVkYW55IGrEmXp5ay5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJhdmFpbGFibGVMYW5ndWFnZXNcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlByemXFgsSFY3ogaW50ZXJmZWpzIG5hIGrEmXp5ayB7e2xhbmd1YWdlfX0uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJ0b29sc1wiOiB7XG4gICAgICAgICAgXCJjb250cmFzdFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiS29udHJhc3RcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJXecWbd2lldGxhIHN0cm9uxJkgaW50ZXJuZXRvd8SFIHcgcsOzxbxueWNoIHBvemlvbWFjaCBrb250cmFzdHUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGlua3NcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxpbmtpXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUG9ka3JlxZtsYSB3c3p5c3RraWUgbGlua2kgbmEgc3Ryb25pZSBpbnRlcm5ldG93ZWoga29sb3JlbS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJiaWdnZXJUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJXacSZa3N6eSB0ZWtzdFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBvd2nEmWtzemEgY3pjaW9ua8SZIHcgc3Rvc3Vua3UgZG8gYmllxbzEhWNlZ28gcm96bWlhcnUgY3pjaW9ua2kuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidGV4dFNwYWNpbmdcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk9kc3TEmXB5IG1pxJlkenkgdGVrc3RlbVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlp3acSZa3N6YSBvZHN0xJlweSBtacSZZHp5IHpuYWthbWkgaSBzxYJvd2FtaS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbWFnZXNSZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlVzdcWEIG9icmF6eVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIldzenlzdGtpZSBlbGVtZW50eSBvYnJhenUgbmEgc3Ryb25pZSBpbnRlcm5ldG93ZWogc8SFIHVrcnl0ZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJXeXNva2/Fm8SHIGxpbmlpXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiV3lzb2tvxZvEhyBsaW5paSBqZXN0IHp3acSZa3N6YW5hIGRsYSBrYcW8ZGVnbyBlbGVtZW50dSB0ZWtzdHUgbmEgc3Ryb25pZSBpbnRlcm5ldG93ZWouXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2F0dXJhdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTmFzeWNlbmllXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTmFzeWNlbmllIHN0cm9ueSBpbnRlcm5ldG93ZWogamVzdCB6d2nEmWtzemFuZSBsdWIgem1uaWVqc3phbmUsIGFieSB6YXBld25pxIcgbGVwc3rEhSBjenl0ZWxub8WbxIcuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW91c2VDdXJzb3JcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkt1cnNvciBteXN6eVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkt1cnNvciBteXN6eSBqZXN0IHBvd2nEmWtzemFueSB0cnp5a3JvdG5pZSwgYWJ5IGxlcGllaiBzacSZIHNrdXBpxIcuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2l0ZVN0cnVjdHVyZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU3RydWt0dXJhIHN0cm9ueVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIldzenlzdGtpZSBuYWfFgsOzd2tpIGkgbGlua2kgc8SFIHd5bWllbmlvbmUgamVkZW4gcG9kIGRydWdpbSB3ZWTFgnVnIGljaCB3YcW8bm/Fm2NpLCB1xYJhdHdpYWrEhWMgbmF3aWdhY2rEmSBuYSBzdHJvbmllLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRvb2x0aXBzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJXc2thesOzd2tpXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiV3N6eXN0a2llIGVsZW1lbnR5LCBrdMOzcmUgbWFqxIUgYXRyeWJ1dCBgdGl0bGVgIGx1YiBgbGFiZWxgLCB3ecWbd2lldGxhasSFIHdpZG9jem7EhSB3c2thesOzd2vEmSwgZ2R5IG5hamVkemllc3ogbmEgbmllIG15c3rEhS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWFkYWJsZVRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkN6eXRlbG55IHRla3N0XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTm93YSBjemNpb25rYSBqZXN0IMWCYWRvd2FuYSwgYWJ5IHXFgmF0d2nEhyBjenl0YW5pZSB0ZWtzdHUuIE1vxbxuYSByw7N3bmllxbwgd3licmHEhyBjemNpb25rxJkgc3BlY2phbG5pZSBkb3N0b3Nvd2FuxIUgZGxhIG9zw7NiIHogZHlzbGVrc2rEhS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzdG9wQW5pbWF0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJaYXRyenltYWogYW5pbWFjasSZXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiV3N0cnp5bXVqZSB3c3p5c3RraWUgZmlsbXkgaSBhbmltYWNqZSBuYSBjYcWCZWogc3Ryb25pZSBpbnRlcm5ldG93ZWouXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVwb3J0RXJyb3JcIjoge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IFwiWmfFgm/FmyBixYLEhWRcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwiWmfFgm/FmyBixYLEhWQgeiBBY2Nlc3NGbG93XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvdmVyQWNjZXNzRmxvd1wiOntcbiAgICAgICAgICBcImxhYmVsXCI6IFwiTyBBY2Nlc3MtRmxvd1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwicHRcIjoge1xuICAgICAgXCJhY2Nlc3NGbG93XCI6IHtcbiAgICAgICAgXCJvcGVuU3ltYm9sXCI6IHtcbiAgICAgICAgICBcImxhYmVsXCI6IFwiQWJyYSBvIG1lbnUgZGUgYWNlc3NpYmlsaWRhZGUgQWNjZXNzRmxvdyBwYXJhIGZhemVyIGNvbmZpZ3VyYcOnw7Vlcy5cIlxuICAgICAgICB9LFxuXG4gICAgICAgIFwiaGVhZGVyXCI6IHtcbiAgICAgICAgICBcImNsb3NlSWNvblwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVmlzdWFsaXphw6fDo28gYW1wbGlhZGFcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcImxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIklkaW9tYSAoe3tsYW5ndWFnZX19KVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJQZXJtaXRlIGFsdGVyYXIgbyBpZGlvbWEgZGEgaW50ZXJmYWNlIGRvIEFjY2Vzc0Zsb3cgY29tIHVtIMO6bmljbyBjbGlxdWUuXCIsXG4gICAgICAgICAgXCJpbnB1dFwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUGVzcXVpc2UgbyBpZGlvbWEgZGVzZWphZG8uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXZhaWxhYmxlTGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJNdWRlIGEgaW50ZXJmYWNlIHBhcmEgbyBpZGlvbWEge3tsYW5ndWFnZX19LlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwidG9vbHNcIjoge1xuICAgICAgICAgIFwiY29udHJhc3RcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbnRyYXN0ZVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkV4aWJlIG8gc2l0ZSBlbSBkaWZlcmVudGVzIG7DrXZlaXMgZGUgY29udHJhc3RlLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmtzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJMaW5rc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkRlc3RhY2EgdG9kb3Mgb3MgbGlua3MgZG8gc2l0ZSBjb20gY29yLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJpZ2dlclRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRleHRvIG1haW9yXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQXVtZW50YSBhIGZvbnRlIGVtIHJlbGHDp8OjbyBhbyB0YW1hbmhvIGF0dWFsIGRhIGZvbnRlLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRleHRTcGFjaW5nXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJFc3Bhw6dhbWVudG8gZGUgdGV4dG9cIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJBdW1lbnRhIG8gZXNwYcOnbyBlbnRyZSBjYXJhY3RlcmVzIGUgcGFsYXZyYXMuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW1hZ2VzUmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJSZW1vdmVyIGltYWdlbnNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJUb2RvcyBvcyBlbGVtZW50b3MgZGUgaW1hZ2VtIGRvIHNpdGUgZXN0w6NvIG9jdWx0b3MuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGluZUhlaWdodFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQWx0dXJhIGRhIGxpbmhhXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQSBhbHR1cmEgZGEgbGluaGEgw6kgYXVtZW50YWRhIHBhcmEgY2FkYSBlbGVtZW50byBkZSB0ZXh0byBuYSBww6FnaW5hIGRhIHdlYi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTYXR1cmHDp8Ojb1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkEgc2F0dXJhw6fDo28gZG8gc2l0ZSDDqSBhdW1lbnRhZGEgb3UgZGltaW51w61kYSBwYXJhIGdhcmFudGlyIHVtYSBtZWxob3IgbGVnaWJpbGlkYWRlLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdXNlQ3Vyc29yXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJDdXJzb3IgZG8gbW91c2VcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJPIGN1cnNvciBkbyBtb3VzZSDDqSBhbXBsaWFkbyAzIHZlemVzIHBhcmEgbWVsaG9yIGZvY28uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2l0ZVN0cnVjdHVyZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRXN0cnV0dXJhIGRvIHNpdGVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJUb2RvcyBvcyB0w610dWxvcyBlIGxpbmtzIHPDo28gbGlzdGFkb3MgdW0gYWJhaXhvIGRvIG91dHJvIGVtIG9yZGVtIGRlIGltcG9ydMOibmNpYSwgZmFjaWxpdGFuZG8gYSBuYXZlZ2HDp8OjbyBuYSBww6FnaW5hLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRvb2x0aXBzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJEaWNhcyBkZSBmZXJyYW1lbnRhc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlRvZG9zIG9zIGVsZW1lbnRvcyBxdWUgdMOqbSB1bSBhdHJpYnV0byBgdGl0bGVgIG91IGBsYWJlbGAgZXhpYmVtIHVtYSBkaWNhIGRlIGZlcnJhbWVudGEgdmlzw612ZWwgcXVhbmRvIHZvY8OqIHBhc3NhIG8gbW91c2Ugc29icmUgZWxlcy5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWFkYWJsZVRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRleHRvIGxlZ8OtdmVsXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVW1hIG5vdmEgZm9udGUgw6kgY2FycmVnYWRhIHBhcmEgZmFjaWxpdGFyIGEgbGVpdHVyYSBkbyB0ZXh0by4gVGFtYsOpbSDDqSBwb3Nzw612ZWwgc2VsZWNpb25hciB1bWEgZm9udGUgZXNwZWNpYWxtZW50ZSBhZGVxdWFkYSBwYXJhIGRpc2zDqXhpY29zLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlBhcmFyIGFuaW1hw6fDtWVzXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUGF1c2EgdG9kb3Mgb3MgdsOtZGVvcyBlIGFuaW1hw6fDtWVzIGVtIHRvZG8gbyBzaXRlLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlcG9ydEVycm9yXCI6IHtcbiAgICAgICAgICBcImJ1dHRvblwiOiBcIlJlcG9ydGFyIGVycm9cIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwiUmVwb3J0YXIgdW0gZXJybyBjb20gQWNjZXNzRmxvd1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwib3ZlckFjY2Vzc0Zsb3dcIjp7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcIlNvYnJlIEFjY2Vzcy1GbG93XCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJyb1wiOiB7XG4gICAgICBcImFjY2Vzc0Zsb3dcIjoge1xuICAgICAgICBcIm9wZW5TeW1ib2xcIjoge1xuICAgICAgICAgIFwibGFiZWxcIjogXCJEZXNjaGlkZcibaSBtZW5pdWwgZGUgYWNjZXNpYmlsaXRhdGUgQWNjZXNzRmxvdyBwZW50cnUgYSBmYWNlIHNldMSDcmkuXCJcbiAgICAgICAgfSxcblxuICAgICAgICBcImhlYWRlclwiOiB7XG4gICAgICAgICAgXCJjbG9zZUljb25cIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlZpenVhbGl6YXJlIGFwcm9waWF0xINcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcImxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIkxpbWLEgyAoe3tsYW5ndWFnZX19KVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJQZXJtaXRlIHNjaGltYmFyZWEgbGltYmlpIGludGVyZmXIm2VpIEFjY2Vzc0Zsb3cgcHJpbnRyLXVuIHNpbmd1ciBjbGljLlwiLFxuICAgICAgICAgIFwiaW5wdXRcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkPEg3V0YcibaSBsaW1iYSBkb3JpdMSDLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF2YWlsYWJsZUxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQ29tdXRhyJtpIGludGVyZmHIm2EgbGEgbGltYmEge3tsYW5ndWFnZX19LlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwidG9vbHNcIjoge1xuICAgICAgICAgIFwiY29udHJhc3RcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbnRyYXN0XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQWZpyJllYXrEgyBzaXRlLXVsIMOubiBkaWZlcml0ZSBuaXZlbHVyaSBkZSBjb250cmFzdC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsaW5rc1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTGlua3VyaVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkV2aWRlbsibaWF6xIMgdG9hdGUgbGlua3VyaWxlIGRlIHBlIHNpdGUgY3UgY3Vsb2FyZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJiaWdnZXJUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUZXh0IG1haSBtYXJlXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTcSDcmXImXRlIGZvbnR1bCDDrm4gcmFwb3J0IGN1IGRpbWVuc2l1bmVhIGFjdHVhbMSDIGEgZm9udHVsdWkuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidGV4dFNwYWNpbmdcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNwYcibaWVyZWEgdGV4dHVsdWlcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJNxINyZciZdGUgc3BhyJtpdWwgZGludHJlIGNhcmFjdGVyZSDImWkgY3V2aW50ZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbWFnZXNSZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkVsaW1pbsSDIGltYWdpbmlsZVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlRvYXRlIGVsZW1lbnRlbGUgZGUgaW1hZ2luZSBkZSBwZSBzaXRlIHN1bnQgYXNjdW5zZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLDjm7Eg2zIm2ltZWEgbGluaWVpXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiw45uxINsyJtpbWVhIGxpbmllaSBlc3RlIG3Eg3JpdMSDIHBlbnRydSBmaWVjYXJlIGVsZW1lbnQgZGUgdGV4dCBkZSBwZSBwYWdpbsSDLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNhdHVyYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNhdHVyYcibaWVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJTYXR1cmHIm2lhIHNpdGUtdWx1aSBlc3RlIG3Eg3JpdMSDIHNhdSBtaWPImW9yYXTEgyBwZW50cnUgYSBhc2lndXJhIG8gbWFpIGJ1bsSDIGxpemliaWxpdGF0ZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3VzZUN1cnNvclwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQ3Vyc29ydWwgbW91c2UtdWx1aVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkN1cnNvcnVsIG1vdXNlLXVsdWkgZXN0ZSBtxINyaXQgZGUgMyBvcmkgcGVudHJ1IHVuIG1haSBidW4gZm9jdXMuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2l0ZVN0cnVjdHVyZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU3RydWN0dXJhIHNpdGUtdWx1aVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlRvYXRlIHRpdGx1cmlsZSDImWkgbGlua3VyaWxlIHN1bnQgbGlzdGF0ZSB1bnVsIHN1YiBhbHR1bCDDrm4gb3JkaW5lYSBpbXBvcnRhbsibZWksIGZhY2lsaXTDom5kIG5hdmlnYXJlYSBwZSBwYWdpbsSDLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRvb2x0aXBzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdWdlc3RpaSBwZW50cnUgaW5zdHJ1bWVudGVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJUb2F0ZSBlbGVtZW50ZWxlIGNhcmUgYXUgdW4gYXRyaWJ1dCBgdGl0bGVgIHNhdSBgbGFiZWxgIGFmaciZZWF6xIMgbyBzdWdlc3RpZSBwZW50cnUgaW5zdHJ1bWVudGUgdml6aWJpbMSDIGF0dW5jaSBjw6JuZCBwbGFzYcibaSBjdXJzb3J1bCBtb3VzZS11bHVpIHBlIGVsZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWFkYWJsZVRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRleHQgbGl6aWJpbFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlNlIMOubmNhcmPEgyB1biBub3UgZm9udCBwZW50cnUgYSBmYWNlIHRleHR1bCBtYWkgdciZb3IgZGUgY2l0aXQuIERlIGFzZW1lbmVhLCBlc3RlIGRpc3BvbmliaWwgdW4gZm9udCBzcGVjaWFsIHBvdHJpdml0IHBlbnRydSBwZXJzb2FuZWxlIGN1IGRpc2xleGllLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk9wcmXImXRlIGFuaW1hyJtpaWxlXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUHVuZSBwZSBwYXV6xIMgdG9hdGUgdmlkZW9jbGlwdXJpbGUgyJlpIGFuaW1hyJtpaWxlIGRlIHBlIMOubnRyZWd1bCBzaXRlLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlcG9ydEVycm9yXCI6IHtcbiAgICAgICAgICBcImJ1dHRvblwiOiBcIlJhcG9ydGHIm2kgbyBlcm9hcmVcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwiUmFwb3J0YcibaSBvIGVyb2FyZSBjdSBBY2Nlc3NGbG93XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvdmVyQWNjZXNzRmxvd1wiOntcbiAgICAgICAgICBcImxhYmVsXCI6IFwiRGVzcHJlIEFjY2Vzcy1GbG93XCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJydVwiOiB7XG4gICAgICBcImFjY2Vzc0Zsb3dcIjoge1xuICAgICAgICBcIm9wZW5TeW1ib2xcIjoge1xuICAgICAgICAgIFwibGFiZWxcIjogXCLQntGC0LrRgNC+0LnRgtC1INC80LXQvdGOINC00L7RgdGC0YPQv9C90L7RgdGC0LggQWNjZXNzRmxvdywg0YfRgtC+0LHRiyDQstC90LXRgdGC0Lgg0L3QsNGB0YLRgNC+0LnQutC4LlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJoZWFkZXJcIjoge1xuICAgICAgICAgIFwiY2xvc2VJY29uXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQo9Cy0LXQu9C40YfQtdC90L3Ri9C5INCy0LjQtFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwibGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwi0K/Qt9GL0LogKHt7bGFuZ3VhZ2V9fSlcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwi0J/QvtC30LLQvtC70Y/QtdGCINC40LfQvNC10L3QuNGC0Ywg0Y/Qt9GL0Log0LjQvdGC0LXRgNGE0LXQudGB0LAgQWNjZXNzRmxvdyDQvtC00L3QuNC8INGJ0LXQu9GH0LrQvtC8LlwiLFxuICAgICAgICAgIFwiaW5wdXRcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItCf0L7QuNGB0Log0LbQtdC70LDQtdC80L7Qs9C+INGP0LfRi9C60LAuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXZhaWxhYmxlTGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQn9C10YDQtdC60LvRjtGH0LjRgtC1INC40L3RgtC10YDRhNC10LnRgSDQvdCwINGP0LfRi9C6IHt7bGFuZ3VhZ2V9fS5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcInRvb2xzXCI6IHtcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLQmtC+0L3RgtGA0LDRgdGCXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi0J7RgtC+0LHRgNCw0LbQsNC10YIg0LLQtdCxLdGB0LDQudGCINCyINGA0LDQt9C70LjRh9C90YvRhSDRg9GA0L7QstC90Y/RhSDQutC+0L3RgtGA0LDRgdGC0L3QvtGB0YLQuC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsaW5rc1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi0KHRgdGL0LvQutC4XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi0JLRi9C00LXQu9GP0LXRgiDQstGB0LUg0YHRgdGL0LvQutC4INC90LAg0LLQtdCxLdGB0LDQudGC0LUg0YbQstC10YLQvtC8LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJpZ2dlclRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCj0LLQtdC70LjRh9C10L3QvdGL0Lkg0YLQtdC60YHRglwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItCj0LLQtdC70LjRh9C40LLQsNC10YIg0YjRgNC40YTRgiDQv9C+INGB0YDQsNCy0L3QtdC90LjRjiDRgSDRgtC10LrRg9GJ0LjQvCDRgNCw0LfQvNC10YDQvtC8INGI0YDQuNGE0YLQsC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0ZXh0U3BhY2luZ1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi0JzQtdC20LTRg9GB0YLRgNC+0YfQvdGL0Lkg0LjQvdGC0LXRgNCy0LDQu1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItCj0LLQtdC70LjRh9C40LLQsNC10YIg0YDQsNGB0YHRgtC+0Y/QvdC40LUg0LzQtdC20LTRgyDRgdC40LzQstC+0LvQsNC80Lgg0Lgg0YHQu9C+0LLQsNC80LguXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW1hZ2VzUmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLQo9C00LDQu9C40YLRjCDQuNC30L7QsdGA0LDQttC10L3QuNGPXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi0JLRgdC1INGN0LvQtdC80LXQvdGC0Ysg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQvdCwINCy0LXQsS3RgdCw0LnRgtC1INGB0LrRgNGL0YLRiy5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLQktGL0YHQvtGC0LAg0YHRgtGA0L7QutC4XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi0JLRi9GB0L7RgtCwINGB0YLRgNC+0LrQuCDRg9Cy0LXQu9C40YfQuNCy0LDQtdGC0YHRjyDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0YLQtdC60YHRgtC+0LLQvtCz0L4g0Y3Qu9C10LzQtdC90YLQsCDQvdCwINCy0LXQsS3RgdGC0YDQsNC90LjRhtC1LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNhdHVyYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCd0LDRgdGL0YnQtdC90L3QvtGB0YLRjFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItCd0LDRgdGL0YnQtdC90L3QvtGB0YLRjCDQstC10LEt0YHQsNC50YLQsCDRg9Cy0LXQu9C40YfQuNCy0LDQtdGC0YHRjyDQuNC70Lgg0YPQvNC10L3RjNGI0LDQtdGC0YHRjyDQtNC70Y8g0L7QsdC10YHQv9C10YfQtdC90LjRjyDQu9GD0YfRiNC10Lkg0YfQuNGC0LDQtdC80L7RgdGC0LguXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW91c2VDdXJzb3JcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCa0YPRgNGB0L7RgCDQvNGL0YjQuFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItCa0YPRgNGB0L7RgCDQvNGL0YjQuCDRg9Cy0LXQu9C40YfQuNCy0LDQtdGC0YHRjyDQsiAzINGA0LDQt9CwINC00LvRjyDQu9GD0YfRiNC10LPQviDRhNC+0LrRg9GB0LjRgNC+0LLQsNC90LjRjy5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaXRlU3RydWN0dXJlXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLQodGC0YDRg9C60YLRg9GA0LAg0YHQsNC50YLQsFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItCS0YHQtSDQt9Cw0LPQvtC70L7QstC60Lgg0Lgg0YHRgdGL0LvQutC4INC/0LXRgNC10YfQuNGB0LvQtdC90Ysg0L7QtNC40L0g0L/QvtC0INC00YDRg9Cz0LjQvCDQsiDQv9C+0YDRj9C00LrQtSDQstCw0LbQvdC+0YHRgtC4LCDRh9GC0L4g0L7QsdC70LXQs9GH0LDQtdGCINC90LDQstC40LPQsNGG0LjRjiDQv9C+INGB0YLRgNCw0L3QuNGG0LUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidG9vbHRpcHNcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCf0L7QtNGB0LrQsNC30LrQuFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItCS0YHQtSDRjdC70LXQvNC10L3RgtGLLCDRgyDQutC+0YLQvtGA0YvRhSDQtdGB0YLRjCDQsNGC0YDQuNCx0YPRgiBgdGl0bGVgINC40LvQuCBgbGFiZWxgLCDQvtGC0L7QsdGA0LDQttCw0Y7RgiDQstC40LTQuNC80YPRjiDQv9C+0LTRgdC60LDQt9C60YMg0L/RgNC4INC90LDQstC10LTQtdC90LjQuCDQvdCwINC90LjRhSDQutGD0YDRgdC+0YDQsCDQvNGL0YjQuC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWFkYWJsZVRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCn0LjRgtCw0LXQvNGL0Lkg0YLQtdC60YHRglwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItCX0LDQs9GA0YPQttCw0LXRgtGB0Y8g0L3QvtCy0YvQuSDRiNGA0LjRhNGCINC00LvRjyDRg9C70YPRh9GI0LXQvdC40Y8g0YfQuNGC0LDQtdC80L7RgdGC0Lgg0YLQtdC60YHRgtCwLiDQotCw0LrQttC1INC00L7RgdGC0YPQv9C10L0g0YjRgNC40YTRgiwg0YHQv9C10YbQuNCw0LvRjNC90L4g0L/RgNC10LTQvdCw0LfQvdCw0YfQtdC90L3Ri9C5INC00LvRjyDQtNC40YHQu9C10LrRgdC40LrQvtCyLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCe0YHRgtCw0L3QvtCy0LjRgtGMINCw0L3QuNC80LDRhtC40Y5cIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQn9GA0LjQvtGB0YLQsNC90LDQstC70LjQstCw0LXRgiDQstGB0LUg0LLQuNC00LXQviDQuCDQsNC90LjQvNCw0YbQuNC4INC90LAg0LLRgdC10Lwg0LLQtdCxLdGB0LDQudGC0LUuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVwb3J0RXJyb3JcIjoge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IFwi0KHQvtC+0LHRidC40YLRjCDQvtCxINC+0YjQuNCx0LrQtVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCLQodC+0L7QsdGJ0LjRgtGMINC+0LEg0L7RiNC40LHQutC1INGBIEFjY2Vzc0Zsb3dcIlxuICAgICAgICB9LFxuICAgICAgICBcIm92ZXJBY2Nlc3NGbG93XCI6e1xuICAgICAgICAgIFwibGFiZWxcIjogXCLQniBBY2Nlc3MtRmxvd1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic3ZcIjoge1xuICAgICAgXCJhY2Nlc3NGbG93XCI6IHtcbiAgICAgICAgXCJvcGVuU3ltYm9sXCI6IHtcbiAgICAgICAgICBcImxhYmVsXCI6IFwiw5ZwcG5hIHRpbGxnw6RuZ2xpZ2hldHNtZW55biBBY2Nlc3NGbG93IGbDtnIgYXR0IGfDtnJhIGluc3TDpGxsbmluZ2FyLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJoZWFkZXJcIjoge1xuICAgICAgICAgIFwiY2xvc2VJY29uXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJOw6RyYmlsZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwibGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiU3Byw6VrICh7e2xhbmd1YWdlfX0pXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIkzDpXRlciBkaWcgw6RuZHJhIEFjY2Vzc0Zsb3ctZ3LDpG5zc25pdHRldHMgc3Byw6VrIG1lZCBlbiBlbmRhIGtsaWNrbmluZy5cIixcbiAgICAgICAgICBcImlucHV0XCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJTw7ZrIGVmdGVyIMO2bnNrYXQgc3Byw6VrLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF2YWlsYWJsZUxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVsOkeGxhIGdyw6Ruc3NuaXR0ZXQgdGlsbCB7e2xhbmd1YWdlfX0gc3Byw6VrLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwidG9vbHNcIjoge1xuICAgICAgICAgIFwiY29udHJhc3RcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIktvbnRyYXN0XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVmlzYXIgd2ViYnBsYXRzZW4gaSBvbGlrYSBrb250cmFzdG5pdsOlZXIuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGlua3NcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkzDpG5rYXJcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJNYXJrZXJhciBhbGxhIGzDpG5rYXIgcMOlIHdlYmJwbGF0c2VuIG1lZCBmw6RyZy5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJiaWdnZXJUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdMO2cnJlIHRleHRcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJGw7Zyc3RvcmFyIHRlY2tlbnNuaXR0ZXQgasOkbWbDtnJ0IG1lZCBkZW4gYWt0dWVsbGEgdGVja2Vuc3Rvcmxla2VuLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRleHRTcGFjaW5nXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUZXh0YXZzdMOlbmRcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLDlmthciBhdnN0w6VuZGV0IG1lbGxhbiB0ZWNrZW4gb2NoIG9yZC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbWFnZXNSZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRhIGJvcnQgYmlsZGVyXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQWxsYSBiaWxka29tcG9uZW50ZXIgcMOlIHdlYmJwbGF0c2VuIMOkciBkb2xkYS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJSYWRow7ZqZFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlJhZGjDtmpkZW4gw7ZrYXMgZsO2ciB2YXJqZSB0ZXh0ZWxlbWVudCBww6Ugd2ViYnNpZGFuLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNhdHVyYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk3DpHR0bmFkXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiV2ViYnBsYXRzZW5zIG3DpHR0bmFkIMO2a2FzIGVsbGVyIG1pbnNrYXMgZsO2ciBhdHQgc8Oka2Vyc3TDpGxsYSBiw6R0dHJlIGzDpHNiYXJoZXQuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW91c2VDdXJzb3JcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk11c2t1cnNvclwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk11c2t1cnNvcm4gZsO2cnN0b3JhcyAzIGfDpW5nZXIgZsO2ciBiw6R0dHJlIGZva3VzLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNpdGVTdHJ1Y3R1cmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIldlYmJwbGF0c3N0cnVrdHVyXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQWxsYSBydWJyaWtlciBvY2ggbMOkbmthciBsaXN0YXMgdW5kZXIgdmFyYW5kcmEgaSBvcmRuaW5nIGF2IHZpa3RpZ2hldCwgdmlsa2V0IGfDtnIgZGV0IGVua2xhcmUgYXR0IG5hdmlnZXJhIHDDpSBzaWRhbi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0b29sdGlwc1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVmVya3R5Z3N0aXBzXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQWxsYSBlbGVtZW50IHNvbSBoYXIgZW4gYHRpdGxlYCBlbGxlciBgbGFiZWxgLWF0dHJpYnV0IHZpc2FyIGV0dCBzeW5saWd0IHZlcmt0eWdzdGlwcyBuw6RyIGR1IHN2ZXBlciDDtnZlciBkZW0gbWVkIG11c2VuLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlYWRhYmxlVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTMOkc2JhciB0ZXh0XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiRW4gbnkgdHlwc25pdHQgbGFkZGFzIGbDtnIgYXR0IGfDtnJhIHRleHRlbiBsw6R0dGFyZSBhdHQgbMOkc2EuIERldCBmaW5ucyBvY2tzw6UgZW4gdHlwc25pdHQgc29tIMOkciBzcGVjaWVsbHQgYW5wYXNzYWQgZsO2ciBkeXNsZWt0aWtlci5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzdG9wQW5pbWF0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdG9wcGEgYW5pbWF0aW9uZXJcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQYXVzYXIgYWxsYSB2aWRlb3Igb2NoIGFuaW1hdGlvbmVyIHDDpSBoZWxhIHdlYmJwbGF0c2VuLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlcG9ydEVycm9yXCI6IHtcbiAgICAgICAgICBcImJ1dHRvblwiOiBcIlJhcHBvcnRlcmEgZmVsXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIlJhcHBvcnRlcmEgZXR0IGZlbCBtZWQgQWNjZXNzRmxvd1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwib3ZlckFjY2Vzc0Zsb3dcIjp7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcIk9tIEFjY2Vzcy1GbG93XCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJza1wiOiB7XG4gICAgICBcImFjY2Vzc0Zsb3dcIjoge1xuICAgICAgICBcIm9wZW5TeW1ib2xcIjoge1xuICAgICAgICAgIFwibGFiZWxcIjogXCJPdHZvcnRlIG1lbnUgZG9zdHVwbm9zdGkgQWNjZXNzRmxvdyBhIHZ5a29uYWp0ZSBuYXN0YXZlbmlhLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJoZWFkZXJcIjoge1xuICAgICAgICAgIFwiY2xvc2VJY29uXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJadsOkxI3FoWVuw70gem9icmF6ZW5pZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwibGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiSmF6eWsgKHt7bGFuZ3VhZ2V9fSlcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwiVW1vxb7FiHVqZSB6bWVuacWlIGphenlrIHJvemhyYW5pYSBBY2Nlc3NGbG93IGplZG7DvW0ga2xpa251dMOtbS5cIixcbiAgICAgICAgICBcImlucHV0XCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWeWjEvmFkYWp0ZSBwb8W+YWRvdmFuw70gamF6eWsuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXZhaWxhYmxlTGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQcmVwbmkgcm96aHJhbmllIG5hIGphenlrIHt7bGFuZ3VhZ2V9fS5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcInRvb2xzXCI6IHtcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJLb250cmFzdFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlpvYnJhenVqZSB3ZWJvdsO6IHN0csOhbmt1IHYgcsO0em55Y2ggw7pyb3ZuaWFjaCBrb250cmFzdHUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGlua3NcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk9ka2F6eVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlp2w71yYXrFiHVqZSB2xaFldGt5IG9ka2F6eSBuYSB3ZWJvdmVqIHN0csOhbmtlIGZhcmJvdS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJiaWdnZXJUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJWw6TEjcWhw60gdGV4dFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlp2w6TEjcWhdWplIHDDrXNtbyB2IHBvcm92bmFuw60gcyBha3R1w6Fsbm91IHZlxL5rb3PFpW91IHDDrXNtYS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0ZXh0U3BhY2luZ1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiUm96b3N0dXAgdGV4dHVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJadsOkxI3FoXVqZSByb3pvc3R1cCBtZWR6aSB6bmFrbWkgYSBzbG92YW1pLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImltYWdlc1JlbW92ZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiT2RzdHLDoW5pxaUgb2Jyw6F6a3lcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWxaFldGt5IG9icsOhemtvdsOpIHBydmt5IG5hIHdlYm92ZWogc3Ryw6Fua2Ugc8O6IHNrcnl0w6kuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGluZUhlaWdodFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVsO9xaFrYSByaWFka3VcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWw73FoWthIHJpYWRrdSBzYSB6dnnFoXVqZSBwcmUga2HFvmTDvSB0ZXh0b3bDvSBlbGVtZW50IG5hIHdlYm92ZWogc3Ryw6Fua2UuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2F0dXJhdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU8O9dG9zxaVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJTw710b3PFpSB3ZWJvdmVqIHN0csOhbmt5IHNhIHp2ecWhdWplIGFsZWJvIHpuacW+dWplLCBhYnkgc2EgemFiZXpwZcSNaWxhIGxlcMWhaWEgxI1pdGF0ZcS+bm9zxaUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW91c2VDdXJzb3JcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkt1cnpvciBtecWhaVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkt1cnpvciBtecWhaSBzYSB6dsOkxI3FoXVqZSAzLWtyw6F0IHByZSBsZXDFoWllIHphb3N0cmVuaWUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2l0ZVN0cnVjdHVyZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwixaB0cnVrdMO6cmEgc3Ryw6Fua3lcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWxaFldGt5IG5hZHBpc3kgYSBvZGthenkgc8O6IHV2ZWRlbsOpIHBvZCBzZWJvdSBwb2TEvmEgZMO0bGXFvml0b3N0aSwgxI1vIHXEvmFoxI11amUgbmF2aWfDoWNpdSBuYSBzdHLDoW5rZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0b29sdGlwc1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGlweSBuYSBuw6FzdHJvamVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWxaFldGt5IHBydmt5LCBrdG9yw6kgbWFqw7ogYXRyaWLDunQgYHRpdGxlYCBhbGVibyBgbGFiZWxgLCB6b2JyYXp1asO6IHZpZGl0ZcS+bsO9IHRpcCBuYSBuw6FzdHJvamUsIGtlxI8gbmEgbmUgcHJlamRldGUgbXnFoW91LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlYWRhYmxlVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwixIxpdGF0ZcS+bsO9IHRleHRcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJOYcSNw610YSBzYSBub3bDvSBww61zbW8sIGFieSBzYSB0ZXh0IHN0YWwgxL5haMWhaWUgxI1pdGF0ZcS+bsO9bS4gSyBkaXNwb3rDrWNpaSBqZSB0aWXFviBww61zbW8gxaFwZWNpw6FsbmUgdXLEjWVuw6kgcHJlIGR5c2xla3Rpa292LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlphc3RhdmnFpSBhbmltw6FjaWVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQb3phc3RhdsOtIHbFoWV0a3kgdmlkZcOhIGEgYW5pbcOhY2llIG5hIGNlbGVqIHdlYm92ZWogc3Ryw6Fua2UuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVwb3J0RXJyb3JcIjoge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IFwiTmFobMOhc2nFpSBjaHlidVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJOYWhsw6FzdGUgY2h5YnUgcyBBY2Nlc3NGbG93XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvdmVyQWNjZXNzRmxvd1wiOntcbiAgICAgICAgICBcImxhYmVsXCI6IFwiTyBBY2Nlc3MtRmxvd1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2xcIjoge1xuICAgICAgXCJhY2Nlc3NGbG93XCI6IHtcbiAgICAgICAgXCJvcGVuU3ltYm9sXCI6IHtcbiAgICAgICAgICBcImxhYmVsXCI6IFwiT2RwcmkgbWVuaSBkb3N0b3Bub3N0aSBBY2Nlc3NGbG93IHphIG5hc3Rhdml0dmUuXCJcbiAgICAgICAgfSxcblxuICAgICAgICBcImhlYWRlclwiOiB7XG4gICAgICAgICAgXCJjbG9zZUljb25cIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBvdmXEjWFuIHBvZ2xlZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwibGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiSmV6aWsgKHt7bGFuZ3VhZ2V9fSlcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwiT21vZ2/EjWEgc3ByZW1lbWJvIGplemlrYSB2bWVzbmlrYSBBY2Nlc3NGbG93IHogZW5pbSBrbGlrb20uXCIsXG4gICAgICAgICAgXCJpbnB1dFwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUG9pxaHEjWl0ZSDFvmVsZW5pIGplemlrLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF2YWlsYWJsZUxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUHJla2xvcGkgdm1lc25payBuYSBqZXppayB7e2xhbmd1YWdlfX0uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJ0b29sc1wiOiB7XG4gICAgICAgICAgXCJjb250cmFzdFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiS29udHJhc3RcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQcmlrYcW+ZSBzcGxldG5vIG1lc3RvIHYgcmF6bGnEjW5paCBrb250cmFzdG5paCByYXZuZWguXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGlua3NcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlBvdmV6YXZlXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUG91ZGFyaSB2c2UgcG92ZXphdmUgbmEgc3BsZXRuZW0gbWVzdHUgeiBiYXJ2by5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJiaWdnZXJUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJWZcSNamUgYmVzZWRpbG9cIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQb3ZlxI1hIHBpc2F2byBnbGVkZSBuYSB0cmVudXRubyB2ZWxpa29zdCBwaXNhdmUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidGV4dFNwYWNpbmdcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlJhem1payBiZXNlZGlsYVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlBvdmXEjWEgcmF6ZGFsam8gbWVkIHpuYWtpIGluIGJlc2VkYW1pLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImltYWdlc1JlbW92ZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiT2RzdHJhbmkgc2xpa2VcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWc2Ugc2xpa292bmUgZWxlbWVudGUgbmEgc3BsZXRuZW0gbWVzdHUgc28gc2tyaXRpLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmVIZWlnaHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlZpxaFpbmEgdnJzdGljZVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlZpxaFpbmEgdnJzdGljZSBzZSBwb3ZlxI1hIHphIHZzYWsgZWxlbWVudCBiZXNlZGlsYSBuYSBzcGxldG5pIHN0cmFuaS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJOYXNpxI1lbm9zdFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk5hc2nEjWVub3N0IHNwbGV0bmVnYSBtZXN0YSBzZSBwb3ZlxI1hIGFsaSB6bWFuasWhYSB6YSBib2xqxaFvIGJlcmxqaXZvc3QuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW91c2VDdXJzb3JcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk1pxaFraW4ga2F6YWxlY1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk1pxaFraW4ga2F6YWxlYyBzZSBwb3ZlxI1hIDMta3JhdCB6YSBib2xqxaFpIGZva3VzLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNpdGVTdHJ1Y3R1cmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlN0cnVrdHVyYSBzcGxldG5lZ2EgbWVzdGFcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWc2kgbmFzbG92aSBpbiBwb3ZlemF2ZSBzbyBuYXZlZGVuaSBlbiBwb2QgZHJ1Z2ltIGdsZWRlIG5hIG5qaWhvdm8gcG9tZW1ibm9zdCwga2FyIG9sYWrFoWEgbmF2aWdhY2lqbyBwbyBzdHJhbmkuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidG9vbHRpcHNcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk5hbWlnaVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlZzaSBlbGVtZW50aSwga2kgaW1ham8gYXRyaWJ1dCBgdGl0bGVgIGFsaSBgbGFiZWxgLCBwcmlrYcW+ZWpvIHZpZG5pIG5hbWlnLCBrbyBzZSB6IG1pxaFrbyBwcmVtYWtuZXRlIG5hZCBuamloLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlYWRhYmxlVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQmVybGppdm8gYmVzZWRpbG9cIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJOYWxvxb5pIHNlIG5vdmEgcGlzYXZhLCBkYSBibyBiZXNlZGlsbyBib2xqIGJlcmxqaXZvLiBOYSB2b2xqbyBqZSB0dWRpIHBpc2F2YSwga2kgamUgcG9zZWJlaiBwcmltZXJuYSB6YSBkaXNsZWt0aWtlLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlVzdGF2aSBhbmltYWNpamVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJaYXVzdGF2aSB2c2UgdmlkZW9wb3NuZXRrZSBpbiBhbmltYWNpamUgbmEgY2Vsb3RuZW0gc3BsZXRuZW0gbWVzdHUuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVwb3J0RXJyb3JcIjoge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IFwiUHJpamF2aSBuYXBha29cIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwiUHJpamF2aXRlIG5hcGFrbyB6IEFjY2Vzc0Zsb3dcIlxuICAgICAgICB9LFxuICAgICAgICBcIm92ZXJBY2Nlc3NGbG93XCI6e1xuICAgICAgICAgIFwibGFiZWxcIjogXCJPIEFjY2Vzcy1GbG93XCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJlc1wiOiB7XG4gICAgICBcImFjY2Vzc0Zsb3dcIjoge1xuICAgICAgICBcIm9wZW5TeW1ib2xcIjoge1xuICAgICAgICAgIFwibGFiZWxcIjogXCJBYnJhIGVsIG1lbsO6IGRlIGFjY2VzaWJpbGlkYWQgZGUgQWNjZXNzRmxvdyBwYXJhIHJlYWxpemFyIGxvcyBhanVzdGVzLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJoZWFkZXJcIjoge1xuICAgICAgICAgIFwiY2xvc2VJY29uXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWaXN0YSBhbXBsaWFkYVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwibGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiSWRpb21hICh7e2xhbmd1YWdlfX0pXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIlBlcm1pdGUgY2FtYmlhciBlbCBpZGlvbWEgZGUgbGEgaW50ZXJmYXogZGUgQWNjZXNzRmxvdyBjb24gdW4gc29sbyBjbGljLlwiLFxuICAgICAgICAgIFwiaW5wdXRcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkJ1c2NhIGVsIGlkaW9tYSBkZXNlYWRvLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF2YWlsYWJsZUxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQ2FtYmlhciBsYSBpbnRlcmZheiBhbCBpZGlvbWEge3tsYW5ndWFnZX19LlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwidG9vbHNcIjoge1xuICAgICAgICAgIFwiY29udHJhc3RcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbnRyYXN0ZVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk11ZXN0cmEgZWwgc2l0aW8gd2ViIGVuIGRpZmVyZW50ZXMgbml2ZWxlcyBkZSBjb250cmFzdGUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGlua3NcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkVubGFjZXNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJSZXNhbHRhIHRvZG9zIGxvcyBlbmxhY2VzIGRlbCBzaXRpbyB3ZWIgY29uIGNvbG9yLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJpZ2dlclRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRleHRvIG3DoXMgZ3JhbmRlXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQXVtZW50YSBlbCB0YW1hw7FvIGRlIGxhIGZ1ZW50ZSBlbiByZWxhY2nDs24gY29uIGVsIHRhbWHDsW8gZGUgZnVlbnRlIGFjdHVhbC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0ZXh0U3BhY2luZ1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRXNwYWNpYWRvIGRlIHRleHRvXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQXVtZW50YSBlbCBlc3BhY2lvIGVudHJlIGNhcmFjdGVyZXMgeSBwYWxhYnJhcy5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbWFnZXNSZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkVsaW1pbmFyIGltw6FnZW5lc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlRvZG9zIGxvcyBlbGVtZW50b3MgZGUgaW1hZ2VuIGVuIGVsIHNpdGlvIHdlYiBlc3TDoW4gb2N1bHRvcy5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJBbHR1cmEgZGUgbMOtbmVhXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTGEgYWx0dXJhIGRlIGzDrW5lYSBzZSBpbmNyZW1lbnRhIHBhcmEgY2FkYSBlbGVtZW50byBkZSB0ZXh0byBlbiBsYSBww6FnaW5hIHdlYi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTYXR1cmFjacOzblwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkxhIHNhdHVyYWNpw7NuIGRlbCBzaXRpbyB3ZWIgc2UgaW5jcmVtZW50YSBvIGRpc21pbnV5ZSBwYXJhIGdhcmFudGl6YXIgdW5hIG1lam9yIGxlZ2liaWxpZGFkLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdXNlQ3Vyc29yXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJDdXJzb3IgZGVsIHJhdMOzblwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkVsIGN1cnNvciBkZWwgcmF0w7NuIHNlIGFtcGzDrWEgMyB2ZWNlcyBwYXJhIHVuIG1lam9yIGVuZm9xdWUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2l0ZVN0cnVjdHVyZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRXN0cnVjdHVyYSBkZWwgc2l0aW9cIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJUb2RvcyBsb3MgdMOtdHVsb3MgeSBlbmxhY2VzIHNlIGVudW1lcmFuIHVubyBkZWJham8gZGVsIG90cm8gZW4gb3JkZW4gZGUgaW1wb3J0YW5jaWEsIGxvIHF1ZSBmYWNpbGl0YSBsYSBuYXZlZ2FjacOzbiBlbiBsYSBww6FnaW5hLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRvb2x0aXBzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdWdlcmVuY2lhc1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlRvZG9zIGxvcyBlbGVtZW50b3MgcXVlIHRpZW5lbiB1biBhdHJpYnV0byBgdGl0bGVgIG8gYGxhYmVsYCBtdWVzdHJhbiB1bmEgc3VnZXJlbmNpYSB2aXNpYmxlIGN1YW5kbyBzZSBwYXNhIGVsIHJhdMOzbiBzb2JyZSBlbGxvcy5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWFkYWJsZVRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRleHRvIGxlZ2libGVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJTZSBjYXJnYSB1bmEgbnVldmEgZnVlbnRlIHBhcmEgaGFjZXIgZWwgdGV4dG8gbcOhcyBsZWdpYmxlLiBUYW1iacOpbiBlc3TDoSBkaXNwb25pYmxlIHVuYSBmdWVudGUgZXNwZWNpYWxtZW50ZSBhZGVjdWFkYSBwYXJhIGRpc2zDqXhpY29zLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRldGVuZXIgYW5pbWFjaW9uZXNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQYXVzYSB0b2RvcyBsb3MgdmlkZW9zIHkgYW5pbWFjaW9uZXMgZW4gdG9kbyBlbCBzaXRpbyB3ZWIuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicmVwb3J0RXJyb3JcIjoge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IFwiSW5mb3JtYXIgZGUgdW4gZXJyb3JcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwiSW5mb3JtYXIgZGUgdW4gZXJyb3IgY29uIEFjY2Vzc0Zsb3dcIlxuICAgICAgICB9LFxuICAgICAgICBcIm92ZXJBY2Nlc3NGbG93XCI6e1xuICAgICAgICAgIFwibGFiZWxcIjogXCJTb2JyZSBBY2Nlc3MtRmxvd1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY3NcIjoge1xuICAgICAgXCJhY2Nlc3NGbG93XCI6IHtcbiAgICAgICAgXCJvcGVuU3ltYm9sXCI6IHtcbiAgICAgICAgICBcImxhYmVsXCI6IFwiT3RldsWZZXRlIG5hYsOtZGt1IHDFmcOtc3R1cG5vc3RpIEFjY2Vzc0Zsb3cgcHJvIHByb3ZlZGVuw60gbmFzdGF2ZW7DrS5cIlxuICAgICAgICB9LFxuXG4gICAgICAgIFwiaGVhZGVyXCI6IHtcbiAgICAgICAgICBcImNsb3NlSWNvblwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiWnbEm3TFoWVuw70gcG9obGVkXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJsYW5ndWFnZXNcIjoge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJKYXp5ayAoe3tsYW5ndWFnZX19KVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJVbW/FvsWIdWplIHptxJtuaXQgamF6eWsgcm96aHJhbsOtIEFjY2Vzc0Zsb3cgamVkbsOtbSBrbGlrbnV0w61tLlwiLFxuICAgICAgICAgIFwiaW5wdXRcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlZ5aGxlZGVqdGUgcG/FvmFkb3ZhbsO9IGphenlrLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF2YWlsYWJsZUxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUMWZZXBuxJt0ZSByb3pocmFuw60gbmEgamF6eWsge3tsYW5ndWFnZX19LlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwidG9vbHNcIjoge1xuICAgICAgICAgIFwiY29udHJhc3RcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIktvbnRyYXN0XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiWm9icmF6dWplIHdlYm92b3Ugc3Ryw6Fua3UgdiByxa96bsO9Y2ggw7pyb3Zuw61jaCBrb250cmFzdHUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGlua3NcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk9ka2F6eVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlp2w71yYXrFiHVqZSB2xaFlY2hueSBvZGthenkgbmEgd2Vib3bDqSBzdHLDoW5jZSBiYXJ2b3UuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYmlnZ2VyVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVsSbdMWhw60gdGV4dFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlp2xJt0xaF1amUgcMOtc21vIHZlIHNyb3Zuw6Fuw60gcyBha3R1w6FsbsOtIHZlbGlrb3N0w60gcMOtc21hLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRleHRTcGFjaW5nXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJPZHN0dXAgdGV4dHVcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJadsSbdMWhdWplIG9kc3R1cCBtZXppIHpuYWt5IGEgc2xvdnkuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW1hZ2VzUmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJPZHN0cmFuaXQgb2Jyw6F6a3lcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWxaFlY2hueSBvYnLDoXprb3bDqSBwcnZreSBuYSB3ZWJvdsOpIHN0csOhbmNlIGpzb3Ugc2tyeXR5LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmVIZWlnaHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlbDvcWha2EgxZnDoWRrdVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlbDvcWha2EgxZnDoWRrdSBqZSB6dsO9xaFlbmEgcHJvIGthxb5kw70gdGV4dG92w70gcHJ2ZWsgbmEgd2Vib3bDqSBzdHLDoW5jZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTeXRvc3RcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJTeXRvc3Qgd2Vib3bDqSBzdHLDoW5reSBqZSB6dsO9xaFlbmEgbmVibyBzbsOtxb5lbmEgcHJvIHphamnFoXTEm27DrSBsZXDFocOtIMSNaXRlbG5vc3RpLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdXNlQ3Vyc29yXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJLdXJ6b3IgbXnFoWlcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJLdXJ6b3IgbXnFoWkgamUgenbEm3TFoWVuIDNrcsOhdCBwcm8gbGVwxaHDrSB6YW9zdMWZZW7DrS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaXRlU3RydWN0dXJlXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdHJ1a3R1cmEgc3Ryw6Fua3lcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJWxaFlY2hueSBuYWRwaXN5IGEgb2RrYXp5IGpzb3UgdXZlZGVueSBwb2Qgc2Vib3UgcG9kbGUgZMWvbGXFvml0b3N0aSwgY2/FviB1c25hZMWIdWplIG5hdmlnYWNpIG5hIHN0csOhbmNlLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRvb2x0aXBzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUaXB5XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVsWhZWNobnkgcHJ2a3ksIGt0ZXLDqSBtYWrDrSBhdHJpYnV0IGB0aXRsZWAgbmVibyBgbGFiZWxgLCB6b2JyYXp1asOtIHZpZGl0ZWxuw70gdGlwLCBrZHnFviBuYSBuxJsgbmFqZWRldGUgbXnFocOtLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlYWRhYmxlVGV4dFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwixIxpdGVsbsO9IHRleHRcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJOYcSNdGUgc2Ugbm92w70gZm9udCBwcm8gemxlcMWhZW7DrSDEjWl0ZWxub3N0aSB0ZXh0dS4gSyBkaXNwb3ppY2kgamUgdGFrw6kgZm9udCBzcGVjacOhbG7EmyBuYXZyxb5lbsO9IHBybyBkeXNsZWt0aWt5LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlphc3Rhdml0IGFuaW1hY2VcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQb3phc3RhdsOtIHbFoWVjaG55IHZpZGVhIGEgYW5pbWFjZSBuYSBjZWzDqW0gd2VidS5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXBvcnRFcnJvclwiOiB7XG4gICAgICAgICAgXCJidXR0b25cIjogXCJOYWhsw6FzaXQgY2h5YnVcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwiTmFobMOhc2l0IGNoeWJ1IHMgQWNjZXNzRmxvd1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwib3ZlckFjY2Vzc0Zsb3dcIjp7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcIk8gQWNjZXNzLUZsb3dcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInRyXCI6IHtcbiAgICAgIFwiYWNjZXNzRmxvd1wiOiB7XG4gICAgICAgIFwib3BlblN5bWJvbFwiOiB7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcIkF5YXJsYXIgeWFwbWFrIGnDp2luIGVyacWfaWxlYmlsaXJsaWsgbWVuw7xzw7wgQWNjZXNzRmxvdyd1IGHDp8Sxbi5cIlxuICAgICAgICB9LFxuXG4gICAgICAgIFwiaGVhZGVyXCI6IHtcbiAgICAgICAgICBcImNsb3NlSWNvblwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQsO8ecO8dMO8bG3DvMWfIGfDtnLDvG7DvG1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcImxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIkRpbCAoe3tsYW5ndWFnZX19KVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJBY2Nlc3NGbG93IGFyYXnDvHogZGlsaW5pIHRlayB0xLFrbGFtYXlsYSBkZcSfacWfdGlybWVuaXppIHNhxJ9sYXIuXCIsXG4gICAgICAgICAgXCJpbnB1dFwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQXJhbmFuIGRpbGkgYXJhecSxbi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJhdmFpbGFibGVMYW5ndWFnZXNcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkFyYXnDvHrDvCB7e2xhbmd1YWdlfX0gZGlsaW5lIGRlxJ9pxZ90aXJpbi5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcInRvb2xzXCI6IHtcbiAgICAgICAgICBcImNvbnRyYXN0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJLb250cmFzdFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIldlYiBzaXRlc2luaSBmYXJrbMSxIGtvbnRyYXN0IHNldml5ZWxlcmluZGUgZ8O2c3RlcmlyLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmtzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJCYcSfbGFudMSxbGFyXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiV2ViIHNpdGVzaW5kZWtpIHTDvG0gYmHEn2xhbnTEsWxhcsSxIHJlbmsgaWxlIHZ1cmd1bGFyLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJpZ2dlclRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRhaGEgYsO8ecO8ayBtZXRpblwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIk1ldmN1dCBtZXRpbiBib3l1dHVuYSBnw7ZyZSB5YXrEsSB0aXBpbmkgYsO8ecO8dMO8ci5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0ZXh0U3BhY2luZ1wiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTWV0aW4gYXJhbMSxxJ/EsVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkthcmFrdGVybGVyIHZlIGtlbGltZWxlciBhcmFzxLFuZGFraSBib8WfbHXEn3UgYXJ0xLFyxLFyLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImltYWdlc1JlbW92ZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiUmVzaW1sZXJpIGthbGTEsXJcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJXZWIgc2l0ZXNpbmRla2kgdMO8bSByZXNpbSDDtsSfZWxlcmkgZ2l6bGlkaXIuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGluZUhlaWdodFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU2F0xLFyIHnDvGtzZWtsacSfaVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIldlYiBzYXlmYXPEsW5kYWtpIGhlciBtZXRpbiDDtsSfZXNpIGnDp2luIHNhdMSxciB5w7xrc2VrbGnEn2kgYXJ0xLFyxLFsxLFyLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNhdHVyYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRveW1hXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiV2ViIHNpdGVzaW5pbiBkb3lndW5sdcSfdSBhcnTEsXLEsWzEsXIgdmV5YSBhemFsdMSxbMSxciwgZGFoYSBpeWkgb2t1bmFiaWxpcmxpayBzYcSfbGFtYWsgacOnaW4uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW91c2VDdXJzb3JcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkZhcmUgaW1sZWNpXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiRmFyZSBpbWxlY2kgb2Rha2xhbm1hecSxIGFydMSxcm1hayBpw6dpbiAzIGthdCBiw7x5w7x0w7xsw7xyLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNpdGVTdHJ1Y3R1cmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNpdGUgeWFwxLFzxLFcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJUw7xtIGJhxZ9sxLFrbGFyIHZlIGJhxJ9sYW50xLFsYXIgw7ZuZW0gc8SxcmFzxLFuYSBnw7ZyZSBhbHQgYWx0YSBsaXN0ZWxlbmlyLCBzYXlmYWRhIGdlemlubWV5aSBrb2xheWxhxZ90xLFyxLFyLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRvb2x0aXBzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLEsHB1w6dsYXLEsVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkJpciBgdGl0bGVgIHZleWEgYGxhYmVsYCBuaXRlbGnEn2luZSBzYWhpcCB0w7xtIMO2xJ9lbGVyLCBmYXJlIGlsZSDDvHplcmxlcmluZSBnZWxpbmRpxJ9pbmRlIGfDtnLDvG7DvHIgYmlyIGFyYcOnIGlwdWN1IGfDtnLDvG50w7xsZXIuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVhZGFibGVUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJPa3VuYWJpbGlyIG1ldGluXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTWV0bmkgZGFoYSBva3VuYWJpbGlyIGhhbGUgZ2V0aXJtZWsgacOnaW4geWVuaSBiaXIgeWF6xLEgdGlwaSB5w7xrbGVuaXIuIERpc2xla3NpIGhhc3RhbGFyxLEgacOnaW4gw7Z6ZWwgb2xhcmFrIHRhc2FybGFubcSxxZ8gYmlyIHlhesSxIHRpcGkgZGUgbWV2Y3V0dHVyLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkFuaW1hc3lvbmxhcsSxIGR1cmR1clwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlcG9ydEVycm9yXCI6IHtcbiAgICAgICAgICBcImJ1dHRvblwiOiBcIkhhdGEgYmlsZGlyXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIkFjY2Vzc0Zsb3cgaWxlIGlsZ2lsaSBiaXIgaGF0YXnEsSBiaWxkaXJpbi5cIlxuICAgICAgICB9LFxuICAgICAgICBcIm92ZXJBY2Nlc3NGbG93XCI6e1xuICAgICAgICAgIFwibGFiZWxcIjogXCJBY2Nlc3MtRmxvdyBIYWtrxLFuZGFcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInVrXCI6IHtcbiAgICAgIFwiYWNjZXNzRmxvd1wiOiB7XG4gICAgICAgIFwib3BlblN5bWJvbFwiOiB7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcItCS0ZbQtNC60YDQuNC50YLQtSDQvNC10L3RjiDQtNC+0YHRgtGD0L/QvdC+0YHRgtGWIEFjY2Vzc0Zsb3csINGJ0L7QsSDQstC90LXRgdGC0Lgg0L3QsNC70LDRiNGC0YPQstCw0L3QvdGPLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJoZWFkZXJcIjoge1xuICAgICAgICAgIFwiY2xvc2VJY29uXCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQl9Cx0ZbQu9GM0YjQtdC90LjQuSDQstC40LPQu9GP0LRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcImxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcItCc0L7QstCwICh7e2xhbmd1YWdlfX0pXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcItCU0L7Qt9Cy0L7Qu9GP0ZQg0LfQvNGW0L3QuNGC0Lgg0LzQvtCy0YMg0ZbQvdGC0LXRgNGE0LXQudGB0YMgQWNjZXNzRmxvdyDQvtC00L3QuNC8INC60LvRltC60L7QvC5cIixcbiAgICAgICAgICBcImlucHV0XCI6IHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQqNGD0LrQsNC50YLQtSDQv9C+0YLRgNGW0LHQvdGDINC80L7QstGDLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF2YWlsYWJsZUxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi0J/QtdGA0LXQvNC60L3RltGC0Ywg0ZbQvdGC0LXRgNGE0LXQudGBINC90LAg0LzQvtCy0YMge3tsYW5ndWFnZX19LlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIFwidG9vbHNcIjoge1xuICAgICAgICAgIFwiY29udHJhc3RcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCa0L7QvdGC0YDQsNGB0YJcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQn9C+0LrQsNC30YPRlCDQstC10LEt0YHQsNC50YIg0L3QsCDRgNGW0LfQvdC40YUg0YDRltCy0L3Rj9GFINC60L7QvdGC0YDQsNGB0YLQvdC+0YHRgtGWLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmtzXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLQn9C+0YHQuNC70LDQvdC90Y9cIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQktC40LTRltC70Y/RlCDQstGB0ZYg0L/QvtGB0LjQu9Cw0L3QvdGPINC90LAg0LLQtdCxLdGB0LDQudGC0ZYg0LrQvtC70YzQvtGA0L7QvC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJiaWdnZXJUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLQl9Cx0ZbQu9GM0YjQtdC90LjQuSDRgtC10LrRgdGCXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi0JfQsdGW0LvRjNGI0YPRlCDRiNGA0LjRhNGCINC/0L7RgNGW0LLQvdGP0L3QviDQtyDQv9C+0YLQvtGH0L3QuNC8INGA0L7Qt9C80ZbRgNC+0Lwg0YjRgNC40YTRgtGDLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInRleHRTcGFjaW5nXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLQnNGW0LbRgNGP0LTQutC+0LLQuNC5INGW0L3RgtC10YDQstCw0LtcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQl9Cx0ZbQu9GM0YjRg9GUINCy0ZbQtNGB0YLQsNC90Ywg0LzRltC2INGB0LjQvNCy0L7Qu9Cw0LzQuCDRgtCwINGB0LvQvtCy0LDQvNC4LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImltYWdlc1JlbW92ZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi0JLQuNC00LDQu9C40YLQuCDQt9C+0LHRgNCw0LbQtdC90L3Rj1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItCj0YHRliDQtdC70LXQvNC10L3RgtC4INC30L7QsdGA0LDQttC10L3QvdGPINC90LAg0LLQtdCxLdGB0LDQudGC0ZYg0L/RgNC40YXQvtCy0LDQvdGWLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImxpbmVIZWlnaHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCS0LjRgdC+0YLQsCDRgNGP0LTQutCwXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi0JLQuNGB0L7RgtCwINGA0Y/QtNC60LAg0LfQsdGW0LvRjNGI0YPRlNGC0YzRgdGPINC00LvRjyDQutC+0LbQvdC+0LPQviDRgtC10LrRgdGC0L7QstC+0LPQviDQtdC70LXQvNC10L3RgtCwINC90LAg0LLQtdCxLdGB0YLQvtGA0ZbQvdGG0ZYuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2F0dXJhdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi0J3QsNGB0LjRh9C10L3RltGB0YLRjFwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItCd0LDRgdC40YfQtdC90ZbRgdGC0Ywg0LLQtdCxLdGB0LDQudGC0YMg0LfQsdGW0LvRjNGI0YPRlNGC0YzRgdGPINCw0LHQviDQt9C80LXQvdGI0YPRlNGC0YzRgdGPINC00LvRjyDQt9Cw0LHQtdC30L/QtdGH0LXQvdC90Y8g0LrRgNCw0YnQvtGXINGH0LjRgtCw0LHQtdC70YzQvdC+0YHRgtGWLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdXNlQ3Vyc29yXCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCLQmtGD0YDRgdC+0YAg0LzQuNGI0ZZcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQmtGD0YDRgdC+0YAg0LzQuNGI0ZYg0LfQsdGW0LvRjNGI0YPRlNGC0YzRgdGPINCyIDMg0YDQsNC30Lgg0LTQu9GPINC60YDQsNGJ0L7Qs9C+INGE0L7QutGD0YHRg9Cy0LDQvdC90Y8uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2l0ZVN0cnVjdHVyZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi0KHRgtGA0YPQutGC0YPRgNCwINGB0LDQudGC0YNcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQo9GB0ZYg0LfQsNCz0L7Qu9C+0LLQutC4INGC0LAg0L/QvtGB0LjQu9Cw0L3QvdGPINC/0LXRgNC10YDQsNGF0L7QstCw0L3RliDQvtC00LjQvSDQv9GW0LQg0L7QtNC90LjQvCDQsiDQv9C+0YDRj9C00LrRgyDQstCw0LbQu9C40LLQvtGB0YLRliwg0YnQviDQv9C+0LvQtdCz0YjRg9GUINC90LDQstGW0LPQsNGG0ZbRjiDQvdCwINGB0YLQvtGA0ZbQvdGG0ZYuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidG9vbHRpcHNcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCf0ZbQtNC60LDQt9C60LhcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCLQo9GB0ZYg0LXQu9C10LzQtdC90YLQuCwg0Y/QutGWINC80LDRjtGC0Ywg0LDRgtGA0LjQsdGD0YIgYHRpdGxlYCDQsNCx0L4gYGxhYmVsYCwg0L/QvtC60LDQt9GD0Y7RgtGMINCy0LjQtNC40LzRgyDQv9GW0LTQutCw0LfQutGDINC00LvRjyDRltC90YHRgtGA0YPQvNC10L3RgtGW0LIg0L/RgNC4INC90LDQstC10LTQtdC90L3RliDQvdCwINC90LjRhSDQutGD0YDRgdC+0YDQsCDQvNC40YjRli5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWFkYWJsZVRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcItCn0LjRgtCw0LHQtdC70YzQvdC40Lkg0YLQtdC60YHRglwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcItCX0LDQstCw0L3RgtCw0LbRg9GU0YLRjNGB0Y8g0L3QvtCy0LjQuSDRiNGA0LjRhNGCINC00LvRjyDQv9C+0LvRltC/0YjQtdC90L3RjyDRh9C40YLQsNCx0LXQu9GM0L3QvtGB0YLRliDRgtC10LrRgdGC0YMuINCi0LDQutC+0LYg0LTQvtGB0YLRg9C/0L3QuNC5INGI0YDQuNGE0YIsINGB0L/QtdGG0ZbQsNC70YzQvdC+INC/0YDQuNC30L3QsNGH0LXQvdC40Lkg0LTQu9GPINC00LjRgdC70LXQutGB0ZbQutGW0LIuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3RvcEFuaW1hdGlvblwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwi0JfRg9C/0LjQvdC40YLQuCDQsNC90ZbQvNCw0YbRltGOXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwi0J/RgNC40LfRg9C/0LjQvdGP0ZQg0LLRgdGWINCy0ZbQtNC10L4g0YLQsCDQsNC90ZbQvNCw0YbRltGXINC90LAg0LLRgdGM0L7QvNGDINCy0LXQsS3RgdCw0LnRgtGWLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlcG9ydEVycm9yXCI6IHtcbiAgICAgICAgICBcImJ1dHRvblwiOiBcItCf0L7QstGW0LTQvtC80LjRgtC4INC/0YDQviDQv9C+0LzQuNC70LrRg1wiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCLQn9C+0LLRltC00L7QvNC40YLQuCDQv9GA0L4g0L/QvtC80LjQu9C60YMg0LcgQWNjZXNzRmxvd1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwib3ZlckFjY2Vzc0Zsb3dcIjp7XG4gICAgICAgICAgXCJsYWJlbFwiOiBcItCf0YDQviBBY2Nlc3MtRmxvd1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiaHVcIjoge1xuICAgICAgXCJhY2Nlc3NGbG93XCI6IHtcbiAgICAgICAgXCJvcGVuU3ltYm9sXCI6IHtcbiAgICAgICAgICBcImxhYmVsXCI6IFwiTnlpc3NhIG1lZyBheiBBY2Nlc3NGbG93IGhvenrDoWbDqXJoZXTFkXPDqWdpIG1lbsO8dCBhIGJlw6FsbMOtdMOhc29rIGVsdsOpZ3rDqXPDqWhlei5cIlxuICAgICAgICB9LFxuXG4gICAgICAgIFwiaGVhZGVyXCI6IHtcbiAgICAgICAgICBcImNsb3NlSWNvblwiOiB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTmFnecOtdG90dCBuw6l6ZXRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBcImxhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIk55ZWx2ICh7e2xhbmd1YWdlfX0pXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIkxlaGV0xZF2w6kgdGVzemkgYXogQWNjZXNzRmxvdyBmZWzDvGxldCBueWVsdsOpbmVrIGVneWV0bGVuIGthdHRpbnTDoXNzYWwgdMO2cnTDqW7FkSBtZWd2w6FsdG96dGF0w6Fzw6F0LlwiLFxuICAgICAgICAgIFwiaW5wdXRcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIktlcmVzc2UgbWVnIGEga8OtdsOhbnQgbnllbHZldC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJhdmFpbGFibGVMYW5ndWFnZXNcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlbDoWx0c29uIGF6IHt7bGFuZ3VhZ2V9fSBueWVsdsWxIGZlbMO8bGV0cmUuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJ0b29sc1wiOiB7XG4gICAgICAgICAgXCJjb250cmFzdFwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiS29udHJhc3p0XCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQSB3ZWJoZWx5ZXQga8O8bMO2bmLDtnrFkSBrb250cmFzenQgc3ppbnRla2VuIGplbGVuw610aSBtZWcuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibGlua3NcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkhpdmF0a296w6Fzb2tcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJBeiDDtnNzemVzIGhpdmF0a296w6FzdCBhIHdlYmhlbHllbiBzesOtbm5lbCBraWVtZWxpLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImJpZ2dlclRleHRcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk5hZ3lvYmIgc3rDtnZlZ1wiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkEgYmV0xbFtw6lyZXRldCBheiBha3R1w6FsaXMgYmV0xbFtw6lyZXRoZXoga8OpcGVzdCBuYWd5w610amEuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidGV4dFNwYWNpbmdcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlN6w7Z2ZWd0w6F2b2xzw6FnXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTsO2dmVsaSBhIGthcmFrdGVyZWsgw6lzIHN6YXZhayBrw7Z6w7Z0dGkgdMOhdm9sc8OhZ290LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImltYWdlc1JlbW92ZVwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiS8OpcGVrIGVsdMOhdm9sw610w6FzYVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkF6IMO2c3N6ZXMga8OpcGVsZW0gYSB3ZWJoZWx5ZW4gZWwgdmFuIHJlanR2ZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTb3IgbWFnYXNzw6FnYVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkEgc29yIG1hZ2Fzc8OhZ2EgbWluZGVuIHN6w7Z2ZWdlbGVtIGVzZXTDqWJlbiBuw7Z2ZWtzemlrIGEgd2ViaGVseWVuLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNhdHVyYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRlbMOtdGV0dHPDqWdcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJBIHdlYmhlbHkgdGVsw610ZXR0c8OpZ2UgbsO2dmVrc3ppayB2YWd5IGNzw7Zra2VuIGEgam9iYiBvbHZhc2hhdMOzc8OhZyDDqXJkZWvDqWJlbi5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3VzZUN1cnNvclwiOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRWfDqXJrdXJ6b3JcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJBeiBlZ8Opcmt1cnpvciAzLXN6b3Jvc8OhcmEgbmFnecOtdHZhIGpvYmIgZsOza3VzesOhbMOhc3QgYml6dG9zw610LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNpdGVTdHJ1Y3R1cmVcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIldlYmhlbHkgc3plcmtlemV0ZVwiLFxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkF6IMO2c3N6ZXMgY8OtbSDDqXMgaGl2YXRrb3rDoXMgZm9udG9zc8OhZ3VrIHNvcnJlbmRqw6liZW4gZWd5bcOhcyBhbGF0dCB2YW5uYWsgZmVsc29yb2x2YSwgYW1pIG1lZ2vDtm5uecOtdGkgYXogb2xkYWxvbiB2YWzDsyBuYXZpZ8OhY2nDs3QuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidG9vbHRpcHNcIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkVzemvDtnpsZcOtcsOhc29rXCIsXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQXogw7Zzc3plcyBlbGVtLCBhbWVseW5layBgdGl0bGVgIHZhZ3kgYGxhYmVsYCBhdHRyaWLDunR1bWEgdmFuLCBsw6F0aGF0w7MgZXN6a8O2emxlw61yw6FzdCBqZWxlbsOtdCBtZWcsIGFtaWtvciBheiBlZ8OpcnJlbCByw6FqdWsgbXV0YXQuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVhZGFibGVUZXh0XCI6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJPbHZhc2hhdMOzIHN6w7Z2ZWdcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJFZ3kgw7pqIGJldMWxdMOtcHVzIGJldMO2bHTDqXNlIGEgc3rDtnZlZyBvbHZhc2hhdMOzc8OhZ8OhbmFrIGphdsOtdMOhc2Egw6lyZGVrw6liZW4uIEV6ZW5rw612w7xsIGVsw6lyaGV0xZEgZWd5IGJldMWxdMOtcHVzLCBhbWVseSBraWZlamV6ZXR0ZW4gZGlzemxleGnDoXNvayBzesOhbcOhcmEga8Opc3rDvGx0LlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN0b3BBbmltYXRpb25cIjoge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkFuaW3DoWNpw7NrIGxlw6FsbMOtdMOhc2FcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJBeiDDtnNzemVzIHZpZGXDs3Qgw6lzIGFuaW3DoWNpw7N0IGEgd2ViaGVseWVuIGxlw6FsbMOtdGphLlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlcG9ydEVycm9yXCI6IHtcbiAgICAgICAgICBcImJ1dHRvblwiOiBcIkhpYmEgYmVqZWxlbnTDqXNlXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIkhpYmEgYmVqZWxlbnTDqXNlIGF6IEFjY2Vzc0Zsb3cgaGFzem7DoWxhdMOhdmFsXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvdmVyQWNjZXNzRmxvd1wiOntcbiAgICAgICAgICBcImxhYmVsXCI6IFwiQXogQWNjZXNzLUZsb3ctcsOzbFwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc2V0TGFuZ3VhZ2UobGFuZzogc3RyaW5nKSB7XG4gICAgdGhpcy5sYW5ndWFnZVN1YmplY3QubmV4dChsYW5nKTtcbiAgfVxuXG4gIHRyYW5zbGF0ZShrZXk6IHN0cmluZywgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHN0cmluZyB7XG4gICAgY29uc3QgbGFuZyA9IHRoaXMubGFuZ3VhZ2VTdWJqZWN0LmdldFZhbHVlKCk7XG4gICAgbGV0IHRyYW5zbGF0aW9uID0gdGhpcy5nZXRUcmFuc2xhdGlvbih0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSwga2V5LnNwbGl0KCcuJykpO1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIHRyYW5zbGF0aW9uID0gdGhpcy5yZXBsYWNlUGFyYW1zKHRyYW5zbGF0aW9uLCBwYXJhbXMpO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNsYXRpb247XG4gIH1cblxuICBwcml2YXRlIGdldFRyYW5zbGF0aW9uKHRyYW5zbGF0aW9uczogYW55LCBrZXlzOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGtleXMucmVkdWNlKChvYmosIGtleSkgPT4gb2JqICYmIG9ialtrZXldLCB0cmFuc2xhdGlvbnMpIHx8IGtleXMuam9pbignLicpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXBsYWNlUGFyYW1zKHRyYW5zbGF0aW9uOiBzdHJpbmcsIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhcmFtcykucmVkdWNlKChzdHIsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYHt7JHtrZXl9fX1gLCAnZycpLCBwYXJhbXNba2V5XSk7XG4gICAgfSwgdHJhbnNsYXRpb24pO1xuICB9XG59XG4iXX0=