import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './image/image.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ImageComponent,
    SectionComponent,
    FooterComponent 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}