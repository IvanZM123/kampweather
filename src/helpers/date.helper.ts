export class ParseDate {
     days: string[] = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
     months: string[] = [
          "Ene", "Feb", "Mar", "Abr",
          "May", "Jun", "Jul", "Ago",
          "Sep", "Oc", "Nov", "Dic"
     ];

     parse(timestamp: string | number) {
          const date: Date = new Date(timestamp);
          const currentDate = date.getDate();
          const day: string = this.days[date.getDay()];
          const month: string = this.months[date.getMonth()];
          const year = date.getFullYear();

          return `${ day }, ${ currentDate } ${ month } ${ year }`;
     }
}
