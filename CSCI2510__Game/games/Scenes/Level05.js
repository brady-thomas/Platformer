class Level05 extends Scene{
    constructor(){
        super()
        this.instantiate(new PlatformGameObject(), new Vector2(150,625))
        this.instantiate(new PlatformGameObject(), new Vector2(350,625))
        this.instantiate(new PlatformGameObject(), new Vector2(550,625))
        this.instantiate(new PlatformGameObject(), new Vector2(750,625))
        this.instantiate(new GoodPlatformGameObject(), new Vector2(850,625))

        this.instantiate(new TurretGameObject(), new Vector2(950, 570))
       
        
        


       
        this.instantiate(new Level04ControllerGameObject())


        this.instantiate(new WinCheckGameObject(), new Vector2(-1000,-1000))
    }
}