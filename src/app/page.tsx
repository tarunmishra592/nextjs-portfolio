import Encryption from "@/components/Encryption";
import MainBanner from "@/components/MainBanner";
import MyProjects from "@/components/MyProjects";
import MySkills from "@/components/MySkills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-22">
        <MainBanner/>
        <MySkills/>
        <Encryption/>
        <MyProjects/>
      </div>
    </main>
  );
}
