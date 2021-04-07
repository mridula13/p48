class Form {
    constructor() {
        this.greeting = createElement('h2');    
        this.yes = createButton('Yes');
        this.no = createButton('No');
        this.yg = createElement('h2');
        this.ng = createElement('h2');
        this.ng2 = createElement('h2');
    }

    display(){
        this.greeting.html("Do you think you are capable of surviving a zombie apoclypse on your own?")
        
        this.greeting.style("color", "red");
        this.greeting.style("fontSize", "30px");
        this.greeting.position(displayWidth/4 - 150, displayHeight/4 - 170);

        this.yes.style("width", "100px");
        this.yes.style("height", "50px");
        this.yes.style("color", "red");
        this.yes.style("fontSize", "40px");

        this.no.style("width", "100px");
        this.no.style("height", "50px");
        this.no.style("color", "red");
        this.no.style("fontSize", "40px");

        this.yes.position(displayWidth/2 - 150, displayHeight/2);
        this.no.position(displayWidth/2 + 150, displayHeight/2);

        this.yes.mousePressed(()=>{
            this.yes.hide();
            this.greeting.hide();
            this.no.hide();

            this.yg.html("GOOD LUCK!!!");
            this.yg.style("color", "red");
            this.yg.style("fontSize", "30px");
            this.yg.position(displayWidth/2 - 50, displayHeight/2 - 150);
         
            gameState = "Start";
        })

        this.no.mousePressed(()=>{
            this.yes.hide();
            this.no.hide();
            this.greeting.hide();

            this.ng.html("Too Bad! The Apoclypse Has Already Begun");
            this.ng.position( displayWidth/2 - 200, displayHeight/2 - 250);
            this.ng.style("color", "red");
            this.ng.style("fontSize", "30px");

            this.ng2.html("GOOD LUCK!!!");
            this.ng2.position(displayWidth/2 - 50, displayHeight/2 - 150);
            this.ng2.style("color", "red");
            this.ng2.style("fontSize", "30px");
            
            gameState ="Start";
        })
      
        
    }
}