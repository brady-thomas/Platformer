class Level06 extends Scene{
    constructor(){
        super()
        // x - 650, y - 375
        this.instantiate(new PlatformGameObject(), new Vector2(-500,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-300,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-100,250))
        this.instantiate(new PlatformGameObject(), new Vector2(100,250))
        this.instantiate(new GoodPlatformGameObject(), new Vector2(200,250))

        this.instantiate(new PlatformGameObject(), new Vector2(-500,-50))
        this.instantiate(new PlatformGameObject(), new Vector2(-300,-50))
        this.instantiate(new PlatformGameObject(), new Vector2(-100,-50))
        this.instantiate(new PlatformGameObject(), new Vector2(-200,-50))
        this.instantiate(new PlatformGameObject(), new Vector2(0,-50))
        this.instantiate(new PlatformGameObject(), new Vector2(50,-50))
        this.instantiate(new HalfPlatform(), new Vector2(200,-50))

        this.instantiate(new LaserWallTurretGameObject(), new Vector2(-250, -50))
        this.instantiate(new LaserWallTurretGameObject(), new Vector2(90, -50))

        this.instantiate(new LaserWallWarningGameObject(), new Vector2(-250, 100), Math.PI / 2)
        this.instantiate(new LaserWallWarningGameObject(), new Vector2(90, 100), Math.PI / 2)
        
        
       
        
        


       
        this.instantiate(new Level06ControllerGameObject())


        this.instantiate(new WinCheckGameObject(), new Vector2(-1000,-1000))
    }
}