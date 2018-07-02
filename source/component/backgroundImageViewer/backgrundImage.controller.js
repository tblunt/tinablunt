import { observable, intercept, observe } from "mobx";

class BackgroundImageController {
	navigationItems = [
		{
			title: 'am',
			color: 'yellow'
		},
		{
			title: 'know',
			color: 'red'
		},
		{
			title: 'do',
			color: 'green'
		}
	]

	hoveredItem = observable({
		title: null,
	});
	
	
	constructor() {
		
	}

	setHovered(navItemTitle) {
		this.hoveredItem.title = navItemTitle;
	}
	
}


var backgroundImageController = new BackgroundImageController();

export default backgroundImageController;
