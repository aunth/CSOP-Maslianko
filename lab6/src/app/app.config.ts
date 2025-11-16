import { ApplicationConfig, PLATFORM_ID, provideZoneChangeDetection } from '@angular/core';
import { provideStorage, StorageConfig, Storage } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    {
      provide: Storage,
      useFactory: (platformId: object) => {
        const storageConfig: StorageConfig = {
          name: '__weatherdb',
          driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
        };
        return provideStorage(platformId, storageConfig);
      },
      deps: [PLATFORM_ID]
    }
  ]
};
