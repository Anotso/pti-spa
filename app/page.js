import Card from "@/components/Card";

export default function Home() {

  const data = [
    JSON.stringify({
      title: 'Produto 1',
      description: 'Descrição do produto 1',
      price: 9.58,
      img: 'https://minervafoods.com/wp-content/uploads/2023/09/HamburguerAlcatraComBacon_1-2048x1359.jpg'
    }),
    JSON.stringify({
      title: 'Produto 2',
      description: 'Descrição do produto 2',
      price: 19.58,
      img: 'https://minervafoods.com/wp-content/uploads/2023/09/HamburguerAlcatraComBacon_1-2048x1359.jpg'
    }),
    JSON.stringify({
      title: 'Produto 3',
      description: 'Descrição do produto 3',
      price: 13.80,
      img: 'https://minervafoods.com/wp-content/uploads/2023/09/HamburguerAlcatraComBacon_1-2048x1359.jpg'
    }),
    JSON.stringify({
      title: 'Produto 4',
      description: 'Descrição do produto 4',
      price: 39.90,
      img: 'https://minervafoods.com/wp-content/uploads/2023/09/HamburguerAlcatraComBacon_1-2048x1359.jpg'
    }),
  ]
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {data.map(item => 
        <div className=" m-5">
          <Card values={item}/>
        </div>
      )}
    </div>
  );
}
