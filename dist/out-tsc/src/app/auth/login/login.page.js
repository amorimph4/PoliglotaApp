import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
let LoginPage = class LoginPage {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    login(form) {
        this.authService.login(form.value).subscribe((res) => {
            this.router.navigateByUrl('home');
        });
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService, Router])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map