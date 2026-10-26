class Level08 extends Scene {
    constructor() {
        super()

        this.instantiate(new Level07ControllerGameObject())
        this.instantiate(new WinCheckGameObject(), new Vector2(-1000, -1000))


        this.instantiate(new UpDownPlatformGameObject(), new Vector2(-500,350))


        this.instantiate(new PlatformGameObject(), new Vector2(-275,250), Math.PI / 2)
        this.instantiate(new PlatformGameObject(), new Vector2(-275,150), Math.PI / 2)

        this.instantiate(new PlatformGameObject(), new Vector2(-275,-250), Math.PI / 2)
        this.instantiate(new PlatformGameObject(), new Vector2(-275,-350), Math.PI / 2)


        this.instantiate(new PlatformGameObject(), new Vector2(25,-350), Math.PI / 2)
        this.instantiate(new PlatformGameObject(), new Vector2(25,-150), Math.PI / 2)
        this.instantiate(new PlatformGameObject(), new Vector2(25,-50), Math.PI / 2)
        

        this.instantiate(new PlatformGameObject(), new Vector2(100,50))
        this.instantiate(new PlatformGameObject(), new Vector2(150,50))
        this.instantiate(new PlatformGameObject(), new Vector2(300,50))
        this.instantiate(new HalfPlatform(), new Vector2(400,50))

        this.instantiate(new PlatformGameObject(), new Vector2(-200,350))
        this.instantiate(new PlatformGameObject(), new Vector2(0,350))
        this.instantiate(new PlatformGameObject(), new Vector2(200,350))
        this.instantiate(new PlatformGameObject(), new Vector2(300,350))
        this.instantiate(new GoodPlatformGameObject(), new Vector2(400, 350))
        
        this.instantiate(new EvilPlatformGameObject(), new Vector2(-25, 350))
        this.instantiate(new EvilPlatformGameObject(), new Vector2(75, 350))

        this.instantiate(new LaserWallTurretGameObject(), new Vector2(250, 50))
        this.instantiate(new LaserWallWarningGameObject(), new Vector2(250, 200), Math.PI / 2)


        this.instantiate(new Spike(), new Vector2(-340, 180), 3 * Math.PI / 2)
        this.instantiate(new Spike(), new Vector2(-340, 130), 3 * Math.PI / 2)
        this.instantiate(new Spike(), new Vector2(-340, 80), 3 * Math.PI / 2)


        this.instantiate(new Spike(), new Vector2(-340, -185), 3 * Math.PI / 2)
        this.instantiate(new Spike(), new Vector2(-340, -235), 3 * Math.PI / 2)
        this.instantiate(new Spike(), new Vector2(-340, -285), 3 * Math.PI / 2)

        



    }

}