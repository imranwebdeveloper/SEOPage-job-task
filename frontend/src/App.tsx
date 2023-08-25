import { useEffect, useState } from "react";
import CardContainer from "./components/CardContainer";
import { Task } from "./types/Task";

const App = () => {
  // stored tasks
  const [data, setData] = useState<Task[] | null>();

  useEffect(() => {
    // fetch tasks
    const makeRequest = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks`);
      const data = await res.json();
      setData(data);
    };
    makeRequest();
  }, []);

  return (
    <div className="flex max-h-screen  flex-col ">
      {data && (
        // Tasks Containers
        <main className="flex-1 flex gap-4 rounded-md p-4 overflow-x-scroll overflow-y-hidden container  ">
          <CardContainer
            titelBg="bg-[#D21010]"
            title="Incomplete"
            data={data?.filter((items) => items.work_status === "Incomplete")}
          />
          <CardContainer
            titelBg="bg-[#00B5FF]"
            title="To Do"
            data={data?.filter((items) => items.work_status === "To Do")}
          />
          <CardContainer
            titelBg="bg-[#FFE700]"
            title="Doing"
            data={data?.filter((items) => items.work_status === "Doing")}
          />
          <CardContainer
            title="Under Review"
            data={data?.filter((items) => items.work_status === "Under Review")}
          />
          <CardContainer
            title="Completed"
            data={data?.filter((items) => items.work_status === "Completed")}
          />
          <CardContainer
            title="Overview"
            data={data?.filter((items) => items.work_status === "Overview")}
          />
        </main>
      )}
    </div>
  );
};

export default App;
