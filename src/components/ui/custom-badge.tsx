import React from "react";
import { Badge } from "./badge";
import { Link } from "lucide-react";

export default function CustomBadge({
  link,
  text,
}: {
  link?: string;
  text: string;
}) {
  return (
    <>
      <Badge
        variant={"secondary"}
        onClick={() => {
          window.open(link, "_blank");
        }}
        className="cursor-pointer"
      >
        {text}

        {/* only prin link if link is provided */}
        {link && <Link />}
      </Badge>
    </>
  );
}
