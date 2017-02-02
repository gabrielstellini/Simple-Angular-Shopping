/**
 * Created by gabriel on 1/29/17.
 */
export interface ItemDetailDto {
  title: string;
  author: string;
  imgUrl:string;
  itemID:string;
  price:number;
  description: string;
  category: "oil" | "watercolor" | "pastel" | "acrylic" | "digital";
}
