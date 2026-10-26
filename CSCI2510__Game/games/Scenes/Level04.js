class Level04 extends Scene{
    constructor(){
        super()
        //x - 450, y - 375
        this.instantiate(new PlatformGameObject(), new Vector2(-500,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-300,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-100,250))
        

        

        this.instantiate(new HalfPlatform(), new Vector2(-50,250))
        this.instantiate(new HalfPlatform(), new Vector2(400,-50))
        this.instantiate(new HalfPlatform(), new Vector2(600,-50))
        this.instantiate(new HalfPlatform(), new Vector2(100, 100))
        this.instantiate(new HalfPlatform(), new Vector2(300, 100))
        
        this.instantiate(new PlatformGameObject(), new Vector2(25,175), (Math.PI / 2))
        this.instantiate(new PlatformGameObject(), new Vector2(375,25), (Math.PI / 2))

        this.instantiate(new EvilPlatformGameObject(), new Vector2(200,100))
        this.instantiate(new EvilPlatformGameObject(), new Vector2(-250,250))
       

        this.instantiate(new GoodPlatformGameObject(), new Vector2(500,-50))

        this.instantiate(new Level04ControllerGameObject())

        this.instantiate(new WinCheckGameObject(), new Vector2(-1000,-1000))
    }
}