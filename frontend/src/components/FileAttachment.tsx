import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { GrAttachment } from "react-icons/gr";
import { Input } from "./ui/input";
import { ChangeEvent, useState } from "react";

interface Props {
  filesCount: number;
  id: string;
}

const FillAttachment: React.FC<Props> = ({ filesCount, id }) => {
  // stored files
  const [files, setFiles] = useState<FileList | null>();

  // Loading State
  const [loading, setLoading] = useState(false);

  // file upload state
  const [success, setSuccess] = useState(false);

  // stored file count state
  const [totalCount, setTotalCount] = useState(filesCount);

  // handle file upload
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;

    if (selectedFiles) {
      setFiles(selectedFiles);
    }
  };

  // Sending file to backend
  const filesHandler = async () => {
    if (files) {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
        method: "POST",
        body: JSON.stringify({ files: files.length }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data) {
        setTotalCount((num) => num + files.length);
        setLoading(false);
        setSuccess(true);
      }
    }
  };

  return (
    // Dialog box
    <Dialog>
      {/* Dialog Trigger  */}
      <DialogTrigger asChild className="">
        <button
          className="flex items-center gap-1"
          onClick={() => setSuccess(false)}
        >
          <GrAttachment />
          {totalCount}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        {success ? (
          <div className="flex h-32 justify-center items-center">
            <h1 className="text-green-700 text-xl text-center font-bold">
              File has been Save
            </h1>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Please Upload Your File</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Input
                  id="attachment"
                  type="file"
                  className="cursor-pointer"
                  onChange={handleFileUpload}
                  multiple
                />
              </div>

              {files && (
                <div>
                  {files.length > 0 && (
                    <ul className="ml-4">
                      {Array.from(files).map((file, index) => (
                        <li key={index} className="text-sm p-2 ">
                          {` ${index + 1}) ${file.name}`} - {`(${file.type})`}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
            <DialogFooter>
              <Button type="submit" onClick={filesHandler} disabled={loading}>
                Save
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FillAttachment;
