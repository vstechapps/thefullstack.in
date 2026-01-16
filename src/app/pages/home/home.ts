import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { HeroComponent } from '../../components/hero/hero';
import { PillarsComponent } from '../../components/pillars/pillars';
import { VisionComponent } from '../../components/vision/vision';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, PillarsComponent, VisionComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent { }
