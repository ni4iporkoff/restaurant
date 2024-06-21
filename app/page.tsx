import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src="/logo.png"
        alt="A server surrounded by magic sparkles."
        width={100}
        height={24}
        priority
      />
      <h1>Welcome to NextJS!</h1>
    </main>
  );
}
