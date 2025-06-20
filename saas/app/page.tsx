import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to PDF Reader</h1>
      <p className="mt-4 text-lg">Your go-to solution for reading PDFs online.</p>
      <button>Click Me!</button>
    </main>
  );
}
