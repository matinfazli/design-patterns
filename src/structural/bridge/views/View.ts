import {Resource} from "../resources/Resource";

export abstract class View {

    protected resource: Resource;

    protected constructor(resource: Resource) {
        this.resource = resource;
    }

    abstract constructView(): string;
}
