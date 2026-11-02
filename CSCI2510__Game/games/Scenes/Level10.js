class Level10 extends Scene{
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


        this.instantiate(new EvilPlatformGameObject(), new Vector2(0,175), Math.PI / 2)
        this.instantiate(new EvilPlatformGameObject(), new Vector2(0,75), Math.PI / 2)
        this.instantiate(new EvilPlatformGameObject(), new Vector2(0,-25), Math.PI / 2)
        this.instantiate(new EvilPlatformGameObject(), new Vector2(0,-100), Math.PI / 2)
        this.instantiate(new EvilPlatformGameObject(), new Vector2(0,-200), Math.PI / 2)
        this.instantiate(new EvilPlatformGameObject(), new Vector2(0,-300), Math.PI / 2)


        this.instantiate(new GoodPlatformGameObject(), new Vector2(550,250))


        this.instantiate(new TeleporterOneGameObject(), new Vector2(-400, 0))
        this.instantiate(new TeleporterTwoGameObject(), new Vector2(400, 0))

        





    }
}
