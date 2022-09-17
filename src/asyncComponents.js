import { lazy } from "react";

export const Blog = lazy(() => import("./components/blog/blog"));
export const Login = lazy(() => import("./components/login/authentication"));
export const Contact = lazy(() => import("./components/contact/contact-us"));
export const Property = lazy(() => import("./components/home/property"));
export const Selling = lazy(() => import("./components/selling/sell-page"));
export const Main = lazy(() => import("./components/landingPage/landingPage"));
export const MixedProperty = lazy(() => import("./components/propertyFromApi/mixedProperty"));
export const RecentProperty = lazy(() => import("./components/home/RecentProperty"));
export const PageNotFound = lazy(() => import("./components/pageNotFound/pageNotFound"));
