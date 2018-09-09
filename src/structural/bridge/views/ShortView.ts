import {View} from "./View";
import {Resource} from "../resources/Resource";

export class ShortView extends View {

    resource: Resource;

    constructor(resource: Resource) {
        super(resource);
    }

    constructView(): string {
        return `\ntitle: ${this.resource.title} \nurl: ${this.resource.url}`;
    }

}
