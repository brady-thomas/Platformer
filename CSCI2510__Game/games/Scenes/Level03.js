class Level03 extends Scene{
    constructor(){
        super()
        this.instantiate(new PlatformGameObject(), new Vector2(150,625))

        this.instantiate(new PlatformGameObject(), new Vector2(600,475))

        this.instantiate(new HalfPlatform(), new Vector2(850,325))
        this.instantiate(new HalfPlatform(), new Vector2(1050,325))
        
        this.instantiate(new PlatformGameObject(), new Vector2(475,550), (Math.PI / 2))
        this.instantiate(new PlatformGameObject(), new Vector2(825,400), (Math.PI / 2))

        this.instantiate(new EvilPlatformGameObject(), new Vector2(750,475))
        this.instantiate(new EvilPlatformGameObject(), new Vector2(400,625))
       

        this.instantiate(new GoodPlatformGameObject(), new Vector2(950,325))

        this.instantiate(new Level02ControllerGameObject())

        this.instantiate(new WinCheckGameObject(), new Vector2(-1000,-1000))
    }
}1