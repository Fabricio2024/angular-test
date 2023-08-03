import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StoreDetailComponent } from '../store-detail/store-detail.component';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss'],
})
export class StoreListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'category', 'price', 'action'];
  dataSource!: MatTableDataSource<any[]>;
  pages = [5, 10, 20];
  limit = 5;
  categories$ = this.storeService.getCategories();

  constructor(
    private storeService: StoreService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(limit?: number) {
    this.storeService.getProducts(limit).subscribe({
      next: (res: any[]) => {
        this.dataSource = new MatTableDataSource(res);
      },
    });
  }

  getProductForCategory(category: string) {
    if (category !== 'all') {
      this.storeService.getProductCategory(category).subscribe({
        next: (res: any[]) => {
          this.dataSource = new MatTableDataSource(res);
        },
      });
    } else {
      this.getProducts();
    }
  }

  openDetail(id: string) {
    const modalRef = this.modalService.open(StoreDetailComponent);
    this.storeService.getProductDetails(id).subscribe({
      next: (res) => {
        modalRef.componentInstance.title = res.title;
        modalRef.componentInstance.description = res.description;
        modalRef.componentInstance.img = res.image;
      },
    });
    modalRef.componentInstance.name = id;
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
