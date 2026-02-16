import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Filter = 'all' | 'active' | 'done';

interface TodoItem {
  id: number;
  text: string;
  done: boolean;
  createdAt: number;
}

@Component({
  standalone: true,
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class TodoComponent implements OnInit {
  newText = '';
  filter: Filter = 'all';
  items: TodoItem[] = [];

  ngOnInit(): void {
    this.load();
  }

  add(): void {
    const text = this.newText.trim();
    if (!text) return;

    this.items.unshift({
      id: Date.now(),
      text,
      done: false,
      createdAt: Date.now(),
    });

    this.newText = '';
    this.save();
  }

  toggle(item: TodoItem): void {
    item.done = !item.done;
    this.save();
  }

  remove(id: number): void {
    this.items = this.items.filter(x => x.id !== id);
    this.save();
  }

  clearDone(): void {
    this.items = this.items.filter(x => !x.done);
    this.save();
  }

  setFilter(f: Filter): void {
    this.filter = f;
  }

  get visible(): TodoItem[] {
    if (this.filter === 'active') return this.items.filter(x => !x.done);
    if (this.filter === 'done') return this.items.filter(x => x.done);
    return this.items;
  }

  get leftCount(): number {
    return this.items.filter(x => !x.done).length;
  }

  private save(): void {
    localStorage.setItem('lite_todo_items', JSON.stringify(this.items));
  }

  private load(): void {
    const raw = localStorage.getItem('lite_todo_items');
    this.items = raw ? (JSON.parse(raw) as TodoItem[]) : [];
  }

  get hasDone(): boolean {
    return this.items.some(i => i.done);
  }
}

