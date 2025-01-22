import NavigationMenuDemo from "@/app/components/navbar/page";
import LoginForm from "@/app/components/form/page";

export default function Home() {
  return (
    <div>
        <NavigationMenuDemo/>
        <div className={"flex flex-col h-10"}><LoginForm/></div>

    </div>
  );
}
