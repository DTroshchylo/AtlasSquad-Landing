// <!--Google tag(gtag.js)-- >
//   <script async src = "https://www.googletagmanager.com/gtag/js?id=G-5LWQ5R8YHE" > </script>
//     <script>
// window.dataLayer = window.dataLayer || [];
// function gtag() { dataLayer.push(arguments); }
// gtag('js', new Date());

// gtag('config', 'G-5LWQ5R8YHE');
// </script>

let d: any = null
let w: any = null

function attr(e: any, n: string, d: any = null) {
    return e.getAttribute(n) == null ? d : e.getAttribute(n)
}

class StringGoogleAnalytics {
    private gTags: Map<string, any> = new Map<string, any>()
    constructor() {

    }
    init(gtagId: string): void {

        const script = d.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
        script.setAttribute('data-gtag', gtagId)
        d.head.appendChild(script);
        script.onload = () => {
            w.dataLayer = w.dataLayer || [];
            function gtag(...args: any[]) { w.dataLayer.push(arguments); }
            w.gtag = gtag;
            gtag('js', new Date());
            gtag('config', gtagId);
            this.gTags.set(gtagId, gtag)
        };
        console.log('Analytics initialized', gtagId)
    }

    public track(gtagId: string, eventName: string, data: any): void {
        if (typeof this.gTags.get(gtagId) === 'function') {
            this.gTags.get(gtagId)('event', eventName, data);
        } else {
            console.warn(`Google analytics with ID ${gtagId} not init`)
        }
    }

    public disable(gtagId: string) {
        this.gTags.delete(gtagId)
        document.querySelector(`[data-gtag="${gtagId}"]`)?.remove()
        console.log('Analytics disabled', gtagId)
    }
}

class StringMetaPixel {
    private pixels: Map<string, any> = new Map<string, any>()

    constructor() { }

    init(pixelId: string): void {
        console.log('Facebook Pixel working')
        let fbq: any
        fbq = function () {
            if (fbq.callMethod) {
                fbq.callMethod.apply(fbq, arguments)
            } else {
                fbq.queue.push(arguments)
            }
        }
        fbq.push = fbq
        fbq.loaded = true
        fbq.version = '2.0'
        fbq.queue = []
        w.fbq = fbq
        let script = document.createElement('script')
        script.async = true
        script.src = 'https://connect.facebook.net/en_US/fbevents.js'
        document.head.appendChild(script)

        fbq('init', pixelId)
        fbq('track', 'PageView')
        this.pixels.set(pixelId, fbq)
        console.log('Facebook Pixel initialized:', pixelId)
    }

    public track(pixelId: string, eventName: string, data: any = {}): void {
        if (this.pixels.has(pixelId)) {
            this.pixels.get(pixelId)('trackCustom', eventName, data)
        } else {
            console.warn(`Facebook Pixel with ID ${pixelId} not init`)
        }
    }

    public disable(pixelId: string) {
        this.pixels.delete(pixelId);
        document.querySelector(`[data-pixel="${pixelId}"]`)?.remove()
        console.log('Facebook Pixel disabled', pixelId)
    }
}


class StringAnalytics {
    private static instance: StringAnalytics;
    private localStorage: Storage;
    public google: StringGoogleAnalytics = new StringGoogleAnalytics()
    public meta: StringMetaPixel = new StringMetaPixel()
    private constructor() {
        d = document;
        w = window;
        this.localStorage = localStorage;
    }

    public static getInstance(): StringAnalytics {
        if (!StringAnalytics.instance) {
            StringAnalytics.instance = new StringAnalytics();
        }
        return StringAnalytics.instance;
    }
}

export default StringAnalytics;
