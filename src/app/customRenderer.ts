import { Renderer2, RendererStyleFlags2, RendererType2, RendererFactory2 } from "@angular/core";

export class CustomRenderer extends Renderer2 {
    data: {
        [key: string]: any;
    };
    destroy(): void {
        console.log("destroy");
    }
    createElement(name: string, namespace?: string) {
        console.log(`creating element ${name}, namespace ${namespace}`);
    }
    createComment(value: string) {
        console.log(`creating component ${value}`);
    }
    createText(value: string) {
        console.log(`creating text ${value}`);
    }
    appendChild(parent: any, newChild: any): void {
        console.log(`appending child, parent is ${parent}, child is ${newChild}`);
    }
    insertBefore(parent: any, newChild: any, refChild: any): void {

    }
    removeChild(parent: any, oldChild: any): void {

    }
    selectRootElement(selectorOrNode: any) {

    }
    parentNode(node: any) {

    }
    nextSibling(node: any) {

    }
    setAttribute(el: any, name: string, value: string, namespace?: string): void {

    }
    removeAttribute(el: any, name: string, namespace?: string): void {

    }
    addClass(el: any, name: string): void {

    }
    removeClass(el: any, name: string): void {

    }
    setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2): void {

    }
    removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void {

    }
    setProperty(el: any, name: string, value: any): void {

    }
    setValue(node: any, value: string): void {

    }
    listen(target: any, eventName: string, callback: (event: any) => boolean | void): () => void {
        return () => null;
    }

}

export class CustomRendererFactory implements RendererFactory2 {

    constructor(private delegate: RendererFactory2) { }

    createRenderer(hostElement: any, type: RendererType2): Renderer2 {
        return new CustomRenderer();
    }
}