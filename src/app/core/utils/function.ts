import { ActivatedRoute, Router } from "@angular/router";
import { NextPage } from "../models/next-page.model";

// Check Next Pages
export async function checkNavigateNextPage(route: ActivatedRoute, router: Router): Promise<void>{
  const dataNexPage = await getRouteParams(route);
  if (!dataNexPage) return
  navigateNextPage(router, `${dataNexPage.PHA_SubSoftware}/create`, dataNexPage)
}

// Next Pages
export function navigateNextPage(router: Router, path: string, payload?: NextPage): void{
  if(payload) {
    router.navigate([path, payload])
  } else {
    router.navigate([path])
  }
}

// get data from params
export function getRouteParams(route: ActivatedRoute): Promise<NextPage | undefined>  {
  return new Promise((resolve) => {
    route.paramMap.subscribe(params => {
      const PHA_Seq = params.get('PHA_Seq');
      const PHA_Status = params.get('PHA_Status');
      const PHA_SubSoftware = params.get('PHA_SubSoftware');
      const PHA_TypeDoc = params.get('PHA_TypeDoc');

      if (PHA_Seq && PHA_Status && PHA_SubSoftware && PHA_TypeDoc) {
        const nextPage = new NextPage(
          +PHA_Seq, // Convert to number
          +PHA_Status, // Convert to number
          PHA_SubSoftware,
          PHA_TypeDoc
        );
        resolve(nextPage);
      } else {
        // Handle the case when any of the parameters is null
        resolve(undefined);
      }
    });
  });
}

// get name from master
export function getNameMaster(listMaster: { id: number, name: string }[], id: number): string | null {
  const result = listMaster.find(item => item.id === id);
    if (!result || !result.name) return null;
    return result.name;
}

// get id from master
export function getIdMaster(listMaster: { id: number, name: string }[], name: string): number | null{
  const result = listMaster.find(item => item.name.toLocaleLowerCase() === name.toLocaleLowerCase())
  if (!result)  return null;
  return result.id;
}

// ฟังก์ชันสำหรับแปลงวันที่
export function  transformDate(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  return date.toISOString().split('T')[0];
}