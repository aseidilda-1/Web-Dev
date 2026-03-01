import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  private albumsSubject = new BehaviorSubject<Album[]>([]);
  albums$ = this.albumsSubject.asObservable();

  private loaded = false;

  constructor(private http: HttpClient) {}

  loadAlbums(): void {
    if (this.loaded) return;

    this.http.get<Album[]>(`${this.apiUrl}/albums`)
      .subscribe(data => {
        this.albumsSubject.next(data);
        this.loaded = true;
      });
  }

  getAlbums(): Observable<Album[]> {
    return this.albums$;
  }

  getAlbum(id: number): Album | undefined {
    return this.albumsSubject.value.find(a => a.id === id);
  }

  updateAlbum(album: Album): void {
    const updated = this.albumsSubject.value.map(a =>
      a.id === album.id ? album : a
    );

    this.albumsSubject.next(updated);

    this.http.put(`${this.apiUrl}/albums/${album.id}`, album).subscribe();
  }

  deleteAlbum(id: number): void {
    const filtered = this.albumsSubject.value.filter(a => a.id !== id);
    this.albumsSubject.next(filtered);

    this.http.delete(`${this.apiUrl}/albums/${id}`).subscribe();
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/albums/${id}/photos`);
  }
}