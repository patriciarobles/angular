
//importamos este modulo de la liberia de angular
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//appmodule es el root module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
