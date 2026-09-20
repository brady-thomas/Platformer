class GameObjects{
    components = []

    markForDestroy = false

    name

    get transform(){
        return this.components[0]
    }



    constructor(name){
        this.addComponent(new Transform())
        this.name = name
    }

    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObjects = this
    }


    start(){
        for (const component of this.components){
            component.start?.()
        }
    }

    update(){
        for (const component of this.components){
            component.update?.()
        }
    }
    

    destroy(){
        this.markForDestroy = true


    }

    draw(ctx){
        for (const component of this.components){
            component.draw?.(ctx)
        }
    }

    static find(name){
        return Engine.currentScene.gameObjects.find(go=>go.name == name)

    }

}   