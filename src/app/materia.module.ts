import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar"
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    exports:[
        MatToolbarModule,
        MatNativeDateModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule
    ]
})


export class MaterialModule{}