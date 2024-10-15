import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';
import * as CryptoJS from 'crypto-js';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateChildFn = async (childRoute, state) => {
  const router = inject(Router);
  const route = inject(ActivatedRoute)
  const authService = inject(AuthService);
  const token = authService.getToken();

  setTimeout(async () => {
    const params = await getQueryParams(route);
    const key = params['key']; // Replace 'key' with your actual query parameter key
    const secretKey = 'your-secret-key';
    if (key) {
      const bytes = CryptoJS.AES.decrypt(key, secretKey);
      const decodedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      if (!decodedData) return

      const token = decodedData.token
      const module = decodedData.module
      const username = decodedData.username
      const roleType = decodedData.role_type

      authService.setToken(token)
      authService.setUser({
        user_name: username,
        user_displayname: '',
        user_email: '',
        role_type: roleType,
        user_id: '',
        user_img: '',
      })
      console.log(module)
      router.navigate([module]);
    }

  }, 1);

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


