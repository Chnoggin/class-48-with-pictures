class Form {
 constructor() {
    this.input = createInput("Username");

    this.button = createButton('play');

    this.title = createElement('h1');
    this.reset = createButton('reset');

    this.greeting = createElement('h2');
 }
 hide () {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
}
 display () {

     this.title.html("Bristol Streetfighter");

     this.title.position(displayWidth - 925, displayHeight - 550);

     this.title.style('color', 'black');

     this.input.position(displayWidth - 875, displayHeight - 400);

     this.button.position(displayWidth - 820, displayHeight - 350);

     this.reset.position(displayWidth - 200, displayHeight - 800);
 
 
this.button.mousePressed(()=> {
this.input.hide();
this.button.hide();

player.name = this.input.value()
playerCount += 1; 

player.index = playerCount;
player.update();

player.updateCount(playerCount);

this.greeting.html("Hello noble " + player.name + "!")
this.greeting.position(400,250);
this.greeting.style('color', 'white');
this.greeting.style('font-size', '100px')

}) 


this.reset.mousePressed(()=>{
    player.updateCount(0);
    game.update(0);
})
}}

