import {Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {BooksService} from "../../core/servises/books.service";
import {Observable} from "rxjs";
import {IBook} from "../../../models/interfaces/books";
import {switchMap} from "rxjs/operators";
import { TYPES_NAMES } from 'src/app/core/servises/consts';
import {AngularEpubViewerComponent, EpubChapter, EpubMetadata, EpubPage} from "angular-epub-viewer";
import {AuthFormComponent} from "../../core/auth/auth-form/auth-form.component";
import {AddReviewComponent} from "../reviews/add-review/add-review.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent implements OnInit {
  readonly TYPES_NAMES = TYPES_NAMES;

  @ViewChild('epubViewer', {static: true}) epubViewer: AngularEpubViewerComponent;

  book: IBook = null;
  chartersList: EpubChapter[];
  isBookOpened: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private booksServise: BooksService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
            return this.booksServise.getBook(+params.get('id'))
          }
        )
      )
      .subscribe((book) => {
        this.book = book;
      //  this.epubViewer.openLink('assets/moby-dick.epub');
      })
    ;
  }

  onMetadataLoaded(metadata: EpubMetadata) {
    console.log('event:onMetadataLoaded', metadata);
    // this.metadata.nativeElement.innerHTML = JSON.stringify(metadata, null, 2)
    //   .replace(/\n/g, '<br>')
    //   .replace(/ /g, '&nbsp;');
  }

  onPaginationComputed(pages: EpubPage[]) {
    console.log('event:onPaginationComputed', pages);
  }

  onTOCLoaded(chapters: EpubChapter[]) {
    console.log('event:onTOCLoaded', chapters);
    this.chartersList = chapters['subitems'] ? chapters['subitems'] : chapters;
  }

  goToCharter(href: string): void {
    this.epubViewer.goTo(href);
    this.isBookOpened = true;
  }

  openAddReviewModal() {
    let dialogRef = this.dialog.open(AddReviewComponent, {
      width: '560px',
      data: {
        book: this.book,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // reload review list
    });
  }
}
