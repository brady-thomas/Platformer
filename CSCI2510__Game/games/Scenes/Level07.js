class Level07 extends Scene {
    constructor() {
        super()

        this.instantiate(new PlatformGameObject(), new Vector2(-500,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-300,250))
        this.instantiate(new HalfPlatform(), new Vector2(-175,275), Math.PI / 2)
        this.instantiate(new HalfPlatform(), new Vector2(-175,375), Math.PI / 2)
        this.instantiate(new PlatformGameObject(), new Vector2(-100,425))
        this.instantiate(new PlatformGameObject(), new Vector2(100,425))
        this.instantiate(new PlatformGameObject(), new Vector2(300,425))
        this.instantiate(new HalfPlatform(), new Vector2(375,275), Math.PI / 2)
        this.instantiate(new HalfPlatform(), new Vector2(375,375), Math.PI / 2)
        this.instantiate(new HalfPlatform(), new Vector2(375,175), Math.PI / 2)
        this.instantiate(new HalfPlatform(), new Vector2(375,75), Math.PI / 2)
        this.instantiate(new HalfPlatform(), new Vector2(375,-25), Math.PI / 2)
        this.instantiate(new HalfPlatform(), new Vector2(375,-125), Math.PI / 2)


        this.instantiate(new UpDownPlatformGameObject(), new Vector2(100, 125))
        

        this.instantiate(new Spike(), new Vector2(-105,360))
        this.instantiate(new Spike(), new Vector2(-55,360))
        this.instantiate(new Spike(), new Vector2(-5,360))
        this.instantiate(new Spike(), new Vector2(45,360))
        this.instantiate(new Spike(), new Vector2(95,360))
        this.instantiate(new Spike(), new Vector2(145,360))
        this.instantiate(new Spike(), new Vector2(195,360))
        this.instantiate(new Spike(), new Vector2(245,360))
        this.instantiate(new Spike(), new Vector2(295,360))


        
        this.instantiate(new Spike(), new Vector2(310,-125), Math.PI * 3 / 2)
        this.instantiate(new Spike(), new Vector2(310,-75), Math.PI * 3 / 2)
        this.instantiate(new Spike(), new Vector2(310,-25), Math.PI * 3 / 2)    
       




        this.instantiate(new GoodPlatformGameObject(), new Vector2(450, -150))

        this.instantiate(new WinCheckGameObject(), new Vector2(-1000,-1000))

        this.instantiate(new Level07ControllerGameObject())
    }
}