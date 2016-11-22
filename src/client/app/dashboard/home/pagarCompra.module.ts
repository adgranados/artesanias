import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { PagarCompraComponent } from './pagarCompra.component';

@NgModule({
    imports: [RouterModule, FormsModule, CommonModule, AlertModule],
    declarations: [PagarCompraComponent],
    exports: [PagarCompraComponent]
})

export class PagarCompraModule { }
