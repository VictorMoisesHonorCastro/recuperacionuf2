import { Component } from '@angular/core';
import { FotoModel  } from './models/foto.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recuperacionuf2';
  fotos: FotoModel[] = [
    {img: 'https://picsum.photos/200/300', dsc: '1'},
    {img: 'https://picsum.photos/200/300', dsc: '2'},
    {img: 'https://picsum.photos/200/300', dsc: '3'},
    {img: 'https://picsum.photos/200/300', dsc: '4'},
    {img: 'https://picsum.photos/200/300', dsc: '5'},
    {img: 'https://picsum.photos/200/300', dsc: '6'},
    {img: 'https://picsum.photos/200/300', dsc: '7'}
  ];

  searchText: string = '';
// Filter photos based on the description
  get filteredFotos(): FotoModel[] {
    return this.fotos.filter(foto => foto.dsc.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}
