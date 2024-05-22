import { translator } from "@/typechat/main";

export default async function Home() {

  const message = "i want to transfer 500 from adsfdassdfsdfsadfasdf to sdfsfsddasdasdsaadsf "
  const response = await translator.translate(message as string);
  console.log(response);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(response)}
    </main>
  );
}
