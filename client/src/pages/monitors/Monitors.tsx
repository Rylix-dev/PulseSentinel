import {
  Breadcrumbs,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalContent,
  useDisclosure,
  ModalBody,
} from "@nextui-org/react";
import { Button, Input } from "@nextui-org/react";
import { Dot } from "lucide-react";

const Monitors = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const monitors = [
    {
      url: "https://example.com",
      status: "up",
      lastChecked: "2021-10-10T12:00:00Z",
      uptime: 99.99,
    },
    {
      url: "https://example.org",
      status: "down",
      lastChecked: "2021-10-10T12:00:00Z",
      uptime: 99.99,
    },
    {
      url: "https://example.net",
      status: "up",
      lastChecked: "2021-10-10T12:00:00Z",
      uptime: 99.99,
    },
  ];

  const convertTimeToRelative = (time: string) => {
    const date = new Date(time);
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  };

  const removeUrlProtocolsAndSlashes = (url: string) => {
    return url.replace(/(^\w+:|^)\/\//, "").replace(/\/$/, "");
  };

  return (
    <>
      {" "}
      <div className="p-10 w-full">
        <Breadcrumbs>
          <BreadcrumbItem href="/monitors">Monitors</BreadcrumbItem>
        </Breadcrumbs>

        <div className="flex justify-end w-full">
          <Input placeholder="Search" color="primary" className="w-[300px]" />
          <Button color="primary" className="ml-2" onClick={onOpen}>
            + Add Monitor
          </Button>
        </div>

        <div className="mt-10">
          {monitors.map((monitor, index) => (
            <div
              className={`flex hover:bg-gray-800 cursor-pointer transition-colors justify-between border bg-gray-900 py-3 px-4 relative ${
                index === 0
                  ? "rounded-t-xl"
                  : index === monitors.length - 1
                  ? "rounded-b-xl"
                  : ""
              }`}
            >
              <div className="flex gap-3 items-center">
                <Dot
                  size={50}
                  className={`drop-shadow-glow ${
                    monitor.status === "up" ? "text-green-500" : "text-red-500"
                  }`}
                />
                <Dot
                  size={50}
                  className={`drop-shadow-glow blur animate-pulse absolute top-0 bottom-0 ${
                    monitor.status === "up" ? "text-green-500" : "text-red-500"
                  }`}
                />

                <div>
                  <p>
                    {removeUrlProtocolsAndSlashes(monitor.url)}&nbsp;
                    {monitor.status === "down" && " ⚠️"}
                  </p>
                  <p className="text-gray-500 text-xs">
                    Uptime: {monitor.uptime}%
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <p className="text-gray-500 text-xs">
                  Last Checked {convertTimeToRelative(monitor.lastChecked)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
        <ModalContent className="bg-background border">
          <ModalHeader>Create a new Monitor</ModalHeader>
          <ModalBody>
            <p className="text-center">When should we alert you?</p>

            <div className="flex gap-2 mb-5">
              <Button className="h-20 w-full" color="primary" variant="flat">
                <p className=" text-wrap">When Url Becomes Unavailable</p>
              </Button>

              <Button className="h-20 w-full" color="primary" variant="flat">
                <p className=" text-wrap">
                  When Url Returns HTTP Status Other Than
                </p>
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Monitors;
