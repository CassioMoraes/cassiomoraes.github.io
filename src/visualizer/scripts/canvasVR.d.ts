export declare class Canvas {
    private mouseDownPosition;
    private position;
    private lastPosition;
    private originalSize;
    private manualControl;
    private isFullScreen;
    private camera;
    private renderer;
    private scene;
    private nightcrawler;
    constructor();
    private initializeScene();
    private addIcons();
    private animate();
    private render();
    private addEventListener();
    private toggleFullScreen();
    private resizeScene(size);
    private onDocumentMouseDown(event);
    private onDocumentMouseMove(event);
    private onDocumentMouseUp(event);
}
