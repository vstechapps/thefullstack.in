import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { HeroComponent } from '../../components/hero/hero';
import { PillarsComponent } from '../../components/pillars/pillars';
import { VisionComponent } from '../../components/vision/vision';

@NgModule({
    imports: [
        CommonModule,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        HeroComponent,
        PillarsComponent,
        VisionComponent
    ],
    exports: [HomeComponent]
})
export class HomeModule { }
