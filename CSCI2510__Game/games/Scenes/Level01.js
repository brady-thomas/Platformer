class Level01 extends Scene{
    constructor(){
        super()
        this.instantiate(new PlatformGameObject(), new Vector2(150,625))
        this.instantiate(new EvilPlatformGameObject(), new Vector2(250,625))
        this.instantiate(new PlatformGameObject(), new Vector2(400,625))
        this.instantiate(new GoodPlatformGameObject(), new Vector2(550,625))

        this.instantiate(new Level01ControllerGameObject())
        
    
        this.instantiate(new WinCheckGameObject(), new Vector2(-1000,-1000))
        
    

    }
}