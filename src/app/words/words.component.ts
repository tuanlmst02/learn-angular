import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})

export class WordsComponent implements OnInit {
  filterStatus = 'XEM_CHUA_NHO';

  english = '';
  vietnam = '';
  isShowForm = false;
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];

  addWord() {
    this.arrWords.push({ id: this.arrWords.length + 1, en: this.english, vn: this.vietnam, memorized: false })
    this.english = '';
    this.vietnam = '';
    this.isShowForm = false;
  }

  deleteItem(id: number) {
    const index = this.arrWords.findIndex(item => item.id === id);
    this.arrWords.splice(index, 1);

    console.log(this.arrWords);
  }

  filterItem(memorized: boolean) {
    const dkXemTatCa = this.filterStatus === 'XEM_TAT_CA';
    const dkXemDaNho = this.filterStatus === 'XEM_DA_NHO' && memorized;
    const dkXemChuaNho = this.filterStatus === 'XEM_CHUA_NHO' && !memorized;
    return dkXemTatCa || dkXemDaNho || dkXemChuaNho;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
