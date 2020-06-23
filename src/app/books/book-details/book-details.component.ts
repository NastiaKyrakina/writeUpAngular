import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BooksService} from "../../core/servises/books.service";
import {Observable} from "rxjs";
import {IBook, IUser} from "../../../models/interfaces/books";
import {switchMap, take} from "rxjs/operators";
import {TYPES_NAMES} from 'src/app/core/servises/consts';
import {AngularEpubViewerComponent, EpubChapter, EpubLocation, EpubMetadata, EpubPage} from "angular-epub-viewer";
import {AddReviewComponent} from "../reviews/add-review/add-review.component";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../core/servises/user.service";
import {CommentsService} from "../../core/servises/comments.service";
import {AddBookModalComponent} from "../add-book-modal/add-book-modal.component";
import {ReviewPageComponent} from "../reviews/review-page/review-page.component";
import {ConfirmMessaseComponent} from "../../core/confirm-messase/confirm-messase.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent implements OnInit {
  readonly TYPES_NAMES = TYPES_NAMES;

  @ViewChild('epubViewer', {static: true}) epubViewer: AngularEpubViewerComponent;
  @ViewChild('navigation', {static: true}) navigation: ElementRef;

  book: IBook = null;
  chartersList: EpubChapter[];
  isBookOpened: boolean = false;
  currentUser$: Observable<IUser>;
  pagesList: EpubPage[] = [];
  offsetWidth = 0;
  currentPage = 1;
  charter = 0;
  currentTheme = 'light';
  canEdit: boolean = false;

  fontColors = {
    light: '#000000',
    dark: '#F2F2F2',
    gold: '#18160E',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private booksServise: BooksService,
    private usersService: UserService,
    private commentService: CommentsService,
    private dialog: MatDialog,
    private render: Renderer2,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this.usersService.user;
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
            return this.booksServise.getBook(+params.get('id'))
          }
        )
      )
      .subscribe((book) => {
        this.book = book;
        this.epubViewer.openLink(this.book.fileLink);
      })
    ;
  }

  openBookForEdit(): void {
    let dialogRef = this.dialog.open(AddBookModalComponent, {
      disableClose: true,
      height: '680px',
      width: '800px',
      data: {
        book: this.book,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      setTimeout(()=> {
        this.booksServise.getBook(this.book.id)
          .subscribe((book) => {
            this.book = {...book};
            console.log(this.book)
            this.cdr.detectChanges();
          });
    }, 100);
    });
  }
  onMetadataLoaded(metadata: EpubMetadata) {
    console.log('event:onMetadataLoaded', metadata);
    // this.metadata.nativeElement.innerHTML = JSON.stringify(metadata, null, 2)
    //   .replace(/\n/g, '<br>')
    //   .replace(/ /g, '&nbsp;');
  }

  onPaginationComputed(pages: EpubPage[]) {
    this.pagesList = pages;
    this.recalculatePosition();
    console.log('event:onPaginationComputed', pages);
  }

  onLocationFound(location: EpubLocation) {
    console.log('event:onLocationFound', location);
    this.currentPage = location.page;
    this.charter = location.chapter ? location.chapter.spinePos : 0;
    this.recalculatePosition();
  }

  onTOCLoaded(chapters: EpubChapter[]) {
    console.log('event:onTOCLoaded', chapters);
    this.chartersList = chapters['subitems'] ? chapters['subitems'] : chapters;
  }

  goToCharter(href: string): void {
    this.epubViewer.goTo(href);
    this.isBookOpened = true;
  }

  openAddReviewModal(userId: number) {
    let dialogRef = this.dialog.open(AddReviewComponent, {
      width: '560px',
      data: {
        book: this.book,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.commentService.addReview({
        text: result.text,
        rate: result.rate,
        bookId: this.book.id,
        userId: userId,
      });
      // reload review list
      this.booksServise.getBook(this.book.id)
        .pipe(take(1))
        .subscribe(book => {
          this.book = book;
      });
    });
  }

  selectTheme(type: string): void {
    this.epubViewer.setStyle('color', this.fontColors[type]);
    this.currentTheme = type;
    const iframe = this.epubViewer.root.nativeElement.getElementsByTagName('iframe')[0];
    console.log(iframe)
    const iframeDoc = iframe.contentWindow.document;
    console.log(iframeDoc)
    iframeDoc.body.classList.add('desing');
    this.render.addClass(iframeDoc.body, 'desing');
  }

  selectFontSize(size: number): void {
    this.epubViewer.setStyle('font-size', `${size}px`);
  }

  caclPosition($event: MouseEvent) {
    if (this.pagesList && this.pagesList.length) {
      const width = this.navigation.nativeElement.getBoundingClientRect().width;
      const pagesWidth = width / this.pagesList.length;
      const offset = Math.round($event.offsetX / pagesWidth);
      this.epubViewer.goTo(this.pagesList[offset-1].cfi);
    }
  }

  recalculatePosition(): void {
    const width = this.navigation.nativeElement.getBoundingClientRect().width;
    const pagesWidth = width / this.pagesList.length;
    this.offsetWidth = this.currentPage * pagesWidth;
  }

  prevPage() {
    this.epubViewer.previousPage();
  }

  nextPage() {
    this.epubViewer.nextPage();
  }

  hideReader() {
    this.isBookOpened = false;
  }

  deleteBook() {
    let dialogRef = this.dialog.open(ConfirmMessaseComponent, {
      width: '330px',
      data: {
        header: 'Видалення книги',
        text: 'Ви дійсно бажаєте видаліти цю книгу?',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.booksServise.deleteBook(this.book.id);
        setTimeout(() => {
          this.router.navigateByUrl('/books');
          this.snackBar.open('Твір видалено успішнo', 'Закрити', {
            duration: 1000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }, 350);
      }
    });
  }
}
