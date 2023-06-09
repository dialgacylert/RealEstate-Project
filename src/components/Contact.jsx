import React from "react";
import { Popover, PopoverHandler, PopoverContent, Avatar, Typography, List, Button, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { BuildingOffice2Icon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import profile from "../assets/avatar.png";

export default function Contact() {
  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <Typography as="a" variant="small" color="blue-gray" className="p-1 font-normal cursor-pointer hover:cursor-pointer">
          Contact
        </Typography>
      </PopoverHandler>
      <PopoverContent className="w-72 my-20 md:my-5">
        <div className="flex items-center gap-4 border-b border-blue-gray-50 pb-4 mb-4">
          <Avatar src={profile} alt="candice wu" />
          <div>
            <Typography variant="h6" color="blue-gray">
              Candice Wu
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              General Manager
            </Typography>
          </div>
        </div>
        <List className="p-0">
          <a href="#" className="text-initial">
            <ListItem>
              <ListItemPrefix>
                <BuildingOffice2Icon className="w-5 h-5" />
              </ListItemPrefix>
              ABC Construction
            </ListItem>
          </a>
          <a href="#" className="text-initial">
            <ListItem>
              <ListItemPrefix>
                <PhoneIcon className="w-5 h-5" />
              </ListItemPrefix>
              00 123 456 789
            </ListItem>
          </a>
          <a href="#" className="text-initial">
            <ListItem>
              <ListItemPrefix>
                <EnvelopeIcon className="w-5 h-5" />
              </ListItemPrefix>
              person@example.com
            </ListItem>
          </a>
        </List>
      </PopoverContent>
    </Popover>
  );
}
