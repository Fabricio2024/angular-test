import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
  ],
  exports: [
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
  ],
})
export class MaterialModule {}
