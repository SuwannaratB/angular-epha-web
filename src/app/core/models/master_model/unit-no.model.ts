export class UnitNo {
    id_area: number;
    id_apu: number;
    id: number;
    name: string;
    area_check: string;
    id_company: number;
  
    constructor(
        id_area: number,
        id_apu: number,
        id: number,
        name: string,
        area_check: string,
        id_company: number,
    ){
      this.id_area = id_area;
      this.id_apu = id_apu;
      this.id = id;
      this.name = name;
      this.area_check = area_check;
      this.id_company = id_company;
    }
  }

//   {
//     "id_area": 5,
//     "id_apu": 5,
//     "id": 114,
//     "id1": 114,
//     "name": " ADIP Unit",
//     "area_check": "e",
//     "id_company": 1400
// }