/*const data = [
    {
        question: "O que é Vanilla JavaScript?",
        options: [
            "JavaScript puro",
            "Uma biblioteca JavaScript",
            "Um framework JavaScript",
            "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
    },
    {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
    },
    {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
    },
    {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
    },
    {
        question: "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
    },
]

export default data*/

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    
    window.location.hostname === '[::1]' ||

    window.location.hostname.match(
        /^127(?:\.(?:225[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )

)

export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
     
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href)
        if (publicUrl.origin !== window.location.origin) {
            // Our service worker won't work if PUBLIC_URL is on a different origin
            // from what our page is served on. This might happen if a CDN is used to
            // serve assets; see https://github.com/facebook/create-react-app/issues/2374
            return
        }

        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`

            if (isLocalhost) {
                // This is running on localhost. Let's check if a service worker still exists or not.
                checkValidServiceWorker(swUrl, config)

                // Add some additional logging to localhost, pointing developers to the
                // service worker/PWA documentation.
                navigator.serviceWorker.ready.then(() => {
                    console.log(
                        'This web app is being served cache-first by a service' +
                        'worker. To learn more, visit https://bit.ly/CRA-PWA'
                    )
                })
            } else {
                // Is not localhost. Just register service worker
                registerValidSW(swUrl, config)
            }
        })
    }
} 

function registerValidSW(swUrl, config) {
    navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
        registration.onupdatefound = () => {
            const installingWorker = registration.installing
            if (installingWorker == null) {
                return
            }
            installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        // At this point, the updated precached content has been fetched,
                        // but the previous service worker will still server the older
                        // content until all client tabs are closed.
                        console.log(
                            'New content is availabel and will be used when all ' +
                            'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
                        );
                        //Execute callback
                        if (config && config.onUpdate) {
                            config.onUpdate(registration)
                        }

                    } else {
                        console.log('Content is cached for offline use.')

                        //Execute callback 
                        if (config && config.onSuccess) {
                            config.onSuccess(registration)
                        }
                    }
                }
            }
        }
    })
    .catch(error => {
        console.error('Error during service worker refistration', error)
    })
}

function checkValidServiceWorker(swUrl, config) {
    
    fetch(swUrl)
        .then(response => {
            const contentType = response.headers.get('content-type')
            if (
                response.status === 404 ||
                (contentType != null && contentType.indexOf('javascript') === -1)
            ) {
                navigator.serviceWorker.ready.then(registration => {
                    registration.unregister().then(() => {
                        window.location.reload()
                    })
                })
            } else {
                registerValidSW(swUrl, config)
            }
        })
        .catch(() => {
            console.log (
                'No internet connection found. App is running is offline mode.'
            )
        })
}

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister()
        })
    }
}