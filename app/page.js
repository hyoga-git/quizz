import Header from "./Component/header"
import Link from 'next/link'




export default function Home() {
  return (
    <main>
      <div>
        
        <Link href="ranking">
      ランキング/
        </Link>

        <Link href="game">
        ゲーム/
        </Link>


        <Header />

      </div>
    </main>
  );
}
