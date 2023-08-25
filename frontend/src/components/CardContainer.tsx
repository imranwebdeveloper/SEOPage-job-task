import { Task } from "../types/Task";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FaLayerGroup, FaClipboardList } from "react-icons/fa";
import { PiChatsCircleLight } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import FillAttachment from "./FileAttachment";

interface Props {
  title?: string;
  titelBg?: string;
  data: Task[];
}

const CardContainer: React.FC<Props> = ({ titelBg, title, data }) => {
  return (
    <div className="bg-[#F2F4F7] min-w-[350px] p-2 text-[#606060]   ">
      {/* Card container header  */}

      <div className="flex justify-between items-center gap-1 p-2 mb-2">
        {titelBg && <div className={`${titelBg} w-5 h-5 rounded-l-full`}></div>}
        <p className="flex-1 font-bold  ">{title}</p>
        <p className="px-3 py-[2px] rounded bg-[#E8EEF3]  font-bold ">0</p>
      </div>

      {/* Card */}
      <div className="flex flex-col gap-4 h-[600px] overflow-y-scroll ">
        {data?.map((item, i) => {
          return (
            <div key={i} className="bg-white p-3 rounded text-xs ">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  {/* Showing client name  and picture */}
                  <Avatar>
                    <AvatarImage src="https://www.w3schools.com/w3images/avatar5.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="font-bold">{item.client_name}</p>
                </div>
                <div className="flex gap-2 items-center">
                  {/* Showing user name  and picture */}

                  <Avatar>
                    <AvatarImage src="https://www.w3schools.com/w3images/avatar6.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="font-bold">{item.user_name}</p>
                </div>
              </div>
              {/* Showing task descriptions  */}
              <div className="flex justify-between py-4 items-center">
                <p className=" items-center gap-1 flex  ">
                  <FaLayerGroup /> Lorem ipsum dolor sit amet,....
                </p>
                <p className="bg-[#F2F4F7] font-bold p-1 rounded flex gap-1 items-center">
                  <FaClipboardList />
                  1/2
                </p>
              </div>

              {/* Showing card footer information */}
              <div className="flex gap-2 font-bold items-center justify-between">
                <Avatar>
                  <AvatarImage src="https://www.w3schools.com/w3images/avatar2.png" />
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <Avatar>
                  <AvatarFallback>12+</AvatarFallback>
                </Avatar>
                <p className="flex items-center gap-1">
                  <PiChatsCircleLight />
                  {item.comments}
                </p>

                {/* File attachment sections */}
                <FillAttachment
                  filesCount={item.attachment_count}
                  id={item._id}
                />
                <p className="flex items-center gap-1">
                  <LuCalendarDays />
                  22-12-23
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardContainer;
