import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
let RegisterPage = class RegisterPage {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    register(form) {
        this.authService.register(form.value).subscribe((res) => {
            this.router.navigateByUrl('home');
        });
    }
};
RegisterPage = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.page.html',
        styleUrls: ['./register.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService, Router])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map