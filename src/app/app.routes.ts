import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Privacy } from './page/privacy/privacy';
import { Terms } from './page/terms/terms';
import { NotFound } from './shared/components/not-found/not-found';


export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:"home",component:Home},
    {path:"blog",loadComponent:()=>import('./page/blog/blog').then((c)=>c.Blog)},
    {path:"article/:id",loadComponent:()=>import('./page/article-details/article-details').then((c)=>c.ArticleDetails)},
    {path:"about",loadComponent:()=>import('./page/about/about').then((c)=>c.About)},
    {path:"privacy",component:Privacy},
    {path:"terms",component:Terms},
    {path:'**',component:NotFound}
];
