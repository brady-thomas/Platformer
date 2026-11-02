class Level01 extends Scene{
    constructor(){
        super("black")
        this.instantiate(new PlatformGameObject(), new Vector2(-500,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-350,250))
        



        
        this.instantiate(new PlatformGameObject(), new Vector2(-150,250))
        this.instantiate(new PlatformGameObject(), new Vector2(50,250))
        this.instantiate(new PlatformGameObject(), new Vector2(200,250))
        this.instantiate(new PlatformGameObject(), new Vector2(400,250))
        

        this.instantiate(new EvilPlatformGameObject(), new Vector2(0,250))

        this.instantiate(new GoodPlatformGameObject(), new Vector2(550,250))

        this.instantiate(new Level01ControllerGameObject())
        
    
        this.instantiate(new WinCheckGameObject(), new Vector2(-1000,-1000))
        
    
        this.instantiate(new ControlsTextLabel01(), new Vector2(350, 390))
        //this.instantiate(new ControlsTextLabel02(), new Vector2(800, 440))
    }
}