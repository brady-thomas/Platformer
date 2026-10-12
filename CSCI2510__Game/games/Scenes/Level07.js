class Level07 extends Scene {
    constructor() {
        super()

        this.instantiate(new PlatformGameObject(), new Vector2(150,625))
        this.instantiate(new PlatformGameObject(), new Vector2(350,625))
        this.instantiate(new HalfPlatform(), new Vector2(475,650), Math.PI / 2)
        this.instantiate(new HalfPlatform(), new Vector2(475,750), Math.PI / 2)
        this.instantiate(new PlatformGameObject(), new Vector2(550,800))
        this.instantiate(new PlatformGameObject(), new Vector2(750,800))
        this.instantiate(new PlatformGameObject(), new Vector2(950,800))
        this.instantiate(new HalfPlatform(), new Vector2(1025,650), Math.PI / 2)
        this.instantiate(new HalfPlatform(), new Vector2(1025,750), Math.PI / 2)
        this.instantiate(new HalfPlatform(), new Vector2(1025,550), Math.PI / 2)
        this.instantiate(new HalfPlatform(), new Vector2(1025,450), Math.PI / 2)
        this.instantiate(new HalfPlatform(), new Vector2(1025,350), Math.PI / 2)
        this.instantiate(new HalfPlatform(), new Vector2(1025,250), Math.PI / 2)


        this.instantiate(new UpDownPlatformGameObject(), new Vector2(750, 500))
        

        this.instantiate(new Spike(), new Vector2(545,735))
        this.instantiate(new Spike(), new Vector2(595,735))
        this.instantiate(new Spike(), new Vector2(645,735))
        this.instantiate(new Spike(), new Vector2(695,735))
        this.instantiate(new Spike(), new Vector2(745,735))
        this.instantiate(new Spike(), new Vector2(795,735))
        this.instantiate(new Spike(), new Vector2(845,735))
        this.instantiate(new Spike(), new Vector2(895,735))
        this.instantiate(new Spike(), new Vector2(945,735))


        
        this.instantiate(new Spike(), new Vector2(960,250), Math.PI * 3 / 2)
        this.instantiate(new Spike(), new Vector2(960,300), Math.PI * 3 / 2)
        this.instantiate(new Spike(), new Vector2(960,350), Math.PI * 3 / 2)    
       




        this.instantiate(new GoodPlatformGameObject(), new Vector2(1100, 225))

        this.instantiate(new WinCheckGameObject(), new Vector2(-1000,-1000))

        this.instantiate(new Level06ControllerGameObject())
    }
}