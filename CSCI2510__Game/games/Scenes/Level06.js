class Level06 extends Scene{
    constructor(){
        super()
        this.instantiate(new PlatformGameObject(), new Vector2(150,625))
        this.instantiate(new PlatformGameObject(), new Vector2(350,625))
        this.instantiate(new PlatformGameObject(), new Vector2(550,625))
        this.instantiate(new PlatformGameObject(), new Vector2(750,625))
        this.instantiate(new GoodPlatformGameObject(), new Vector2(850,625))

        this.instantiate(new PlatformGameObject(), new Vector2(150,325))
        this.instantiate(new PlatformGameObject(), new Vector2(350,325))
        this.instantiate(new PlatformGameObject(), new Vector2(550,325))
        this.instantiate(new PlatformGameObject(), new Vector2(750,325))
        this.instantiate(new HalfPlatform(), new Vector2(850,325))

        this.instantiate(new LaserWallTurretGameObject(), new Vector2(400, 325))
        this.instantiate(new LaserWallTurretGameObject(), new Vector2(740, 325))

        this.instantiate(new LaserWallWarningGameObject(), new Vector2(400, 475), Math.PI / 2)
        this.instantiate(new LaserWallWarningGameObject(), new Vector2(740, 475), Math.PI / 2)
        
        
       
        
        


       
        this.instantiate(new Level06ControllerGameObject())


        this.instantiate(new WinCheckGameObject(), new Vector2(-1000,-1000))
    }
}