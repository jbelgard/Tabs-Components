class Tabs {
  constructor(links) {
    this.links = links;
    this.linkSelected = document.querySelector('.tabs-link-selected');
    this.itemSelected = document.querySelector('.tabs-item-selected');
    this.links.forEach(link => new TabLink(link));
  }
}
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // this.element;
    
    // Get the custom data attribute on the Link
    // this.data;
    
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    
    // Add a click event listener on this instance, calling the select method on click
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => {
      this.select();
    })
  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links;

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    
    // Call the select method on the item associated with this link
    if(this.element == links.linkSelected) {
      this.deselect();
      this.tabItem.deselect();
    } else {
      links.linkSelected.classList.remove('tabs-link-selected');
      this.element.classList.add('tabs-link-selected');
      links.linkSelected = this.element;
      this.tabItem.select();
    }
  }
  deselect() {
    this.element.classList.toggle('tabs-link-selected')
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;
    links.itemSelected.classList.remove('tabs-item-selected');
    this.element.classList.add('tabs-item-selected');
    links.itemSelected = this.element;
  }
    // Remove the class "tabs-item-selected" from each element
    
    // Add a class named "tabs-item-selected" to this element
    //this.element;
  deselect() {
    this.element.classList.toggle('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = new Tabs(document.querySelectorAll('.tabs-links .tabs-link'));