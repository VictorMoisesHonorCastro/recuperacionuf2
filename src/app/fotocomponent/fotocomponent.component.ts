import { Component,Input } from '@angular/core';
import { FotoModel  } from '../models/foto.model'

@Component({
  selector: 'app-fotocomponent',
  templateUrl: './fotocomponent.component.html',
  styleUrls: ['./fotocomponent.component.css']
})
export class FotocomponentComponent {
  @Input() foto!: FotoModel;

  toggleDescriptionSize() {
    if (!this.foto.enlargedDescription) {
      this.foto.enlargedDescription = true;
    }
  }
}
