class MainScene extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2(50,50))
        this.instantiate(new PlatformGameObject(), new Vector2(50,350))
        this.instantiate(new EvilPlatformGameObject(), new Vector2(250,350))
        this.instantiate(new PlatformGameObject(), new Vector2(300,350))
        
        


    

    }
}