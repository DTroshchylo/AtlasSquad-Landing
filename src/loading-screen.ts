
export class LoadingScreen {

  private static instance: LoadingScreen;
  private loading: number = 0
  private totalResources: number = 0;
  private loadedResources: number = 0;

  private events: Array<any> = new Array<any>()

  private simulateInterval: any = null
  private interval: any = null

  private constructor() {
    // setTimeout(() => {
    //   this.loadedResources = this.totalResources
    //   this.simulateLoading();
    // }, 6000);
    this.simulateInterval = setInterval(() => {
      this.simulateLoading();
    }, 360);
  }

  public static getInstance(): LoadingScreen {
    if (!LoadingScreen.instance) {
      LoadingScreen.instance = new LoadingScreen();
    }
    return LoadingScreen.instance;
  }



  public addResource(resource: HTMLImageElement | HTMLVideoElement): void {

    if ((resource instanceof HTMLVideoElement && resource.readyState > 3)) {
      this.totalResources++;
      this.loadedResources++;
      this.simulateLoading();
      return;
    }
    if ((resource instanceof HTMLImageElement && resource.complete)) {
      this.totalResources++;
      this.loadedResources++;
      this.simulateLoading();
      return;
    }

    this.totalResources++;
    resource.addEventListener('load', () => {
      this.loadedResources++;
      this.simulateLoading();
    });
    resource.addEventListener('error', () => {
      this.loadedResources++;
      this.simulateLoading();
    });
    resource.addEventListener('canplaythrough', () => {
      if (resource instanceof HTMLVideoElement) {
        this.loadedResources++;
        this.simulateLoading();
      }
    });
    resource.addEventListener('loadeddata', () => {
      this.loadedResources++;
      this.simulateLoading();
    });
  }

  private simulateLoading(): void {
    let targetLoading = this.loadedResources / this.totalResources * 100;

    clearInterval(this.interval);

    this.interval = setInterval(() => {
      if (this.loading + 1 < 101) {
        this.loading++;
      } else {
        clearInterval(this.interval);
        clearInterval(this.simulateInterval)
      }
      this.events.forEach(event => {
        event(this.loading)
      });
    }, 20);


  }

  public getLoading(): number {
    return this.loading;
  }

  public onUpdateLoading(event: any) {
    this.events.push(event)
  }


}