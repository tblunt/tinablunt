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

	setHovered(navItem) {
		this.highlightedItem.hovered = navItem;
	}

	setSelected(navItem) {
		this.highlightedItem.selected =  (this.highlightedItem.selected && navItem.title == this.highlightedItem.selected.title) ? null : navItem;	
	}
	
}


var backgroundImageController = new BackgroundImageController();

export default backgroundImageController;
