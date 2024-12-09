import { InfosCard, UserCard } from "@/components/Cards";

export default function Home() {
  return (
    <div>
      <div className="flex text-white justify-center p-5 w-full bg-purple-800 h-36">
        <p className="text-3xl">Find new users like you</p>
      </div>
      <div className="w-full flex flex-col gap-2 items-center justify-center absolute translate-y-[-70px]">
        <UserCard />
        <div className="grid grid-cols-2 gap-2 w-[80%]">
          <InfosCard />
          <InfosCard />
        </div>
      </div>
    </div>
  );
}
