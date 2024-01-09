import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  photoCover: string =
    'https://disneyplusbrasil.com.br/wp-content/uploads/2022/08/Tony-Stark-Homem-de-Ferro-1.jpg';
  contentTitle: string = 'MINHA NOTICIA';
  contentDescription: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
  distinctio tempore et, culpa voluptate sint corporis quam inventore saepe
  laudantium magnam voluptas, facere nam amet. Tempora libero rem saepe.
  Alias!`;
}
