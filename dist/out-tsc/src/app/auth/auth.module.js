import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            HttpClientModule,
            FormsModule,
            IonicStorageModule.forRoot()
        ]
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map