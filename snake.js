class Snake {

    constructor(larghezza,altezza) {
        this.lunghezza = 1;
        this.body = [];
        this.body[0] = createVector(0, 0);
        this.xdir = 0;
        this.ydir = 0;
        this.larg = larghezza;
        this.alt = altezza;
    }


    update() {
        this.body[0].x += this.xdir;
        this.body[0].y += this.ydir;
    }

    setDir(x,y){
        this.xdir = x;
        this.ydir = y;
    }

    cresci(){
        this.lunghezza++;    
        this.body.push(createVector());
    }

    show() {
        noStroke();
        fill(0);
        rect(this.body[0].x % this.larg, this.body[0].y % this.alt, 1, 1);

    }

    mangia(pos){
        let x = this.body[0].x % 40;
        let y = this.body[0].y % 40;

        if (x == pos.x && y == pos.y) {
            console.log("mangiata!");
            //this.cresci();
            return true;
        } 
            
        return false;
    }
}