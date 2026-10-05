class Level04 extends Scene{
    constructor(){
        super()
        this.instantiate(new PlatformGameObject(), new Vector2(150,625))
        //this.instantiate(new PlatformGameObject(), new Vector2(250,625))

        this.instantiate(new PlatformGameObject(), new Vector2(700,475))

        this.instantiate(new HalfPlatform(), new Vector2(400,625))
        this.instantiate(new HalfPlatform(), new Vector2(850,325))
        this.instantiate(new HalfPlatform(), new Vector2(1050,325))
        this.instantiate(new HalfPlatform(), new Vector2(525, 475))
        
        this.instantiate(new PlatformGameObject(), new Vector2(475,550), (Math.PI / 2))
        this.instantiate(new PlatformGameObject(), new Vector2(825,400), (Math.PI / 2))

        this.instantiate(new EvilPlatformGameObject(), new Vector2(625,475))
        this.instantiate(new EvilPlatformGameObject(), new Vector2(300,625))
       

        this.instantiate(new GoodPlatformGameObject(), new Vector2(950,325))

        this.instantiate(new Level04ControllerGameObject())

        this.instantiate(new WinCheckGameObject(), new Vector2(-1000,-1000))
    }
}