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
                "Jag är utbildad",
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
                "i en basketfamilj och ägnade 12 år och MYCKET tid åt min älskade sport. Jag tror att basketkarriären står för väldigt mycket av den jag är idag, mestadels för att det gick åt helvete. Mitt eget sinne och lagets dynamik kom väldigt ofta i vägen för vinst, vilket lärde mig extremt mycket.",
                "Projects":
                "Projekt",

                "Development":
                "Utveckling",
                "Leadership":
                "Ledarskap",

                "1. People have problems.":
                "1. Folk har problem.",
                "2. People are willing to pay money to eliminate their problems.":
                "2. Folk är villiga att betala pengar för att få sina problem lösta.",
                "3. Other people can therefore make money on solving people's problems.":
                "3. Andra folk kan därför tjäna pengar på att lösa folks problem.",
                "Not really rocket science! This only explains the foundation to very many business opportunities.":
                "Inte raketforskning direkt! Ovan ser du bara grunden till väldigt många affärsmöjligheter.",
                "On the other hand, what really is rocket science is how this super simple pattern gets forgotten and lost, especially in the tech industry. By some weird coincidence, people tend to forget their payed mission of solving someone else’s problem, and the focus is put on technics, solution and market strategy. It’s not the craziest focus, but entirely irrelevant if you don’t have control over the foundation of your business case: people and their problems.":
                "Vad som däremot är raketforskning är hur den här superenkla grunden ofta glöms bort, speciellt inom IT-världen. Man har en tendens att glömma folk och glömma problemen. Istället är det teknik, lösning och verksamhet man pratar om för jämnan. Det är inte helt galet fokus, men totalt irrelevant om man inte har koll på grunden till affärsmöjligheten: folket och deras problem. ",
                "I am really passionate about solving problems. The passion mostly lies in that I like to do successful things. It gives me a lot more pleasure than doing the unsuccessful ones. As a developer I quickly realized how much more than sharp code skills that is required for a team or an organization to produce relevant problem solving solutions. The thing that separates the failed projects from the successful ones always always always lies in the use and the users. I have seen and done to many “solutions” that end up with no one using it. That's not problem solving. That's wasting time.":
                'Jag brinner för att lösa problemen. Egentligen för att jag i grund och botten gillar att göra framgångsrika grejer. Det är mycket roligare än alla de andra grejerna. Vad man som utvecklare snabbt inser är att det krävs mycket mer av ett team än grymma kodskills för att få vara med i en lyckad produkts historia. Det som särskiljer ett lyckat projekt från de misslyckade handlar alltid alltid alltid om användningen och användarna. Jag har sett och varit involverad i allt för många ”lösningar” som slutar med att ingen använder dem. Det är INTE problemlösning. Det är bortkastad tid!'

            }
        }

    }
}


var T = new Translate();


export default T;
