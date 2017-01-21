import { NgModule, ModuleWithProviders } from "@angular/core";
import { MarqueeComponent } from './src/app/components/marquee.component';
import { MarqueeDirective } from './src/app/directives/marquee.directive';
import { MarqueePipe } from './src/app/pipes/marquee.pipe';
import { MarqueeService } from './src/app/services/marquee.service';

// for manual imports
export * from './src/app/components/marquee.component';
export * from './src/app/directives/marquee.directive';
export * from './src/app/pipes/marquee.pipe';
export * from './src/app/services/marquee.service';

@NgModule({
  declarations: [
    MarqueeComponent,
    MarqueeDirective,
    MarqueePipe
  ],
  providers: [
    MarqueeService
  ],
  exports: [
    MarqueeComponent,
    MarqueeDirective,
    MarqueePipe
  ]
})
export class MJAngular2MarqueeModule {

  static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
    return {
      ngModule: MJAngular2MarqueeModule,
      providers: configuredProviders
    };
  }
}
