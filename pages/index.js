import Input from "@/components/Input";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Home() {
  const [id, setId] = useState('')

  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/${id}`)
  }
  return (
    <form onSubmit={handleSubmit} className=" h-full gap-x-5 flex items-center justify-center">
      <Input label={"Insert the id of a car"} value={id} onChange={e => setId(e.target.value)} />
      <button type="submit" className="bg-slate-900 h-12 rounded-full w-12 flex items-center justify-center text-white font-semibold text-lg hover:bg-transparent hover:text-slate-900 transition-all duration-300">
        <AiOutlineSearch />
      </button>

    </form>
  )
}
