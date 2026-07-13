import { HttpInterceptorFn, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';

const AuthInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem('token');
    
    const authReq = token ? req.clone({setHeaders: {Authorization: `Bearer ${token}`}}) : req;
    return next(authReq);
}

export {AuthInterceptor};