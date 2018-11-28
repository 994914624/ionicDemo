import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// setInterval(function(){
//   console.log("SA.Sen ####: ");
// },2000);

import sensors from 'sa-sdk-javascript';
sensors.init({
  server_url: 'http://sdk-test.datasink.sensorsdata.cn/sa?token=95c73ae661f85aa0&project=YangYang',
  heatmap_url: 'http://static.sensorsdata.cn/sdk/1.12.5/heatmap.min.js',
  use_app_track:true,
  is_single_page:true,
  heatmap: {
  }
});
sensors.quick('autoTrack');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
