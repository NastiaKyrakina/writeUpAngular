import {Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {IBook} from "../../../models/interfaces/books";
import {
  AngularEpubViewerComponent,
  EpubChapter, EpubError,
  EpubLocation,
  EpubMetadata,
  EpubPage,
  EpubSearchResult
} from "angular-epub-viewer";
import {BooksService} from "../../core/servises/books.service";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksListComponent implements OnInit {

  viewType = 'search-result';
  booksNew$: Observable<Array<IBook>>;
  booksPop$: Observable<Array<IBook>>;
  books$: Observable<Array<IBook>>;
  fileSelected = false;
  query = '';
  genres = [];
  startYear: number = null;
  endYear: number = null;

  @ViewChild('epubViewer', {static: true}) epubViewer: AngularEpubViewerComponent;

  constructor(
    private booksService: BooksService,
  ) { }

  ngOnInit() {
    this.loadBooks('news');
    // this.epubViewer.openLink('assets/georgia-cfi-20120521.epub');

    this.epubViewer.setStyle('font-size', '20px');
  }

  openFile(event) {
    this.fileSelected = true;
    setTimeout(()=>{
      this.epubViewer.openFile(event.target.files[0]);
    }, 1000)
    console.log(event.target.files[0])
  }

  loadBooks(type: string): void {
    this.searchBooks();
    // this.booksNew$ = this.booksService.getBooks();
    // this.booksPop$ = this.booksService.getBooks('popular');
  }

  searchBooks(): void {
    this.books$ = this.booksService.searchBooks({
      query: this.query,
      genres: this.genres,
      end: this.endYear,
      start: this.startYear,
    });
  }

  searchBooksByGenre(types: number[]): void {
    this.genres = types;
    this.searchBooks();
  }

  searchBooksByYears(diap: {start: number; end: number }): void {
    this.startYear = diap.start;
    this.endYear = diap.end;
    this.searchBooks();
  }

  searchBooksByQuery(query: string): void {
    this.query = query;
    this.searchBooks();
  }

  onDocumentReady() {
    console.log('event:onDocumentReady');
  }

  onChapterUnloaded() {
    console.log('event:onChapterUnloaded');
  }

  onChapterDisplayed(chapter: EpubChapter) {
    console.log('event:onChapterDisplayed');
  }

  onLocationFound(location: EpubLocation) {
    console.log('event:onLocationFound');
  }

  onPaginationComputed(pages: EpubPage[]) {
    console.log('event:onPaginationComputed');
  }

  onTOCLoaded(chapters: EpubChapter[]) {
    console.log('event:onTOCLoaded');
  }

  onSearchFinished(results: EpubSearchResult[]) {
    console.log('event:onSearchFinished');
  }

  onPaddingChosen() {
    // this.epubViewer.padding = this.chosenPadding;
  }

  onFontSizeChosen() {
    if (this.epubViewer.documentReady) {
      // this.epubViewer.setStyle('font-size', this.chosenFontSize);
    }
  }

  onMetadataLoaded(metadata: EpubMetadata) {
    console.log('event:onMetadataLoaded');
    // this.metadata.nativeElement.innerHTML = JSON.stringify(metadata, null, 2)
    //   .replace(/\n/g, '<br>')
    //   .replace(/ /g, '&nbsp;');
  }


  onErrorOccurred(error: EpubError) {
    console.log('event:onErrorOccurred');
    console.log(error);
  }
}
