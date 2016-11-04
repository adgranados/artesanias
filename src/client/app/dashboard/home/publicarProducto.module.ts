import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { PublicarProductoComponent } from './publicarProducto.component';

@NgModule({
    imports: [RouterModule, FormsModule, CommonModule, AlertModule],
    declarations: [PublicarProductoComponent],
    exports: [PublicarProductoComponent]
})

export class PublicarProductoModule { }
