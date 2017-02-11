/**
 * Created by gabriel on 1/29/17.
 */
export interface ItemDetailDto {
  itemID:string;
  category: "oil" | "watercolor" | "pastel" | "acrylic" | "digital";
  title: string;
  artist: string;
  size: string;
  price:number;
  description: string;
  imgUrl:string;
}
