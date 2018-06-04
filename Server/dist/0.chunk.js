webpackJsonp([0,6],{

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__all_tasks_routing__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_tasks_component__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(240);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTasksModule", function() { return AllTasksModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AllTasksModule = (function () {
    function AllTasksModule() {
    }
    return AllTasksModule;
}());
AllTasksModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__all_tasks_routing__["a" /* AllTasksRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__all_tasks_component__["a" /* AllTasksComponent */]
        ]
    })
], AllTasksModule);

//# sourceMappingURL=all-tasks.module.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllTasksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AllTasksComponent = (function () {
    function AllTasksComponent(http, router, cons) {
        this.http = http;
        this.router = router;
        this.cons = cons;
        this.my_tasks = false;
        this.done_task = false;
        this.add_task_success = false;
        this.add_task_error = false;
        this.del_task_msg = false;
        this.del_task_error = false;
        this.edit_task_success = false;
        this.message = "";
        this.name1 = "";
        this.description1 = "";
        this.assigned_to1 = "";
        this.status1 = "";
        this.id = "";
        if (localStorage.getItem("login_data") == null) {
            this.router.navigate(['/']);
        }
        else {
            this.login_data = JSON.parse(localStorage.getItem("login_data"));
            this.header = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'Authorization': 'Token ' + this.login_data.token });
        }
    }
    AllTasksComponent.prototype.ngOnInit = function () {
        this.allTasks();
        this.allUsers();
    };
    AllTasksComponent.prototype.ngOnChanges = function () {
    };
    AllTasksComponent.prototype.addTask = function () {
        $("#myModal").modal();
    };
    AllTasksComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this.http.post(this.cons.SERVER_URL + '/todo_app/delete-task/', { id: id }, { headers: this.header }).map(function (res) {
            return res;
        }).subscribe(function (res) {
            if (res['success']) {
                _this.del_task_msg = true;
                setTimeout(function () {
                    _this.del_task_msg = false;
                }, 3000);
                _this.allTasks();
            }
            else {
                _this.message = res['message'];
                _this.del_task_error = true;
                setTimeout(function () {
                    _this.del_task_error = false;
                }, 3000);
                _this.allTasks();
            }
        });
    };
    AllTasksComponent.prototype.sumbitNewTask = function (name, description, status, assigned_to) {
        var _this = this;
        console.log(name, description);
        if (name.trim().length > 0 && description.trim().length > 0) {
            var data_obj = { "name": name, "description": description, "status": status, "assigned_to": assigned_to };
            this.http.post(this.cons.SERVER_URL + '/todo_app/add-task/', data_obj, { headers: this.header }).map(function (res) {
                return res;
            }).subscribe(function (res) {
                if (res['success']) {
                    _this.allTasks();
                    _this.my_tasks = false;
                    _this.done_task = false;
                    _this.add_task_success = true;
                    $('#myModal').modal('hide');
                    setTimeout(function () {
                        _this.add_task_success = false;
                    }, 3000);
                }
            });
        }
        else {
            this.add_task_error = true;
            $('#myModal').modal('hide');
            setTimeout(function () {
                _this.add_task_error = false;
                $('#myModal').modal();
            }, 3000);
        }
    };
    AllTasksComponent.prototype.allTasks = function () {
        var _this = this;
        this.http.get(this.cons.SERVER_URL + '/todo_app/view-all/', { headers: this.header }).map(function (res) {
            return res;
        }).subscribe(function (res) {
            _this.all_tasks = res;
        });
    };
    AllTasksComponent.prototype.allUsers = function () {
        var _this = this;
        this.http.get(this.cons.SERVER_URL + '/user_management/view-all/', { headers: this.header }).map(function (res) {
            return res;
        }).subscribe(function (res) {
            _this.users = res;
        });
    };
    AllTasksComponent.prototype.selectTask = function () {
        var _this = this;
        this.my_tasks = !this.my_tasks;
        this.done_task = false;
        if (this.my_tasks) {
            this.http.post(this.cons.SERVER_URL + '/todo_app/view-my-task/', { id: this.login_data.id }, { headers: this.header }).map(function (res) {
                return res;
            }).subscribe(function (res) {
                _this.all_tasks = res['tasks'];
            });
        }
        else {
            this.allTasks();
        }
    };
    AllTasksComponent.prototype.doneTask = function () {
        var _this = this;
        this.done_task = !this.done_task;
        this.my_tasks = false;
        if (this.done_task) {
            this.http.post(this.cons.SERVER_URL + '/todo_app/hide-all-done-task/', {}, { headers: this.header }).map(function (res) {
                return res;
            }).subscribe(function (res) {
                if (res['tasks']) {
                    _this.all_tasks = res['tasks'];
                }
            });
        }
        else {
            this.allTasks();
        }
    };
    AllTasksComponent.prototype.editTask = function (obj) {
        this.name1 = obj.name;
        if (obj.assigned_to__username) {
            this.assigned_to1 = obj.assigned_to__username;
        }
        else {
            this.assigned_to1 = obj.assigned_to.username;
        }
        this.status1 = obj.status;
        this.description1 = obj.description;
        this.id = obj.id;
        console.log(obj);
        $('#myModal1').modal();
    };
    AllTasksComponent.prototype.submitEditTask = function (name, description, status, assigned_to) {
        var _this = this;
        if (name.trim().length > 0 && description.trim().length > 0) {
            var data_obj = { "name": name, "description": description, "status": status, "id": this.id };
            this.http.post(this.cons.SERVER_URL + '/todo_app/edit-task/', data_obj, { headers: this.header }).map(function (res) {
                return res;
            }).subscribe(function (res) {
                if (res['success']) {
                    _this.allTasks();
                    _this.my_tasks = false;
                    _this.done_task = false;
                    _this.edit_task_success = true;
                    $('#myModal1').modal('hide');
                    setTimeout(function () {
                        _this.edit_task_success = false;
                    }, 3000);
                }
                else {
                    _this.message = res['message'];
                    _this.del_task_error = true;
                    $('#myModal1').modal('hide');
                    setTimeout(function () {
                        _this.del_task_error = false;
                    }, 3000);
                    _this.allTasks();
                }
            });
        }
        else {
            this.add_task_error = true;
            $('#myModal').modal('hide');
            setTimeout(function () {
                _this.add_task_error = false;
                $('#myModal').modal();
            }, 3000);
        }
    };
    AllTasksComponent.prototype.updateTask = function (task) {
        var _this = this;
        this.http.post(this.cons.SERVER_URL + '/todo_app/markdone-task/', { id: task.id }, { headers: this.header }).map(function (res) {
            return res;
        }).subscribe(function (res) {
            if (res['success']) {
                _this.allTasks();
                _this.my_tasks = false;
                _this.done_task = false;
                _this.edit_task_success = true;
                setTimeout(function () {
                    _this.edit_task_success = false;
                }, 3000);
            }
            else {
                _this.message = res['message'];
                _this.del_task_error = true;
                setTimeout(function () {
                    _this.del_task_error = false;
                }, 3000);
                _this.allTasks();
            }
        });
    };
    AllTasksComponent.prototype.logout = function () {
        this.http.get(this.cons.SERVER_URL + '/user_management/logout/', { headers: this.header }).map(function (res) {
            return res;
        }).subscribe(function (res) {
        });
        localStorage.removeItem("login_data");
        this.router.navigate(['/']);
    };
    return AllTasksComponent;
}());
AllTasksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'all-tasks',
        template: __webpack_require__(603),
        styles: [__webpack_require__(602)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* CONSTANTS */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* CONSTANTS */]) === "function" && _c || Object])
], AllTasksComponent);

var _a, _b, _c;
//# sourceMappingURL=all-tasks.component.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_tasks_component__ = __webpack_require__(600);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllTasksRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__all_tasks_component__["a" /* AllTasksComponent */] }
];
var AllTasksRoutingModule = (function () {
    function AllTasksRoutingModule() {
    }
    return AllTasksRoutingModule;
}());
AllTasksRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AllTasksRoutingModule);

//# sourceMappingURL=all-tasks.routing.js.map

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <h2>\n    Hi {{login_data.username}}!\n  </h2><br>\n  <div class=\"alert alert-success\" *ngIf=\"add_task_success\">\n      <strong>Task Added! </strong> New Task Added Sucessfully\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"add_task_error\">\n        <strong>Error! </strong> Please fill all feilds, we will reopen form\n      </div>\n      <div class=\"alert alert-success\" *ngIf=\"del_task_msg\">\n          <strong>Task Deleted! </strong> The Task deleted succesfully.\n        </div>\n        <div class=\"alert alert-success\" *ngIf=\"edit_task_success\">\n            <strong>Task Edited! </strong> The Task edited succesfully.\n          </div>\n        <div class=\"alert alert-danger\" *ngIf=\"del_task_error\">\n            <strong>Error! </strong> {{message}}.\n          </div>\n          <div style=\"float:right\">    <button (click)=\"addTask()\" type=\"button\" class=\"btn btn-primary\">+ Add Task</button>\n            <button (click)=\"logout()\" type=\"button\" class=\"btn btn-danger\">Logout</button>\n        </div>\n\n  <input type=\"checkbox\" [checked]=\"my_tasks\" (change)=\"selectTask()\" /> Show only my tasks <br><br>\n  <input type=\"checkbox\" [checked]=\"done_task\" (change)=\"doneTask()\" /> Show only un-completed tasks <br><br>\n  <table class=\"table table table-hover\" *ngIf=\"all_tasks\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Task Name</th>\n        <th scope=\"col\">Created By</th>\n        <th scope=\"col\">Description</th>\n        <th scope=\"col\">Assigned To</th>\n        <th scope=\"col\">Status</th>\n        <th scope=\"col\">Closed By</th>\n        <th scope=\"col\"></th>\n        <th scope=\"col\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let single_task of all_tasks;let i = index;\">\n        <td>{{single_task.name}}</td>\n        <td>{{single_task.created_by?.username}}{{single_task?.created_by__username\n        }}</td>\n        <td>{{single_task.description}}</td>\n        <td>{{single_task.assigned_to?.username}}{{single_task?.assigned_to__username\n          }}</td>\n        <td>{{single_task.status}} <button *ngIf=\"single_task.status !='Done'\" type=\"submit\" class=\"btn btn-info btn-sm\"(click)=\"updateTask(single_task)\">Mark as Done</button></td>\n        <td>{{single_task.closed_by?.username}}{{single_task?.closed_by__username}}</td>\n        <td><button type=\"submit\" class=\"btn btn-warning\"(click)=\"editTask(single_task)\">Edit</button></td>\n        <td><button type=\"submit\" class=\"btn btn-danger\"(click)=\"deleteTask(single_task.id)\">Delete</button></td>\n      </tr>\n      \n    </tbody>\n  </table>\n  \n</div>\n<!-- Modal -->\n<div id=\"myModal\" class=\"modal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n  \n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Add New Task</h4>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-group\">\n                <label for=\"task\">Task Name</label>\n                <input type=\"text\" placeholder=\"Task Name\" #name class=\"form-control\" >\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"task\">Task Description</label>\n                  <input type=\"text\" placeholder=\"Task Description\" #description class=\"form-control\" >\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"task\">Task Status</label>\n                  <select #status class=\"form-control\" ><option value=\"Not Done\">Not Done</option><option value=\"Done\">Done</option></select>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"task\">Task Assigned to</label>\n                  <select #assigned_to placeholder=\"Assigned To\" class=\"form-control\" ><option *ngFor=\"let user of users\" [ngValue]=\"user\">{{user.user.username}}</option></select>\n              </div>\n              <button type=\"submit\" class=\"btn btn-default\"(click)=\"sumbitNewTask(name.value,description.value,status.value,assigned_to.value)\">Add New Task</button>\n        </div>\n        \n      </div>\n  \n    </div>\n  </div>\n\n\n\n<!-- Modal -->\n<div id=\"myModal1\" class=\"modal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n  \n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Edit Task</h4>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-group\">\n                <label for=\"task\">Task Name</label>\n                <input type=\"text\" placeholder=\"Task Name\" [(ngModel)] = \"name1\" #name2 class=\"form-control\" >\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"task\">Task Description</label>\n                  <input type=\"text\" placeholder=\"Task Description\" [(ngModel)] = \"description1\" #description2 class=\"form-control\" >\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"task\">Task Status</label>\n                  <select [(ngModel)] = \"status1\" #status2 class=\"form-control\" ><option value=\"Not Done\">Not Done</option><option value=\"Done\">Done</option></select>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"task\">Task Assigned to</label>\n                  <select #assigned_to2  [(ngModel)] = \"assigned_to1\" placeholder=\"Assigned To\" class=\"form-control\" ><option *ngFor=\"let user of users\" [ngValue]=\"user.user.username\">{{user.user.username}}</option></select>\n              </div>\n              <button type=\"submit\" class=\"btn btn-default\"(click)=\"submitEditTask(name2.value,description2.value,status2.value,assigned_to2.value)\">Edit Task</button>\n        </div>\n        \n      </div>\n  \n    </div>\n  </div>"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map