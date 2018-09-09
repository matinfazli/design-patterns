import {View} from "./View";
import {Resource} from "../resources/Resource";

export class LongView extends View {

    resource: Resource;

    constructor(resource: Resource) {
        super(resource);
    }

    constructView(): string {
        return `\ntitle: ${this.resource.title} \ndetails: ${this.resource.details} \nlink: ${this.resource.url}`;
    }

}
