import { Footer } from "../../hi/Footer";
import { Header } from "../../hi/Header";
import { Task } from "../../hi/Task";
import { TaskInput } from "../../hi/TaskInput";

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="Sleep" />
      </div>
      {/* //footer section */}
      <Footer year="2023" fullName="Kaewtar Lungta" studentId="650610750" />
    </div>
  );
}
