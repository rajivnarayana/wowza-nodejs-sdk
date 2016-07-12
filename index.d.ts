declare module wowza {
    export class Publisher {
        password : String;
        name : String;
        serverName : String;
        description : String;
        version : String;
    }
    interface publishers {
        list() : Promise<Publisher[]>;
        create(publisher : Publisher) : Promise<Publisher>;
        remove(name : String) : Promise<any>;
    }
}
