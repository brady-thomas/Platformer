class Level11 extends Scene{
    constructor(){
        super()
        
        this.instantiate(new Level09ControllerGameObject())
        this.instantiate(new WinCheckGameObject(), new Vector2(-1000, -1000))


        
        this.instantiate(new PlatformGameObject(), new Vector2(-500,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-300,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-100,250))
        this.instantiate(new PlatformGameObject(), new Vector2(100,250))
        this.instantiate(new PlatformGameObject(), new Vector2(300,250))
        this.instantiate(new PlatformGameObject(), new Vector2(500,250))


        this.instantiate(new TurretGameObject(), new Vector2(300, -50))


        this.instantiate(new GoodPlatformGameObject(), new Vector2(550,250))


        this.instantiate(new TeleporterOneGameObject(), new Vector2(-400, 0))
        this.instantiate(new TeleporterTwoGameObject(), new Vector2(400, 0))

        



    }
}