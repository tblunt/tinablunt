import { observable } from "mobx";

class Translate {
	localeCode;
    onLocaleChanged;
    
    locale = observable({
        code: 'en'
    })
	
	
	constructor() {
        this.data = this.getData();
		
		// Use first two letters to work cross browser. 
		// Safari defines language codes as "se-SV" but Chrome "se" 
        this.localeCode = 'en';//navigator.language.substring(0,2);
        
		this.onLocaleChanged = function () {};
	}
	
	
	setLocale(localeCode) {
        this.localeCode = localeCode;
        this.locale.code = localeCode;
		
		if (typeof this.onLocaleChanged == "function") {
			this.onLocaleChanged(localeCode);
		}
	}
		
	
	getLocale() {
		return this.localeCode;
	}
	  
    
	setOnLocaleChanged(onLocaleChanged) {
		this.onLocaleChanged = onLocaleChanged;
		
		return this;
    }
    

    replace(text, data) {
        for (var key in data) { var value = data[key];
            text = text.replace('%' + key + '%', value);
        }
        
        return text;
    }
	
	
	t(textToTranslate) {
        
		var locale = this.getLocale();
		
		var languageDataLanguage = this.data[locale];
		
		if (typeof languageDataLanguage === "undefined") {
			languageDataLanguage = this.data['en'];
		}
		
        var translatedText = languageDataLanguage[textToTranslate];
        
		if (typeof translatedText === "undefined") {
			return this.replace(textToTranslate, languageDataLanguage);
		}
		
		return this.replace(translatedText, languageDataLanguage);
    }
    

    getData() {
        return {
            "en": {},
            "sv": {
                "Hi!":
                "Hej!",
                "I’m Tina Blunt, a swedish UX-design-developer":
                "Jag heter Tina Blunt och är en utvecklande UX-designer",
                "and this is":
                "och det här är",
                "what I":
                "vad jag",
                "am": 
                "är",
                "know": 
                "kan",
                "do": 
                "gör",
                "På svenska?": 
                "In english?",
                "I am": 
                "Jag är",
                "an outgoing and driven lady in my thirties. I am born and raised in Stockholm, but my current home is in Norrköping (and has been for more than ten years now).": 
                "en social och driven dam i trettioårsåldern. Jag är född och uppväxt i Stockholm men har sedan mer än 10 år tillbaka bott i Norrköping.",
                "I studied": 
                "Jag pluggade",
                "master of science in media technology where my main focus was software development, design and information visualization.": 
                "civilingenjör i medieteknik, där jag inriktade mig mot mjukvaru-utveckling, design och informationsvisualisering.",
                "I started working": 
                "Jag började jobba",
                "in the advertising industry as a front-end devoloper with business to business compaign sites and apps. After that I became an IT consultant and started working on a lot more business critical systems and realized the power and importans of great UX and all its processes and tools.": 
                "i B2B-reklambranchen som front end utvecklare för kampanjwebbar och appar. Efter det blev jag IT-konsult och arbetade med mycket mer affärskritiska system och insåg snabbt vikten av UX-design och dess processer och verktyg. ",
                "I now work": 
                "Nu jobbar jag",
                "as a technical UX-designer. Mainly with interaction design, but I have a tendancy to demand that projects apply a broader spectrum of the design process. Which often lands on my table to execute. I haven't left the coding world, but now I only deliver specific Angular or React components (especially because I love coding graphs) or provide front-end architectural support.": 
                "som teknisk UX-designer med framför allt interaktionsdesign. Eftersom jag har en tendens att alltid kräva att projekt tar in ett större spektrum av designprocessen, hamnar det oftast på mitt bort att utföra.",
                "When I don't work":
                "När jag inte jobbar",
                "I spend a lot of time sewing clothes, watching series, rock climbing and drinking beer with my friends and family.":
                "spenderar jag mycket tid med att sy kläder, kolla på serier, klättra och att dricka öl med när och kära.",
                "I grew up":
                "Jag växte upp",
                "in a basketball family and ended up dedicating 12 years and a LOT of time to the game (until I injured my knee for the last time). I think my basketball career built the ground I stand on today. Mostly because it went to hell. Nothing went as I planned. My own mind and the team dynamics came in the way of victory so many times. It taught me a lot. ":
                "i en basketfamilj och ägnade 12 år och MYCKET tid åt min älskade sport. Jag tror att basketkarriären står för väldig mycket att den jag är idag, mestadels för att det gick åt helvete. Mitt eget sinne och lagets dynamik kom väldigt ofta ivägen för vinst, vilket lärde mig extremt mycket."
            }
        }

    }
}


var T = new Translate();


export default T;
