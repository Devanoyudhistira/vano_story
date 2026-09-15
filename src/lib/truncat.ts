export default function truncate(input:string,number:number):string {
  if (input.length > number) {
    return input.substring(0, number) + "...";
  }
  return input;
}
