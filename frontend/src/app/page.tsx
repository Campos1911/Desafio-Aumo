import { UserCard } from "@/components/Cards";

export default function Home() {
  return (
    <div>
      <div className="flex text-white justify-center p-5 w-full bg-purple-800 h-36">
        <p className="text-3xl">Find new users like you</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center absolute h-64 translate-y-[-70px]">
        <UserCard />
      </div>
    </div>
  );
}
