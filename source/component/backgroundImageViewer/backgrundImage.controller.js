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

	highlightedItem = observable({
		hovered: null,
		selected: null
	});
	
	
	constructor() {
		
	}

	setHovered(navItemTitle) {
		this.highlightedItem.hovered = navItemTitle;
	}

	setSelected(navItemTitle) {
		this.highlightedItem.selected = (navItemTitle != this.highlightedItem.selected) ? navItemTitle : null;	
	}
	
}


var backgroundImageController = new BackgroundImageController();

export default backgroundImageController;
