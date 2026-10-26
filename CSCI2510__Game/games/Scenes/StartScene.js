class StartScene extends Scene{
    constructor(){
        super()
        this.instantiate(new StartScreenLabel01GameObject(), new Vector2(350,400))
        this.instantiate(new StartButtonGameObject(), new Vector2(750,600))

        this.instantiate(new StartScreenLabel02GameObject(), new Vector2(720,605))
        
    }
}