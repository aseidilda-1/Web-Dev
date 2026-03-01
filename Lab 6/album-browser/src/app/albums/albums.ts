import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../services/album';
import { Observable } from 'rxjs';
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html'
})
export class AlbumsComponent implements OnInit {

  albums$!: Observable<Album[]>;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.loadAlbums();   // вызываем 1 раз
    this.albums$ = this.albumService.getAlbums();
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id);
  }
}