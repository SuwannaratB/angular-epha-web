import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';
import * as CryptoJS from 'crypto-js';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

export const authGuard: CanActivateChildFn = async (childRoute, state) => {
  const router = inject(Router);
  const route = inject(ActivatedRoute)
  const authService = inject(AuthService);
  const token = authService.getToken();

  if (state.url == '/') {
    setTimeout(async () => {
      try {
        const params = await getQueryParams(route);
        const key = params['key']; // Replace 'key' with your actual query parameter key

        if (!key) window.location.href = environment.domain + '/home/portal' 
        const bytes = CryptoJS.AES.decrypt(key, environment.secretKey);
        const decodedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  
        if (!decodedData) return
  
        const token = decodedData.token
        const module = decodedData.module
  
        authService.setToken(token)
        authService.setUser(decodedData['user'])
        router.navigate([module]);

      } catch (error) {
        window.location.href = environment.domain + '/home/portal'
      }
  
    }, 1);
  }

  return true

  // if (token) {
  //   return true;
  // }
  // router.navigate(['auth']);
  // return false;

};

// ฟังก์ชันที่ใช้ดึง query parameters
async function getQueryParams(route: ActivatedRoute): Promise<any> {
  return firstValueFrom(route.queryParams); // ใช้ firstValueFrom เพื่อรอรับค่าจาก queryParams
}


