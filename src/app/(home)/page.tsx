import { prismaClient } from "@/lib/prisma";
import Categories from "./components/categories";
import ProductList from "./components/product-list";
import banner from "./banner.png"
import banner2 from "./banner2.png"
import banner3 from "./banner3.png"
import banner4 from "./banner5.jpg"
import Image from "next/image";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 75,
      },
    },
  });

  return (
    <>
      <div className="flex flex-col gap-8 py-8">
        <h1 className="self-center text-[34px]">ПРОИЗВОДСТВО ПРОФИЛЯ ИЗ АЛЮМИНИЯ И ЕГО СПЛАВОВ</h1>
        <Image src={banner} alt="banner"/>

        <div className="flex flex-col mt-8 gap-5">
          <p className="mb-3 pl-5 font-bold text-[30px]">Категории</p>
          <div className="px-5"><Categories /></div>
        </div>

        <div className="flex flex-col my-8 gap-5">
          <p className="mb-3 pl-5 font-bold text-[30px]">Лучшие предложения</p>
          <ProductList products={deals} />
        </div>
        <div>
          <Image src={banner2} alt="banner2"/>
          <Image src={banner3} alt="banner3"/>
        </div>
        <div className="flex self-center">
          <div className="flex flex-row mx-[20px] gap-20">
            <div>
              <Image src={banner4} alt="banner4"/>
            </div>
            <div className="flex flex-col gap-3">
              <p className="mb-3 font-bold text-[30px]">Как нас найти</p>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aefd8654534db0b326fa05f01acfa91a51f6a6fd54232ba0104c68578712517bb&amp;source=constructor" width="806" height="502"></iframe>
              <p className="flex flex-row gap-5 items-center"> 
                <p className="text-[22px] font-bold uppercase">Адрес:</p>
                <p className="font-normal text-gray-100">601785, Россия, Владимирская обл.,г. Кольчугино, ул. Карла Маркса, д. 27</p> 
              </p> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
