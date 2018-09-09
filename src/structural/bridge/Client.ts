import {View} from "./views/View";

export class Client {

    private _viewBuilder: View;

    get viewBuilder(): View {
        return this._viewBuilder;
    }

    set viewBuilder(value: View) {
        this._viewBuilder = value;
    }

    showView(): void {
        console.log(`[Client] view should show: ${this.viewBuilder.constructView()}`);
    }
}
