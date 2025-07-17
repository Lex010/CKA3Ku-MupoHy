declare global {
  interface Window {
    debugData?: {
      NODE_ENV: string | undefined;
      serviceWorkers?: readonly ServiceWorkerRegistration[];
      error?: unknown;
    };
  }
}

// Для просмотра отлаточных данных которые этот код записывает, в БРАУЗЕРЕ в консоли ввести `window.debugData`

export function unregisterSWInDev() {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'development') {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      Promise.all(registrations.map((r) => r.unregister())).then(() => {
        window.debugData = {
          ...window.debugData,
          NODE_ENV: process.env.NODE_ENV,
          serviceWorkers: registrations,
        };
      });
    });
  }
}

export function registerSWInProd() {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/CKA3Ku-MupoHy/release/service-worker.js')
        .then(() => {
          window.debugData = {
            ...window.debugData,
            NODE_ENV: process.env.NODE_ENV,
          };
        })
        .catch((error) => {
          window.debugData = {
            ...window.debugData,
            NODE_ENV: process.env.NODE_ENV,
            error,
          };
        });
    });
  }
}
