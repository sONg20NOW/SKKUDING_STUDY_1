'use client';

import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    function clickHeader() {
        router.push('/');
    }
    return (
        <nav>
          <h1 className={'font-bold'} onClick={clickHeader}>
            <div>Pokemon List</div>
          </h1>
        </nav>
    )
};