import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
let AuthService = class AuthService {
    constructor(httpClient, storage) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.AUTH_SERVER_ADDRESS = 'http://localhost:3000';
        this.authSubject = new BehaviorSubject(false);
    }
    register(user) {
        return this.httpClient.post(this.AUTH_SERVER_ADDRESS + '/register', user).pipe(tap((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (res.user) {
                yield this.storage.set("ACCESS_TOKEN", res.user.access_token);
                yield this.storage.set("EXPIRES_IN", res.user.expires_in);
                this.authSubject.next(true);
            }
        })));
    }
    login(user) {
        return this.httpClient.post(this.AUTH_SERVER_ADDRESS + '/login', user).pipe(tap((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (res.user) {
                yield this.storage.set("ACCESS_TOKEN", res.user.access_token);
                yield this.storage.set("EXPIRES_IN", res.user.expires_in);
                this.authSubject.next(true);
            }
        })));
    }
    logout() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.storage.remove("ACCESS_TOKEN");
            yield this.storage.remove("EXPIRES_IN");
            this.authSubject.next(false);
        });
    }
    isLoggedIn() {
        return this.authSubject.asObservable();
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient, Storage])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map