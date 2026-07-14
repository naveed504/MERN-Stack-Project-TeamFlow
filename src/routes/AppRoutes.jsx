import {Routes, Route, Navigate } from 'react-router-dom'
import {useContext} from 'react'


import {AbilityContext} from '../casl/abilityContext.js'

import DashboardLayout from '../layouts/DashboardLayout'
import MainDashboardPage from '../features/dashboard/pages/MainDashboardPage'
import UsersPage from '../features/dashboard/pages/UsersPage'
import RolesIndex from '../features/usermanagement/roles/pages/rolesIndex'
import PermissionsIndex from '../features/usermanagement/permissions/pages/permissionsIndex'
import UsersIndex from '../features/usermanagement/users/pages/UsersIndex'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../features/auth/login'
import useAuthStore from '../store/authStore'

function ProtectedRoute({children}){
    const {isAuthenticated}= useAuthStore();
    return isAuthenticated ? children : <Navigate to="/login" replace />
}

function GuestOrPublicRoute({children}){
    const {isAuthenticated}= useAuthStore();
    return !isAuthenticated ? children : <Navigate to="/" replace />
}

function PermissionRoute({action, subject, children}){
 const ability = useContext(AbilityContext);
 return ability.can(action, subject) ? children : <Navigate to="/" replace />

}


function AppRoutes() {

    return (
        <Routes>

            <Route path="/" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
                <Route index element={<MainDashboardPage />} />
                <Route path="users" element={
                    <PermissionRoute action="read" subject="User">
                    <UsersIndex />
                    </PermissionRoute>
                    } />
                <Route path="roles" element={
                    <PermissionRoute action="read" subject="Role">
                    <RolesIndex />
                    </PermissionRoute>
                    } />
                <Route path="permissions" element={
                    <PermissionRoute action="read" subject="Permission">
                    <PermissionsIndex />
                    </PermissionRoute>
                    } />
            </Route>

            <Route path="login" element={<GuestOrPublicRoute><AuthLayout/></GuestOrPublicRoute>}>
                <Route index  element={<Login/>} />
            </Route>

        </Routes>
    )

}

export default AppRoutes    