import Link from "next/link";
import Image from 'next/image';
import DuaLipa from '../public/dua-lipa.jpg';

{/* <Image src='/dua-lipa.jpg' width={400} height={400} /> */}

export default function Home() {
  return (
    <div>
      <Link href="/users">Users</Link>
      <p>Dua Lipa</p>
      <Image src={DuaLipa}/>
    </div>
  )
}
