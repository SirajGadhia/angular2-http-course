"use strict";
var router_1 = require('@angular/router');
var users_component_1 = require('./users/users.component');
var user_list_component_1 = require('./users/user-list/user-list.component');
exports.routes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent,
        children: [
            {
                path: '',
                component: user_list_component_1.UserListComponent
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map