'use client'
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
export default function Search() {



    const searchData = (str) => {
        if (str && str.length > 0) {
            fetch("/api/search?str=" + str, {
                method: 'GET',
            }).then(res => {
                return res.json();
            }).then((data) => {
                console.log(JSON.stringify(data));
            })
        }
    }

    return (

        <div className="relative flex">
            <input type="search" onChange={(e) => { searchData(e.target.value) }} className="px-2 h-[38px] border border-solid border-[#E7E6EF]" />
            <button className="h-[38px] bg-third hover:bg-secondary text-white px-4 text-xl "><CiSearch /></button>
        </div>

    )
}