export class Menu {

    // what shows on page to user
    display: string = "";
    // route path defined in app-routing.module.ts
    route: string = "";

    constructor(display: string, route: string){
        this.display = display;
        this.route = route;
    }

}