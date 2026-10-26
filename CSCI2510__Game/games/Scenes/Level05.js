class Level05 extends Scene{
    constructor(){
        super()
        //x - 650, y - 375
        this.instantiate(new PlatformGameObject(), new Vector2(-500,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-300,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-100,250))
        this.instantiate(new PlatformGameObject(), new Vector2(100,250))
        this.instantiate(new PlatformGameObject(), new Vector2(300,250))
        this.instantiate(new PlatformGameObject(), new Vector2(500,250))
        this.instantiate(new GoodPlatformGameObject(), new Vector2(550,250))

        this.instantiate(new TurretGameObject(), new Vector2(675, 200))
       
        
        


       
        this.instantiate(new Level05ControllerGameObject())


        this.instantiate(new WinCheckGameObject(), new Vector2(-1000,-1000))
    }
}